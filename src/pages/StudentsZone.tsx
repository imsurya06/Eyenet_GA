"use client";

import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import BlogsDisplaySection from '@/components/BlogsDisplaySection';
import WriteBlogButton from '@/components/WriteBlogButton';
import StudentTestimonialForm from '@/components/StudentTestimonialForm';
import BlogFilter from '@/components/BlogFilter'; // Import the new BlogFilter component

const StudentsZone = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      <section className="py-12 md:py-16 lg:py-20 px-3 md:px-8 lg:px-[80px] bg-background text-foreground text-center">
        <AnimateOnScroll isHero={true} delay={100}>
          <p className="text-text-regular font-body text-foreground mb-4">Blog</p>
        </AnimateOnScroll>
        <AnimateOnScroll isHero={true} delay={200}>
          <h1 className="text-h1-mobile md:text-h1-desktop font-heading mb-4">
            Short heading goes here
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll isHero={true} delay={300}>
          <p className="text-text-medium font-body text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </AnimateOnScroll>
      </section>

      <BlogFilter /> {/* Add the blog filter here */}
      <BlogsDisplaySection />
      
      {/* Commented out StudentTestimonialForm and WriteBlogButton as they are not in the image */}
      {/* <StudentTestimonialForm /> */}
      {/* <WriteBlogButton /> */}
    </div>
  );
};

export default StudentsZone;