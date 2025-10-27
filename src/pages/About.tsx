"use client";

import React from 'react';
import AboutHeroSection from '@/components/AboutHeroSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import FounderDirectorSection from '@/components/FounderDirectorSection';
import ImageGallerySection from '@/components/ImageGallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LocationSection from '@/components/LocationSection';
import ContactUsSection from '@/components/ContactUsSection'; // Import the new ContactUsSection

const About = () => {
  return (
    <>
      <AboutHeroSection />
      <WhyChooseUsSection />
      <FounderDirectorSection />
      <ImageGallerySection />
      <TestimonialsSection />
      <LocationSection />
      <ContactUsSection /> {/* Add the ContactUsSection here */}
    </>
  );
};

export default About;