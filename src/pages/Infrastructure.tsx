import React from 'react';
import InfrastructureHeroSection from '@/components/InfrastructureHeroSection';
import InfrastructureGridSection from '@/components/InfrastructureGridSection';
import InfrastructureImageGridSection from '@/components/InfrastructureImageGridSection';
import FacultySection from '@/components/FacultySection'; // Import FacultySection
import AnimateOnScroll from '@/components/AnimateOnScroll'; // Import AnimateOnScroll

const Infrastructure = () => {
  return (
    <>
      <InfrastructureHeroSection />
      <InfrastructureGridSection />
      <InfrastructureImageGridSection />
      <FacultySection /> {/* Add the new FacultySection here */}
    </>
  );
};

export default Infrastructure;