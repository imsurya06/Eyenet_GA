"use client";

import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, User } from 'lucide-react'; // Import Clock and User icons
import AnimateOnScroll from './AnimateOnScroll';
import { useCourses } from '@/context/CourseContext';
import { Skeleton } from '@/components/ui/skeleton';

const ComputerCoursesSection = () => {
  const { courses, loading } = useCourses();
  const navigate = useNavigate(); // Initialize useNavigate

  // Filter to display all computer courses
  const computerCourses = courses.filter(course => course.category === 'computer');

  const handleEnrollClick = (e: React.MouseEvent, courseTitle: string) => {
    e.stopPropagation(); // Prevent the parent Link from being triggered
    navigate(`/admissions?course=${encodeURIComponent(courseTitle)}`);
  };

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + '...';
  };

  return (
    <section className="py-10 px-3 md:px-8 lg:px-[80px] bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll isHero={true} delay={100}>
          <h1 className="text-h1-mobile md:text-h1-desktop font-heading mb-4 text-foreground">
            Computer Courses
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll isHero={true} delay={200}>
          <p className="text-h4-mobile md:text-h4-desktop font-heading text-primary mb-8">
            Digital Skills for the Modern World
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Skeleton Loading State
            Array.from({ length: 6 }).map((_, index) => (
              <div key={`skeleton-${index}`} className="bg-white rounded-lg shadow-md drop-shadow-lg overflow-hidden border border-gray-200 flex flex-col h-full">
                <Skeleton className="w-full h-48" />
                <div className="p-6 flex flex-col flex-grow">
                  <Skeleton className="h-6 w-24 rounded-full mb-4" />
                  <Skeleton className="h-8 w-3/4 mb-2" />
                  <Skeleton className="h-16 w-full mb-4" />
                  <div className="flex gap-4 mb-4">
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-4 w-1/3" />
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-10 w-24" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Actual Course Cards
            computerCourses.map((course, index) => (
              <AnimateOnScroll key={course.id} delay={300 + index * 75}>
                {/* Wrap the entire card with Link */}
                <Link to={`/courses/computer-courses/${course.id}`} className="block group h-full">
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
                    <div className="w-full h-48 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800';
                        }}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="inline-block bg-muted text-text-small font-body text-gray-600 px-3 py-1 rounded-full mb-4 border border-input">
                        {course.tag} / Offline
                      </span>
                      <h3 className="text-h5-mobile md:text-h5-desktop font-heading mb-2 text-foreground h-[7.5rem] line-clamp-3 overflow-hidden">
                        {course.title}
                      </h3>
                      <p className="text-text-regular font-body text-gray-600 mb-4 break-words">
                        {truncateDescription(course.description.replace(' Details...', ''), 120)}{' '}
                        <Link to={`/courses/computer-courses/${course.id}`} className="text-primary hover:underline ml-1" onClick={(e) => e.stopPropagation()}>
                          more...
                        </Link>
                      </p>
                      <div className="flex flex-col md:flex-row items-center gap-4 text-text-small font-body text-gray-700 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4 text-primary" />
                          <span>{course.eligibility}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-2 mt-auto md:flex-row md:justify-between">
                        {/* Download Brochure - this should work as is because it's a direct download */}
                        <a href="/brochures/Course-details-v1.pdf" download onClick={(e) => e.stopPropagation()} className="text-text-small font-body text-primary hover:underline whitespace-nowrap w-full text-center md:w-auto md:text-left">
                          Download Brochure
                        </a>
                        {/* Enroll Button - use onClick to navigate and stop propagation */}
                        <Button
                          className="bg-primary hover:bg-primary/90 px-4 py-2 text-text-small flex-shrink-0 w-full md:w-auto transition-all duration-300 ease-in-out hover:scale-[1.02] text-white"
                          onClick={(e) => handleEnrollClick(e, course.title)}
                        >
                          Enroll <ArrowRight className="ml-1 h-3 w-3 inline-block" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ComputerCoursesSection;