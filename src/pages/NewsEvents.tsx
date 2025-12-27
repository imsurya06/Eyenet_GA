"use client";

import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import NewsEventsDisplaySection from '@/components/NewsEventsDisplaySection'; // Import the new component
import CallToActionSection from '@/components/CallToActionSection'; // Import CallToActionSection

const NewsEvents = () => {
  return (
    <>
      <NewsEventsDisplaySection />
      <CallToActionSection /> {/* Add CallToActionSection here */}
    </>
  );
};

export default NewsEvents;