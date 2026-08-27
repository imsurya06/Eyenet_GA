"use client";

import React, { useRef } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { Handshake } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const collaborationPartners = [
  {
    name: 'SBS Studio',
    tagline: 'Creative & Media Partner',
    description: 'Offering hands-on practical training, portfolio mentoring, and industry placement assistance.',
    src: '/images/sbs-logo.png',
    category: 'Media & Production',
  },
  {
    name: 'Thugil Couture',
    tagline: 'Fashion & Apparel Partner',
    description: 'Providing exclusive internship opportunities, garment construction workshops, and runway showcases.',
    src: '/images/thugil-couture.png',
    category: 'Fashion Industry',
  },
  {
    name: 'Fashion Dazzling',
    tagline: 'Couture & Styling Partner',
    description: 'Collaborating on live student design projects, trend forecasting, and fashion exhibition events.',
    src: '/images/fashion-dazzling.png',
    category: 'Design Studio',
  },
  {
    name: 'Grafino',
    tagline: 'Technology & Digital Partner',
    description: 'Empowering students with modern web engineering, AI tools, UI/UX workshops, and digital branding solutions.',
    src: '/images/grafino-logo.png',
    category: 'Tech Partner',
  },
];

const CollaborationsSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 2800, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <section
      id="collaborations-section"
      className="pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-6 md:pb-8 px-4 md:px-8 lg:px-[80px] bg-gradient-to-b from-background via-muted/40 to-background text-foreground relative overflow-hidden"
    >
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <AnimateOnScroll delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Handshake className="w-3.5 h-3.5" />
              <span>Industry Network</span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal mb-4 tracking-tight">
              Our industry <span className="text-primary font-heading">collaborations</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <p className="text-base md:text-lg font-body text-gray-600 dark:text-gray-300 leading-relaxed">
              We proudly partner with leading fashion houses, creative studios, and industry pioneers to provide real-world exposure, internships, and career opportunities for our students.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Desktop Grid Layout (4 Centered Cards) */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch justify-center max-w-7xl mx-auto py-4">
          {collaborationPartners.map((partner, index) => (
            <AnimateOnScroll key={partner.name} delay={150 + index * 150} className="h-full">
              <div className="group relative h-full bg-card/80 backdrop-blur-md rounded-2xl p-8 border border-border/60 hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1.5">
                {/* Accent top gradient bar */}
                <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                {/* Logo Frame */}
                <div className="relative mb-6">
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300"
                  />
                  <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-muted text-[10px] font-medium text-gray-600 border border-border whitespace-nowrap shadow-xs">
                    {partner.category}
                  </span>
                </div>

                {/* Partner Details */}
                <h3 className="text-xl font-heading font-normal text-foreground mb-1 group-hover:text-primary transition-colors">
                  {partner.name}
                </h3>
                <p className="text-xs font-semibold text-primary/80 uppercase tracking-wide mb-3 font-body">
                  {partner.tagline}
                </p>
                <p className="text-sm font-body text-gray-600 dark:text-gray-300 leading-relaxed mt-auto">
                  {partner.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Mobile View: Embla Carousel with Autoplay + Touch Swipe (Hidden on Desktop) */}
        <div className="lg:hidden w-full relative py-2">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 py-6">
              {collaborationPartners.map((partner, index) => (
                <CarouselItem key={`${partner.name}-${index}`} className="pl-3 basis-[88%] sm:basis-[340px]">
                  <div className="group relative h-full bg-white backdrop-blur-md rounded-3xl p-7 border border-slate-200/80 shadow-md flex flex-col items-center text-center justify-between">
                    {/* Logo Frame */}
                    <div className="relative mb-5">
                      <img
                        src={partner.src}
                        alt={partner.name}
                        className="w-24 h-24 object-cover rounded-full shadow-md"
                      />
                      <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-medium text-slate-700 border border-slate-200 whitespace-nowrap shadow-xs">
                        {partner.category}
                      </span>
                    </div>

                    {/* Partner Details */}
                    <div>
                      <h3 className="text-xl font-heading font-normal text-slate-900 mb-1">
                        {partner.name}
                      </h3>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-3 font-body">
                        {partner.tagline}
                      </p>
                      <p className="text-xs sm:text-sm font-body text-slate-600 leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;