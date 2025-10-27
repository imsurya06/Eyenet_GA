"use client";

import React from 'react';
import FashionCoursesSection from '@/components/FashionCoursesSection';
import AdditionalFashionCoursesSection from '@/components/AdditionalFashionCoursesSection';
import MoreFashionCoursesSection from '@/components/MoreFashionCoursesSection'; // Import the new component
import CallToActionSection from '@/components/CallToActionSection';

const FashionDesignCourses = () => {
  return (
    <>
      <FashionCoursesSection />
      <AdditionalFashionCoursesSection />
      <MoreFashionCoursesSection /> {/* Add the new course cards section here */}
      <CallToActionSection />
    </>
  );
};

export default FashionDesignCourses;