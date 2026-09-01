"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import { useGalleryImages } from '@/context/GalleryImageContext';
import { Skeleton } from '@/components/ui/skeleton';
import { sanityClient, urlFor } from '@/lib/sanityClient';

interface DynamicGalleryCarouselSectionProps {
  withButton?: boolean;
  hideHeading?: boolean;
  variant?: '2d' | '3d';
}

const DynamicGalleryCarouselSection: React.FC<DynamicGalleryCarouselSectionProps> = ({ 
  withButton = false,
  hideHeading = false,
  variant = '2d'
}) => {
  const { images: galleryImages = [], loading: contextLoading } = useGalleryImages();
  const [aboutSliderImages, setAboutSliderImages] = useState<string[]>([]);
  const [loadingAboutImages, setLoadingAboutImages] = useState(false);
  const [selectedLightboxImage, setSelectedLightboxImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Fallback images if no images uploaded yet
  const fallbackImages = [
    'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1542744094-3a317272018a?auto=format&fit=crop&q=80&w=1200',
  ];

  // Dynamically fetch custom "About Page 3D Slider" images from Sanity CMS Studio
  useEffect(() => {
    if (variant !== '3d') return;

    const query = '*[_type == "aboutSliderImage" || (_type == "galleryImage" && category == "about_hero_slider")] | order(order asc, _createdAt desc)';

    const fetchAboutSliderImages = async () => {
      setLoadingAboutImages(true);
      try {
        const data = await sanityClient.fetch(query);
        if (data && data.length > 0) {
          const urls: string[] = data.map((doc: any) => {
            if (typeof doc.image === 'string' && doc.image) return doc.image;
            if (doc.imageUrl && typeof doc.imageUrl === 'string') return doc.imageUrl;
            if (doc.image && typeof doc.image === 'object' && doc.image.asset) {
              try {
                return urlFor(doc.image).url();
              } catch {
                return '';
              }
            }
            return '';
          }).filter(Boolean);

          if (urls.length > 0) {
            setAboutSliderImages(urls);
          }
        }
      } catch (err) {
        console.warn('Could not fetch custom aboutSliderImage documents:', err);
      } finally {
        setLoadingAboutImages(false);
      }
    };

    fetchAboutSliderImages();
  }, [variant]);

  // Valid general gallery images
  const validGalleryImages = galleryImages.filter(img => Boolean(img.src));

  const getOrderedSources = () => {
    // If custom About Slider images uploaded in Sanity, use them!
    if (aboutSliderImages.length > 0) {
      return aboutSliderImages;
    }

    if (validGalleryImages.length === 0) return fallbackImages;

    const redGowns: string[] = [];
    const rainbowSkirts: string[] = [];
    const greenBlouses: string[] = [];
    const lehengasAndDresses: string[] = [];
    const remainingPhotos: string[] = [];

    validGalleryImages.forEach(img => {
      const text = `${img.alt || ''} ${img.category || ''} ${img.src || ''}`.toLowerCase();
      if (text.includes('salwar') || text.includes('pattern') || text.includes('red') || text.includes('gown') || text.includes('stitching')) {
        redGowns.push(img.src);
      } else if (text.includes('rainbow') || text.includes('skirt') || text.includes('runway') || text.includes('exhibition') || text.includes('annual')) {
        rainbowSkirts.push(img.src);
      } else if (text.includes('aari') || text.includes('green') || text.includes('blouse') || text.includes('computer') || text.includes('lab') || text.includes('workshop')) {
        greenBlouses.push(img.src);
      } else if (text.includes('illustration') || text.includes('sketching') || text.includes('convocation') || text.includes('ceremony') || text.includes('painting') || text.includes('lehenga')) {
        lehengasAndDresses.push(img.src);
      } else {
        remainingPhotos.push(img.src);
      }
    });

    const combined = [
      ...redGowns,
      ...rainbowSkirts,
      ...greenBlouses,
      ...lehengasAndDresses,
      ...remainingPhotos,
    ];

    const uniqueSequence: string[] = [];
    combined.forEach(src => {
      if (!uniqueSequence.includes(src)) uniqueSequence.push(src);
    });
    validGalleryImages.forEach(img => {
      if (!uniqueSequence.includes(img.src)) uniqueSequence.push(img.src);
    });

    return uniqueSequence;
  };

  const displayImageSources = getOrderedSources();
  const totalCards = displayImageSources.length;

  // Continuous auto-loop for 3D perspective carousel (pauses on hover)
  useEffect(() => {
    if (variant !== '3d' || totalCards === 0 || isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalCards);
    }, 2200);
    return () => clearInterval(timer);
  }, [variant, totalCards, isPaused]);

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

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleInteractionStart();
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
    handleInteractionEnd();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleInteractionStart();
    setActiveIndex((prev) => (prev + 1) % totalCards);
    handleInteractionEnd();
  };

  // Render 3D Perspective Stage Carousel (Pauses on Hover)
  const render3DCarousel = () => (
    <div
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      className="relative w-full overflow-hidden py-1 sm:py-2 select-none"
    >
      <div className="relative w-full h-[220px] xs:h-[270px] sm:h-[340px] md:h-[410px] lg:h-[460px] flex items-center justify-center [perspective:1400px] [perspective-origin:50%_50%]">
        {/* Previous Navigation Arrow Icon */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 md:left-10 lg:left-14 z-[60] w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white text-slate-800 hover:text-primary shadow-xl border border-slate-200/90 backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5 text-slate-700 group-hover:text-primary" />
        </button>

        {/* Next Navigation Arrow Icon */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 md:right-10 lg:right-14 z-[60] w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white text-slate-800 hover:text-primary shadow-xl border border-slate-200/90 backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5 text-slate-700 group-hover:text-primary" />
        </button>

        {displayImageSources.map((src, idx) => {
          let rawOffset = idx - activeIndex;
          if (rawOffset > totalCards / 2) rawOffset -= totalCards;
          if (rawOffset < -totalCards / 2) rawOffset += totalCards;

          const maxOffset = typeof window !== 'undefined' && window.innerWidth < 640 ? 2 : 4;
          const isVisible = Math.abs(rawOffset) <= maxOffset;
          if (!isVisible) return null;

          let rotateY = 0;
          let translateZ = 0;
          let translateX = 0;
          let scale = 1;
          let zIndex = 30;
          let opacity = 1;

          const isSmallMobile = typeof window !== 'undefined' && window.innerWidth < 640;

          if (rawOffset === 0) {
            rotateY = 0;
            translateZ = 0;
            translateX = 0;
            scale = isSmallMobile ? 1.04 : 1.06;
            zIndex = 50;
            opacity = 1;
          } else if (rawOffset === 1) {
            rotateY = isSmallMobile ? -16 : -24;
            translateZ = isSmallMobile ? -50 : -90;
            translateX = isSmallMobile ? 160 : 430;
            scale = isSmallMobile ? 0.86 : 0.92;
            zIndex = 40;
            opacity = isSmallMobile ? 0.85 : 0.95;
          } else if (rawOffset === 2) {
            rotateY = isSmallMobile ? -30 : -38;
            translateZ = isSmallMobile ? -110 : -180;
            translateX = isSmallMobile ? 290 : 840;
            scale = isSmallMobile ? 0.72 : 0.78;
            zIndex = 30;
            opacity = isSmallMobile ? 0.65 : 0.8;
          } else if (rawOffset === 3) {
            rotateY = -52;
            translateZ = -280;
            translateX = 1240;
            scale = 0.65;
            zIndex = 20;
            opacity = 0.65;
          } else if (rawOffset === 4) {
            rotateY = -64;
            translateZ = -380;
            translateX = 1620;
            scale = 0.52;
            zIndex = 10;
            opacity = 0.45;
          } else if (rawOffset === -1) {
            rotateY = isSmallMobile ? 16 : 24;
            translateZ = isSmallMobile ? -50 : -90;
            translateX = isSmallMobile ? -160 : -430;
            scale = isSmallMobile ? 0.86 : 0.92;
            zIndex = 40;
            opacity = isSmallMobile ? 0.85 : 0.95;
          } else if (rawOffset === -2) {
            rotateY = isSmallMobile ? 30 : 38;
            translateZ = isSmallMobile ? -110 : -180;
            translateX = isSmallMobile ? -290 : -840;
            scale = isSmallMobile ? 0.72 : 0.78;
            zIndex = 30;
            opacity = isSmallMobile ? 0.65 : 0.8;
          } else if (rawOffset === -3) {
            rotateY = 52;
            translateZ = -280;
            translateX = -1240;
            scale = 0.65;
            zIndex = 20;
            opacity = 0.65;
          } else if (rawOffset === -4) {
            rotateY = 64;
            translateZ = -380;
            translateX = -1620;
            scale = 0.52;
            zIndex = 10;
            opacity = 0.45;
          }

          return (
            <div
              key={idx}
              onClick={() => {
                if (rawOffset === 0) {
                  setSelectedLightboxImage(src);
                } else {
                  setActiveIndex(idx);
                }
              }}
              className="absolute top-1/2 left-1/2 transition-all duration-700 ease-out cursor-pointer"
              style={{
                zIndex,
                opacity,
                transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Horizontal Landscape 3D Card Box with ZERO Black Bars */}
              <div className="relative w-[260px] xs:w-[320px] sm:w-[420px] md:w-[500px] lg:w-[560px] h-[190px] xs:h-[235px] sm:h-[305px] md:h-[365px] lg:h-[405px] bg-transparent group flex items-center justify-center">
                <img
                  src={src}
                  alt={`Creative Work ${idx + 1}`}
                  className="w-full h-full object-cover rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200/80 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // Render 2D Marquee Strip
  let trackSources = [...displayImageSources];
  while (trackSources.length < 16) {
    trackSources = [...trackSources, ...displayImageSources];
  }

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
    </div>
  );

  const render2DCarousel = () => (
    <div
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      className="relative w-full py-2 overflow-hidden select-none"
    >
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
          <div className="flex shrink-0 space-x-4 sm:space-x-5 md:space-x-6 pr-4 sm:pr-5 md:pr-6">
            {trackSources.map((src, idx) => renderVerticalCard(src, `vset1-${idx}`))}
          </div>
          <div className="flex shrink-0 space-x-4 sm:space-x-5 md:space-x-6 pr-4 sm:pr-5 md:pr-6">
            {trackSources.map((src, idx) => renderVerticalCard(src, `vset2-${idx}`))}
          </div>
        </div>
      </div>
    </div>
  );

  const isOverallLoading = contextLoading || loadingAboutImages;

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

      {isOverallLoading ? (
        <div className="px-4 md:px-8 lg:px-[80px]">
          <Skeleton className="w-full h-80 rounded-3xl" />
        </div>
      ) : variant === '3d' ? (
        render3DCarousel()
      ) : (
        render2DCarousel()
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