"use client";
import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import AdminHeader from '@/components/AdminHeader';
import AdminTestimonialCard from '@/components/AdminTestimonialCard';
import { useTestimonials } from '@/context/TestimonialContext';
import { Testimonial } from '@/context/TestimonialContext';
import { AdminActionOverlay } from '@/components/AdminActionOverlay';
import { useState } from 'react';

const AdminTestimonials = () => {
  const { testimonials, updateTestimonial, deleteTestimonial, loading } = useTestimonials();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleApproveToggle = async (id: string, currentStatus: boolean) => {
    setIsProcessing(true);
    const testimonialToUpdate = testimonials.find(t => t.id === id);
    if (testimonialToUpdate) {
      try {
        await updateTestimonial({ ...testimonialToUpdate, approved: !currentStatus });
        setTimeout(() => window.location.reload(), 500);
      } catch (error) {
        setIsProcessing(false);
      }
    } else {
      setIsProcessing(false);
    }
  };

  const handleDeleteTestimonial = async (id: string) => {
    setIsProcessing(true);
    try {
      await deleteTestimonial(id);
      setTimeout(() => window.location.reload(), 500);
    } catch (error) {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <AdminActionOverlay isProcessing={isProcessing} />
      <AdminHeader pageTitle="Testimonials" />
      <div className="flex-1 p-6 md:p-8 lg:p-10 bg-gray-50">
        <AnimateOnScroll delay={100}>
          <h2 className="text-h2-mobile md:text-h2-desktop font-heading mb-8 text-foreground text-center">
            Manage Student Testimonials
          </h2>
        </AnimateOnScroll>
        
        {loading ? (
          <AnimateOnScroll delay={200}>
            <p className="text-text-medium font-body text-gray-600 text-center">
              Loading testimonials...
            </p>
          </AnimateOnScroll>
        ) : testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimateOnScroll key={testimonial.id} delay={200 + index * 50}>
                <AdminTestimonialCard
                  testimonial={testimonial}
                  onApproveToggle={handleApproveToggle}
                  onDelete={handleDeleteTestimonial}
                />
              </AnimateOnScroll>
            ))}
          </div>
        ) : (
          <AnimateOnScroll delay={200}>
            <p className="text-text-medium font-body text-gray-600 text-center">
              No testimonials found.
            </p>
          </AnimateOnScroll>
        )}
      </div>
    </div>
  );
};
export default AdminTestimonials;