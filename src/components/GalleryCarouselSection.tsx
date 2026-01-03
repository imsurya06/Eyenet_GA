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
import Autoplay from "embla-carousel-autoplay";
import AnimateOnScroll from './AnimateOnScroll';

const GalleryCarouselSection = () => {
  const carouselImages = [
    { src: '/images/img1.png', alt: 'South Indian Designer Concert 1' },
    { src: '/images/img2.png', alt: 'South Indian Designer Concert 2' },
    { src: '/images/img3.png', alt: 'South Indian Designer Concert 3' },
    { src: '/images/img4.png', alt: 'South Indian Designer Concert 4' },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="pt-8 md:pt-10 pb-12 md:pb-16 lg:pb-20 px-3 md:px-8 lg:px-[80px] bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Carousel - now full width within max-w-7xl */}
        <AnimateOnScroll delay={300} className="w-full">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="border-none shadow-lg">
                      <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                        <img
                          src={image.src}
                          alt={image.alt}
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
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default GalleryCarouselSection;