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
    <section id="facilities-section" className="py-4 md:py-8 pb-16 md:pb-24 px-4 md:px-8 lg:px-[80px] bg-background text-foreground text-center">
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[1, 2].map((i) => (
              <Skeleton key={i} className="w-full h-80 rounded-3xl" />
            ))}
          </div>
        ) : facilityImages.length > 0 ? (
          /* Dynamic Prominent Collage Grid - Larger Size & Uncropped */
          <div
            className={
              facilityImages.length === 1
                ? "max-w-5xl mx-auto flex justify-center"
                : "columns-1 md:columns-2 gap-8 lg:gap-10 space-y-8 max-w-6xl mx-auto text-left"
            }
          >
            {facilityImages.map((image, index) => (
              <AnimateOnScroll key={image.id || index} delay={150 + (index % 4) * 100}>
                <div
                  onClick={() => setSelectedImage(image)}
                  className="break-inside-avoid relative group overflow-hidden rounded-2xl md:rounded-3xl bg-white shadow-lg hover:shadow-2xl border border-slate-100 transition-all duration-300 cursor-pointer w-full"
                >
                  {/* High-Resolution Uncropped Image */}
                  <img
                    src={image.src}
                    alt={image.alt || image.title || 'Eye-Net Facility'}
                    className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />

                  {/* Hover Overlay with Title & Lightbox Action */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        {image.category && (
                          <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-bold uppercase tracking-wider mb-2">
                            {image.category}
                          </span>
                        )}
                        <h4 className="text-white font-heading font-bold text-lg md:text-2xl leading-snug drop-shadow-xs">
                          {image.alt || image.title || 'Eye-Net Campus Facility'}
                        </h4>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shrink-0 ml-4 group-hover:bg-primary transition-colors duration-200">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        ) : (
          <div className="py-8 text-slate-400 font-body text-sm">
            No additional facility images uploaded yet.
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