"use client";

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import { useGalleryImages } from '@/context/GalleryImageContext';
import { Skeleton } from '@/components/ui/skeleton';

interface DynamicGalleryCarouselSectionProps {
  withButton?: boolean;
  hideHeading?: boolean;
}

const DynamicGalleryCarouselSection: React.FC<DynamicGalleryCarouselSectionProps> = ({ 
  withButton = false,
  hideHeading = false
}) => {
  const { images: galleryImages = [], loading } = useGalleryImages();
  const [selectedLightboxImage, setSelectedLightboxImage] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Fallback images if no gallery images uploaded yet
  const fallbackImages = [
    'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1542744094-3a317272018a?auto=format&fit=crop&q=80&w=1200',
  ];

  // Include all uploaded gallery images that have a valid src URL
  const validGalleryImages = galleryImages.filter(img => Boolean(img.src));

  // Custom ordering helper to group ALL matching dress outfits side-by-side
  const getOrderedSources = () => {
    if (validGalleryImages.length === 0) return fallbackImages;

    const redGowns: string[] = [];
    const rainbowSkirts: string[] = [];
    const greenBlouses: string[] = [];
    const lehengasAndDresses: string[] = [];
    const remainingPhotos: string[] = [];

    validGalleryImages.forEach(img => {
      const text = `${img.alt || ''} ${img.category || ''} ${img.src || ''}`.toLowerCase();

      // 1. Red Gown photos (matching 'salwar', 'stitching', 'pattern', 'red', 'gown')
      if (text.includes('salwar') || text.includes('pattern') || text.includes('red') || text.includes('gown') || text.includes('stitching')) {
        redGowns.push(img.src);
      }
      // 2. Rainbow Skirt photos (matching 'rainbow', 'skirt', 'runway', 'exhibition', 'annual')
      else if (text.includes('rainbow') || text.includes('skirt') || text.includes('runway') || text.includes('exhibition') || text.includes('annual')) {
        rainbowSkirts.push(img.src);
      }
      // 3. Green Blouse photos (matching 'aari', 'green', 'blouse', 'computer', 'lab', 'workshop')
      else if (text.includes('aari') || text.includes('green') || text.includes('blouse') || text.includes('computer') || text.includes('lab') || text.includes('workshop')) {
        greenBlouses.push(img.src);
      }
      // 4. Pink/White Lehengas & Printed Dresses (matching 'illustration', 'sketching', 'convocation', 'ceremony', 'painting')
      else if (text.includes('illustration') || text.includes('sketching') || text.includes('convocation') || text.includes('ceremony') || text.includes('painting') || text.includes('lehenga')) {
        lehengasAndDresses.push(img.src);
      }
      // 5. Remaining photos fallback
      else {
        remainingPhotos.push(img.src);
      }
    });

    // Build perfect paired outfit sequence:
    // [Red Gowns together, Rainbow Skirts together, Green Blouses together, Lehengas together, Others]
    const combined = [
      ...redGowns,
      ...rainbowSkirts,
      ...greenBlouses,
      ...lehengasAndDresses,
      ...remainingPhotos,
    ];

    // Ensure all 8 uploaded photos are included without duplicates
    const uniqueSequence: string[] = [];
    combined.forEach(src => {
      if (!uniqueSequence.includes(src)) {
        uniqueSequence.push(src);
      }
    });

    validGalleryImages.forEach(img => {
      if (!uniqueSequence.includes(img.src)) {
        uniqueSequence.push(img.src);
      }
    });

    return uniqueSequence;
  };

  const displayImageSources = getOrderedSources();

  // Duplicate displayImageSources array to ensure a rich, endless loop showing all uploaded images
  let trackSources = [...displayImageSources];
  while (trackSources.length < 16) {
    trackSources = [...trackSources, ...displayImageSources];
  }

  const handleInteractionStart = () => {
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const handleInteractionEnd = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 500);
  };

  const renderVerticalCard = (src: string, indexKey: string) => (
    <div
      key={indexKey}
      onClick={() => setSelectedLightboxImage(src)}
      className="group relative w-[240px] sm:w-[280px] md:w-[320px] h-[340px] sm:h-[400px] md:h-[460px] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex-shrink-0"
    >
      <img
        src={src}
        alt="Creative Work"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span className="text-white text-xs font-semibold tracking-wider uppercase font-body bg-slate-900/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
          View Image
        </span>
      </div>
    </div>
  );

  return (
    <section className={`bg-background text-foreground overflow-hidden ${hideHeading ? 'py-4 md:py-6' : 'py-12 md:py-16'}`}>
      <style>{`
        @keyframes verticalCreativeWorksMarquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-creative-vertical {
          animation: verticalCreativeWorksMarquee 50s linear infinite;
          will-change: transform;
        }
        .animate-creative-vertical.paused {
          animation-play-state: paused !important;
        }
      `}</style>
      {!hideHeading && (
        <div className="px-4 md:px-8 lg:px-[80px] mb-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <AnimateOnScroll delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3">
                  Our <span className="text-primary font-heading italic">creative works</span>
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <p className="text-base font-body text-gray-600 max-w-md">
                  A collection of projects, events, and campus highlights.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <div className="px-4 md:px-8 lg:px-[80px]">
          <Skeleton className="w-full h-80 rounded-3xl" />
        </div>
      ) : (
        <div className="relative w-full py-2 overflow-hidden select-none">
          <div
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
            onMouseDown={handleInteractionStart}
            onMouseUp={handleInteractionEnd}
            onMouseLeave={handleInteractionEnd}
            onWheel={handleInteractionStart}
            className="w-full overflow-hidden flex"
          >
            <div className={`flex w-max animate-creative-vertical ease-linear ${isPaused ? 'paused' : ''}`}>
              {/* Set 1 */}
              <div className="flex shrink-0 space-x-4 sm:space-x-5 md:space-x-6 pr-4 sm:pr-5 md:pr-6">
                {trackSources.map((src, idx) => renderVerticalCard(src, `vset1-${idx}`))}
              </div>

              {/* Set 2 (100% Endless Infinite Loop) */}
              <div className="flex shrink-0 space-x-4 sm:space-x-5 md:space-x-6 pr-4 sm:pr-5 md:pr-6">
                {trackSources.map((src, idx) => renderVerticalCard(src, `vset2-${idx}`))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Gallery Button */}
      {withButton && (
        <div className="flex justify-center mt-8 md:mt-10">
          <AnimateOnScroll delay={300}>
            <Button asChild className="px-6 py-3 text-text-regular bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/gallery">
                View Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      )}

      {/* Lightbox Modal for Gallery Full View */}
      {selectedLightboxImage && (
        <div
          className="fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedLightboxImage(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedLightboxImage(null)}
              className="absolute -top-12 right-0 md:top-2 md:-right-12 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedLightboxImage}
              alt="Creative Work Full View"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default DynamicGalleryCarouselSection;