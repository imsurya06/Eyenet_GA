"use client";

import React, { useState, useMemo } from 'react';
import { useNewsEvents } from '@/context/NewsEventsContext';
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

  // Featured Hero Event: Explicitly pinned item (isFeatured), otherwise event with the newest date
  const featuredEvent = useMemo(() => {
    if (filteredEvents.length === 0) return null;
    const explicitFeatured = filteredEvents.find(e => e.isFeatured);
    if (explicitFeatured) return explicitFeatured;
    return filteredEvents[0];
  }, [filteredEvents]);

  // Remaining Items for Grid Below (sorted descending by event date)
  const remainingEvents = useMemo(() => {
    if (!featuredEvent) return [];
    return filteredEvents.filter(e => e.id !== featuredEvent.id);
  }, [filteredEvents, featuredEvent]);

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

          <div className="space-y-12">
            
            {/* 1. TOP HERO FEATURED EVENT - Clean Natural Poster Display without Side Bars */}
            {featuredEvent && (
              <AnimateOnScroll delay={300} className="w-full">
                <div className="bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-6 md:p-8 overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                    
                    {/* Poster Frame (Left 7 Cols) - Natural Poster Height without any dark/blurred side bars */}
                    <div className="lg:col-span-7 flex items-center justify-center w-full">
                      {activePlayingVideoId === featuredEvent.id && featuredEvent.youtubeVideoId ? (
                        <div className="relative aspect-video w-full rounded-2xl bg-slate-950 overflow-hidden shadow-md">
                          <iframe
                            src={`https://www.youtube.com/embed/${featuredEvent.youtubeVideoId}?autoplay=1`}
                            title={featuredEvent.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full border-0"
                          />
                        </div>
                      ) : (
                        <div
                          onClick={() => {
                            if (featuredEvent.youtubeVideoId) {
                              setActivePlayingVideoId(featuredEvent.id);
                            } else {
                              setSelectedLightboxPoster({ src: featuredEvent.image, title: featuredEvent.title });
                            }
                          }}
                          className="relative max-w-full cursor-pointer group/media flex items-center justify-center rounded-2xl overflow-hidden shadow-md border border-slate-200/80 bg-slate-50"
                        >
                          {/* Clean Natural Poster Image (NO side bars) */}
                          <img
                            src={featuredEvent.image}
                            alt={featuredEvent.title}
                            className="w-auto max-w-full max-h-[480px] sm:max-h-[520px] h-auto object-contain rounded-2xl group-hover/media:scale-[1.02] transition-transform duration-500 ease-out"
                          />
                          
                          {/* Top Left Badge */}
                          <div className="absolute top-3 left-3 z-10">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                              <Radio className="w-3 h-3 animate-pulse" />
                              <span>Latest Activity</span>
                            </span>
                          </div>

                          {/* Top Right Expand Icon */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedLightboxPoster({ src: featuredEvent.image, title: featuredEvent.title });
                            }}
                            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-md"
                            title="View Full Poster"
                          >
                            <Maximize2 className="w-4 h-4" />
                          </button>

                          {/* Play Button Overlay */}
                          {featuredEvent.youtubeVideoId && (
                            <div className="absolute inset-0 flex items-center justify-center z-10 bg-slate-950/20 backdrop-blur-[2px]">
                              <div className="w-16 h-16 rounded-full bg-primary/95 text-white flex items-center justify-center shadow-lg group-hover/media:scale-110 transition-transform duration-300 border border-white/30">
                                <Play className="w-7 h-7 fill-white ml-1" />
                              </div>
                            </div>
                          )}

                          {/* Date Pill Bottom Left */}
                          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 text-xs text-white font-medium bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                            <CalendarDays className="w-3.5 h-3.5 text-primary-foreground" />
                            <span>{new Date(featuredEvent.date).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content Details (Right 5 Cols) */}
                    <div className="lg:col-span-5 flex flex-col justify-between text-left h-full py-2">
                      <div>
                        {/* Category Label */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-bold uppercase tracking-widest text-primary">
                            {featuredEvent.category}
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="text-xs font-semibold text-slate-500">
                            {new Date(featuredEvent.date).toLocaleDateString()}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl sm:text-3xl font-heading font-normal text-slate-900 leading-snug mb-4 group-hover:text-primary transition-colors">
                          {featuredEvent.title}
                        </h2>

                        {/* Description */}
                        <p className="text-sm font-body text-slate-600 leading-relaxed mb-6">
                          {featuredEvent.description}
                        </p>
                      </div>

                      {/* Action Links */}
                      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                        <button
                          onClick={() => setSelectedLightboxPoster({ src: featuredEvent.image, title: featuredEvent.title })}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-primary transition-colors py-1 cursor-pointer"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-primary" />
                          <span>View Full Poster</span>
                        </button>

                        {featuredEvent.youtubeUrl && (
                          <a
                            href={featuredEvent.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-primary transition-colors"
                          >
                            <Youtube className="w-4 h-4 text-primary" />
                            <span>Watch on YouTube</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {featuredEvent.youtubeVideoId && activePlayingVideoId !== featuredEvent.id && (
                          <button
                            onClick={() => setActivePlayingVideoId(featuredEvent.id)}
                            className="text-xs font-bold text-primary hover:underline flex items-center gap-1 cursor-pointer"
                          >
                            <span>Play in page</span>
                          </button>
                        )}
                      </div>

                    </div>

                  </div>
                </div>
              </AnimateOnScroll>
            )}

            {/* 2. UNIFIED REMAINING ACTIVITIES GRID (Fills all 3 columns continuously) */}
            {remainingEvents.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {remainingEvents.map((item, itemIdx) => {
                  const isVideoPlaying = activePlayingVideoId === item.id;

                  return (
                    <AnimateOnScroll
                      key={item.id}
                      delay={100 + itemIdx * 60}
                      className="flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 text-left"
                    >
                      {/* Media Poster Frame - Clean Fit without dark side bars */}
                      <div className="relative w-full h-[240px] sm:h-[280px] bg-slate-50 border-b border-slate-100 overflow-hidden flex items-center justify-center">
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
                            className="relative w-full h-full cursor-pointer group/media flex items-center justify-center p-2"
                          >
                            {/* Clean Poster Image (No dark side bars) */}
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-auto max-w-full max-h-full h-auto object-contain rounded-xl group-hover/media:scale-105 transition-transform duration-500 ease-out"
                            />

                            {/* Category Badge Top Left */}
                            <div className="absolute top-3 left-3 z-10">
                              <span className="inline-block px-3 py-1 rounded-full bg-slate-900/85 text-white text-[11px] font-semibold backdrop-blur-xs">
                                {item.category}
                              </span>
                            </div>

                            {/* Top Right Expand Icon */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedLightboxPoster({ src: item.image, title: item.title });
                              }}
                              className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white backdrop-blur-xs border border-white/20 transition-all cursor-pointer shadow-sm"
                              title="View Full Poster"
                            >
                              <Maximize2 className="w-3.5 h-3.5" />
                            </button>

                            {/* Play Icon */}
                            {item.youtubeVideoId && (
                              <div className="absolute inset-0 flex items-center justify-center z-10 bg-slate-950/20 backdrop-blur-[1px]">
                                <div className="w-12 h-12 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg group-hover/media:scale-110 transition-transform duration-300 border border-white/20">
                                  <Play className="w-5 h-5 fill-white ml-0.5" />
                                </div>
                              </div>
                            )}

                            {/* Date Badge Bottom Left */}
                            <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 text-xs text-white font-medium bg-slate-900/80 backdrop-blur-xs px-2.5 py-0.5 rounded-md">
                              <CalendarDays className="w-3.5 h-3.5 text-primary-foreground" />
                              <span>{new Date(item.date).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-6 flex flex-col justify-between flex-1">
                        <div>
                          <h4 className="text-lg font-heading font-normal text-slate-900 leading-snug mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-sm font-body text-slate-600 leading-relaxed line-clamp-3 mb-4">
                            {item.description}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
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
                              className="inline-flex items-center gap-1 text-xs font-bold text-slate-800 hover:text-primary transition-colors"
                            >
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
            )}

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