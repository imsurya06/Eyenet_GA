"use client";

import React, { useState } from 'react';
import { useInfrastructureImages } from '@/context/InfrastructureImageContext';
import { Skeleton } from '@/components/ui/skeleton';
import { Maximize2, X } from 'lucide-react';
import { InfrastructureImage } from '@/data/infrastructureImages';

const InfrastructureGridSection = () => {
  const { images, loading } = useInfrastructureImages();
  const [selectedImage, setSelectedImage] = useState<InfrastructureImage | null>(null);

  // Filter images for ticker (all non-carousel images)
  const tickerImages = images.filter(
    (img) => img.category !== 'carousel' && img.category !== 'carousal' && Boolean(img.src)
  );

  // Repeat items 12 times so manual scrolling & auto ticker loop endlessly without hitting an end
  const duplicatedTickerImages =
    tickerImages.length > 0
      ? Array(12).fill(tickerImages).flat()
      : [];

  return (
    <section id="facilities-section" className="py-6 md:py-10 pb-16 md:pb-24 bg-background text-foreground overflow-hidden">
      <div className="w-full">
        {loading ? (
          <div className="px-4 md:px-8 max-w-7xl mx-auto flex gap-6 overflow-hidden">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="w-[450px] md:w-[680px] h-[300px] md:h-[460px] rounded-3xl shrink-0" />
            ))}
          </div>
        ) : tickerImages.length > 0 ? (
          /* Continuous Auto-Animated Marquee Ticker with Natural Original Width & Manual Scroll */
          <div className="relative w-full overflow-x-auto scrollbar-none">
            <div className="flex w-max animate-scroll hover:[animation-play-state:paused] ease-linear py-2">
              {duplicatedTickerImages.map((image, index) => (
                <div
                  key={`ticker-${image.id || index}-${index}`}
                  className="h-[300px] sm:h-[380px] md:h-[460px] lg:h-[500px] w-auto flex-shrink-0 px-3 md:px-4"
                >
                  <div
                    onClick={() => setSelectedImage(image)}
                    className="relative h-full w-auto group overflow-hidden rounded-2xl md:rounded-3xl bg-white shadow-xl hover:shadow-2xl border border-slate-100 transition-all duration-300 cursor-pointer flex items-center justify-center"
                  >
                    {/* Natural Width Uncropped HD Image */}
                    <img
                      src={image.src}
                      alt={image.alt || image.title || 'Eye-Net Infrastructure Ticker'}
                      className="h-full w-auto object-contain block rounded-2xl md:rounded-3xl transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />

                    {/* Subtle Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6 md:p-8 rounded-2xl md:rounded-3xl">
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
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-8 text-slate-400 font-body text-sm">
            No ticker images added yet. Select category &ldquo;Ticker&rdquo; in Sanity Studio to display images.
          </div>
        )}
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