"use client";

import React from 'react';
import FashionCoursesSection from '@/components/FashionCoursesSection';
import AdditionalFashionCoursesSection from '@/components/AdditionalFashionCoursesSection';
import MoreFashionCoursesSection from '@/components/MoreFashionCoursesSection';
import CallToActionSection from '@/components/CallToActionSection';
import AnimateOnScroll from '@/components/AnimateOnScroll'; // Import AnimateOnScroll

const FashionDesignCourses = () => {
  return (
    <>
      <FashionCoursesSection />
      <AdditionalFashionCoursesSection />
      <MoreFashionCoursesSection />
      <CallToActionSection />
    </>
  );
};

export default FashionDesignCourses;