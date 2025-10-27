"use client";

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card"; // Using Card for consistent styling

const GalleryCarouselSection = () => {
  const carouselImages = [
    { src: '/images/img1.png', alt: 'South Indian Designer Concert 1' },
    { src: '/images/img2.png', alt: 'South Indian Designer Concert 2' },
    { src: '/images/img3.png', alt: 'South Indian Designer Concert 3' },
    { src: '/images/img4.png', alt: 'South Indian Designer Concert 4' },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-3 md:px-8 lg:px-[80px] bg-background text-foreground">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Section: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-h2-mobile md:text-h2-desktop font-heading mb-4">
            South Indian Designer <br /> Concert
          </h2>
          <p className="text-text-medium font-body text-gray-600 max-w-md">
            Our Students participated and won first prize
          </p>
        </div>

        {/* Right Section: Carousel */}
        <div className="w-full max-w-lg mx-auto lg:mx-0">
          <Carousel className="w-full">
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="border-none shadow-lg">
                      <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
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
        </div>
      </div>
    </section>
  );
};

export default GalleryCarouselSection;