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
  publicationName?: string;
  publishDate?: string;
  description?: string;
}

const NewspaperReaderSection: React.FC = () => {
  const [clippings, setClippings] = useState<NewspaperClipping[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');
  const [selectedLightboxImage, setSelectedLightboxImage] = useState<string | null>(null);
  
  // Touch / Drag swipe state
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

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

  const totalPages = clippings.length;
  const currentClipping = clippings[currentPageIndex] || fallbackClippings[0];
  const nextClipping = clippings[(currentPageIndex + 1) % totalPages] || fallbackClippings[0];

  const handleNextPage = () => {
    if (isFlipping || totalPages <= 1) return;
    setFlipDirection('next');
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPageIndex((prev) => (prev + 1) % totalPages);
      setIsFlipping(false);
    }, 450);
  };

  const handlePrevPage = () => {
    if (isFlipping || totalPages <= 1) return;
    setFlipDirection('prev');
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
      setIsFlipping(false);
    }, 450);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNextPage();
      if (e.key === 'ArrowLeft') handlePrevPage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPageIndex, totalPages, isFlipping]);

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
        handleNextPage();
      } else {
        handlePrevPage();
      }
    }
    setTouchStartX(null);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 lg:px-[80px] bg-background text-foreground relative overflow-hidden select-none border-t border-slate-200/80">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
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
              Flip through our news features and press releases.
            </p>
          </AnimateOnScroll>
        </div>

        {loading ? (
          <div className="flex justify-center my-8">
            <Skeleton className="w-[320px] sm:w-[480px] aspect-[1/1.414] rounded-2xl bg-slate-200" />
          </div>
        ) : (
          <div className="flex flex-col items-center">
            
            {/* Top Toolbar: Page Counter & Zoom Button */}
            <div className="w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[540px] md:max-w-[620px] flex items-center justify-between mb-4 px-2">
              <span className="text-xs sm:text-sm font-body font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
                Page {currentPageIndex + 1} of {totalPages}
              </span>

              <Button
                onClick={() => setSelectedLightboxImage(currentClipping.imageUrl)}
                variant="outline"
                size="sm"
                className="h-8 px-3 text-xs border-slate-300 text-slate-700 hover:text-primary hover:border-primary bg-white shadow-2xs transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5 mr-1.5 text-primary" />
                Zoom Page
              </Button>
            </div>

            {/* 3D Real-World Paper Folding & Flipping Stage */}
            <div className="relative w-full flex items-center justify-center py-4 [perspective:1600px]">
              
              {/* Left Arrow Button */}
              <button
                onClick={handlePrevPage}
                disabled={totalPages <= 1}
                aria-label="Previous Page"
                className="absolute left-2 sm:left-4 md:left-12 lg:left-24 z-30 w-11 h-11 rounded-full bg-white hover:bg-primary text-slate-800 hover:text-white border border-slate-200 shadow-lg flex items-center justify-center transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={handleNextPage}
                disabled={totalPages <= 1}
                aria-label="Next Page"
                className="absolute right-2 sm:right-4 md:right-12 lg:right-24 z-30 w-11 h-11 rounded-full bg-white hover:bg-primary text-slate-800 hover:text-white border border-slate-200 shadow-lg flex items-center justify-center transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* A4 Book / Paper Folding Stage */}
              <div 
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="relative w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[540px] md:max-w-[620px] aspect-[1/1.414] bg-white rounded-lg sm:rounded-xl shadow-2xl border border-slate-200/90 overflow-hidden cursor-pointer select-none"
                style={{ transformStyle: 'preserve-3d' }}
              >
                
                {/* Background Next Page (Revealed under flipping page) */}
                <div className="absolute inset-0 w-full h-full bg-white">
                  <img
                    src={nextClipping.imageUrl}
                    alt={nextClipping.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Flipping Page (3D Physics Paper Fold Rotation) */}
                <div 
                  onClick={() => setSelectedLightboxImage(currentClipping.imageUrl)}
                  className={`absolute inset-0 w-full h-full bg-white origin-left transition-all duration-450 ease-in-out ${
                    isFlipping 
                      ? flipDirection === 'next' 
                        ? '[transform:rotateY(-180deg)] opacity-0' 
                        : '[transform:rotateY(0deg)] opacity-100'
                      : '[transform:rotateY(0deg)] opacity-100'
                  }`}
                  style={{
                    backfaceVisibility: 'hidden',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* PURE UPLOADED NEWSPAPER IMAGE (NO OVERLAYS OR DECORATIONS) */}
                  <img
                    src={currentClipping.imageUrl}
                    alt={currentClipping.title}
                    className="w-full h-full object-contain"
                  />

                  {/* Paper Fold Spine Center Shadow Physics */}
                  <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-slate-950/20 via-slate-950/5 to-transparent pointer-events-none" />
                </div>

              </div>

            </div>

            {/* Thumbnail Page Switcher Strip */}
            {totalPages > 1 && (
              <div className="w-full max-w-[640px] mt-8 flex items-center justify-center gap-3 overflow-x-auto py-2 px-4 scrollbar-none">
                {clippings.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (idx !== currentPageIndex) {
                        setFlipDirection(idx > currentPageIndex ? 'next' : 'prev');
                        setIsFlipping(true);
                        setTimeout(() => {
                          setCurrentPageIndex(idx);
                          setIsFlipping(false);
                        }, 350);
                      }
                    }}
                    className={`relative shrink-0 w-14 sm:w-16 aspect-[1/1.414] rounded-md overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                      idx === currentPageIndex 
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
                ))}
              </div>
            )}

          </div>
        )}

      </div>

      {/* Lightbox Modal for Pure HD Full View */}
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
