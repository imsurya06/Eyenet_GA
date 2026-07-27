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
      <div className="w-full h-[50vh] md:h-[70vh] relative group overflow-hidden bg-black">
        <iframe
          src="https://player.vimeo.com/video/1213216123?autoplay=1&loop=1&muted=1&background=1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] min-w-full h-[56.25vw] min-h-full pointer-events-none"
          title="Vimeo Background Video"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>
      </div>

      <div className="max-w-[85rem] 2xl:max-w-[90rem] mx-auto px-4 md:px-8 lg:px-12 relative z-10 -mt-20 md:-mt-32">

        {/* Statistics & Intro Card - Overlapping Video */}
        <div className="bg-background rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 border border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <AnimateOnScroll className="text-left">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="uppercase tracking-widest text-xs text-muted-foreground font-medium font-body">Our Impact</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-4 text-foreground">
                Results that speak <br />
                <span className="text-primary font-heading">louder than words</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100} className="flex items-center">
              <p className="text-lg text-muted-foreground leading-relaxed font-body">
                We define success by the achievements of our students and the mark they leave on the design world. From award-winning portfolios to industry-shaping careers, our impact is measured in real-world success.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <AnimateOnScroll key={index} delay={200 + (index * 75)} className="group h-full">
                <div className="p-5 md:p-6 rounded-2xl bg-secondary/30 hover:bg-primary/5 hover:border-primary/20 border border-transparent transition-all duration-300 flex items-start gap-4 h-full text-left">
                  <div className="mb-0 w-12 h-12 rounded-xl bg-background flex items-center justify-center text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <item.icon strokeWidth={1.5} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-1 group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-sm md:text-base font-body text-muted-foreground leading-normal">
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