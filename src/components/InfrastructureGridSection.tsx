"use client";

import React, { useState, useRef } from 'react';
import { useInfrastructureImages } from '@/context/InfrastructureImageContext';
import { Skeleton } from '@/components/ui/skeleton';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { InfrastructureImage } from '@/data/infrastructureImages';

const InfrastructureGridSection = () => {
  const { images, loading } = useInfrastructureImages();
  const [selectedImage, setSelectedImage] = useState<InfrastructureImage | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter images for ticker (all non-carousel images)
  const tickerImages = images.filter(
    (img) => img.category !== 'carousel' && img.category !== 'carousal' && Boolean(img.src)
  );

  // Duplicate items to ensure smooth continuous volume
  const duplicatedTickerImages =
    tickerImages.length > 0
      ? Array(4).fill(tickerImages).flat()
      : [];

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -650 : 650;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="facilities-section" className="py-6 md:py-10 pb-16 md:pb-24 bg-background text-foreground overflow-hidden">
      {/* Keyframe animation for ultra-slow, smooth, 100% infinite continuous marquee loop */}
      <style>{`
        @keyframes infiniteSlowMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slow-ticker {
          animation: infiniteSlowMarquee 90s linear infinite;
        }
        .animate-slow-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full">
        {loading ? (
          <div className="px-4 md:px-8 max-w-7xl mx-auto flex gap-6 overflow-hidden">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="w-[450px] md:w-[680px] h-[300px] md:h-[460px] rounded-3xl shrink-0" />
            ))}
          </div>
        ) : tickerImages.length > 0 ? (
          /* Ultra-Slow Infinite Auto-Scroll Ticker with Manual Forwards & Backwards Controls */
          <div className="relative w-full group py-2">
            {/* Forwards & Backwards Manual Control Buttons */}
            <button
              onClick={() => handleManualScroll('left')}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-800 border border-slate-200/80 shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Scroll backward"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => handleManualScroll('right')}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-800 border border-slate-200/80 shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Scroll forward"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Scrollable Container with Infinite 90s Slow Marquee */}
            <div
              ref={scrollContainerRef}
              className="w-full overflow-x-auto scrollbar-none scroll-smooth flex"
            >
              <div className="flex w-max animate-slow-ticker ease-linear">
                {/* Set 1 */}
                <div className="flex shrink-0 space-x-6 pr-6">
                  {duplicatedTickerImages.map((image, index) => (
                    <div
                      key={`set1-${image.id || index}-${index}`}
                      className="h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px] w-auto flex-shrink-0"
                    >
                      <div
                        onClick={() => setSelectedImage(image)}
                        className="relative h-full w-auto group/item overflow-hidden rounded-2xl md:rounded-3xl bg-white shadow-xl hover:shadow-2xl border border-slate-100 transition-all duration-300 cursor-pointer flex items-center justify-center"
                      >
                        {/* Natural Original Width Uncropped HD Image */}
                        <img
                          src={image.src}
                          alt={image.alt || image.title || 'Eye-Net Infrastructure Ticker'}
                          className="h-full w-auto object-contain block rounded-2xl md:rounded-3xl transition-transform duration-500 group-hover/item:scale-[1.02]"
                          loading="lazy"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6 md:p-8 rounded-2xl md:rounded-3xl">
                          <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-bold uppercase tracking-wider mb-2">
                              Infrastructure Ticker
                            </span>
                            <h4 className="text-white font-heading font-bold text-lg md:text-2xl leading-snug drop-shadow-sm">
                              {image.alt || image.title || 'Eye-Net Campus Facility'}
                            </h4>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shrink-0 ml-4 group-hover/item:bg-primary transition-colors duration-200">
                            <Maximize2 className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Set 2 (Duplicate for 100% Seamless Infinite Loop) */}
                <div className="flex shrink-0 space-x-6 pr-6">
                  {duplicatedTickerImages.map((image, index) => (
                    <div
                      key={`set2-${image.id || index}-${index}`}
                      className="h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px] w-auto flex-shrink-0"
                    >
                      <div
                        onClick={() => setSelectedImage(image)}
                        className="relative h-full w-auto group/item overflow-hidden rounded-2xl md:rounded-3xl bg-white shadow-xl hover:shadow-2xl border border-slate-100 transition-all duration-300 cursor-pointer flex items-center justify-center"
                      >
                        {/* Natural Original Width Uncropped HD Image */}
                        <img
                          src={image.src}
                          alt={image.alt || image.title || 'Eye-Net Infrastructure Ticker'}
                          className="h-full w-auto object-contain block rounded-2xl md:rounded-3xl transition-transform duration-500 group-hover/item:scale-[1.02]"
                          loading="lazy"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6 md:p-8 rounded-2xl md:rounded-3xl">
                          <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-bold uppercase tracking-wider mb-2">
                              Infrastructure Ticker
                            </span>
                            <h4 className="text-white font-heading font-bold text-lg md:text-2xl leading-snug drop-shadow-sm">
                              {image.alt || image.title || 'Eye-Net Campus Facility'}
                            </h4>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shrink-0 ml-4 group-hover/item:bg-primary transition-colors duration-200">
                            <Maximize2 className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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