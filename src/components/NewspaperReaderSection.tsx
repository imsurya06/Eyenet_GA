"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Newspaper, 
  Calendar, 
  FileText, 
  Sparkles,
  ExternalLink 
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
  const [selectedLightboxImage, setSelectedLightboxImage] = useState<NewspaperClipping | null>(null);
  
  // Touch / Drag swipe state
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // High quality sample newspaper & press coverage clippings fallback
  const fallbackClippings: NewspaperClipping[] = [
    {
      id: 'fallback-1',
      title: 'Eye-Net Vocational Academy Celebrates 25 Years of Educational Excellence',
      publicationName: 'The Hindu',
      publishDate: '2024-03-15',
      description: 'Special feature highlighting Madurai’s premier institute for fashion, computer applications & design education.',
      imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'fallback-2',
      title: 'Annual Fashion Exhibition Showcase & Runway Excellence Award Winners',
      publicationName: 'Dinakaran',
      publishDate: '2023-11-20',
      description: 'NCFT Heights & Eye-Net students present award-winning designer garments at Madurai fashion gala.',
      imageUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'fallback-3',
      title: 'Women Empowerment Through Skill Development & Practical Studio Training',
      publicationName: 'Dina Thanthi',
      publishDate: '2023-08-10',
      description: 'Feature story on job-oriented diploma programs enabling self-employment and entrepreneurial success.',
      imageUrl: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'fallback-4',
      title: 'AI & Web Development Workshop Launch for Aspiring Tech Engineers',
      publicationName: 'Press Release',
      publishDate: '2024-01-05',
      description: 'Hands-on practical training in full-stack web applications, CAD, and generative AI tools.',
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
              publicationName: doc.publicationName || 'Press Feature',
              publishDate: doc.publishDate || '',
              description: doc.description || '',
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

  const handleNextPage = () => {
    if (isFlipping || totalPages <= 1) return;
    setFlipDirection('next');
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPageIndex((prev) => (prev + 1) % totalPages);
      setIsFlipping(false);
    }, 350);
  };

  const handlePrevPage = () => {
    if (isFlipping || totalPages <= 1) return;
    setFlipDirection('prev');
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
      setIsFlipping(false);
    }, 350);
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
    <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 lg:px-[80px] bg-slate-900 text-white relative overflow-hidden select-none border-t border-slate-800">
      
      {/* Background Subtle Paper Texture Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-slate-900 to-slate-950 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <AnimateOnScroll delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-bold text-xs uppercase tracking-widest mb-3">
              <Newspaper className="w-3.5 h-3.5 text-amber-400" />
              <span>Press Coverage & Media Scans</span>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-white mb-3 tracking-tight">
              Read Our <span className="text-amber-400 font-heading italic">Newspaper Clippings</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <p className="text-sm sm:text-base font-body text-slate-300 max-w-xl mx-auto leading-relaxed">
              Flip through physical A4 newspaper scans, press features, and media headlines celebrating Eye-Net Educational Academy's achievements.
            </p>
          </AnimateOnScroll>
        </div>

        {loading ? (
          <div className="flex justify-center my-8">
            <Skeleton className="w-[320px] sm:w-[480px] aspect-[1/1.414] rounded-2xl bg-slate-800" />
          </div>
        ) : (
          <div className="flex flex-col items-center">
            
            {/* 3D Newspaper Flipbook Stage */}
            <div className="relative w-full flex flex-col items-center justify-center [perspective:1400px]">
              
              {/* Controls Header Bar (Page Counter + Zoom Button) */}
              <div className="w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[540px] md:max-w-[620px] flex items-center justify-between mb-4 px-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                    Page {currentPageIndex + 1} of {totalPages}
                  </span>
                  {currentClipping.publicationName && (
                    <span className="hidden sm:inline-flex items-center gap-1 text-slate-400 font-medium">
                      <FileText className="w-3.5 h-3.5 text-amber-400" />
                      {currentClipping.publicationName}
                    </span>
                  )}
                </div>

                <Button
                  onClick={() => setSelectedLightboxImage(currentClipping)}
                  variant="outline"
                  size="sm"
                  className="h-8 px-3 text-xs bg-slate-800 hover:bg-slate-700 text-white border-slate-700 hover:border-slate-500 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                  Full Page Zoom
                </Button>
              </div>

              {/* Physical A4 Newspaper Page Container with 3D Flip Effect */}
              <div 
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="relative w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[540px] md:max-w-[620px] aspect-[1/1.414] bg-amber-50 text-slate-900 rounded-xl sm:rounded-2xl shadow-2xl shadow-slate-950/80 border-4 border-slate-800/90 overflow-hidden cursor-pointer group"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                
                {/* 3D Paper Flip Overlay Animation Layer */}
                <div 
                  className={`w-full h-full transition-transform duration-350 ease-in-out ${
                    isFlipping 
                      ? flipDirection === 'next' 
                        ? '[transform:rotateY(-18deg)_scale(0.97)] opacity-70 origin-left' 
                        : '[transform:rotateY(18deg)_scale(0.97)] opacity-70 origin-right'
                      : '[transform:rotateY(0deg)_scale(1)] opacity-100'
                  }`}
                >
                  {/* Authentic Newspaper Header Ribbon */}
                  <div className="bg-amber-100/90 border-b border-amber-300/80 px-4 py-2 flex items-center justify-between text-slate-800 text-[11px] sm:text-xs font-serif italic">
                    <span>EYE-NET ACADEMY PRESS ARCHIVES</span>
                    {currentClipping.publishDate && (
                      <span className="flex items-center gap-1 font-sans not-italic text-slate-600 font-medium">
                        <Calendar className="w-3 h-3 text-amber-700" />
                        {currentClipping.publishDate}
                      </span>
                    )}
                  </div>

                  {/* Main A4 Newspaper Scan / Clipping Image */}
                  <div 
                    onClick={() => setSelectedLightboxImage(currentClipping)}
                    className="relative w-full h-[calc(100%-2.25rem)] overflow-hidden bg-slate-100 flex items-center justify-center"
                  >
                    <img
                      src={currentClipping.imageUrl}
                      alt={currentClipping.title}
                      className="w-full h-full object-contain bg-slate-900/5 group-hover:scale-[1.015] transition-transform duration-500 ease-out"
                    />

                    {/* Paper Spine & Fold Shadow Overlay Effect */}
                    <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-950/30 via-slate-950/10 to-transparent pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-950/20 via-slate-950/5 to-transparent pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent pointer-events-none flex items-end p-4">
                      <div className="text-white text-xs sm:text-sm font-heading font-medium drop-shadow-md line-clamp-1">
                        {currentClipping.title}
                      </div>
                    </div>
                  </div>

                  {/* Classic Newspaper Corner Fold Accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-slate-900/30 to-transparent pointer-events-none" />
                </div>

                {/* Left Navigation Arrow (Overlayed on Card) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevPage();
                  }}
                  disabled={totalPages <= 1}
                  aria-label="Previous Clipping"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-amber-500 text-white hover:text-slate-950 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl opacity-80 hover:opacity-100 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Navigation Arrow (Overlayed on Card) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextPage();
                  }}
                  disabled={totalPages <= 1}
                  aria-label="Next Clipping"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-amber-500 text-white hover:text-slate-950 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl opacity-80 hover:opacity-100 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

              </div>

              {/* Current Clipping Description Box */}
              {currentClipping.description && (
                <div className="w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[540px] md:max-w-[620px] mt-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-300 text-xs sm:text-sm leading-relaxed text-center shadow-md">
                  <p>{currentClipping.description}</p>
                </div>
              )}

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
                        }, 300);
                      }
                    }}
                    className={`relative shrink-0 w-14 sm:w-16 aspect-[1/1.414] rounded-md overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                      idx === currentPageIndex 
                        ? 'border-amber-400 scale-110 shadow-lg shadow-amber-500/20 ring-2 ring-amber-400/40' 
                        : 'border-slate-700 opacity-60 hover:opacity-100 hover:border-slate-400'
                    }`}
                  >
                    <img 
                      src={item.imageUrl} 
                      alt={`Thumbnail ${idx + 1}`} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-slate-900/20" />
                    <span className="absolute bottom-0.5 right-0.5 text-[9px] font-bold bg-slate-950/80 text-amber-300 px-1 rounded">
                      {idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            )}

          </div>
        )}

      </div>

      {/* Fullscreen HD Reader Lightbox Modal */}
      {selectedLightboxImage && (
        <div
          className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="w-full flex items-center justify-between mb-3 text-white">
              <div className="text-left">
                <h3 className="text-base sm:text-lg font-heading font-normal text-amber-300 line-clamp-1">
                  {selectedLightboxImage.title}
                </h3>
                {selectedLightboxImage.publicationName && (
                  <p className="text-xs text-slate-400">
                    Publication: {selectedLightboxImage.publicationName} {selectedLightboxImage.publishDate ? `• ${selectedLightboxImage.publishDate}` : ''}
                  </p>
                )}
              </div>

              <button
                onClick={() => setSelectedLightboxImage(null)}
                className="text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer shrink-0 ml-4"
                aria-label="Close reader modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* High Definition A4 Clipping Image */}
            <div className="relative max-w-full max-h-[82vh] overflow-auto rounded-xl border border-white/10 bg-slate-900 shadow-2xl p-2">
              <img
                src={selectedLightboxImage.imageUrl}
                alt={selectedLightboxImage.title}
                className="max-w-full max-h-[78vh] object-contain rounded-lg mx-auto"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default NewspaperReaderSection;
