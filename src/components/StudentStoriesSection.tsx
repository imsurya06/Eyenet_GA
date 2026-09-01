"use client";

import React from 'react';
import { User2, Star, Quote } from 'lucide-react'; 
import AnimateOnScroll from './AnimateOnScroll';
import { useTestimonials } from '@/context/TestimonialContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const StudentStoriesSection = () => {
  const { testimonials, loading } = useTestimonials();
  const approvedTestimonials = testimonials.filter(t => t.approved);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 md:px-8 lg:px-[80px] bg-slate-50 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <AnimateOnScroll delay={100}>
        <h2 className="text-h2-mobile md:text-h2-desktop font-heading mb-4 text-primary font-heading font-bold">
          Testimonials
        </h2>
      </AnimateOnScroll>
      <AnimateOnScroll delay={200}>
        <p className="text-text-medium font-body text-gray-600 mb-12 md:mb-16 max-w-2xl mx-auto">
          Hear from our talented design graduates and current students.
        </p>
      </AnimateOnScroll>

      {loading ? (
        <AnimateOnScroll delay={300} className="col-span-full text-center text-text-medium text-gray-600">
          Loading student stories...
        </AnimateOnScroll>
      ) : approvedTestimonials.length > 0 ? (
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll delay={300}>
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              opts={{
                loop: true,
                align: "start",
              }}
            >
              <CarouselContent className="-ml-4 flex py-6">
                {approvedTestimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 flex pb-2">
                    <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col h-full text-left relative border border-slate-200/80 group w-full">
                      <Quote className="absolute top-6 right-8 h-12 w-12 text-primary/10 group-hover:text-primary/20 transition-colors duration-300" />
                      
                      {/* Display star rating */}
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${testimonial.rating > i ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
                          />
                        ))}
                      </div>
                      
                      <p className="text-sm sm:text-base font-body text-slate-700 mb-8 italic flex-grow leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200 flex-shrink-0">
                          <User2 className="h-6 w-6 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-base font-body font-semibold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-xs sm:text-sm font-body text-gray-500">
                            Student
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* Optional Navigation arrows */}
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </AnimateOnScroll>
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