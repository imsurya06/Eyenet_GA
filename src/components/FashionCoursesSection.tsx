"use client";

import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, User } from 'lucide-react'; // Import Clock and User icons
import AnimateOnScroll from './AnimateOnScroll';
import { useCourses } from '@/context/CourseContext';
import { Skeleton } from '@/components/ui/skeleton';

const FashionCoursesSection = () => {
  const { courses, loading } = useCourses();
  const navigate = useNavigate(); // Initialize useNavigate

  // Filter to display all fashion courses
  const fashionCourses = courses.filter(course => course.category === 'fashion');

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
            Courses
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll isHero={true} delay={200}>
          <p className="text-h4-mobile md:text-h4-desktop font-heading text-primary mb-8">
            Fashion Designing
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
            fashionCourses.map((course, index) => (
              <AnimateOnScroll key={course.id} delay={300 + index * 75}>
                <Link to={`/courses/fashion-design/${course.id}`} className="block group h-full">
                  <div className="bg-white rounded-3xl p-5 shadow-md hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 flex flex-col h-full max-w-full overflow-hidden">
                    <div className="w-full h-52 overflow-hidden rounded-2xl block mb-4 flex-shrink-0">
                      <img
                        src={course.image && !course.image.includes('/images/img') && !course.image.includes('placeholder') ? course.image : 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800'}
                        alt={course.title}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col flex-grow justify-between min-w-0">
                      <div>
                        <span className="inline-block bg-muted text-xs font-semibold font-body text-gray-600 px-3 py-1 rounded-full mb-3 border border-gray-200 max-w-full truncate">
                          {course.tag} / Offline
                        </span>
                        <h3 className="text-xl font-heading font-bold mb-2 text-foreground line-clamp-2 hover:text-primary transition-colors break-words [overflow-wrap:anywhere]">
                          {course.title}
                        </h3>
                        <p className="text-sm font-body text-gray-600 mb-4 leading-relaxed flex-grow break-words [overflow-wrap:anywhere]">
                          {truncateDescription(course.description.replace(' Details...', ''), 120)}{' '}
                          <span className="text-primary hover:underline ml-1 font-semibold">
                            more...
                          </span>
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-4 text-xs font-body text-gray-600 mb-4 pt-3 border-t border-gray-100 flex-wrap">
                          <div className="flex items-center gap-1 min-w-0">
                            <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="truncate">{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1 min-w-0">
                            <User className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="truncate">{course.eligibility}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-2 pt-3 border-t border-gray-100">
                          <a href="/brochures/Course-details-v1.pdf" download onClick={(e) => e.stopPropagation()} className="text-xs font-semibold text-primary hover:underline truncate">
                            Download Brochure
                          </a>
                          <Button
                            className="bg-primary hover:bg-primary/90 text-white rounded-full px-4 py-2 text-xs font-semibold shadow-sm flex-shrink-0"
                            onClick={(e) => handleEnrollClick(e, course.title)}
                          >
                            Enroll <ArrowRight className="ml-1 h-3 w-3 inline-block" />
                          </Button>
                        </div>
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

export default FashionCoursesSection;