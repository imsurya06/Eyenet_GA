"use client";

import React, { useState, useEffect, useRef } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { Eye, Compass, HeartHandshake } from 'lucide-react';

const VisionMissionValuesSection = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const valuesList = [
    "Innovation First.",
    "Pursuit of Excellence.",
    "Integrity Always.",
    "Learners at the Heart.",
    "Power of Collaboration",
    "Lifelong Learning",
  ];

  // Mobile Auto-Scroll with 1s view pause per card
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % 3);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const renderVisionCard = () => (
    <div className="group relative h-full bg-gradient-to-b from-rose-50/50 via-white to-white rounded-2xl p-5 sm:p-6 border border-rose-200/90 shadow-sm hover:shadow-lg hover:border-rose-400 transition-all duration-300 flex flex-col justify-start">
      <div className="flex items-center justify-between gap-3 mb-3.5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center shadow-md shadow-rose-500/20 shrink-0 group-hover:scale-105 transition-transform duration-300">
            <Eye className="w-4.5 h-4.5" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-bold text-slate-900 leading-tight">
              Vision
            </h3>
          </div>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-100/80 px-2 py-0.5 rounded-full border border-rose-200/60">
          PILLAR 01
        </span>
      </div>

      <div>
        <p className="text-slate-700 font-body text-xs sm:text-sm leading-relaxed italic">
          &ldquo;To empower learners with innovative, industry-relevant education that blends creativity, technology, and practical skills Preparing them to excel in today&apos;s dynamic and competitive world.&rdquo;
        </p>
      </div>
    </div>
  );

  const renderMissionCard = () => (
    <div className="group relative h-full bg-gradient-to-b from-blue-50/50 via-white to-white rounded-2xl p-5 sm:p-6 border border-blue-200/90 shadow-sm hover:shadow-lg hover:border-blue-400 transition-all duration-300 flex flex-col justify-start">
      <div className="flex items-center justify-between gap-3 mb-3.5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0 group-hover:scale-105 transition-transform duration-300">
            <Compass className="w-4.5 h-4.5" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-bold text-slate-900 leading-tight">
              Mission
            </h3>
          </div>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-100/80 px-2 py-0.5 rounded-full border border-blue-200/60">
          PILLAR 02
        </span>
      </div>

      <div>
        <p className="text-slate-700 font-body text-xs sm:text-sm leading-relaxed italic">
          &ldquo;To be a leading center of excellence in creative and technical education, shaping future-ready professionals who drive innovation, embrace change, and make a positive impact globally.&rdquo;
        </p>
      </div>
    </div>
  );

  const renderValuesCard = () => (
    <div className="group relative h-full bg-gradient-to-b from-emerald-50/50 via-white to-white rounded-2xl p-5 sm:p-6 border border-emerald-200/90 shadow-sm hover:shadow-lg hover:border-emerald-400 transition-all duration-300 flex flex-col justify-start">
      <div className="flex items-center justify-between gap-3 mb-3.5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 shrink-0 group-hover:scale-105 transition-transform duration-300">
            <HeartHandshake className="w-4.5 h-4.5" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-bold text-slate-900 leading-tight">
              Core Values
            </h3>
          </div>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full border border-emerald-200/60">
          PILLAR 03
        </span>
      </div>

      <div className="pt-1">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-slate-700 font-body text-xs sm:text-sm leading-relaxed italic">
          {valuesList.map((val, idx) => (
            <div key={idx} className="inline-flex items-center gap-2">
              <span className="text-slate-800 font-medium whitespace-nowrap">{val}</span>
              {idx < valuesList.length - 1 && (
                <span className="text-emerald-600 font-bold select-none text-xs">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-10 md:py-14 px-4 md:px-8 lg:px-[80px] bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 text-foreground relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-slate-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header (Sparkle Icon Removed) */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <AnimateOnScroll delay={100}>
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-3">
              <span>Our Guiding Principles</span>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-normal text-slate-900 tracking-tight">
              Vision, mission & <span className="text-primary font-heading italic">core values</span>
            </h2>
          </AnimateOnScroll>
        </div>

        {/* Mobile Auto-Scrolling Horizontal Side Carousel (< md) */}
        <div className="block md:hidden">
          <div className="overflow-hidden relative rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeCardIndex * 100}%)` }}
            >
              <div className="w-full shrink-0 p-0.5">
                {renderVisionCard()}
              </div>
              <div className="w-full shrink-0 p-0.5">
                {renderMissionCard()}
              </div>
              <div className="w-full shrink-0 p-0.5">
                {renderValuesCard()}
              </div>
            </div>
          </div>

          {/* Carousel Slide Dots */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setActiveCardIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeCardIndex === idx ? 'w-6 bg-primary' : 'w-2 bg-slate-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop 3-Column Grid Layout (md:) */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 items-stretch">
          <AnimateOnScroll delay={300} className="h-full">
            {renderVisionCard()}
          </AnimateOnScroll>
          <AnimateOnScroll delay={400} className="h-full">
            {renderMissionCard()}
          </AnimateOnScroll>
          <AnimateOnScroll delay={500} className="h-full">
            {renderValuesCard()}
          </AnimateOnScroll>
        </div>

      </div>
    </section>
  );
};

export default VisionMissionValuesSection;
