"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
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

  // Lightbox Zoom and Pan State
  const [zoomScale, setZoomScale] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStartRef = useRef({ x: 0, y: 0 });
  const lightboxViewportRef = useRef<HTMLDivElement | null>(null);

  // Background body scroll lock & reset zoom on open
  useEffect(() => {
    if (selectedLightboxImage) {
      setZoomScale(1);
      setPanPosition({ x: 0, y: 0 });
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedLightboxImage]);

  // Handle smooth wheel zooming & prevent background page scrolling
  useEffect(() => {
    const el = lightboxViewportRef.current;
    if (!el || !selectedLightboxImage) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const rect = el.getBoundingClientRect();
      const cursorX = e.clientX - rect.left;
      const cursorY = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const mouseOffsetX = cursorX - centerX;
      const mouseOffsetY = cursorY - centerY;

      const rawDelta = -e.deltaY;
      const clampedDelta = Math.max(Math.min(rawDelta, 50), -50);
      const zoomFactor = 1 + clampedDelta * 0.0022;

      setZoomScale((prevScale) => {
        let newScale = prevScale * zoomFactor;

        if (newScale <= 1.04) {
          setPanPosition({ x: 0, y: 0 });
          return 1;
        }
        if (newScale > 5) {
          newScale = 5;
        }

        newScale = Number(newScale.toFixed(3));
        const scaleRatio = newScale / prevScale;

        setPanPosition((prevPan) => {
          if (newScale === 1) return { x: 0, y: 0 };
          const newPanX = prevPan.x - (mouseOffsetX - prevPan.x) * (scaleRatio - 1);
          const newPanY = prevPan.y - (mouseOffsetY - prevPan.y) * (scaleRatio - 1);
          return {
            x: Number(newPanX.toFixed(2)),
            y: Number(newPanY.toFixed(2)),
          };
        });

        return newScale;
      });
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
    };
  }, [selectedLightboxImage]);

  const handleZoomIn = () => {
    setZoomScale((prevScale) => {
      const newScale = Math.min(Number((prevScale + 0.35).toFixed(2)), 5);
      const scaleRatio = newScale / prevScale;
      setPanPosition((prevPan) => ({
        x: Number((prevPan.x * scaleRatio).toFixed(2)),
        y: Number((prevPan.y * scaleRatio).toFixed(2)),
      }));
      return newScale;
    });
  };

  const handleZoomOut = () => {
    setZoomScale((prevScale) => {
      const newScale = Math.max(Number((prevScale - 0.35).toFixed(2)), 1);
      if (newScale === 1) {
        setPanPosition({ x: 0, y: 0 });
        return 1;
      }
      const scaleRatio = newScale / prevScale;
      setPanPosition((prevPan) => ({
        x: Number((prevPan.x * scaleRatio).toFixed(2)),
        y: Number((prevPan.y * scaleRatio).toFixed(2)),
      }));
      return newScale;
    });
  };

  const handleZoomReset = () => {
    setZoomScale(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    const el = lightboxViewportRef.current;
    if (!el) return;

    if (zoomScale > 1.2) {
      handleZoomReset();
    } else {
      const rect = el.getBoundingClientRect();
      const cursorX = e.clientX - rect.left;
      const cursorY = e.clientY - rect.top;
      const mouseOffsetX = cursorX - rect.width / 2;
      const mouseOffsetY = cursorY - rect.height / 2;

      const newScale = 2.2;
      const newPanX = -(mouseOffsetX * (newScale - 1));
      const newPanY = -(mouseOffsetY * (newScale - 1));

      setZoomScale(newScale);
      setPanPosition({
        x: Number(newPanX.toFixed(2)),
        y: Number(newPanY.toFixed(2)),
      });
    }
  };

  const handlePanMouseDown = (e: React.MouseEvent) => {
    if (zoomScale > 1) {
      setIsPanning(true);
      panStartRef.current = { x: e.clientX - panPosition.x, y: e.clientY - panPosition.y };
    }
  };

  const handlePanMouseMove = (e: React.MouseEvent) => {
    if (isPanning && zoomScale > 1) {
      setPanPosition({
        x: e.clientX - panStartRef.current.x,
        y: e.clientY - panStartRef.current.y,
      });
    }
  };

  const handlePanMouseUp = () => {
    setIsPanning(false);
  };

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
          let filter = 'none';

          const isSmallMobile = typeof window !== 'undefined' && window.innerWidth < 640;

          if (rawOffset === 0) {
            rotateY = 0;
            translateZ = 0;
            translateX = 0;
            scale = isSmallMobile ? 1.04 : 1.07;
            zIndex = 50;
            opacity = 1;
            filter = 'none';
          } else if (rawOffset === 1) {
            rotateY = isSmallMobile ? -16 : -24;
            translateZ = isSmallMobile ? -50 : -90;
            translateX = isSmallMobile ? 160 : 430;
            scale = isSmallMobile ? 0.88 : 0.92;
            zIndex = 40;
            opacity = isSmallMobile ? 0.75 : 0.68;
            filter = 'none';
          } else if (rawOffset === 2) {
            rotateY = isSmallMobile ? -30 : -38;
            translateZ = isSmallMobile ? -110 : -180;
            translateX = isSmallMobile ? 290 : 840;
            scale = isSmallMobile ? 0.74 : 0.78;
            zIndex = 30;
            opacity = isSmallMobile ? 0.40 : 0.32;
            filter = 'none';
          } else if (rawOffset === 3) {
            rotateY = -52;
            translateZ = -280;
            translateX = 1240;
            scale = 0.65;
            zIndex = 20;
            opacity = 0.12;
            filter = 'none';
          } else if (rawOffset === 4) {
            rotateY = -64;
            translateZ = -380;
            translateX = 1620;
            scale = 0.52;
            zIndex = 10;
            opacity = 0.05;
            filter = 'none';
          } else if (rawOffset === -1) {
            rotateY = isSmallMobile ? 16 : 24;
            translateZ = isSmallMobile ? -50 : -90;
            translateX = isSmallMobile ? -160 : -430;
            scale = isSmallMobile ? 0.88 : 0.92;
            zIndex = 40;
            opacity = isSmallMobile ? 0.75 : 0.68;
            filter = 'none';
          } else if (rawOffset === -2) {
            rotateY = isSmallMobile ? 30 : 38;
            translateZ = isSmallMobile ? -110 : -180;
            translateX = isSmallMobile ? -290 : -840;
            scale = isSmallMobile ? 0.74 : 0.78;
            zIndex = 30;
            opacity = isSmallMobile ? 0.40 : 0.32;
            filter = 'none';
          } else if (rawOffset === -3) {
            rotateY = 52;
            translateZ = -280;
            translateX = -1240;
            scale = 0.65;
            zIndex = 20;
            opacity = 0.12;
            filter = 'none';
          } else if (rawOffset === -4) {
            rotateY = 64;
            translateZ = -380;
            translateX = -1620;
            scale = 0.52;
            zIndex = 10;
            opacity = 0.05;
            filter = 'none';
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
                filter,
                transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                transformStyle: 'preserve-3d',
                transition: 'all 700ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Horizontal Landscape 3D Card Box with ZERO Black Bars */}
              <div className="relative w-[260px] xs:w-[320px] sm:w-[420px] md:w-[500px] lg:w-[560px] h-[190px] xs:h-[235px] sm:h-[305px] md:h-[365px] lg:h-[405px] bg-transparent group flex items-center justify-center">
                <img
                  src={src}
                  alt={`Creative Work ${idx + 1}`}
                  className={`w-full h-full object-cover rounded-2xl md:rounded-3xl transition-transform duration-700 ease-out ${
                    rawOffset === 0
                      ? 'border-2 border-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5),0_0_30px_rgba(255,255,255,0.25)]'
                      : 'border border-white/20 shadow-xl'
                  } group-hover:scale-[1.02]`}
                />

                {/* Premium Silk Depth Overlay for Non-Active Cards */}
                {rawOffset !== 0 && (
                  <div
                    className={`absolute inset-0 rounded-2xl md:rounded-3xl transition-all duration-500 pointer-events-none ${
                      Math.abs(rawOffset) === 1
                        ? 'bg-slate-950/20 backdrop-blur-[0.5px] group-hover:bg-slate-950/5'
                        : Math.abs(rawOffset) === 2
                        ? 'bg-slate-950/35 backdrop-blur-[1px] group-hover:bg-slate-950/15'
                        : 'bg-slate-950/50 backdrop-blur-[2px]'
                    }`}
                  />
                )}
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

      {/* Lightbox Modal for Gallery Full View with Smooth Mouse Wheel Zoom & Background Scroll Lock */}
      {selectedLightboxImage && (
        <div
          className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-200 select-none overflow-hidden"
          onClick={() => setSelectedLightboxImage(null)}
          onWheel={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {/* Top Header Bar */}
          <div
            className="absolute top-0 left-0 right-0 h-14 sm:h-16 z-50 flex items-center justify-between px-4 sm:px-8 text-white gap-3 bg-gradient-to-b from-slate-950/80 to-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
              <span className="text-xs sm:text-sm font-bold text-slate-200 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                Gallery Preview
              </span>

              {/* Zoom Controls */}
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                <button
                  onClick={handleZoomOut}
                  disabled={zoomScale <= 1}
                  className="p-1.5 text-white/80 hover:text-white hover:bg-white/15 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  title="Zoom Out"
                  aria-label="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </button>

                <button
                  onClick={handleZoomReset}
                  className="text-xs sm:text-sm font-bold text-slate-100 hover:text-white px-2 py-0.5 rounded transition-colors cursor-pointer"
                  title="Click to reset zoom"
                >
                  {Math.round(zoomScale * 100)}%
                </button>

                <button
                  onClick={handleZoomIn}
                  disabled={zoomScale >= 5}
                  className="p-1.5 text-white/80 hover:text-white hover:bg-white/15 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  title="Zoom In"
                  aria-label="Zoom In"
                >
                  <ZoomIn className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </button>

                {zoomScale > 1 && (
                  <button
                    onClick={handleZoomReset}
                    className="p-1.5 text-amber-300 hover:text-amber-200 hover:bg-white/15 rounded-full transition-colors cursor-pointer ml-0.5"
                    title="Reset Zoom (100%)"
                    aria-label="Reset Zoom"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>

              <span className="hidden md:inline-block text-xs sm:text-sm text-slate-300 italic truncate">
                Scroll mouse wheel to zoom into cursor • Drag to pan • Double-click to magnify
              </span>
            </div>

            <button
              onClick={() => setSelectedLightboxImage(null)}
              className="text-white/80 hover:text-white p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer ml-auto"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>

          {/* Full Screen Viewport: Pinned directly from below toolbar to bottom of screen */}
          <div
            ref={lightboxViewportRef}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handlePanMouseDown}
            onMouseMove={handlePanMouseMove}
            onMouseUp={handlePanMouseUp}
            onMouseLeave={handlePanMouseUp}
            onDoubleClick={handleDoubleClick}
            className={`absolute inset-0 top-14 sm:top-16 bottom-3 sm:bottom-5 px-3 sm:px-6 flex items-center justify-center overflow-hidden ${
              zoomScale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'
            }`}
            title={zoomScale > 1 ? 'Drag to pan • Double-click to reset' : 'Scroll or double-click to zoom'}
          >
            <img
              src={selectedLightboxImage}
              alt="Creative Work Full View"
              draggable={false}
              style={{
                height: '100%',
                maxHeight: '100%',
                width: 'auto',
                maxWidth: '100%',
                objectFit: 'contain',
                transform: `translate(${panPosition.x}px, ${panPosition.y}px) scale(${zoomScale})`,
                transformOrigin: 'center center',
                transition: isPanning ? 'none' : 'transform 0.08s ease-out',
                willChange: 'transform',
              }}
              className="rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] border border-white/15 select-none pointer-events-none"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default DynamicGalleryCarouselSection;