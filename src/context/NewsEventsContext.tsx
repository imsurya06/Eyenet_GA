"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { initialNewsEvents, NewsEvent } from '@/data/newsEvents';

interface NewsEventsContextType {
  newsEvents: NewsEvent[];
  addNewsEvent: (newsEvent: NewsEvent) => void;
  deleteNewsEvent: (id: string) => void;
  updateNewsEvent: (updatedNewsEvent: NewsEvent) => void;
}

const NewsEventsContext = createContext<NewsEventsContextType | undefined>(undefined);

export const NewsEventsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [newsEvents, setNewsEvents] = useState<NewsEvent[]>(initialNewsEvents);

  const addNewsEvent = (newsEvent: NewsEvent) => {
    setNewsEvents(prevNewsEvents => [...prevNewsEvents, newsEvent]);
  };

  const deleteNewsEvent = (id: string) => {
    setNewsEvents(prevNewsEvents => prevNewsEvents.filter(newsEvent => newsEvent.id !== id));
  };

  const updateNewsEvent = (updatedNewsEvent: NewsEvent) => {
    setNewsEvents(prevNewsEvents =>
      prevNewsEvents.map(newsEvent => (newsEvent.id === updatedNewsEvent.id ? updatedNewsEvent : newsEvent))
    );
  };

  return (
    <NewsEventsContext.Provider value={{ newsEvents, addNewsEvent, deleteNewsEvent, updateNewsEvent }}>
      {children}
    </NewsEventsContext.Provider>
  );
};

export const useNewsEvents = () => {
  const context = useContext(NewsEventsContext);
  if (context === undefined) {
    throw new Error('useNewsEvents must be used within a NewsEventsProvider');
  }
  return context;
};