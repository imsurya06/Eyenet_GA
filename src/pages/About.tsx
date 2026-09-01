"use client";

import React from 'react';
import AboutHeroSection from '@/components/AboutHeroSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import FounderDirectorSection from '@/components/FounderDirectorSection';
import VisionMissionValuesSection from '@/components/VisionMissionValuesSection';
import DynamicGalleryCarouselSection from '@/components/DynamicGalleryCarouselSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LocationSection from '@/components/LocationSection';

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <>
      <AboutHeroSection />
      <WhyChooseUsSection />
      <FounderDirectorSection />
      <VisionMissionValuesSection />
      <TestimonialsSection />
      <LocationSection />
    </>
  );
};

export default About;