"use client";

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
    <section className="pt-2 sm:pt-4 pb-4 md:pb-6 px-3 sm:px-6 md:px-8 lg:px-[80px] bg-background text-foreground text-center">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll isHero={true} delay={100}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal text-slate-900 mb-2">
            Infrastructure
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll isHero={true} delay={200}>
          <p className="text-sm sm:text-base font-body text-slate-600 mb-4 md:mb-6 max-w-2xl mx-auto">
            We have well enough infrastructure to enhance the life of students.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll isHero={true} delay={300} className="w-full">
          {loading ? (
            <Skeleton className="w-full aspect-[16/9] sm:aspect-[2/1] rounded-2xl" />
          ) : carouselImages.length > 0 ? (
            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl border border-slate-200/80">
              <Carousel
                plugins={[plugin.current]}
                className="w-full"
                opts={{
                  loop: true,
                }}
              >
                <CarouselContent className="-ml-0">
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={image.id || index} className="pl-0 w-full basis-full">
                      <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] md:aspect-[2.2/1] overflow-hidden rounded-2xl">
                        {/* 100% Full-bleed Image (ZERO side bars, ZERO dark boxes) */}
                        <img
                          src={image.src}
                          alt={image.alt || 'Infrastructure Carousel Image'}
                          className="w-full h-full object-cover object-center rounded-2xl"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 bg-slate-900/80 hover:bg-slate-900 text-white border-white/20 shadow-md" />
                <CarouselNext className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 bg-slate-900/80 hover:bg-slate-900 text-white border-white/20 shadow-md" />
              </Carousel>
            </div>
          ) : (
            <div className="flex h-[320px] items-center justify-center border-2 border-dashed border-slate-300 rounded-2xl p-8 text-slate-500">
              <p className="font-body text-sm">
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