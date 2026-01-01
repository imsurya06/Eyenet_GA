"use client";

import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { useGalleryImages } from '@/context/GalleryImageContext'; // Import useGalleryImages

const GalleryGridSection = () => {
  const { galleryImages } = useGalleryImages(); // Use the context
  // Filter for fashion category images, as these were the original images in this section
  const fashionImages = galleryImages.filter(image => image.category === 'fashion');

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="py-12 md:py-16 lg:py-20 px-3 md:px-8 lg:px-[80px] bg-background text-foreground text-center">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll delay={100}>
          <h2 className="text-h2-mobile md:text-h2-desktop font-heading mb-4">
            Our Latest Works
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="text-text-medium font-body text-gray-600 mb-16 max-w-2xl mx-auto">
            Explore the diverse and innovative projects from our talented students.
          </p>
        </AnimateOnScroll>

        {fashionImages.length > 0 ? (
          <AnimateOnScroll delay={300} className="w-full">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              opts={{
                loop: true,
                // Responsive options to show multiple slides
                breakpoints: {
                  "(min-width: 640px)": { slidesToScroll: 2, slidesPerView: 2 }, // sm
                  "(min-width: 1024px)": { slidesToScroll: 3, slidesPerView: 3 }, // lg
                },
              }}
            >
              <CarouselContent className="-ml-4"> {/* Adjust margin for gap */}
                {fashionImages.map((image, index) => (
                  <CarouselItem key={image.id} className="pl-4 md:basis-1/2 lg:basis-1/3"> {/* Adjust padding and basis for responsive items */}
                    <div className="p-1">
                      <Card className="border-none shadow-lg">
                        <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden rounded-lg">
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
        ) : (
          <AnimateOnScroll delay={300}>
            <p className="text-text-medium font-body text-gray-600 text-center">
              No fashion images to display at the moment.
            </p>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
};

export default GalleryGridSection;