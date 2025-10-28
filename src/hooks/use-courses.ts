"use client";

import React from 'react';
import { initialCourses, Course } from '@/data/courses';

interface UseCoursesReturn {
  courses: Course[];
  deleteCourse: (id: string) => void;
}

const useCourses = (): UseCoursesReturn => {
  const [courses, setCourses] = React.useState<Course[]>(initialCourses);

  const deleteCourse = (id: string) => {
    setCourses(prevCourses => prevCourses.filter(course => course.id !== id));
  };

  return { courses, deleteCourse };
};

export default useCourses;