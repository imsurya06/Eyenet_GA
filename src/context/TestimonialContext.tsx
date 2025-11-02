"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { initialTestimonials, Testimonial } from '@/data/testimonials';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';

interface TestimonialContextType {
  testimonials: Testimonial[];
  addTestimonial: (testimonial: Testimonial) => Promise<void>;
  deleteTestimonial: (id: string) => Promise<void>;
  updateTestimonial: (updatedTestimonial: Testimonial) => Promise<void>;
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
        .order('date', { ascending: false });

      if (error) {
        console.error('Error fetching testimonials:', error);
        toast.error('Failed to load testimonials.');
        setTestimonials(initialTestimonials); // Fallback to initial data
      } else {
        setTestimonials(data as Testimonial[]);
      }
      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  const addTestimonial = async (testimonial: Testimonial) => {
    const testimonialToInsert = { ...testimonial, id: testimonial.id || `test-${Date.now()}` };
    const { data, error } = await supabase
      .from('testimonials')
      .insert([testimonialToInsert])
      .select();

    if (error) {
      console.error('Error adding testimonial:', error);
      toast.error('Failed to add testimonial.');
    } else if (data && data.length > 0) {
      setTestimonials(prevTestimonials => [...prevTestimonials, data[0]]);
      toast.success('Testimonial added successfully!');
    }
  };

  const deleteTestimonial = async (id: string) => {
    const { error } = await supabase
      .from('testimonials')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting testimonial:', error);
      toast.error('Failed to delete testimonial.');
    } else {
      setTestimonials(prevTestimonials => prevTestimonials.filter(test => test.id !== id));
      toast.success('Testimonial deleted successfully!');
    }
  };

  const updateTestimonial = async (updatedTestimonial: Testimonial) => {
    const { data, error } = await supabase
      .from('testimonials')
      .update(updatedTestimonial)
      .eq('id', updatedTestimonial.id)
      .select();

    if (error) {
      console.error('Error updating testimonial:', error);
      toast.error('Failed to update testimonial.');
    } else if (data && data.length > 0) {
      setTestimonials(prevTestimonials =>
        prevTestimonials.map(test => (test.id === updatedTestimonial.id ? data[0] : test))
      );
      toast.success('Testimonial updated successfully!');
    }
  };

  return (
    <TestimonialContext.Provider value={{ testimonials, addTestimonial, deleteTestimonial, updateTestimonial, loading }}>
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