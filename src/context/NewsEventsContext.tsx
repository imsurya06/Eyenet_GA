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

// Robust helper function to extract 11-char YouTube Video ID from ALL url variants
export function extractYouTubeId(url?: string): string | undefined {
  if (!url) return undefined;
  const trimmed = url.trim();
  
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  // Matches watch?v=ID, youtu.be/ID, embed/ID, shorts/ID, live/ID, etc.
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts|live)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = trimmed.match(regExp);
  if (match && match[1]) {
    return match[1];
  }
  return undefined;
}

export const NewsEventsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [newsEvents, setNewsEvents] = useState<NewsEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all news events ordered strictly by Event Date desc (newest event date first)
    const query = '*[_type == "newsEvent"] | order(date desc)';

    const fetchNewsEvents = async (showLoading = true) => {
      if (showLoading) setLoading(true);
      try {
        const data = await sanityClient.fetch(query);
        
        const getImageUrl = (doc: any): string => {
          if (!doc) return '';
          if (typeof doc.image === 'string' && doc.image) return doc.image;
          if (doc.imageUrl && typeof doc.imageUrl === 'string') return doc.imageUrl;
          if (doc.image && typeof doc.image === 'object' && doc.image.asset) {
            try {
              return urlFor(doc.image).url();
            } catch {
              return '';
            }
          }
          return '';
        };

        const mappedEvents: NewsEvent[] = data.map((doc: any) => {
          const youtubeUrl = doc.youtubeUrl || '';
          const videoId = extractYouTubeId(youtubeUrl);
          let image = getImageUrl(doc);

          // Fallback to high quality YouTube thumbnail if Sanity image is not uploaded
          if (!image && videoId) {
            image = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          }

          return {
            ...doc,
            id: doc._id,
            category: doc.category || 'Others',
            youtubeUrl,
            youtubeVideoId: videoId,
            isFeatured: Boolean(doc.isFeatured),
            image: image || 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200',
          };
        });

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