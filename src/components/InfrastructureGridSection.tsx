"use client";

import React, { useState } from 'react';
import { useInfrastructureImages } from '@/context/InfrastructureImageContext';
import { Skeleton } from '@/components/ui/skeleton';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { InfrastructureImage } from '@/data/infrastructureImages';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const InfrastructureGridSection = () => {
  const { images, loading } = useInfrastructureImages();
  const [selectedImage, setSelectedImage] = useState<InfrastructureImage | null>(null);

  // Filter images for ticker (all non-carousel images)
  const tickerImages = images.filter(
    (img) => img.category !== 'carousel' && img.category !== 'carousal' && Boolean(img.src)
  );

  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  );

  return (
    <section id="facilities-section" className="py-6 md:py-10 pb-16 md:pb-24 bg-background text-foreground overflow-hidden">
      <div className="w-full px-4 md:px-8 lg:px-[80px]">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex gap-6 overflow-hidden">
              {[1, 2].map((i) => (
                <Skeleton key={i} className="w-[85%] md:w-[60%] h-[320px] md:h-[480px] rounded-3xl shrink-0" />
              ))}
            </div>
          ) : tickerImages.length > 0 ? (
            /* Auto-Scrolling & Manually Scrollable/Swipeable Carousel Ticker (+140% Size) */
            <div className="relative w-full">
              <Carousel
                plugins={[plugin.current]}
                className="w-full"
                opts={{
                  loop: true,
                  align: "center",
                }}
              >
                <CarouselContent className="-ml-4 md:-ml-6">
                  {tickerImages.map((image, index) => (
                    <CarouselItem
                      key={`ticker-${image.id || index}-${index}`}
                      className="pl-4 md:pl-6 basis-[90%] sm:basis-[75%] md:basis-[60%] lg:basis-[52%]"
                    >
                      <div
                        onClick={() => setSelectedImage(image)}
                        className="relative w-full h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px] group overflow-hidden rounded-2xl md:rounded-3xl bg-white shadow-xl hover:shadow-2xl border border-slate-100 transition-all duration-300 cursor-pointer"
                      >
                        {/* 140% HD Image */}
                        <img
                          src={image.src}
                          alt={image.alt || image.title || 'Eye-Net Infrastructure Ticker'}
                          className="w-full h-full object-cover object-center rounded-2xl md:rounded-3xl transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          loading="lazy"
                        />

                        {/* Hover Overlay with Title & Lightbox Action */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6 md:p-8">
                          <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-bold uppercase tracking-wider mb-2">
                              Infrastructure Ticker
                            </span>
                            <h4 className="text-white font-heading font-bold text-lg md:text-2xl leading-snug drop-shadow-sm">
                              {image.alt || image.title || 'Eye-Net Campus Facility'}
                            </h4>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shrink-0 ml-4 group-hover:bg-primary transition-colors duration-200">
                            <Maximize2 className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Manual Navigation Controls */}
                <CarouselPrevious className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 border border-slate-200 shadow-xl w-12 h-12" />
                <CarouselNext className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 border border-slate-200 shadow-xl w-12 h-12" />
              </Carousel>
            </div>
          ) : (
            <div className="text-center py-8 text-slate-400 font-body text-sm">
              No ticker images added yet. Select category &ldquo;Ticker&rdquo; in Sanity Studio to display images.
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal for Full View */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 md:top-2 md:-right-12 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt || selectedImage.title || 'Facility Image'}
              className="max-w-full max-h-[82vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />

            {/* Caption */}
            <div className="mt-4 text-center">
              <h3 className="text-white font-heading text-lg md:text-xl font-bold">
                {selectedImage.alt || selectedImage.title || 'Eye-Net Campus Facility'}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InfrastructureGridSection;