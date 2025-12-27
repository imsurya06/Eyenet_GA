"use client";

import React from 'react';
import InfrastructureHeroSection from '@/components/InfrastructureHeroSection';
import InfrastructureGridSection from '@/components/InfrastructureGridSection';
import FacultySection from '@/components/FacultySection'; // Import FacultySection
import AnimateOnScroll from '@/components/AnimateOnScroll'; // Import AnimateOnScroll
import CallToActionSection from '@/components/CallToActionSection'; // Import CallToActionSection

const Infrastructure = () => {
  return (
    <>
      <InfrastructureHeroSection />
      <InfrastructureGridSection />
      {/* Removed InfrastructureImageGridSection as it was a duplicate */}
      <FacultySection /> {/* Add the new FacultySection here */}
      <CallToActionSection /> {/* Add CallToActionSection here */}
    </>
  );
};

export default Infrastructure;