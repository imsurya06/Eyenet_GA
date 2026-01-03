"use client";

import React from 'react';
import AboutHeroSection from '@/components/AboutHeroSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import FounderDirectorSection from '@/components/FounderDirectorSection';
import DynamicGalleryCarouselSection from '@/components/DynamicGalleryCarouselSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LocationSection from '@/components/LocationSection';
import ContactUsSection from '@/components/ContactUsSection';
import AnimateOnScroll from '@/components/AnimateOnScroll'; // Import AnimateOnScroll

const About = () => {
  return (
    <>
      <AboutHeroSection />
      <WhyChooseUsSection />
      <FounderDirectorSection />
      <DynamicGalleryCarouselSection withButton={true} />
      <TestimonialsSection />
      <LocationSection />
      <ContactUsSection />
    </>
  );
};

export default About;