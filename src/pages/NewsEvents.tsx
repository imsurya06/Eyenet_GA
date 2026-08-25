"use client";

import React from 'react';
import NewsEventsDisplaySection from '@/components/NewsEventsDisplaySection';
import NewspaperReaderSection from '@/components/NewspaperReaderSection';
import CallToActionSection from '@/components/CallToActionSection';

const NewsEvents = () => {
  return (
    <>
      <NewsEventsDisplaySection />
      <NewspaperReaderSection />
      <CallToActionSection />
    </>
  );
};

export default NewsEvents;