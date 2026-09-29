"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Testimonial, fallbackTestimonials } from '@/data/testimonials';
import { fetchSanityWithCache, getInitialCachedData } from '@/lib/sanityClient';
import { toast } from 'sonner';

export type { Testimonial };

interface TestimonialContextType {
  testimonials: Testimonial[];
  addTestimonial: (testimonial: Omit<Testimonial, 'id' | 'created_at' | 'approved'>) => Promise<void>;
  loading: boolean;
}

const TestimonialContext = createContext<TestimonialContextType | undefined>(undefined);

export const TestimonialProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => 
    getInitialCachedData<Testimonial[]>('testimonials', fallbackTestimonials)
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Query all testimonials that are not explicitly dis-approved
    const query = '*[_type == "testimonial" && approved != false] | order(_createdAt desc)';

    const fetchTestimonials = async () => {
      try {
        const data = await fetchSanityWithCache<any[]>('testimonials_raw', query);
        if (data && Array.isArray(data) && data.length > 0) {
          const mappedTestimonials: Testimonial[] = data.map((doc: any, idx: number) => ({
            id: doc._id || doc.id || `sanity-t-${idx}`,
            name: doc.name || 'Academy Graduate',
            rating: typeof doc.rating === 'number' ? doc.rating : 5,
            quote: doc.quote || '',
            approved: doc.approved !== false,
            created_at: doc._createdAt || new Date().toISOString(),
          })).filter(t => t.quote && t.quote.trim().length > 0);

          if (mappedTestimonials.length > 0) {
            setTestimonials(mappedTestimonials);
            if (typeof window !== 'undefined') {
              try {
                localStorage.setItem('eyenet_cache_testimonials', JSON.stringify(mappedTestimonials));
              } catch {}
            }
          }
        }
      } catch (error) {
        console.warn('Error fetching testimonials from Sanity:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const addTestimonial = async (newTestimonial: Omit<Testimonial, 'id' | 'created_at' | 'approved'>) => {
    // Currently, submitting testimonials from frontend to Sanity is disabled
    // because doing so securely requires a backend server/function with a write token.
    toast.error('Testimonial submissions are temporarily disabled while the backend is being migrated.');
  };

  return (
    <TestimonialContext.Provider value={{ testimonials, addTestimonial, loading }}>
      {children}
    </TestimonialContext.Provider>
  );
};

export const useTestimonials = () => {
  const context = useContext(TestimonialContext);
  if (context === undefined) {
    throw new Error('useTestimonials must be used within a TestimonialProvider');
  }
  return context;
};