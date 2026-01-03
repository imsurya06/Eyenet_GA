"use client";

import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import BlogsDisplaySection from '@/components/BlogsDisplaySection';

const Blogs = () => {
  return (
    <div className="min-h-screen pt-24 bg-background">
      <AnimateOnScroll isHero={true} delay={100} className="container mx-auto px-4 lg:px-[80px] mb-12 text-center">
        <h1 className="text-h1-mobile md:text-h1-desktop font-heading mb-4 text-foreground">
          Our Journal
        </h1>
        <p className="text-text-medium font-body text-gray-600 max-w-2xl mx-auto">
          Insights, updates, and stories from our community of designers and creators.
        </p>
      </AnimateOnScroll>
      <BlogsDisplaySection />
    </div>
  );
};

export default Blogs;