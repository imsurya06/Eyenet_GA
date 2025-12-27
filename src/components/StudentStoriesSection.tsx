"use client";

import React from 'react';
import { User, Star } from 'lucide-react'; // Import Star icon for ratings
import AnimateOnScroll from './AnimateOnScroll';
import { useTestimonials } from '@/context/TestimonialContext'; // Import useTestimonials

const StudentStoriesSection = () => {
  const { testimonials, loading } = useTestimonials(); // Use the context
  const approvedTestimonials = testimonials.filter(t => t.approved); // Filter for approved testimonials

  return (
    <section className="py-12 md:py-16 lg:py-20 px-3 md:px-8 lg:px-[80px] bg-background text-center">
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
              <div className="flex flex-col items-center text-center p-4">
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
                  {/* Using dicebear for placeholder avatars based on name */}
                  <img
                    src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${testimonial.name}`}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
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

export default StudentStoriesSection;