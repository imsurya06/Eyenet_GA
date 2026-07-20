"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import { useGalleryImages } from '@/context/GalleryImageContext'; // Import useGalleryImages

import { initialGalleryImages } from '@/data/galleryImages';

interface DynamicGalleryCarouselSectionProps {
  withButton?: boolean;
}

const DynamicGalleryCarouselSection: React.FC<DynamicGalleryCarouselSectionProps> = ({ withButton = false }) => {
  const { images: galleryImages = [], loading } = useGalleryImages(); // Use the context to get images

  // Combine gallery images from Sanity (or fallback to dummy real-world Unsplash images)
  const imagesToDisplay = galleryImages.length > 0 ? galleryImages : initialGalleryImages;

  // Split images into two rows based on the 'ticker_row' property
  const row1Images = imagesToDisplay.filter(img => img.ticker_row === '1' || !img.ticker_row);
  const row2Images = imagesToDisplay.filter(img => img.ticker_row === '2');

  const defaultRow1 = row1Images.length > 0 ? row1Images : initialGalleryImages.slice(0, 3);
  const defaultRow2 = row2Images.length > 0 ? row2Images : initialGalleryImages.slice(3, 6);

  return (
    <section className="py-12 md:py-16 bg-background text-foreground overflow-hidden">
      <div className="px-4 md:px-8 lg:px-[80px] mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <AnimateOnScroll delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3">
                Our <span className="text-primary font-heading">Creative Works</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="text-base font-body text-gray-600 max-w-md">
                A collection of projects, events, and campus highlights.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      {/* Infinite Loop Ticker Row 1 - Scrolls Left */}
      <div className="relative w-full">
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {/* First set of images */}
          <div className="flex">
            {row1Images.map((image, index) => (
              <div key={`row1-original-${image.id}-${index}`} className="w-[300px] md:w-[400px] flex-shrink-0">
                <div className="w-full h-full">
                  <div className="flex aspect-video items-center justify-center p-0 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate set of images for seamless loop */}
          <div className="flex">
            {row1Images.map((image, index) => (
              <div key={`row1-duplicate-${image.id}-${index}`} className="w-[300px] md:w-[400px] flex-shrink-0">
                <div className="w-full h-full">
                  <div className="flex aspect-video items-center justify-center p-0 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite Loop Ticker Row 2 - Scrolls Right (if any images exist) */}
      {row2Images.length > 0 && (
        <div className="relative w-full">
          <div className="flex w-max animate-scroll-reverse hover:[animation-play-state:paused]">
            {/* First set of images */}
            <div className="flex">
              {row2Images.map((image, index) => (
                <div key={`row2-original-${image.id}-${index}`} className="w-[300px] md:w-[400px] flex-shrink-0">
                  <div className="w-full h-full">
                    <div className="flex aspect-video items-center justify-center p-0 overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate set of images for seamless loop */}
            <div className="flex">
              {row2Images.map((image, index) => (
                <div key={`row2-duplicate-${image.id}-${index}`} className="w-[300px] md:w-[400px] flex-shrink-0">
                  <div className="w-full h-full">
                    <div className="flex aspect-video items-center justify-center p-0 overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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