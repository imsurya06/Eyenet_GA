"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  quote: string;
  created_at: string;
}

interface TestimonialContextType {
  testimonials: Testimonial[];
  addTestimonial: (testimonial: Omit<Testimonial, 'id' | 'created_at'>) => Promise<void>;
  loading: boolean;
}

const TestimonialContext = createContext<TestimonialContextType | undefined>(undefined);

export const TestimonialProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching testimonials:', error);
        toast.error('Failed to load testimonials.');
      } else {
        setTestimonials(data as Testimonial[]);
      }
      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  const addTestimonial = async (newTestimonial: Omit<Testimonial, 'id' | 'created_at'>) => {
    const { data, error } = await supabase
      .from('testimonials')
      .insert([newTestimonial])
      .select();

    if (error) {
      console.error('Error adding testimonial:', error);
      toast.error(`Failed to submit testimonial: ${error.message}`);
    } else if (data && data.length > 0) {
      setTestimonials(prev => [data[0], ...prev]);
      toast.success('Testimonial submitted successfully!');
    }
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