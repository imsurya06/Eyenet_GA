"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Course } from '@/data/courses';
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

        const mappedCourses: Course[] = data.map((doc: any) => ({
          ...doc,
          id: doc._id,
          image: getImageUrl(doc),
        }));

        setCourses(mappedCourses);
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