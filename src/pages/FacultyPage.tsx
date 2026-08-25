"use client";

import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import FacultySection from '@/components/FacultySection';

const FacultyPage = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      <AnimateOnScroll isHero={true} delay={100} className="pt-8 md:pt-12 pb-2 px-4 md:px-8 lg:px-[80px] bg-background text-foreground text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal mb-3 tracking-tight">
          Our <span className="text-primary font-heading italic">Faculty</span>
        </h1>
        <p className="text-sm sm:text-base font-body text-slate-600 max-w-xl mx-auto">
          Meet the experienced educators and industry experts guiding our students.
        </p>
      </AnimateOnScroll>
      <FacultySection />
    </div>
  );
};

export default FacultyPage;