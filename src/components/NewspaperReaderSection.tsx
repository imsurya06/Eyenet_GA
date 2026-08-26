"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Newspaper
} from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import { sanityClient, urlFor } from '@/lib/sanityClient';
import { Skeleton } from '@/components/ui/skeleton';

export interface NewspaperClipping {
  id: string;
  title: string;
  imageUrl: string;
}

const NewspaperReaderSection: React.FC = () => {
  const [clippings, setClippings] = useState<NewspaperClipping[]>([]);
  const [loading, setLoading] = useState(true);

  // Index state
  const [currentIndex, setCurrentIndex] = useState(0); // On mobile: page index. On desktop: spread index.
  const [isMobile, setIsMobile] = useState(false);

  // Lightbox Modal State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Physics Drag & Flip State
  const [isDragging, setIsDragging] = useState(false);
  const [dragProgress, setDragProgress] = useState(0); // 0 to 1
  const [dragDirection, setDragDirection] = useState<'next' | 'prev'>('next');
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number>(0);
  const currentProgressRef = useRef<number>(0);
  const animFrameRef = useRef<number | null>(null);

  // Responsive Screen Detector
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fallback newspaper clippings
  const fallbackClippings: NewspaperClipping[] = [
    {
      id: 'fallback-1',
      title: 'Press Clipping 1',
      imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'fallback-2',
      title: 'Press Clipping 2',
      imageUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'fallback-3',
      title: 'Press Clipping 3',
      imageUrl: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'fallback-4',
      title: 'Press Clipping 4',
      imageUrl: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&q=80&w=1200',
    },
  ];

  // Fetch Newspaper Clippings dynamically from Sanity CMS
  useEffect(() => {
    const query = '*[_type == "newspaperClipping"] | order(publishDate desc, date desc, _createdAt desc)';

    const fetchClippings = async () => {
      setLoading(true);
      try {
        const data = await sanityClient.fetch(query);
        if (data && data.length > 0) {
          const mapped: NewspaperClipping[] = data.map((doc: any, index: number) => {
            let img = '';
            if (typeof doc.clippingImage === 'string' && doc.clippingImage) {
              img = doc.clippingImage;
            } else if (doc.clippingImage && typeof doc.clippingImage === 'object' && doc.clippingImage.asset) {
              try {
                img = urlFor(doc.clippingImage).url();
              } catch {
                img = '';
              }
            }

            return {
              id: doc._id || `sanity-clipping-${index}`,
              title: doc.title || `News Clipping ${index + 1}`,
              imageUrl: img,
            };
          }).filter((item: NewspaperClipping) => Boolean(item.imageUrl));

          if (mapped.length > 0) {
            setClippings(mapped);
          } else {
            setClippings(fallbackClippings);
          }
        } else {
          setClippings(fallbackClippings);
        }
      } catch (err) {
        console.warn('Could not fetch newspaperClipping from Sanity:', err);
        setClippings(fallbackClippings);
      } finally {
        setLoading(false);
      }
    };

    fetchClippings();

    const subscription = sanityClient.listen(query).subscribe({
      next: () => fetchClippings(),
      error: (err) => console.warn('Sanity newspaperClipping subscription error:', err),
    });

    return () => subscription.unsubscribe();
  }, []);

  const totalClippings = clippings.length;
  const totalSpreads = Math.max(1, Math.ceil(totalClippings / 2));
  const maxIndex = isMobile ? totalClippings - 1 : totalSpreads - 1;

  // Mobile Page Mappings
  const mobileCurrentClipping = clippings[currentIndex] || fallbackClippings[0];
  const mobileNextClipping = clippings[currentIndex + 1] || fallbackClippings[0];
  const mobilePrevClipping = clippings[currentIndex - 1] || fallbackClippings[0];

  // Desktop Spread Mappings
  const leftPageIdx = currentIndex * 2;
  const rightPageIdx = currentIndex * 2 + 1;

  const leftClipping = clippings[leftPageIdx];
  const rightClipping = clippings[rightPageIdx];

  const nextLeftClipping = clippings[(currentIndex + 1) * 2];
  const nextRightClipping = clippings[(currentIndex + 1) * 2 + 1];

  const prevLeftClipping = clippings[(currentIndex - 1) * 2];
  const prevRightClipping = clippings[(currentIndex - 1) * 2 + 1];

  // 60fps/120fps requestAnimationFrame physics animation engine
  const animateToTargetProgress = (targetP: number, onComplete?: () => void) => {
    setIsAnimating(true);
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    const step = () => {
      const currentP = currentProgressRef.current;
      const diff = targetP - currentP;

      if (Math.abs(diff) < 0.01) {
        currentProgressRef.current = targetP;
        setDragProgress(targetP);

        if (targetP === 1 && onComplete) {
          // Instant state swap at 100% without reverse transition flicker
          onComplete();
          currentProgressRef.current = 0;
          setDragProgress(0);
        }

        setTimeout(() => {
          setIsAnimating(false);
        }, 30);
      } else {
        const nextP = currentP + diff * 0.22;
        currentProgressRef.current = nextP;
        setDragProgress(nextP);
        animFrameRef.current = requestAnimationFrame(step);
      }
    };

    animFrameRef.current = requestAnimationFrame(step);
  };

  const handleNext = () => {
    if (isAnimating || currentIndex >= maxIndex) return;
    setDragDirection('next');
    animateToTargetProgress(1, () => {
      setCurrentIndex((prev) => prev + 1);
    });
  };

  const handlePrev = () => {
    if (isAnimating || currentIndex <= 0) return;
    setDragDirection('prev');
    animateToTargetProgress(1, () => {
      setCurrentIndex((prev) => prev - 1);
    });
  };

  const springBack = () => {
    animateToTargetProgress(0);
  };

  // Drag Gesture Handlers
  const startDrag = (clientX: number) => {
    if (isAnimating) return;
    setIsDragging(true);
    startXRef.current = clientX;
    setDragProgress(0);
    currentProgressRef.current = 0;
  };

  const updateDrag = (clientX: number) => {
    if (!isDragging || !containerRef.current || isAnimating) return;
    const containerWidth = containerRef.current.clientWidth;
    const deltaX = startXRef.current - clientX;

    let p = deltaX / containerWidth;

    if (p >= 0) {
      if (currentIndex >= maxIndex) return;
      setDragDirection('next');
      p = Math.min(Math.max(p, 0), 1);
    } else {
      if (currentIndex <= 0) return;
      setDragDirection('prev');
      p = Math.min(Math.max(-p, 0), 1);
    }

    setDragProgress(p);
    currentProgressRef.current = p;
  };

  const endDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (currentProgressRef.current > 0.25) {
      if (dragDirection === 'next') {
        handleNext();
      } else {
        handlePrev();
      }
    } else {
      springBack();
    }
  };

  // Lightbox Modal Navigation
  const handleLightboxNext = () => {
    if (lightboxIndex !== null && lightboxIndex < totalClippings - 1) {
      setLightboxIndex((prev) => (prev !== null ? prev + 1 : null));
    }
  };

  const handleLightboxPrev = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex((prev) => (prev !== null ? prev - 1 : null));
    }
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === 'ArrowRight') handleLightboxNext();
        if (e.key === 'ArrowLeft') handleLightboxPrev();
        if (e.key === 'Escape') setLightboxIndex(null);
      } else {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, maxIndex, isAnimating, lightboxIndex, totalClippings]);

  // Desktop Book Bend Physics
  const angle = dragProgress * 180;
  const arcHeight = Math.sin(dragProgress * Math.PI);
  const bendSkew = -4 * Math.sin(dragProgress * Math.PI);
  const elevationZ = arcHeight * 50;
  const shadowOpacity = Math.min(arcHeight * 0.3, 0.3);

  // Desktop Base & Leaf Mappings
  const desktopBaseLeft = dragDirection === 'prev' && dragProgress > 0 ? prevLeftClipping : leftClipping;
  const desktopBaseRight = dragDirection === 'next' && dragProgress > 0 ? nextRightClipping : rightClipping;
  const desktopLeafFront = dragDirection === 'next' ? rightClipping : leftClipping;
  const desktopLeafBack = dragDirection === 'next' ? nextLeftClipping : prevRightClipping;

  // Mobile Single Paper Physics
  const mobileTargetClipping = dragDirection === 'next' ? mobileNextClipping : mobilePrevClipping;
  const mobileTranslateX = dragDirection === 'next' ? -dragProgress * 105 : dragProgress * 105;
  const mobileOpacity = Math.max(0, 1 - dragProgress * 0.9);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 lg:px-[80px] bg-background text-foreground relative overflow-hidden select-none border-t border-slate-200/80">

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <AnimateOnScroll delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-3">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Press Coverage & Media Scans</span>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-slate-900 mb-3 tracking-tight">
              Newspaper <span className="text-primary font-heading italic">Clippings</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <p className="text-sm sm:text-base font-body text-slate-600 max-w-xl mx-auto leading-relaxed">
              Drag with your cursor or swipe to flip through our press features.
            </p>
          </AnimateOnScroll>
        </div>

        {loading ? (
          <div className="flex justify-center my-8">
            <Skeleton className="w-full max-w-[320px] sm:max-w-[880px] aspect-[1/1.414] sm:aspect-[2/1.414] rounded-2xl bg-slate-200" />
          </div>
        ) : (
          <div className="flex flex-col items-center">

            {/* Top Toolbar: Counter & Zoom Button */}
            <div className="w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[720px] md:max-w-[920px] lg:max-w-[1020px] flex items-center justify-between mb-4 px-2">
              <span className="text-xs sm:text-sm font-body font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-3.5 py-1 rounded-full shadow-2xs">
                {isMobile
                  ? `Page ${currentIndex + 1} of ${totalClippings}`
                  : `Spread ${currentIndex + 1} of ${totalSpreads} (Pages ${leftPageIdx + 1}-${Math.min(rightPageIdx + 1, totalClippings)})`}
              </span>

              <Button
                onClick={() => {
                  const targetIdx = isMobile ? currentIndex : leftPageIdx;
                  setLightboxIndex(targetIdx);
                }}
                variant="outline"
                size="sm"
                className="h-8 px-3 text-xs border-slate-300 text-slate-700 hover:text-primary hover:border-primary bg-white shadow-2xs transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5 mr-1.5 text-primary" />
                Zoom Page
              </Button>
            </div>

            {/* Newspaper 3D Stage */}
            <div className="relative w-full flex items-center justify-center py-4 [perspective:2200px]">

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0 || isAnimating}
                aria-label="Previous Page"
                className="absolute left-1 sm:left-2 md:left-4 lg:left-8 z-50 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-primary text-slate-800 hover:text-white border border-slate-200 shadow-xl flex items-center justify-center transition-all cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex || isAnimating}
                aria-label="Next Page"
                className="absolute right-1 sm:right-2 md:right-4 lg:right-8 z-50 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-primary text-slate-800 hover:text-white border border-slate-200 shadow-xl flex items-center justify-center transition-all cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Responsive Container (Mobile: Single A4 Page / Desktop: Double-Page Spread) */}
              <div
                ref={containerRef}
                onMouseDown={(e) => startDrag(e.clientX)}
                onMouseMove={(e) => updateDrag(e.clientX)}
                onMouseUp={endDrag}
                onMouseLeave={endDrag}
                onTouchStart={(e) => startDrag(e.touches[0].clientX)}
                onTouchMove={(e) => updateDrag(e.touches[0].clientX)}
                onTouchEnd={endDrag}
                className={`relative w-full max-w-[310px] xs:max-w-[340px] sm:max-w-[720px] md:max-w-[920px] lg:max-w-[1020px] aspect-[1/1.414] sm:aspect-[2/1.414] bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-row select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
                  }`}
                style={{ transformStyle: 'preserve-3d' }}
              >

                {/* --- A. MOBILE LAYOUT (100% FLICKER-FREE SINGLE PAPER SLIDE) --- */}
                {isMobile ? (
                  <div className="relative w-full h-full bg-white overflow-hidden">

                    {/* Underneath Target Page (Base) */}
                    <div className="absolute inset-0 w-full h-full bg-white">
                      {mobileTargetClipping ? (
                        <img
                          src={mobileTargetClipping.imageUrl}
                          alt={mobileTargetClipping.title}
                          className="w-full h-full object-contain pointer-events-none"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 text-xs font-medium">Blank Page</div>
                      )}
                    </div>

                    {/* Sliding Top Sheet */}
                    <div
                      onClick={() => {
                        if (mobileCurrentClipping && !isDragging) setLightboxIndex(currentIndex);
                      }}
                      className="absolute inset-0 w-full h-full bg-white cursor-pointer"
                      style={{
                        transform: (dragProgress > 0 || isAnimating) ? `translateX(${mobileTranslateX}%)` : 'translateX(0%)',
                        opacity: (dragProgress > 0 || isAnimating) ? mobileOpacity : 1,
                        transition: isDragging ? 'none' : 'transform 0.05s linear',
                      }}
                    >
                      {mobileCurrentClipping ? (
                        <img
                          src={mobileCurrentClipping.imageUrl}
                          alt={mobileCurrentClipping.title}
                          className="w-full h-full object-contain pointer-events-none"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 text-xs font-medium">Blank Page</div>
                      )}
                    </div>

                  </div>
                ) : (

                  /* --- B. DESKTOP / TABLET LAYOUT (2-Page Spread View) --- */
                  <>
                    {/* BASE LEFT A4 SHEET */}
                    <div
                      onClick={() => {
                        if (desktopBaseLeft && !isDragging) setLightboxIndex(leftPageIdx);
                      }}
                      className="relative w-1/2 h-full bg-white border-r border-slate-300/80 overflow-hidden cursor-pointer"
                    >
                      {desktopBaseLeft ? (
                        <img src={desktopBaseLeft.imageUrl} alt={desktopBaseLeft.title} className="w-full h-full object-contain pointer-events-none" />
                      ) : (
                        <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 text-xs font-medium">Blank Page</div>
                      )}
                      <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-950/15 via-slate-950/5 to-transparent pointer-events-none" />
                    </div>

                    {/* BASE RIGHT A4 SHEET */}
                    <div
                      onClick={() => {
                        if (desktopBaseRight && !isDragging) setLightboxIndex(rightPageIdx);
                      }}
                      className="relative w-1/2 h-full bg-white overflow-hidden cursor-pointer"
                    >
                      {desktopBaseRight ? (
                        <img src={desktopBaseRight.imageUrl} alt={desktopBaseRight.title} className="w-full h-full object-contain pointer-events-none" />
                      ) : (
                        <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 text-xs font-medium">Blank Page</div>
                      )}
                      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-950/15 via-slate-950/5 to-transparent pointer-events-none" />
                    </div>

                    {/* DESKTOP 3D FLIPPING LEAF */}
                    {(dragProgress > 0 || isAnimating) && (
                      <div
                        className={`absolute top-0 bottom-0 w-1/2 h-full z-30 ${dragDirection === 'next' ? 'right-0 origin-left' : 'left-0 origin-right'
                          }`}
                        style={{
                          transformStyle: 'preserve-3d',
                          transform: `rotateY(${dragDirection === 'next' ? -angle : angle}deg) skewY(${dragDirection === 'next' ? bendSkew : -bendSkew}deg) translateZ(${elevationZ}px)`,
                        }}
                      >
                        {/* FRONT SIDE OF FLIPPING LEAF */}
                        <div
                          className="absolute inset-0 w-full h-full bg-white overflow-hidden"
                          style={{
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                          }}
                        >
                          {desktopLeafFront ? (
                            <img src={desktopLeafFront.imageUrl} alt="Front Flipping Leaf" className="w-full h-full object-contain bg-white pointer-events-none" />
                          ) : (
                            <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 text-xs font-medium">Blank Page</div>
                          )}
                          <div className="absolute inset-0 bg-slate-950 pointer-events-none transition-opacity" style={{ opacity: shadowOpacity }} />
                        </div>

                        {/* BACK SIDE OF FLIPPING LEAF */}
                        <div
                          className="absolute inset-0 w-full h-full bg-white overflow-hidden"
                          style={{
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                          }}
                        >
                          {desktopLeafBack ? (
                            <img src={desktopLeafBack.imageUrl} alt="Back Flipping Leaf" className="w-full h-full object-contain bg-white pointer-events-none" />
                          ) : (
                            <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 text-xs font-medium">Blank Page</div>
                          )}
                          <div className="absolute inset-0 bg-slate-950 pointer-events-none transition-opacity" style={{ opacity: shadowOpacity }} />
                        </div>
                      </div>
                    )}

                    {/* Center Spine Accent */}
                    <div className="absolute inset-y-0 left-1/2 -ml-px w-0.5 bg-slate-300/80 shadow-xs pointer-events-none z-40" />
                  </>
                )}

              </div>

            </div>

          </div>
        )}

      </div>

      {/* Lightbox Modal with Full Front/Back Navigation Controls */}
      {lightboxIndex !== null && clippings[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200 select-none"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[94vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Toolbar */}
            <div className="w-full flex items-center justify-between mb-3 text-white">
              <span className="text-xs sm:text-sm font-semibold text-slate-300 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                Page {lightboxIndex + 1} of {totalClippings}
              </span>

              <button
                onClick={() => setLightboxIndex(null)}
                className="text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Close reader modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image Container */}
            <div className="relative w-full flex items-center justify-center">

              {/* Prev Lightbox Button */}
              <button
                onClick={handleLightboxPrev}
                disabled={lightboxIndex === 0}
                className="absolute left-2 sm:left-4 z-50 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-primary text-white border border-white/20 shadow-2xl flex items-center justify-center transition-all cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
                aria-label="Previous Lightbox Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Lightbox Button */}
              <button
                onClick={handleLightboxNext}
                disabled={lightboxIndex >= totalClippings - 1}
                className="absolute right-2 sm:right-4 z-50 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-primary text-white border border-white/20 shadow-2xl flex items-center justify-center transition-all cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
                aria-label="Next Lightbox Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="relative max-w-full max-h-[82vh] overflow-auto rounded-xl bg-slate-900 shadow-2xl p-2 border border-white/10">
                <img
                  src={clippings[lightboxIndex].imageUrl}
                  alt={clippings[lightboxIndex].title}
                  className="max-w-full max-h-[78vh] object-contain rounded-lg mx-auto transition-opacity duration-200"
                />
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default NewspaperReaderSection;
