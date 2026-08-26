"use client";

import React, { useState, useMemo } from 'react';
import { useNewsEvents, NewsEvent } from '@/context/NewsEventsContext';
import AnimateOnScroll from './AnimateOnScroll';
import { CalendarDays, Play, Youtube, ArrowUpRight, Filter, Video, Radio, Maximize2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CATEGORIES = ['All', 'Fashion Walks', 'Seminar & Workshop', 'Others'] as const;
type CategoryFilter = (typeof CATEGORIES)[number];

const NewsEventsDisplaySection = () => {
  const { newsEvents, loading } = useNewsEvents();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [activePlayingVideoId, setActivePlayingVideoId] = useState<string | null>(null);
  const [selectedLightboxPoster, setSelectedLightboxPoster] = useState<{ src: string; title: string } | null>(null);

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

  // Helper to determine if an event is a Vertical/Tall Poster
  const isTallPoster = (event: NewsEvent) => {
    if (event.youtubeVideoId) return false;
    const cat = (event.category || '').toLowerCase();
    const title = (event.title || '').toLowerCase();
    return cat.includes('workshop') || cat.includes('seminar') || title.includes('workshop') || title.includes('poster') || title.includes('photography');
  };

  return (
    <section className="py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-[80px] bg-gradient-to-b from-slate-50/70 via-white to-background text-foreground">
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

          /* DYNAMIC BENTO GRID SYSTEM FOR ALL POSTERS, IMAGES & VIDEOS */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            {filteredEvents.map((item, itemIdx) => {
              const isVideoPlaying = activePlayingVideoId === item.id;
              const hasDescription = Boolean(item.description && item.description.trim().length > 0);
              const isTall = isTallPoster(item);
              const isFeatured = Boolean(item.isFeatured) || itemIdx === 0;

              return (
                <AnimateOnScroll
                  key={item.id}
                  delay={100 + itemIdx * 60}
                  className={`flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 text-left ${
                    isFeatured && !isTall ? 'md:col-span-2' : 'col-span-1'
                  }`}
                >
                  {/* Media Frame: Adaptive Bento Ratio (Tall for vertical posters, Aspect-Video for Videos) */}
                  <div className={`relative w-full bg-slate-950 overflow-hidden flex items-center justify-center ${
                    isTall ? 'aspect-[3/4] sm:aspect-[4/5]' : 'aspect-video'
                  }`}>
                    {isVideoPlaying && item.youtubeVideoId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${item.youtubeVideoId}?autoplay=1`}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
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
                        className="relative w-full h-full cursor-pointer group/media flex items-center justify-center overflow-hidden"
                      >
                        {/* Layer 1: Ambient Blurred Background */}
                        <img
                          src={item.image}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover blur-xl opacity-35 scale-110 pointer-events-none"
                        />

                        {/* Layer 2: 100% Uncropped Media Poster */}
                        <img
                          src={item.image}
                          alt={item.title}
                          className={`relative z-10 w-full h-full p-2 group-hover/media:scale-[1.03] transition-transform duration-500 ease-out ${
                            isTall ? 'object-contain' : 'object-cover sm:object-contain'
                          }`}
                        />

                        {/* Top Left Badge */}
                        <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                          {isFeatured && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                              <Radio className="w-3 h-3 animate-pulse" />
                              <span>Featured</span>
                            </span>
                          )}
                          <span className="inline-block px-3 py-0.5 rounded-full bg-slate-900/85 text-white text-[11px] font-semibold border border-slate-700">
                            {item.category}
                          </span>
                        </div>

                        {/* Top Right Expand Icon */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedLightboxPoster({ src: item.image, title: item.title });
                          }}
                          className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-md"
                          title="View Full Poster"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>

                        {/* Play Icon */}
                        {item.youtubeVideoId && (
                          <div className="absolute inset-0 flex items-center justify-center z-20 bg-slate-950/20 backdrop-blur-[1px]">
                            <div className="w-14 h-14 rounded-full bg-primary/95 text-white flex items-center justify-center shadow-lg group-hover/media:scale-110 transition-transform duration-300 border border-white/30">
                              <Play className="w-6 h-6 fill-white ml-0.5" />
                            </div>
                          </div>
                        )}

                        {/* Date Badge Bottom Left */}
                        <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 text-xs text-white font-medium bg-slate-900/85 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/10">
                          <CalendarDays className="w-3.5 h-3.5 text-primary-foreground" />
                          <span>{new Date(item.date).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bento Card Content */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-lg sm:text-xl font-heading font-normal text-slate-900 leading-snug mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      {hasDescription && (
                        <p className="text-sm font-body text-slate-600 leading-relaxed line-clamp-3 mb-4">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Footer Action Links */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto gap-2">
                      <button
                        onClick={() => setSelectedLightboxPoster({ src: item.image, title: item.title })}
                        className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-primary transition-colors cursor-pointer"
                      >
                        <Maximize2 className="w-3 h-3 text-primary" />
                        <span>View Poster</span>
                      </button>

                      {item.youtubeUrl ? (
                        <a
                          href={item.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-primary transition-colors"
                        >
                          <Youtube className="w-3.5 h-3.5 text-primary" />
                          <span>Watch Video</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-xs font-medium text-slate-400">Activity Showcase</span>
                      )}
                    </div>
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

      {/* Lightbox Modal for Full Resolution Poster View */}
      {selectedLightboxPoster && (
        <div
          className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200 select-none"
          onClick={() => setSelectedLightboxPoster(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedLightboxPoster(null)}
              className="absolute -top-12 right-0 md:top-2 md:-right-12 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedLightboxPoster.src}
              alt={selectedLightboxPoster.title}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            {selectedLightboxPoster.title && (
              <p className="text-white/90 text-sm font-heading font-medium mt-3 text-center">
                {selectedLightboxPoster.title}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsEventsDisplaySection;