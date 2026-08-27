"use client";

import React, { useRef } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { Award, ThumbsUp, Star, Sparkles } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const WhyChooseUsSection = () => {
  const stats = [
    {
      value: '25+',
      label: 'Years of Experience',
      icon: Award,
      description: 'Decades of excellence in creative design education & practical mentorship.',
    },
    {
      value: '85%',
      label: 'Student Satisfaction',
      icon: ThumbsUp,
      description: 'Consistently rated high by our students for curriculum & environment.',
    },
    {
      value: '90%',
      label: 'Industry Recognition',
      icon: Star,
      description: 'Endorsed by leading studios, fashion partners & creative employers.',
    },
  ];

  const plugin = useRef(
    Autoplay({ delay: 1600, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <section className="py-4 sm:py-6 md:py-8 px-4 md:px-8 lg:px-[80px] bg-gradient-to-b from-slate-50/60 via-slate-100/40 to-slate-50/60 text-center relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Badge */}
        <AnimateOnScroll delay={100}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-3">
            <span>Why Choose Us</span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <h2 className="text-3xl md:text-4xl font-heading font-normal text-slate-900 mb-4 md:mb-6 tracking-tight">
            Excellence Backed by <span className="text-primary font-heading italic">Proven Impact</span>
          </h2>
        </AnimateOnScroll>

        {/* --- MOBILE VIEW: Infinite Auto-Scroll Carousel (Option 3) --- */}
        <div className="md:hidden w-full relative py-2 mb-4">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 flex py-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <CarouselItem key={index} className="pl-3 basis-[85%] sm:basis-[320px] flex">
                    <div className="group relative h-full bg-white rounded-3xl p-7 border border-slate-200/80 shadow-md flex flex-col items-center text-center w-full">
                      {/* Top Accent Line */}
                      <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-full" />

                      {/* Icon Frame */}
                      <div className="w-13 h-13 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      {/* Stat Number */}
                      <h3 className="text-4xl font-heading font-normal text-primary mb-1.5 tracking-tight">
                        {stat.value}
                      </h3>

                      {/* Stat Label */}
                      <p className="text-base font-heading font-normal text-slate-900 mb-2">
                        {stat.label}
                      </p>

                      {/* Description */}
                      <p className="text-xs font-body text-slate-500 leading-relaxed mt-auto">
                        {stat.description}
                      </p>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>

        {/* --- DESKTOP VIEW: 3 Elevated Feature Cards --- */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8 items-stretch max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <AnimateOnScroll key={index} delay={250 + index * 150} className="h-full">
                <div className="group relative h-full bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center">
                  
                  {/* Top Subtle Gradient Accent Line */}
                  <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                  {/* Icon Frame */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-7 h-7 transition-colors" />
                  </div>

                  {/* Stat Number */}
                  <h3 className="text-4xl md:text-5xl font-heading font-normal text-primary mb-2 tracking-tight">
                    {stat.value}
                  </h3>

                  {/* Stat Label */}
                  <p className="text-lg font-heading font-normal text-slate-900 mb-3">
                    {stat.label}
                  </p>

                  {/* Description */}
                  <p className="text-xs font-body text-slate-500 leading-relaxed mt-auto">
                    {stat.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;