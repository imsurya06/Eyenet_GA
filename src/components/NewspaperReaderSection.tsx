"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Newspaper,
  ZoomIn,
  ZoomOut,
  RotateCcw
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

  // Lightbox Modal State & Zoom Controls
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1);
  const [panPosition, setPanPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const panStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const lightboxViewportRef = useRef<HTMLDivElement>(null);

  // Reset zoom & pan when image or lightbox changes
  useEffect(() => {
    setZoomScale(1);
    setPanPosition({ x: 0, y: 0 });
  }, [lightboxIndex]);

  // Lock background scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [lightboxIndex]);

  // Handle smooth wheel zooming & prevent background page scrolling
  useEffect(() => {
    const el = lightboxViewportRef.current;
    if (!el || lightboxIndex === null) return;

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

      // Gentle sensitivity damping:
      // Clamping delta prevents trackpad or fast mouse wheel spasms
      const rawDelta = -e.deltaY;
      const clampedDelta = Math.max(Math.min(rawDelta, 50), -50);
      const zoomFactor = 1 + clampedDelta * 0.0022; // Smooth ~10% per notch, finely controllable

      setZoomScale((prevScale) => {
        let newScale = prevScale * zoomFactor;

        // Snapping and clamping between 1x and 5x
        if (newScale <= 1.04) {
          setPanPosition({ x: 0, y: 0 });
          return 1;
        }
        if (newScale > 5) {
          newScale = 5;
        }

        newScale = Number(newScale.toFixed(3));
        const scaleRatio = newScale / prevScale;

        // Zoom centered around exact cursor position:
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
  }, [lightboxIndex]);

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

  // Drag & 3D Flip State
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
    const query = '*[_type == "newspaperClipping"]';

    const fetchClippings = async () => {
      setLoading(true);
      try {
        const data = await sanityClient.fetch(query);
        if (data && data.length > 0) {
          // Sort strictly by the date the user entered (newest publication date first, older dates on next pages)
          const sorted = [...data].sort((a: any, b: any) => {
            const dateA = a.publishDate || a.date;
            const dateB = b.publishDate || b.date;

            // If both have user-entered dates, compare them descending (newest date first)
            if (dateA && dateB) {
              return new Date(dateB).getTime() - new Date(dateA).getTime();
            }
            // An item with an entered date always comes before an item without a date
            if (dateA && !dateB) return -1;
            if (!dateA && dateB) return 1;

            // If neither has an entered date, fallback to _createdAt descending
            return new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime();
          });

          const mapped: NewspaperClipping[] = sorted.map((doc: any, index: number) => {
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

  // 60fps/120fps physics animation engine for smooth 3D page flips
  const animateToTargetProgress = (targetP: number, onComplete?: () => void) => {
    setIsAnimating(true);
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    const step = () => {
      const currentP = currentProgressRef.current;
      const diff = targetP - currentP;

      if (Math.abs(diff) < 0.008) {
        currentProgressRef.current = targetP;
        setDragProgress(targetP);

        if (targetP === 1 && onComplete) {
          onComplete();
          currentProgressRef.current = 0;
          setDragProgress(0);
        }

        setTimeout(() => {
          setIsAnimating(false);
        }, 20);
      } else {
        const nextP = currentP + diff * 0.24;
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

    if (currentProgressRef.current > 0.22) {
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

  // Desktop 3D Book Bend Physics
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

  // Mobile Single Paper 3D Physics
  const mobileAngle = dragProgress * 180;
  const mobileArcHeight = Math.sin(dragProgress * Math.PI);
  const mobileBendSkew = -3 * Math.sin(dragProgress * Math.PI);
  const mobileElevationZ = mobileArcHeight * 45;
  const mobileShadowOpacity = Math.min(mobileArcHeight * 0.35, 0.35);

  const mobileTargetClipping = dragDirection === 'next' ? mobileNextClipping : mobilePrevClipping;

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

                {/* --- A. MOBILE LAYOUT (REALISTIC 3D NEWSPAPER PAGE FOLD & FLIP) --- */}
                {isMobile ? (
                  <div className="relative w-full h-full bg-white overflow-hidden rounded-xl">
                    
                    {/* Base Layer: Underneath Target Page (Revealed as top page flips) */}
                    <div className="absolute inset-0 w-full h-full bg-white">
                      {mobileTargetClipping ? (
                        <img
                          src={mobileTargetClipping.imageUrl}
                          alt={mobileTargetClipping.title}
                          className="w-full h-full object-contain pointer-events-none"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 text-xs font-medium">End of Clippings</div>
                      )}
                    </div>

                    {/* Base Layer: Current Static Page (Visible when idle) */}
                    {(!isAnimating && !isDragging) && (
                      <div
                        onClick={() => {
                          if (mobileCurrentClipping) setLightboxIndex(currentIndex);
                        }}
                        className="absolute inset-0 w-full h-full bg-white cursor-pointer"
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
                    )}

                    {/* 3D Flipping Newspaper Leaf (Active Fold Animation) */}
                    {(isDragging || isAnimating) && (
                      <div
                        className={`absolute inset-0 w-full h-full z-30 ${dragDirection === 'next' ? 'origin-left' : 'origin-right'}`}
                        style={{
                          transformStyle: 'preserve-3d',
                          transform: `rotateY(${dragDirection === 'next' ? -mobileAngle : mobileAngle}deg) skewY(${dragDirection === 'next' ? mobileBendSkew : -mobileBendSkew}deg) translateZ(${mobileElevationZ}px)`,
                        }}
                      >
                        {/* FRONT SIDE OF MOBILE NEWSPAPER LEAF */}
                        <div
                          className="absolute inset-0 w-full h-full bg-white overflow-hidden"
                          style={{
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                          }}
                        >
                          {mobileCurrentClipping ? (
                            <img src={mobileCurrentClipping.imageUrl} alt="Front Flipping Leaf" className="w-full h-full object-contain bg-white pointer-events-none" />
                          ) : (
                            <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 text-xs font-medium">Blank Page</div>
                          )}
                          <div className="absolute inset-0 bg-slate-950 pointer-events-none transition-opacity" style={{ opacity: mobileShadowOpacity }} />
                        </div>

                        {/* BACK SIDE OF MOBILE NEWSPAPER LEAF */}
                        <div
                          className="absolute inset-0 w-full h-full bg-white overflow-hidden"
                          style={{
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                          }}
                        >
                          {mobileTargetClipping ? (
                            <img src={mobileTargetClipping.imageUrl} alt="Back Flipping Leaf" className="w-full h-full object-contain bg-white pointer-events-none" />
                          ) : (
                            <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 text-xs font-medium">Blank Page</div>
                          )}
                          <div className="absolute inset-0 bg-slate-950 pointer-events-none transition-opacity" style={{ opacity: mobileShadowOpacity }} />
                        </div>
                      </div>
                    )}
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

      {/* Lightbox Modal with Full Front/Back Navigation Controls & Mouse Wheel Zoom */}
      {lightboxIndex !== null && clippings[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-between p-2 sm:p-4 animate-in fade-in duration-200 select-none overflow-hidden"
          onClick={() => setLightboxIndex(null)}
          onWheel={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {/* Modal Header Toolbar */}
          <div 
            className="w-full max-w-7xl flex items-center justify-between px-3 py-1.5 text-white gap-3 shrink-0 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="text-xs sm:text-sm font-bold text-slate-200 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                Page {lightboxIndex + 1} of {totalClippings}
              </span>

              {/* Zoom percentage & Controls */}
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

              <span className="hidden md:inline-block text-xs sm:text-sm text-slate-300 italic">
                Scroll mouse wheel to zoom into cursor • Drag to pan • Double-click to magnify
              </span>
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              className="text-white/80 hover:text-white p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer ml-auto"
              aria-label="Close reader modal"
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>

          {/* Prev Lightbox Button (Fixed to Left Screen Edge) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleLightboxPrev();
            }}
            disabled={lightboxIndex === 0}
            className="fixed left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-900/85 hover:bg-primary text-white border border-white/30 shadow-2xl flex items-center justify-center transition-all cursor-pointer disabled:opacity-10 disabled:cursor-not-allowed"
            aria-label="Previous Lightbox Image"
          >
            <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>

          {/* Next Lightbox Button (Fixed to Right Screen Edge) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleLightboxNext();
            }}
            disabled={lightboxIndex >= totalClippings - 1}
            className="fixed right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-900/85 hover:bg-primary text-white border border-white/30 shadow-2xl flex items-center justify-center transition-all cursor-pointer disabled:opacity-10 disabled:cursor-not-allowed"
            aria-label="Next Lightbox Image"
          >
            <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>

          {/* Full Screen Interactive Viewport */}
          <div
            ref={lightboxViewportRef}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handlePanMouseDown}
            onMouseMove={handlePanMouseMove}
            onMouseUp={handlePanMouseUp}
            onMouseLeave={handlePanMouseUp}
            onDoubleClick={handleDoubleClick}
            className={`relative w-full flex-1 flex items-center justify-center overflow-hidden my-auto ${
              zoomScale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'
            }`}
            title={zoomScale > 1 ? 'Drag to pan • Double-click to reset' : 'Scroll or double-click to zoom'}
          >
            <img
              src={clippings[lightboxIndex].imageUrl}
              alt={clippings[lightboxIndex].title}
              draggable={false}
              style={{
                height: '84vh',
                width: 'auto',
                maxWidth: '90vw',
                objectFit: 'contain',
                transform: `translate(${panPosition.x}px, ${panPosition.y}px) scale(${zoomScale})`,
                transformOrigin: 'center center',
                transition: isPanning ? 'none' : 'transform 0.08s ease-out',
                willChange: 'transform',
              }}
              className="rounded-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] border border-white/10 select-none pointer-events-none"
            />
          </div>
        </div>
      )}

    </section>
  );
};

export default NewspaperReaderSection;
