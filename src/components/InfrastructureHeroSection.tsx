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
import { useInfrastructureImages } from '@/context/InfrastructureImageContext';

const InfrastructureHeroSection = () => {
  const { images, loading } = useInfrastructureImages();
  const carouselImages = images.filter(
    (img) => img.category === 'carousel' || img.category === 'carousal'
  );

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="pt-4 md:pt-6 lg:pt-8 pb-4 md:pb-6 px-3 md:px-8 lg:px-[80px] bg-background text-foreground text-center">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll isHero={true} delay={100}>
          <h1 className="text-h1-mobile md:text-h1-desktop font-heading mb-2">
            Infrastructure
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll isHero={true} delay={200}>
          <p className="text-text-medium font-body text-gray-600 mb-4 md:mb-6 max-w-2xl mx-auto">
            We have well enough infrastructure to enhance the life of students.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll isHero={true} delay={300} className="w-full max-h-[min(520px,calc(100dvh-200px))] flex items-center justify-center">
          {loading ? (
            <Skeleton className="w-full aspect-[2.2/1] rounded-lg" />
          ) : carouselImages.length > 0 ? (
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-h-[min(520px,calc(100dvh-200px))]"
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={image.id || index}>
                    <div className="p-1">
                      <Card className="border-none shadow-lg">
                        <CardContent className="flex aspect-[2.2/1] max-h-[min(480px,calc(100dvh-220px))] items-center justify-center p-0 overflow-hidden rounded-lg">
                          <img
                            src={image.src}
                            alt={image.alt || 'Infrastructure Carousel Image'}
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
            <div className="flex aspect-[2.2/1] items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 text-gray-500">
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

export default InfrastructureHeroSection;