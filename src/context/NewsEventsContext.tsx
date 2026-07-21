"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { NewsEvent } from '@/data/newsEvents';
import { sanityClient, urlFor } from '@/lib/sanityClient';
import { toast } from 'sonner';

interface NewsEventsContextType {
  newsEvents: NewsEvent[];
  loading: boolean;
}

const NewsEventsContext = createContext<NewsEventsContextType | undefined>(undefined);

export const NewsEventsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [newsEvents, setNewsEvents] = useState<NewsEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "newsEvent"] | order(date desc)';

    const fetchNewsEvents = async (showLoading = true) => {
      if (showLoading) setLoading(true);
      try {
        const data = await sanityClient.fetch(query);
        
        const mappedEvents: NewsEvent[] = data.map((doc: any) => ({
          ...doc,
          id: doc._id,
          image: doc.image ? urlFor(doc.image).url() : undefined,
        }));

        setNewsEvents(mappedEvents);
      } catch (error) {
        console.error('Error fetching news/events from Sanity:', error);
        toast.error('Failed to load news/events.');
      } finally {
        if (showLoading) setLoading(false);
      }
    };

    fetchNewsEvents();

    const subscription = sanityClient.listen(query).subscribe({
      next: () => fetchNewsEvents(false),
      error: (err) => console.warn('Sanity news/events subscription error:', err),
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <NewsEventsContext.Provider value={{ newsEvents, loading }}>
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