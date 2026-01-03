"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, User2 } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import { useTestimonials } from '@/context/TestimonialContext'; // Import useTestimonials

const TestimonialsSection = () => {
  const { testimonials, loading } = useTestimonials(); // Use the context
  const approvedTestimonials = testimonials.filter(t => t.approved); // Filter for approved testimonials

  // Removed hardcoded testimonials array

  return (
    <section className="py-8 md:py-10 lg:py-12 px-3 md:px-8 lg:px-[80px] bg-background text-center">
      <AnimateOnScroll delay={100}>
        <h2 className="text-h2-mobile md:text-h2-desktop font-heading mb-4">
          Student stories
        </h2>
      </AnimateOnScroll>
      <AnimateOnScroll delay={200}>
        <p className="text-text-medium font-body text-gray-600 mb-16 max-w-2xl mx-auto">
          Hear from our talented design graduates and current students.
        </p>
      </AnimateOnScroll>

      {loading ? (
        <AnimateOnScroll delay={300} className="col-span-full text-center text-text-medium text-gray-600">
          Loading student stories...
        </AnimateOnScroll>
      ) : approvedTestimonials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {approvedTestimonials.map((testimonial, index) => (
            <AnimateOnScroll key={testimonial.id} delay={150 + index * 75}>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100">
                <p className="text-text-medium font-body text-foreground mb-8 italic max-w-xs">
                  "{testimonial.quote}"
                </p>
                {/* Display star rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${testimonial.rating > i ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`}
                    />
                  ))}
                </div>
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4 overflow-hidden">
                  <User2 className="h-10 w-10 text-gray-500" />
                </div>
                <p className="text-text-medium font-body font-semibold text-foreground mb-1">
                  {testimonial.name}
                </p>
                <p className="text-text-small font-body text-gray-600">
                  Student
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      ) : (
        <AnimateOnScroll delay={300} className="col-span-full text-center text-text-medium text-gray-600">
          No student stories to display yet.
        </AnimateOnScroll>
      )}
    </section>
  );
};

export default TestimonialsSection;