"use client";

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Autoplay from "embla-carousel-autoplay";
import AnimateOnScroll from './AnimateOnScroll';
import { useGalleryImages } from '@/context/GalleryImageContext';

const GalleryCarouselSection = () => {
  const { images, loading } = useGalleryImages();
  const carouselImages = images.filter((img) => img.category === 'carousel');

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="pt-8 md:pt-10 pb-12 md:pb-16 lg:pb-20 px-3 md:px-8 lg:px-[80px] bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll delay={300} className="w-full">
          {loading ? (
            <Skeleton className="w-full aspect-video rounded-lg" />
          ) : carouselImages.length > 0 ? (
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={image.id || index}>
                    <div className="p-1">
                      <Card className="border-none shadow-lg">
                        <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                          <img
                            src={image.src}
                            alt={image.alt || 'Gallery Carousel Image'}
                            className="w-full h-full object-cover object-top"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
            </Carousel>
          ) : (
            <div className="flex aspect-video items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 text-gray-500">
              <p className="font-body text-text-medium">
                No carousel images added yet. Add images with category &ldquo;Carousel&rdquo; in Sanity Studio.
              </p>
            </div>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default GalleryCarouselSection;