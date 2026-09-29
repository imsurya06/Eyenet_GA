"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { fetchSanityWithCache, getInitialCachedData } from '@/lib/sanityClient';
import { toast } from 'sonner';

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  quote: string;
  approved: boolean;
  created_at: string;
}

interface TestimonialContextType {
  testimonials: Testimonial[];
  addTestimonial: (testimonial: Omit<Testimonial, 'id' | 'created_at' | 'approved'>) => Promise<void>;
  loading: boolean;
}

const TestimonialContext = createContext<TestimonialContextType | undefined>(undefined);

export const TestimonialProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => getInitialCachedData<Testimonial[]>('testimonials', []));
  const [loading, setLoading] = useState<boolean>(() => getInitialCachedData<Testimonial[]>('testimonials', []).length === 0);

  useEffect(() => {
    const query = '*[_type == "testimonial" && approved == true] | order(_createdAt desc)';

    const fetchTestimonials = async () => {
      try {
        const data = await fetchSanityWithCache<any[]>('testimonials_raw', query);
        if (data && Array.isArray(data) && data.length > 0) {
          const mappedTestimonials: Testimonial[] = data.map((doc: any) => ({
            ...doc,
            id: doc._id || doc.id,
            created_at: doc._createdAt,
          }));

          setTestimonials(mappedTestimonials);
          if (typeof window !== 'undefined') {
            try {
              localStorage.setItem('eyenet_cache_testimonials', JSON.stringify(mappedTestimonials));
            } catch {}
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