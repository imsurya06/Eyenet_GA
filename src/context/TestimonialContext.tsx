"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { sanityClient } from '@/lib/sanityClient';
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
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "testimonial" && approved == true] | order(_createdAt desc)';

    const fetchTestimonials = async (showLoading = true) => {
      if (showLoading) setLoading(true);
      try {
        // Only fetch approved testimonials for the frontend
        const data = await sanityClient.fetch(query);
        
        const mappedTestimonials: Testimonial[] = data.map((doc: any) => ({
          ...doc,
          id: doc._id,
          created_at: doc._createdAt,
        }));

        setTestimonials(mappedTestimonials);
      } catch (error) {
        console.error('Error fetching testimonials from Sanity:', error);
        toast.error('Failed to load testimonials.');
      } finally {
        if (showLoading) setLoading(false);
      }
    };

    fetchTestimonials();

    const subscription = sanityClient.listen(query).subscribe(() => {
      fetchTestimonials(false);
    });

    return () => subscription.unsubscribe();
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