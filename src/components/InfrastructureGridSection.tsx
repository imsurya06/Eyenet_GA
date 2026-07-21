"use client";

import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { useInfrastructureImages } from '@/context/InfrastructureImageContext';
import { Skeleton } from '@/components/ui/skeleton';

const InfrastructureGridSection = () => {
  const { images, loading } = useInfrastructureImages();
  const facilityImages = images.filter(
    (img) => img.category !== 'carousel' && img.category !== 'carousal'
  );

  return (
    <section id="facilities-section" className="py-8 md:py-12 lg:py-16 px-3 md:px-8 lg:px-[80px] bg-background text-foreground text-center">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll delay={100}>
          <h2 className="text-h2-mobile md:text-h2-desktop font-heading mb-4">
            Our Facilities
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="text-text-medium font-body text-gray-600 mb-16 max-w-2xl mx-auto">
            A glimpse into our modern and inspiring learning environment.
          </p>
        </AnimateOnScroll>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="w-full aspect-square rounded-lg" />
            ))}
          </div>
        ) : facilityImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilityImages.map((image, index) => (
              <AnimateOnScroll key={image.id || index} delay={300 + index * 100}>
                <div className="w-full aspect-square overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <img
                    src={image.src}
                    alt={image.alt || 'Facility Image'}
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 font-body text-text-medium">No facilities images to display.</p>
        )}
      </div>
    </section>
  );
};

export default InfrastructureGridSection;