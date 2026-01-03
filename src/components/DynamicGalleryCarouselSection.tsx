"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import { useGalleryImages } from '@/context/GalleryImageContext'; // Import useGalleryImages

interface DynamicGalleryCarouselSectionProps {
  withButton?: boolean;
}

const DynamicGalleryCarouselSection: React.FC<DynamicGalleryCarouselSectionProps> = ({ withButton = false }) => {
  const { galleryImages, loading } = useGalleryImages(); // Use the context to get images

  // Filter out images that are already used in the static GalleryCarouselSection if needed,
  // or just display all dynamic images. For now, we'll display all from context.
  const imagesToDisplay = galleryImages;

  if (loading) {
    return (
      <section className="py-8 md:py-12 lg:py-16 px-3 md:px-8 lg:px-[80px] bg-background text-foreground text-center">
        <AnimateOnScroll delay={100}>
          <p className="text-text-medium font-body text-gray-600">Loading gallery images...</p>
        </AnimateOnScroll>
      </section>
    );
  }

  if (imagesToDisplay.length === 0) {
    return (
      <section className="py-12 md:py-16 lg:py-20 px-3 md:px-8 lg:px-[80px] bg-background text-foreground text-center">
        <AnimateOnScroll delay={100}>
          <h2 className="text-h2-mobile md:text-h2-desktop font-heading mb-4">
            Our Gallery
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="text-text-medium font-body text-gray-600 mb-16 max-w-2xl mx-auto">
            No gallery images to display at the moment.
          </p>
        </AnimateOnScroll>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-10 lg:py-12 bg-background text-foreground overflow-hidden">
      <div className="px-3 md:px-8 lg:px-[80px] mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <AnimateOnScroll delay={100}>
              <h2 className="text-h2-mobile md:text-h2-desktop font-heading mb-4">
                Our Creative Works
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="text-text-medium font-body text-gray-600 max-w-md">
                A collection of projects, events, and campus highlights.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      {/* Infinite Loop Ticker */}
      <div className="relative w-full">
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {/* First set of images */}
          <div className="flex gap-4 px-2">
            {imagesToDisplay.map((image, index) => (
              <div key={`original-${image.id}-${index}`} className="w-[300px] md:w-[400px] flex-shrink-0">
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          {/* Duplicate set of images for seamless loop */}
          <div className="flex gap-4 px-2">
            {imagesToDisplay.map((image, index) => (
              <div key={`duplicate-${image.id}-${index}`} className="w-[300px] md:w-[400px] flex-shrink-0">
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View Gallery Button */}
      {withButton && (
        <div className="flex justify-center mt-8 md:mt-10">
          <AnimateOnScroll delay={300}>
            <Button asChild className="px-6 py-3 text-text-regular bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/gallery">
                View Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      )}
    </section>
  );
};

export default DynamicGalleryCarouselSection;