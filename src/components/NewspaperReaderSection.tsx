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
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0);
  
  // 3D Physics Drag & Flip State
  const [isDragging, setIsDragging] = useState(false);
  const [dragProgress, setDragProgress] = useState(0); // 0 to 1
  const [dragDirection, setDragDirection] = useState<'next' | 'prev'>('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedLightboxImage, setSelectedLightboxImage] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number>(0);
  const currentProgressRef = useRef<number>(0);
  const animFrameRef = useRef<number | null>(null);

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
    const query = '*[_type == "newspaperClipping"] | order(order asc, _createdAt desc)';

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

  // Page index mappings
  const leftPageIdx = currentSpreadIndex * 2;
  const rightPageIdx = currentSpreadIndex * 2 + 1;

  const leftClipping = clippings[leftPageIdx];
  const rightClipping = clippings[rightPageIdx];

  // Next spread page references
  const nextLeftClipping = clippings[(currentSpreadIndex + 1) * 2];
  const nextRightClipping = clippings[(currentSpreadIndex + 1) * 2 + 1];

  // Prev spread page references
  const prevLeftClipping = clippings[(currentSpreadIndex - 1) * 2];
  const prevRightClipping = clippings[(currentSpreadIndex - 1) * 2 + 1];

  // Smooth requestAnimationFrame 60fps/120fps physics interpolation
  const animateToTargetProgress = (targetP: number, onComplete?: () => void) => {
    setIsAnimating(true);
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    const step = () => {
      const currentP = currentProgressRef.current;
      const diff = targetP - currentP;

      if (Math.abs(diff) < 0.005) {
        currentProgressRef.current = targetP;
        setDragProgress(targetP);
        setIsAnimating(false);
        if (onComplete) onComplete();
      } else {
        const nextP = currentP + diff * 0.18;
        currentProgressRef.current = nextP;
        setDragProgress(nextP);
        animFrameRef.current = requestAnimationFrame(step);
      }
    };

    animFrameRef.current = requestAnimationFrame(step);
  };

  const animateToNextSpread = () => {
    if (isAnimating || currentSpreadIndex >= totalSpreads - 1) return;
    setDragDirection('next');
    animateToTargetProgress(1, () => {
      setCurrentSpreadIndex((prev) => prev + 1);
      currentProgressRef.current = 0;
      setDragProgress(0);
    });
  };

  const animateToPrevSpread = () => {
    if (isAnimating || currentSpreadIndex <= 0) return;
    setDragDirection('prev');
    animateToTargetProgress(1, () => {
      setCurrentSpreadIndex((prev) => prev - 1);
      currentProgressRef.current = 0;
      setDragProgress(0);
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
    const containerWidth = containerRef.current.clientWidth / 2;
    const deltaX = startXRef.current - clientX;
    
    let p = deltaX / containerWidth;

    if (p >= 0) {
      if (currentSpreadIndex >= totalSpreads - 1) return;
      setDragDirection('next');
      p = Math.min(Math.max(p, 0), 1);
    } else {
      if (currentSpreadIndex <= 0) return;
      setDragDirection('prev');
      p = Math.min(Math.max(-p, 0), 1);
    }

    setDragProgress(p);
    currentProgressRef.current = p;
  };

  const endDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (currentProgressRef.current > 0.3) {
      if (dragDirection === 'next') {
        animateToNextSpread();
      } else {
        animateToPrevSpread();
      }
    } else {
      springBack();
    }
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') animateToNextSpread();
      if (e.key === 'ArrowLeft') animateToPrevSpread();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSpreadIndex, totalSpreads, isAnimating]);

  // Paper Bend & Elevation Physics
  const angle = dragProgress * 180;
  const arcHeight = Math.sin(dragProgress * Math.PI);
  const bendSkew = -4 * Math.sin(dragProgress * Math.PI);
  const elevationZ = arcHeight * 50;
  const shadowOpacity = Math.min(arcHeight * 0.3, 0.3);

  // Exact Book Base Sheet Assignment
  const baseLeftClipping = dragDirection === 'prev' && dragProgress > 0 ? prevLeftClipping : leftClipping;
  const baseRightClipping = dragDirection === 'next' && dragProgress > 0 ? nextRightClipping : rightClipping;

  // Exact 2-Sided Flipping Leaf Assignment
  const leafFrontClipping = dragDirection === 'next' ? rightClipping : leftClipping;
  const leafBackClipping = dragDirection === 'next' ? nextLeftClipping : prevRightClipping;

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
              Drag with your cursor or use arrow buttons to flip pages forward and backward in real book order.
            </p>
          </AnimateOnScroll>
        </div>

        {loading ? (
          <div className="flex justify-center my-8">
            <Skeleton className="w-full max-w-[880px] aspect-[2/1.414] rounded-2xl bg-slate-200" />
          </div>
        ) : (
          <div className="flex flex-col items-center">
            
            {/* Top Toolbar: Spread Counter & Zoom Button */}
            <div className="w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[720px] md:max-w-[920px] lg:max-w-[1020px] flex items-center justify-between mb-4 px-2">
              <span className="text-xs sm:text-sm font-body font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-3.5 py-1 rounded-full shadow-2xs">
                Spread {currentSpreadIndex + 1} of {totalSpreads} (Pages {leftPageIdx + 1}-{Math.min(rightPageIdx + 1, totalClippings)})
              </span>

              <Button
                onClick={() => {
                  if (leftClipping) setSelectedLightboxImage(leftClipping.imageUrl);
                }}
                variant="outline"
                size="sm"
                className="h-8 px-3 text-xs border-slate-300 text-slate-700 hover:text-primary hover:border-primary bg-white shadow-2xs transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5 mr-1.5 text-primary" />
                Zoom Page
              </Button>
            </div>

            {/* Double-Page Newspaper 3D Stage with Real Paper Bend Physics */}
            <div className="relative w-full flex items-center justify-center py-4 [perspective:2200px]">
              
              {/* Prev Spread Button */}
              <button
                onClick={animateToPrevSpread}
                disabled={currentSpreadIndex === 0 || isAnimating}
                aria-label="Previous Spread"
                className="absolute left-1 sm:left-2 md:left-4 lg:left-8 z-50 w-11 h-11 rounded-full bg-white hover:bg-primary text-slate-800 hover:text-white border border-slate-200 shadow-xl flex items-center justify-center transition-all cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Spread Button */}
              <button
                onClick={animateToNextSpread}
                disabled={currentSpreadIndex >= totalSpreads - 1 || isAnimating}
                aria-label="Next Spread"
                className="absolute right-1 sm:right-2 md:right-4 lg:right-8 z-50 w-11 h-11 rounded-full bg-white hover:bg-primary text-slate-800 hover:text-white border border-slate-200 shadow-xl flex items-center justify-center transition-all cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Double-Page Interactive Newspaper Container (Mouse Drag & Touch Swipeable) */}
              <div 
                ref={containerRef}
                onMouseDown={(e) => startDrag(e.clientX)}
                onMouseMove={(e) => updateDrag(e.clientX)}
                onMouseUp={endDrag}
                onMouseLeave={endDrag}
                onTouchStart={(e) => startDrag(e.touches[0].clientX)}
                onTouchMove={(e) => updateDrag(e.touches[0].clientX)}
                onTouchEnd={endDrag}
                className={`relative w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[720px] md:max-w-[920px] lg:max-w-[1020px] aspect-[1/1.414] sm:aspect-[2/1.414] bg-slate-100 rounded-xl sm:rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col sm:flex-row select-none ${
                  isDragging ? 'cursor-grabbing' : 'cursor-grab'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                
                {/* 1. BASE LEFT A4 SHEET */}
                <div 
                  onClick={() => {
                    if (baseLeftClipping && !isDragging) setSelectedLightboxImage(baseLeftClipping.imageUrl);
                  }}
                  className="relative w-full sm:w-1/2 h-full bg-white border-r border-slate-300/80 overflow-hidden cursor-pointer"
                >
                  {baseLeftClipping ? (
                    <img src={baseLeftClipping.imageUrl} alt={baseLeftClipping.title} className="w-full h-full object-contain pointer-events-none" />
                  ) : (
                    <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 text-xs font-medium">Blank Page</div>
                  )}

                  {/* Left Spine Fold Shadow */}
                  <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-950/15 via-slate-950/5 to-transparent pointer-events-none" />
                </div>

                {/* 2. BASE RIGHT A4 SHEET */}
                <div 
                  onClick={() => {
                    if (baseRightClipping && !isDragging) setSelectedLightboxImage(baseRightClipping.imageUrl);
                  }}
                  className="relative w-full sm:w-1/2 h-full bg-white overflow-hidden cursor-pointer"
                >
                  {baseRightClipping ? (
                    <img src={baseRightClipping.imageUrl} alt={baseRightClipping.title} className="w-full h-full object-contain pointer-events-none" />
                  ) : (
                    <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 text-xs font-medium">Blank Page</div>
                  )}

                  {/* Right Spine Fold Shadow */}
                  <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-950/15 via-slate-950/5 to-transparent pointer-events-none" />
                </div>

                {/* 3. TWO-SIDED 3D FLIPPING LEAF (EXACT BOOK PAGE ORDER FOR BOTH NEXT & PREV) */}
                {(dragProgress > 0 || isAnimating) && (
                  <div
                    className={`absolute top-0 bottom-0 w-full sm:w-1/2 h-full z-30 ${
                      dragDirection === 'next' ? 'right-0 origin-left' : 'left-0 origin-right'
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: `rotateY(${dragDirection === 'next' ? -angle : angle}deg) skewY(${dragDirection === 'next' ? bendSkew : -bendSkew}deg) translateZ(${elevationZ}px)`,
                    }}
                  >
                    {/* FRONT SIDE OF FLIPPING LEAF (0deg to 90deg) */}
                    <div
                      className="absolute inset-0 w-full h-full bg-white overflow-hidden"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                    >
                      {leafFrontClipping ? (
                        <img
                          src={leafFrontClipping.imageUrl}
                          alt="Front Flipping Leaf"
                          className="w-full h-full object-contain bg-white pointer-events-none"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 text-xs font-medium">Blank Page</div>
                      )}
                      <div className="absolute inset-0 bg-slate-950 pointer-events-none transition-opacity" style={{ opacity: shadowOpacity }} />
                    </div>

                    {/* BACK SIDE OF FLIPPING LEAF (90deg to 180deg - Landing Page) */}
                    <div
                      className="absolute inset-0 w-full h-full bg-white overflow-hidden"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      {leafBackClipping ? (
                        <img
                          src={leafBackClipping.imageUrl}
                          alt="Back Flipping Leaf"
                          className="w-full h-full object-contain bg-white pointer-events-none"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 text-xs font-medium">Blank Page</div>
                      )}
                      <div className="absolute inset-0 bg-slate-950 pointer-events-none transition-opacity" style={{ opacity: shadowOpacity }} />
                    </div>
                  </div>
                )}

                {/* Center Book Spine Line Accent */}
                <div className="hidden sm:block absolute inset-y-0 left-1/2 -ml-px w-0.5 bg-slate-300/80 shadow-xs pointer-events-none z-40" />

              </div>

            </div>

          </div>
        )}

      </div>

      {/* Lightbox Modal for HD Full View */}
      {selectedLightboxImage && (
        <div
          className="fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedLightboxImage(null)}
              className="absolute -top-12 right-0 md:top-2 md:-right-12 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer shrink-0"
              aria-label="Close reader modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative max-w-full max-h-[85vh] overflow-auto rounded-xl bg-white shadow-2xl p-2">
              <img
                src={selectedLightboxImage}
                alt="Newspaper Clipping Full View"
                className="max-w-full max-h-[80vh] object-contain rounded-lg mx-auto"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default NewspaperReaderSection;
