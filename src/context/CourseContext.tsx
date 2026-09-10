"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Course, getDurationWeight } from '@/data/courses';
import { sanityClient, urlFor } from '@/lib/sanityClient';
import { toast } from 'sonner';

interface CourseContextType {
  courses: Course[];
  loading: boolean;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "course"] | order(title asc)';

    const fetchCourses = async (showLoading = true) => {
      if (showLoading) setLoading(true);
      try {
        const data = await sanityClient.fetch(query);
        
        const getImageUrl = (doc: any): string => {
          if (!doc) return '';
          if (typeof doc.image === 'string' && doc.image) return doc.image;
          if (doc.imageUrl && typeof doc.imageUrl === 'string') return doc.imageUrl;
          if (doc.image && typeof doc.image === 'object' && doc.image.asset) {
            try {
              return urlFor(doc.image).url();
            } catch {
              return '';
            }
          }
          return '';
        };

        const getGalleryUrls = (doc: any): string[] => {
          if (!doc || !Array.isArray(doc.gallery)) return [];
          return doc.gallery
            .map((item: any) => {
              if (typeof item === 'string' && item) return item;
              if (item && typeof item === 'object' && item.asset) {
                try {
                  return urlFor(item).url();
                } catch {
                  return '';
                }
              }
              return '';
            })
            .filter(Boolean);
        };

        const mappedCourses: Course[] = data.map((doc: any) => {
          let tag = doc.tag;
          if (doc.title && doc.title.toLowerCase().startsWith('diploma')) {
            tag = 'Diploma';
          }
          return {
            ...doc,
            id: doc._id,
            category: doc.category === 'multimedia' ? 'computer' : (doc.category || 'computer'),
            image: getImageUrl(doc),
            gallery: getGalleryUrls(doc),
            tag: tag,
            priority: typeof doc.priority === 'number' && !isNaN(doc.priority) ? doc.priority : undefined,
            isFeatured: Boolean(doc.isFeatured),
            hoursPerDay: doc.hoursPerDay || '',
          };
        });

        // Category Grouping Hierarchy: Fashion -> Computer -> Photography -> Beautician -> Spoken English
        const categoryOrder: Record<string, number> = {
          'fashion': 1,
          'computer': 2,
          'photography': 3,
          'beautician': 4,
          'spoken-english': 5
        };

        const sortedCourses = [...mappedCourses].sort((a, b) => {
          // 1. Strict Category Grouping
          const catA = a.category ? categoryOrder[a.category] || 99 : 99;
          const catB = b.category ? categoryOrder[b.category] || 99 : 99;
          if (catA !== catB) {
            return catA - catB;
          }

          // 2. Explicit Priority Number (1 comes before 2, 2 before 3, etc.)
          const priorityA = typeof a.priority === 'number' && !isNaN(a.priority) ? a.priority : null;
          const priorityB = typeof b.priority === 'number' && !isNaN(b.priority) ? b.priority : null;
          if (priorityA !== null && priorityB !== null) {
            if (priorityA !== priorityB) return priorityA - priorityB;
          } else if (priorityA !== null) {
            return -1;
          } else if (priorityB !== null) {
            return 1;
          }

          // 3. Featured / Priority Switch (isFeatured: true)
          const isAFeatured = Boolean(a.isFeatured);
          const isBFeatured = Boolean(b.isFeatured);
          if (isAFeatured && !isBFeatured) return -1;
          if (!isAFeatured && isBFeatured) return 1;

          // 4. Duration Order: Shortest duration first
          const durA = getDurationWeight(a.duration, a.tag);
          const durB = getDurationWeight(b.duration, b.tag);
          if (durA !== durB) {
            return durA - durB;
          }

          // 5. Alphabetical by title
          return (a.title || '').localeCompare(b.title || '');
        });

        setCourses(sortedCourses);
      } catch (error) {
        console.error('Error fetching courses from Sanity:', error);
        toast.error('Failed to load courses.');
      } finally {
        if (showLoading) setLoading(false);
      }
    };

    fetchCourses();

    const subscription = sanityClient.listen(query).subscribe({
      next: () => fetchCourses(false),
      error: (err) => console.warn('Sanity course subscription error:', err),
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <CourseContext.Provider value={{ courses, loading }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error('useCourses must be used within a CourseProvider');
  }
  return context;
};