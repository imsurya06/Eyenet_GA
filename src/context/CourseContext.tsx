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
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const query = '*[_type == "course"] | order(title asc)';
        const data = await sanityClient.fetch(query);
        
        // Map Sanity data to our Course interface
        const mappedCourses: Course[] = data.map((doc: any) => ({
          ...doc,
          id: doc._id,
          image: doc.image ? urlFor(doc.image).url() : '',
        }));

        setCourses(mappedCourses);
      } catch (error) {
        console.error('Error fetching courses from Sanity:', error);
        toast.error('Failed to load courses.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
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