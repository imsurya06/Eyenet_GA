"use client";

import React, { useState, useRef } from 'react';
import { useInfrastructureImages } from '@/context/InfrastructureImageContext';
import { Skeleton } from '@/components/ui/skeleton';
import { X } from 'lucide-react';
import { InfrastructureImage } from '@/data/infrastructureImages';

const InfrastructureGridSection = () => {
  const { images, loading } = useInfrastructureImages();
  const [selectedImage, setSelectedImage] = useState<InfrastructureImage | null>(null);

  const [isPaused, setIsPaused] = useState<boolean>(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Filter images for ticker (all non-carousel images)
  const tickerImages = images.filter(
    (img) => img.category !== 'carousel' && img.category !== 'carousal' && Boolean(img.src)
  );

  // Duplicate items to ensure smooth continuous marquee loop volume
  const duplicatedTickerImages =
    tickerImages.length > 0
      ? Array(4).fill(tickerImages).flat()
      : [];

  const handleInteractionStart = () => {
    setIsPaused(true);
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const handleInteractionEnd = () => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    // Resume marquee animation 500ms after user releases touch/mouse/drag
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 500);
  };

  return (
    <section id="facilities-section" className="py-6 md:py-10 pb-16 md:pb-24 bg-background text-foreground overflow-hidden">
      {/* Hardware-Accelerated 60fps Continuous Marquee CSS Keyframes (Medium Speed: 35s) */}
      <style>{`
        @keyframes marqueeMediumSpeed {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-medium-marquee {
          animation: marqueeMediumSpeed 12s linear infinite;
          will-change: transform;
        }
        .animate-medium-marquee.paused {
          animation-play-state: paused !important;
        }
      `}</style>

      <div className="w-full px-4 md:px-8 lg:px-[80px]">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex gap-6 overflow-hidden">
              {[1, 2].map((i) => (
                <Skeleton key={i} className="w-[85%] md:w-[65%] h-[320px] md:h-[480px] rounded-3xl shrink-0" />
              ))}
            </div>
          ) : tickerImages.length > 0 ? (
            /* Smooth Medium Speed Ticker with Native Touch/Mouse Interaction & 500ms Auto-Resume */
            <div className="relative w-full py-2 overflow-hidden">
              <div
                onTouchStart={handleInteractionStart}
                onTouchEnd={handleInteractionEnd}
                onMouseDown={handleInteractionStart}
                onMouseUp={handleInteractionEnd}
                onMouseLeave={handleInteractionEnd}
                onWheel={handleInteractionStart}
                className="w-full overflow-x-auto scrollbar-none flex"
              >
                <div className={`flex w-max animate-medium-marquee ease-linear ${isPaused ? 'paused' : ''}`}>
                  {/* Set 1 */}
                  <div className="flex shrink-0 space-x-6 pr-6">
                    {duplicatedTickerImages.map((image, index) => (
                      <div
                        key={`set1-${image.id || index}-${index}`}
                        className="h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px] w-auto flex-shrink-0"
                      >
                        <div
                          onClick={() => setSelectedImage(image)}
                          className="relative h-full w-auto overflow-hidden rounded-2xl md:rounded-3xl bg-white shadow-xl hover:shadow-2xl border border-slate-100 transition-all duration-300 cursor-pointer flex items-center justify-center"
                        >
                          <img
                            src={image.src}
                            alt={image.alt || image.title || 'Eye-Net Infrastructure Ticker'}
                            className="h-full w-auto object-contain block rounded-2xl md:rounded-3xl transition-transform duration-500 hover:scale-[1.02]"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Set 2 (100% Seamless Infinite Loop) */}
                  <div className="flex shrink-0 space-x-6 pr-6">
                    {duplicatedTickerImages.map((image, index) => (
                      <div
                        key={`set2-${image.id || index}-${index}`}
                        className="h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px] w-auto flex-shrink-0"
                      >
                        <div
                          onClick={() => setSelectedImage(image)}
                          className="relative h-full w-auto overflow-hidden rounded-2xl md:rounded-3xl bg-white shadow-xl hover:shadow-2xl border border-slate-100 transition-all duration-300 cursor-pointer flex items-center justify-center"
                        >
                          <img
                            src={image.src}
                            alt={image.alt || image.title || 'Eye-Net Infrastructure Ticker'}
                            className="h-full w-auto object-contain block rounded-2xl md:rounded-3xl transition-transform duration-500 hover:scale-[1.02]"
                            loading="lazy"
                          />
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
              className="absolute -top-12 right-0 md:top-2 md:-right-12 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt || selectedImage.title || 'Facility Image'}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default InfrastructureGridSection;