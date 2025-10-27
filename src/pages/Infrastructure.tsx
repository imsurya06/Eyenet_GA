import React from 'react';
import InfrastructureHeroSection from '@/components/InfrastructureHeroSection';
import InfrastructureGridSection from '@/components/InfrastructureGridSection';
import InfrastructureImageGridSection from '@/components/InfrastructureImageGridSection';
import AnimateOnScroll from '@/components/AnimateOnScroll'; // Import AnimateOnScroll

const Infrastructure = () => {
  return (
    <>
      <InfrastructureHeroSection />
      <InfrastructureGridSection />
      <InfrastructureImageGridSection />
    </>
  );
};

export default Infrastructure;