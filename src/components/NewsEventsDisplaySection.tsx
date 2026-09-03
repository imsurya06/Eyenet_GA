"use client";

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useNewsEvents, NewsEvent } from '@/context/NewsEventsContext';
import AnimateOnScroll from './AnimateOnScroll';
import { Play, Youtube, ArrowUpRight, Filter, Video, Maximize2, X, ChevronDown, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CATEGORIES = ['All', 'Fashion Walks', 'Seminar & Workshop', 'Others'] as const;
type CategoryFilter = (typeof CATEGORIES)[number];

const NewsEventsDisplaySection = () => {
  const { newsEvents, loading } = useNewsEvents();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [activePlayingVideoId, setActivePlayingVideoId] = useState<string | null>(null);
  const [selectedLightboxPoster, setSelectedLightboxPoster] = useState<{ src: string; title: string } | null>(null);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [naturalRatios, setNaturalRatios] = useState<Record<string, number>>({});

  // Lightbox Zoom and Pan State
  const [zoomScale, setZoomScale] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStartRef = useRef({ x: 0, y: 0 });
  const lightboxViewportRef = useRef<HTMLDivElement | null>(null);

  // Background body scroll lock & reset zoom on open
  useEffect(() => {
    if (selectedLightboxPoster) {
      setZoomScale(1);
      setPanPosition({ x: 0, y: 0 });
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedLightboxPoster]);

  // Handle smooth wheel zooming & prevent background page scrolling
  useEffect(() => {
    const el = lightboxViewportRef.current;
    if (!el || !selectedLightboxPoster) return;

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
  }, [selectedLightboxPoster]);

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

  const toggleCardExpand = (id: string) => {
    // Accordion behavior: Clicking an unopened card closes any previously opened card
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  // Reset expanded card when filter changes
  useEffect(() => {
    setExpandedCardId(null);
  }, [selectedCategory]);

  // Filter and sort events strictly by Event Date desc (newest event date first)
  const filteredEvents = useMemo(() => {
    let list = [...newsEvents];
    if (selectedCategory !== 'All') {
      list = list.filter(event => 
        event.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    return list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [newsEvents, selectedCategory]);

  // Helper to determine if an event is a Vertical/Tall Poster (no brittle keyword matching)
  const isTallPoster = (event: NewsEvent) => {
    // If it's a YouTube video, it's 16:9 widescreen
    if (event.youtubeVideoId) return false;

    // Check dynamic natural aspect ratio measured when browser loads image
    const dynamicRatio = naturalRatios[event.id];
    if (typeof dynamicRatio === 'number') {
      return dynamicRatio < 1.0;
    }

    // Check Sanity metadata dimensions if available
    if (event.imageDimensions?.aspectRatio) {
      return event.imageDimensions.aspectRatio < 1.0;
    }
    if (event.imageDimensions?.width && event.imageDimensions?.height) {
      return event.imageDimensions.height >= event.imageDimensions.width;
    }

    // Default: all uploaded event posters without video are vertical posters
    return true;
  };

  // Helper to render markdown bold text cleanly without raw asterisks
  const renderFormattedDescription = (text: string) => {
    if (!text || !text.includes('**')) return text;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-semibold text-slate-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <section className="pt-3 sm:pt-4 md:pt-6 pb-10 sm:pb-14 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-[80px] bg-gradient-to-b from-slate-50/70 via-white to-background text-foreground">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER ROW & MINIMAL CATEGORY FILTER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 pb-6 border-b border-slate-200/80 gap-6">
          
          {/* Title & Description */}
          <div className="flex flex-col items-start text-left max-w-xl">
            <AnimateOnScroll isHero={true} delay={100}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal text-slate-900 tracking-tight mb-2">
                News & <span className="text-primary font-heading italic">Events</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll isHero={true} delay={200}>
              <p className="text-sm sm:text-base font-body text-slate-600 leading-relaxed">
                Highlights from our annual fashion runways, seminars, interactive workshops, and campus showcases.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Top Right: Minimal YouTube Link & Category Pills */}
          <div className="flex flex-col items-start md:items-end gap-3.5 w-full md:w-auto">
            
            {/* Minimal YouTube Channel Link */}
            <AnimateOnScroll isHero={true} delay={200}>
              <a
                href="https://www.youtube.com/@Eye-Net-Fashion"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-primary transition-colors py-1 group"
              >
                <Youtube className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span>YouTube Channel</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
              </a>
            </AnimateOnScroll>

            {/* Category Filter Pills */}
            <AnimateOnScroll isHero={true} delay={300} className="w-full">
              <div className="flex flex-wrap items-center gap-1.5 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/80 w-full sm:w-auto">
                <div className="hidden sm:flex items-center gap-1 text-slate-400 px-2 text-xs font-semibold uppercase tracking-wider">
                  <Filter className="w-3.5 h-3.5 text-slate-400" />
                  <span>Category:</span>
                </div>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-primary text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </AnimateOnScroll>

          </div>

        </div>

        {/* LOADING STATE */}
        {loading ? (
          <div className="py-20 text-center flex flex-col items-center justify-center gap-3">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-slate-500 font-body text-sm">Loading activities...</p>
          </div>
        ) : filteredEvents.length > 0 ? (

          /* CLEAN BENTO GRID - ZERO SIDE BARS ON VIDEOS, ZERO GREY BOXES */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
            {filteredEvents.map((item, itemIdx) => {
              const isVideo = Boolean(item.youtubeVideoId);
              const isVideoPlaying = isVideo && activePlayingVideoId === item.id;
              const hasDescription = Boolean(item.description && item.description.trim().length > 0);
              const isTall = isTallPoster(item);
              // Only featured 16:9 widescreen videos span 2 columns. Posters are always 1 column.
              const isFeaturedWidescreen = isVideo && Boolean(item.isFeatured);
              const isExpanded = expandedCardId === item.id;
              const isLongDescription = Boolean(item.description && item.description.trim().length > 90);

              return (
                <AnimateOnScroll
                  key={item.id}
                  delay={100 + itemIdx * 60}
                  className={`flex flex-col bg-transparent group text-left ${
                    isFeaturedWidescreen ? 'md:col-span-2' : 'col-span-1'
                  }`}
                >
                  {/* Media Frame: Videos fill 100% 16:9 widescreen; Posters display natural vertical height without cropping */}
                  <div className={`relative w-full bg-slate-900/5 overflow-hidden rounded-2xl mb-4 flex items-center justify-center ${
                    isTall ? 'aspect-[3/4] sm:aspect-[4/5]' : 'aspect-video'
                  }`}>
                    {isVideoPlaying && item.youtubeVideoId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${item.youtubeVideoId}?autoplay=1`}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0 rounded-2xl shadow-sm"
                      />
                    ) : (
                      <div
                        onClick={() => {
                          if (item.youtubeVideoId) {
                            setActivePlayingVideoId(item.id);
                          } else {
                            setSelectedLightboxPoster({ src: item.image, title: item.title });
                          }
                        }}
                        className="relative w-full h-full cursor-pointer group/media flex items-center justify-center rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300"
                      >
                        {/* 100% Full Poster Display - Posters use object-contain so NO cropping occurs */}
                        <img
                          src={item.image}
                          alt={item.title}
                          onLoad={(e) => {
                            const { naturalWidth, naturalHeight } = e.currentTarget;
                            if (naturalWidth && naturalHeight) {
                              setNaturalRatios((prev) => ({
                                ...prev,
                                [item.id]: naturalWidth / naturalHeight,
                              }));
                            }
                          }}
                          className={`w-full h-full rounded-2xl group-hover/media:scale-[1.02] transition-transform duration-500 ease-out ${
                            isTall || !item.youtubeVideoId ? 'object-contain' : 'object-cover'
                          }`}
                        />

                        {/* Expand Icon on Hover */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedLightboxPoster({ src: item.image, title: item.title });
                          }}
                          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 cursor-pointer shadow-md"
                          title="View Full Poster"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>

                        {/* Clean Play Icon for Videos */}
                        {item.youtubeVideoId && (
                          <div className="absolute inset-0 flex items-center justify-center z-20 bg-slate-950/20 backdrop-blur-[1px]">
                            <div className="w-14 h-14 rounded-full bg-primary/95 text-white flex items-center justify-center shadow-lg group-hover/media:scale-110 transition-transform duration-300 border border-white/30">
                              <Play className="w-6 h-6 fill-white ml-0.5" />
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Clean Content Below Image (No card padding, no card borders) */}
                  <div className="flex flex-col flex-1">
                    {/* Meta Row: Category & Date */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
                        {item.category}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-500">
                        {new Date(item.date).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-heading font-semibold text-slate-900 leading-snug mb-2.5 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    {/* Description (Rendered ONLY IF present with View More / View Less) */}
                    {hasDescription && (
                      <div className="mb-3.5">
                        <p className={`text-base sm:text-lg font-body text-slate-700 leading-relaxed text-justify transition-all duration-300 ${
                          isExpanded ? '' : 'line-clamp-3'
                        }`}>
                          {renderFormattedDescription(item.description)}
                        </p>
                        {isLongDescription && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCardExpand(item.id);
                            }}
                            className="text-primary hover:underline font-bold text-sm sm:text-base mt-1.5 inline-flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            <span>{isExpanded ? 'View Less' : 'View More'}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                          </button>
                        )}
                      </div>
                    )}

                    {/* Clean Watch Video Link (Rendered ONLY IF YouTube video exists) */}
                    {item.youtubeUrl && (
                      <div className="pt-1.5">
                        <a
                          href={item.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-primary transition-colors cursor-pointer"
                        >
                          <Youtube className="w-4 h-4 text-primary" />
                          <span>Watch Video</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>

                </AnimateOnScroll>
              );
            })}
          </div>

        ) : (
          /* NO EVENTS FOUND FOR FILTER */
          <AnimateOnScroll delay={200}>
            <div className="py-20 text-center bg-white rounded-3xl border border-slate-200/80 p-8 max-w-lg mx-auto shadow-xs">
              <Video className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-heading text-slate-900 mb-2">No items found for "{selectedCategory}"</h3>
              <p className="text-sm font-body text-slate-500 mb-6">
                Try selecting "All" or a different category to view our activities.
              </p>
              <Button
                onClick={() => setSelectedCategory('All')}
                variant="outline"
                className="rounded-full border-slate-300 text-slate-700"
              >
                Show All Activities
              </Button>
            </div>
          </AnimateOnScroll>
        )}

      </div>

      {/* Lightbox Modal for Full Resolution Poster View with Smooth Mouse Wheel Zoom & Background Scroll Lock */}
      {selectedLightboxPoster && (
        <div
          className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-200 select-none overflow-hidden"
          onClick={() => setSelectedLightboxPoster(null)}
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
              {selectedLightboxPoster.title && (
                <span className="text-xs sm:text-sm font-bold text-slate-200 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 truncate max-w-[180px] sm:max-w-xs md:max-w-md">
                  {selectedLightboxPoster.title}
                </span>
              )}

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
              onClick={() => setSelectedLightboxPoster(null)}
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
              src={selectedLightboxPoster.src}
              alt={selectedLightboxPoster.title}
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

export default NewsEventsDisplaySection;