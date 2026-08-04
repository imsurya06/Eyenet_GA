"use client";

import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { Handshake } from 'lucide-react';

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
];

const CollaborationsSection = () => {
  return (
    <section
      id="collaborations-section"
      className="py-16 md:py-24 px-4 md:px-8 lg:px-[80px] bg-gradient-to-b from-background via-muted/40 to-background text-foreground relative overflow-hidden"
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
              Our Industry <span className="text-primary font-heading">Collaborations</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <p className="text-base md:text-lg font-body text-gray-600 dark:text-gray-300 leading-relaxed">
              We proudly partner with leading fashion houses, creative studios, and industry pioneers to provide real-world exposure, internships, and career opportunities for our students.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Desktop Grid Layout (3 Centered Cards, No Indicators) */}
        <div className="hidden lg:grid grid-cols-3 gap-8 items-stretch justify-center max-w-7xl mx-auto py-4">
          {collaborationPartners.map((partner, index) => (
            <AnimateOnScroll key={partner.name} delay={150 + index * 150} className="h-full">
              <div className="group relative h-full bg-card/80 backdrop-blur-md rounded-2xl p-8 border border-border/60 hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1.5">
                {/* Accent top gradient bar */}
                <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                {/* Logo Frame */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full p-2.5 bg-white shadow-md border border-gray-100 dark:border-gray-800 flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    <img
                      src={partner.src}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain p-1 rounded-full"
                    />
                  </div>
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

        {/* Mobile Full Infinite Continuous Carousel Animation */}
        <div className="lg:hidden overflow-hidden w-full relative py-4 -mx-4 px-4">
          <div className="flex gap-5 w-max animate-scroll">
            {[...collaborationPartners, ...collaborationPartners, ...collaborationPartners, ...collaborationPartners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="w-[280px] sm:w-[320px] shrink-0"
              >
                <div className="group relative h-full bg-card/80 backdrop-blur-md rounded-2xl p-6 border border-border/60 shadow-md flex flex-col items-center text-center">
                  {/* Logo Frame */}
                  <div className="relative mb-5">
                    <div className="w-24 h-24 rounded-full p-2 bg-white shadow-md border border-gray-100 flex items-center justify-center">
                      <img
                        src={partner.src}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain p-1 rounded-full"
                      />
                    </div>
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-muted text-[10px] font-medium text-gray-600 border border-border whitespace-nowrap">
                      {partner.category}
                    </span>
                  </div>

                  {/* Partner Details */}
                  <h3 className="text-lg font-heading font-normal text-foreground mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-xs font-semibold text-primary/80 uppercase tracking-wide mb-2 font-body">
                    {partner.tagline}
                  </p>
                  <p className="text-xs font-body text-gray-600 dark:text-gray-300 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;