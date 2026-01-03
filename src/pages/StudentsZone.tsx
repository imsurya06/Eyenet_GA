"use client";

import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import BlogsDisplaySection from '@/components/BlogsDisplaySection';
import WriteBlogButton from '@/components/WriteBlogButton'; // Import the new button component
import StudentTestimonialForm from '@/components/StudentTestimonialForm'; // Import the new testimonial form
import CallToActionSection from '@/components/CallToActionSection'; // Import CallToActionSection

const StudentsZone = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      <AnimateOnScroll isHero={true} delay={500} className="py-8 md:py-12 lg:py-16 px-3 md:px-8 lg:px-[80px] bg-background text-foreground text-center">
        <h1 className="text-h1-mobile md:text-h1-desktop font-heading mb-4">Students Zone</h1>
        <p className="text-text-medium font-body text-gray-600">
          Welcome to your hub for resources, news, and community updates!
        </p>
      </AnimateOnScroll>

      <BlogsDisplaySection />
      <StudentTestimonialForm /> {/* Add the testimonial form here */}
      <WriteBlogButton /> {/* Add the new button here */}
      <CallToActionSection /> {/* Add CallToActionSection here */}
    </div>
  );
};

export default StudentsZone;