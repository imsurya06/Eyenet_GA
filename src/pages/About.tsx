"use client";

import React from 'react';
import AboutHeroSection from '@/components/AboutHeroSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import FounderDirectorSection from '@/components/FounderDirectorSection'; // Import the new component

const About = () => {
  return (
    <>
      <AboutHeroSection />
      <WhyChooseUsSection />
      <FounderDirectorSection /> {/* Add the FounderDirectorSection here */}
    </>
  );
};

export default About;