"use client";

import React from 'react';
import { useNewsEvents } from '@/context/NewsEventsContext';
import AnimateOnScroll from './AnimateOnScroll';
import { CalendarDays, Newspaper, ArrowRight } from 'lucide-react';

const NewsEventsDisplaySection = () => {
  const { newsEvents } = useNewsEvents();

  // Sort news events by date, newest first
  const sortedNewsEvents = [...newsEvents].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const featuredEvent = sortedNewsEvents[0];
  const recentEvents = sortedNewsEvents.slice(1);

  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 lg:px-[80px] bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
          <AnimateOnScroll delay={100}>
            <h1 className="text-h1-mobile md:text-h1-desktop font-heading text-foreground">
              News & Events
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-text-medium font-body text-gray-600 max-w-xl text-right">
              Highlights from our campus, student achievements, and upcoming workshops.
            </p>
          </AnimateOnScroll>
        </div>

        {sortedNewsEvents.length > 0 ? (
          <div className="space-y-16">
            {/* Featured Article Section */}
            {featuredEvent && (
              <AnimateOnScroll delay={300} className="group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 overflow-hidden rounded-xl shadow-lg h-[400px] lg:h-[500px]">
                    {featuredEvent.image && (
                      <img
                        src={featuredEvent.image}
                        alt={featuredEvent.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="lg:col-span-4 flex flex-col justify-center h-full space-y-4">
                    <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-primary">
                      {featuredEvent.category === 'news' ? <Newspaper className="w-4 h-4" /> : <CalendarDays className="w-4 h-4" />}
                      <span>{featuredEvent.category}</span>
                      <span className="text-gray-300">|</span>
                      <span className="text-gray-500">{new Date(featuredEvent.date).toLocaleDateString()}</span>
                    </div>
                    <h2 className="text-h2-mobile md:text-h3-desktop font-heading leading-tight group-hover:text-primary transition-colors">
                      {featuredEvent.title}
                    </h2>
                    <p className="text-text-regular font-body text-gray-600 line-clamp-4">
                      {featuredEvent.description}
                    </p>
                    {/* Placeholder for Read More if needed */}
                    {/* <button className="flex items-center text-primary font-semibold hover:gap-2 transition-all">Read Story <ArrowRight className="ml-2 w-4 h-4" /></button> */}
                  </div>
                </div>
              </AnimateOnScroll>
            )}

            {/* Recent News Grid */}
            {recentEvents.length > 0 && (
              <div>
                <h3 className="text-h4-mobile md:text-h4-desktop font-heading mb-8 border-l-4 border-primary pl-4">Recent Updates</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                  {recentEvents.map((item, index) => (
                    <AnimateOnScroll key={item.id} delay={100 + index * 50} className="flex flex-col group cursor-pointer transition-all duration-300 hover:-translate-y-1">
                      <div className="mb-4 overflow-hidden rounded-lg aspect-[3/2] shadow-sm group-hover:shadow-md transition-all duration-300">
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        )}
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-medium uppercase text-gray-500">
                          <span className={item.category === 'event' ? 'text-orange-600' : 'text-blue-600'}>{item.category}</span>
                          <span>•</span>
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                        <h4 className="text-h5-mobile md:text-h6-desktop font-heading leading-tight group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm font-body text-gray-600 line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <AnimateOnScroll delay={300}>
            <p className="text-text-medium font-body text-gray-600 text-center py-20">
              No news or events to display at the moment.
            </p>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
};

export default NewsEventsDisplaySection;