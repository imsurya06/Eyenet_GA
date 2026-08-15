"use client";

import React, { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { useInfrastructureImages } from '@/context/InfrastructureImageContext';
import { Skeleton } from '@/components/ui/skeleton';
import { Maximize2, X, Sparkles } from 'lucide-react';
import { InfrastructureImage } from '@/data/infrastructureImages';

const InfrastructureGridSection = () => {
  const { images, loading } = useInfrastructureImages();
  const [selectedImage, setSelectedImage] = useState<InfrastructureImage | null>(null);

  const facilityImages = images.filter(
    (img) => img.category !== 'carousel' && img.category !== 'carousal'
  );

  return (
    <section id="facilities-section" className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-[80px] bg-gradient-to-b from-slate-50/50 via-white to-background text-foreground text-center">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll delay={100}>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/80 text-amber-900 border border-amber-200 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Campus Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 text-slate-900">
            Our <span className="text-primary font-heading">Facilities</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <p className="text-base md:text-lg font-body text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            A glimpse into our modern, hands-on, and inspiring learning environment at Eye-Net Academy.
          </p>
        </AnimateOnScroll>

        {loading ? (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="w-full h-64 rounded-2xl break-inside-avoid" />
            ))}
          </div>
        ) : facilityImages.length > 0 ? (
          /* Masonry Collage Grid - Uncropped & Dynamic */
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 text-left">
            {facilityImages.map((image, index) => (
              <AnimateOnScroll key={image.id || index} delay={200 + (index % 6) * 100}>
                <div
                  onClick={() => setSelectedImage(image)}
                  className="break-inside-avoid relative group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl border border-slate-100 transition-all duration-300 cursor-pointer"
                >
                  {/* Uncropped Full Image */}
                  <img
                    src={image.src}
                    alt={image.alt || image.title || 'Eye-Net Facility'}
                    className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />

                  {/* Hover Overlay with Title & Lightbox Action */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        {image.category && (
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/90 text-white text-[10px] font-bold uppercase tracking-wider mb-1.5">
                            {image.category}
                          </span>
                        )}
                        <h4 className="text-white font-heading font-semibold text-base md:text-lg leading-snug drop-shadow-xs">
                          {image.alt || image.title || 'Eye-Net Campus Facility'}
                        </h4>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shrink-0 ml-3 group-hover:bg-primary transition-colors duration-200">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        ) : (
          <div className="py-12 bg-white rounded-3xl border border-slate-100 text-slate-500 font-body text-base">
            No facilities images to display.
          </div>
        )}
      </div>

      {/* Lightbox Modal for Uncropped High-Res Viewing */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
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

            {/* Uncropped Lightbox Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt || selectedImage.title || 'Facility Image'}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />

            {/* Caption */}
            <div className="mt-4 text-center">
              <h3 className="text-white font-heading text-lg md:text-xl font-bold">
                {selectedImage.alt || selectedImage.title || 'Eye-Net Campus Facility'}
              </h3>
              {selectedImage.category && (
                <p className="text-slate-400 text-sm capitalize mt-1">
                  Category: {selectedImage.category}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InfrastructureGridSection;