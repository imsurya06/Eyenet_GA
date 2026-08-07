"use client";

import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { CheckCircle, Trophy, Presentation, Target, Award, Building, Scissors, Factory, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const ImpactByNumbersSection = () => {
  const highlights = [
    {
      title: '25+ Years of Excellence',
      subtitle: 'in Fashion Education',
      icon: CheckCircle,
    },
    {
      title: 'Winners of 10+ Awards',
      subtitle: 'in Inter-College Fashion Meets',
      icon: Trophy,
    },
    {
      title: 'Conducted Seminars & Workshops',
      subtitle: 'on Fashion Trends & Techniques',
      icon: Presentation,
    },
    {
      title: '100% Placement & Business Opportunities',
      subtitle: 'for Every Student',
      icon: Target,
    },
    {
      title: 'Government-Recognized Certification',
      subtitle: 'Valid and accredited credentials',
      icon: Award,
    },
    {
      title: 'MSME Registration',
      subtitle: 'Provided to Graduates',
      icon: Building,
    },
    {
      title: 'Hands-On Practical Training',
      subtitle: 'with Live Projects',
      icon: Scissors,
    },
    {
      title: 'Industrial Visits',
      subtitle: 'for Real-Time Fashion Industry Exposure',
      icon: Factory,
    },
    {
      title: 'Fashion CAD (AI-Powered)',
      subtitle: 'Learn the Future of Fashion Design',
      icon: Cpu,
    },
  ];

  return (
    <section className="bg-secondary/30 relative overflow-hidden pb-20 md:pb-28">
      {/* Full Width Video Section */}
      <div className="w-full aspect-[16/9] sm:aspect-auto sm:h-[45vh] md:h-[70vh] relative group overflow-hidden bg-black">
        <iframe
          src="https://player.vimeo.com/video/1213216123?background=1&autoplay=1&loop=1&muted=1&playsinline=1&autopause=0"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-[177.77vh] h-full sm:h-[56.25vw] min-w-full min-h-full pointer-events-none"
          title="Vimeo Background Video"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none"></div>
      </div>

      <div className="max-w-[85rem] 2xl:max-w-[90rem] mx-auto px-4 md:px-8 lg:px-12 relative z-10 -mt-10 sm:-mt-16 md:-mt-32">

        {/* Statistics & Intro Card - Overlapping Video */}
        <div className="bg-background rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 border border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6 lg:gap-12 mb-6 sm:mb-8 lg:mb-12">
            <AnimateOnScroll className="text-left">
              <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="uppercase tracking-widest text-xs text-muted-foreground font-medium font-body">Our Impact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold leading-tight mb-2 sm:mb-4 text-foreground">
                Results that speak <br />
                <span className="text-primary font-heading">louder than words</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100} className="flex items-center">
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed font-body">
                We define success by the achievements of our students and the mark they leave on the design world. From award-winning portfolios to industry-shaping careers, our impact is measured in real-world success.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Mobile 2-Row Infinite Carousel View */}
          <div className="lg:hidden flex flex-col gap-4 overflow-hidden py-4 -mx-6 px-6">
            {/* Row 1 Carousel */}
            <div className="overflow-hidden w-full relative">
              <div className="flex gap-4 w-max animate-scroll">
                {[...highlights.slice(0, 5), ...highlights.slice(0, 5), ...highlights.slice(0, 5)].map((item, index) => (
                  <div
                    key={`row1-${index}`}
                    className="w-[300px] sm:w-[340px] p-6 rounded-2xl bg-gradient-to-br from-white via-slate-50 to-slate-100/60 border border-slate-200/90 shadow-md flex flex-col justify-between text-left shrink-0"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-xs mb-4 shrink-0">
                      <item.icon strokeWidth={1.5} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-heading font-normal text-primary mb-1.5 leading-snug">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-xs sm:text-sm font-body text-slate-600 leading-snug">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 Carousel */}
            <div className="overflow-hidden w-full relative">
              <div className="flex gap-4 w-max animate-scroll-reverse">
                {[...highlights.slice(5), ...highlights.slice(5), ...highlights.slice(5), ...highlights.slice(5)].map((item, index) => (
                  <div
                    key={`row2-${index}`}
                    className="w-[300px] sm:w-[340px] p-6 rounded-2xl bg-gradient-to-br from-white via-slate-50 to-slate-100/60 border border-slate-200/90 shadow-md flex flex-col justify-between text-left shrink-0"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-xs mb-4 shrink-0">
                      <item.icon strokeWidth={1.5} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-heading font-normal text-primary mb-1.5 leading-snug">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-xs sm:text-sm font-body text-slate-600 leading-snug">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid grid-cols-3 gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <AnimateOnScroll key={index} delay={200 + (index * 75)} className="group h-full">
                <div className="p-3.5 sm:p-5 md:p-6 rounded-2xl bg-secondary/30 hover:bg-primary/5 hover:border-primary/20 border border-transparent transition-all duration-300 flex flex-col sm:flex-row items-start gap-2.5 sm:gap-4 h-full text-left">
                  <div className="mb-0 w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-background flex items-center justify-center text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <item.icon strokeWidth={1.5} className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-lg md:text-2xl font-heading font-normal text-primary mb-0.5 sm:mb-1 group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-xs sm:text-sm md:text-base font-body text-muted-foreground leading-snug">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ImpactByNumbersSection;