"use client";

import React from 'react';
import AboutHeroSection from '@/components/AboutHeroSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import FounderDirectorSection from '@/components/FounderDirectorSection';
import ImageGallerySection from '@/components/ImageGallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LocationSection from '@/components/LocationSection'; // Import the LocationSection

const About = () => {
  return (
    <>
      <AboutHeroSection />
      <WhyChooseUsSection />
      <FounderDirectorSection />
      <ImageGallerySection />
      <TestimonialsSection />
      <LocationSection /> {/* Add the LocationSection here */}
    </>
  );
};

export default About;