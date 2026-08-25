"use client";

import React, { useState, useEffect } from 'react';
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
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');
  const [selectedLightboxImage, setSelectedLightboxImage] = useState<string | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Fallback newspaper clippings (pairs)
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
  // Group into spreads (2 pages per spread)
  const totalSpreads = Math.max(1, Math.ceil(totalClippings / 2));

  const leftPageIdx = currentSpreadIndex * 2;
  const rightPageIdx = currentSpreadIndex * 2 + 1;

  const leftClipping = clippings[leftPageIdx];
  const rightClipping = clippings[rightPageIdx];

  // Next spread page references
  const nextLeftClipping = clippings[(currentSpreadIndex + 1) * 2];
  const nextRightClipping = clippings[(currentSpreadIndex + 1) * 2 + 1];

  const handleNextSpread = () => {
    if (isFlipping || currentSpreadIndex >= totalSpreads - 1) return;
    setFlipDirection('next');
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentSpreadIndex((prev) => prev + 1);
      setIsFlipping(false);
    }, 550);
  };

  const handlePrevSpread = () => {
    if (isFlipping || currentSpreadIndex <= 0) return;
    setFlipDirection('prev');
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentSpreadIndex((prev) => prev - 1);
      setIsFlipping(false);
    }, 550);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNextSpread();
      if (e.key === 'ArrowLeft') handlePrevSpread();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSpreadIndex, totalSpreads, isFlipping]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNextSpread();
      } else {
        handlePrevSpread();
      }
    }
    setTouchStartX(null);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 lg:px-[80px] bg-background text-foreground relative overflow-hidden select-none border-t border-slate-200/80">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Clean Light Section Header */}
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
              Flip through two-page spreads of our real-world newspaper press features.
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
              <span className="text-xs sm:text-sm font-body font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
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

            {/* Double-Page Spread Newspaper 3D Stage */}
            <div className="relative w-full flex items-center justify-center py-4 [perspective:1800px]">
              
              {/* Prev Spread Button */}
              <button
                onClick={handlePrevSpread}
                disabled={currentSpreadIndex === 0 || isFlipping}
                aria-label="Previous Spread"
                className="absolute left-1 sm:left-2 md:left-4 lg:left-8 z-40 w-11 h-11 rounded-full bg-white hover:bg-primary text-slate-800 hover:text-white border border-slate-200 shadow-xl flex items-center justify-center transition-all cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Spread Button */}
              <button
                onClick={handleNextSpread}
                disabled={currentSpreadIndex >= totalSpreads - 1 || isFlipping}
                aria-label="Next Spread"
                className="absolute right-1 sm:right-2 md:right-4 lg:right-8 z-40 w-11 h-11 rounded-full bg-white hover:bg-primary text-slate-800 hover:text-white border border-slate-200 shadow-xl flex items-center justify-center transition-all cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Double-Page Book / Newspaper Container */}
              <div 
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="relative w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[720px] md:max-w-[920px] lg:max-w-[1020px] aspect-[1/1.414] sm:aspect-[2/1.414] bg-slate-100 rounded-xl sm:rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col sm:flex-row select-none"
                style={{ transformStyle: 'preserve-3d' }}
              >
                
                {/* 1. LEFT A4 SHEET (Page N) */}
                <div 
                  onClick={() => {
                    if (leftClipping) setSelectedLightboxImage(leftClipping.imageUrl);
                  }}
                  className="relative w-full sm:w-1/2 h-full bg-white border-r border-slate-300/80 overflow-hidden cursor-pointer"
                >
                  {leftClipping ? (
                    <img
                      src={leftClipping.imageUrl}
                      alt={leftClipping.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 text-xs font-medium">
                      Blank Page
                    </div>
                  )}

                  {/* Left Spine Fold Shadow */}
                  <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-950/15 via-slate-950/5 to-transparent pointer-events-none" />
                </div>

                {/* 2. RIGHT A4 SHEET (Page N+1) & 3D Flipping Sheet Layer */}
                <div 
                  className="relative w-full sm:w-1/2 h-full bg-white overflow-hidden"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  
                  {/* Underneath Revealed Page (Right Sheet of Next Spread when flipping) */}
                  <div className="absolute inset-0 w-full h-full bg-white">
                    {nextRightClipping ? (
                      <img
                        src={nextRightClipping.imageUrl}
                        alt={nextRightClipping.title}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 text-xs font-medium">
                        End of Newspaper
                      </div>
                    )}

                    {/* Right Spine Fold Shadow */}
                    <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-950/15 via-slate-950/5 to-transparent pointer-events-none" />
                  </div>

                  {/* Current Right A4 Sheet Image */}
                  <div 
                    onClick={() => {
                      if (rightClipping) setSelectedLightboxImage(rightClipping.imageUrl);
                    }}
                    className="absolute inset-0 w-full h-full bg-white cursor-pointer"
                  >
                    {rightClipping ? (
                      <img
                        src={rightClipping.imageUrl}
                        alt={rightClipping.title}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 text-xs font-medium">
                        Blank Page
                      </div>
                    )}

                    {/* Right Spine Fold Shadow */}
                    <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-950/15 via-slate-950/5 to-transparent pointer-events-none" />
                  </div>

                  {/* 3D Physical Animated Flipping Sheet (Lifts from Right & Falls onto Left Sheet) */}
                  {isFlipping && (
                    <div 
                      className={`absolute inset-0 w-full h-full bg-white origin-left transition-transform duration-550 ease-in-out ${
                        flipDirection === 'next'
                          ? '[transform:rotateY(-180deg)]'
                          : '[transform:rotateY(180deg)] origin-right'
                      }`}
                      style={{
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                      }}
                    >
                      <img
                        src={flipDirection === 'next' ? (rightClipping?.imageUrl || '') : (nextLeftClipping?.imageUrl || '')}
                        alt="Flipping Newspaper Sheet"
                        className="w-full h-full object-contain bg-white"
                      />
                      {/* Dynamic Paper Fold Shadow Effect during 3D flip */}
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-slate-950/20 pointer-events-none" />
                    </div>
                  )}

                </div>

                {/* Center Book Spine Line Accent */}
                <div className="hidden sm:block absolute inset-y-0 left-1/2 -ml-px w-0.5 bg-slate-300/80 shadow-xs pointer-events-none z-30" />

              </div>

            </div>

            {/* Thumbnail Page Switcher Strip (All A4 Sheets) */}
            {totalClippings > 1 && (
              <div className="w-full max-w-[720px] mt-8 flex items-center justify-center gap-3 overflow-x-auto py-2 px-4 scrollbar-none">
                {clippings.map((item, idx) => {
                  const targetSpread = Math.floor(idx / 2);
                  const isCurrent = targetSpread === currentSpreadIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        if (targetSpread !== currentSpreadIndex) {
                          setFlipDirection(targetSpread > currentSpreadIndex ? 'next' : 'prev');
                          setIsFlipping(true);
                          setTimeout(() => {
                            setCurrentSpreadIndex(targetSpread);
                            setIsFlipping(false);
                          }, 400);
                        }
                      }}
                      className={`relative shrink-0 w-14 sm:w-16 aspect-[1/1.414] rounded-md overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                        isCurrent 
                          ? 'border-primary scale-110 shadow-md ring-2 ring-primary/30' 
                          : 'border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-400'
                      }`}
                    >
                      <img 
                        src={item.imageUrl} 
                        alt={`Page ${idx + 1}`} 
                        className="w-full h-full object-cover" 
                      />
                      <span className="absolute bottom-0.5 right-0.5 text-[9px] font-bold bg-slate-900/80 text-white px-1 rounded">
                        {idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

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
