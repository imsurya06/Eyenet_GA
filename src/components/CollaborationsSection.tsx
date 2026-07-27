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
      {/* Decorative subtle ambient backdrop glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <AnimateOnScroll delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Handshake className="w-3.5 h-3.5" />
              <span>Industry Network</span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 tracking-tight">
              Our Industry <span className="text-primary font-heading">Collaborations</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <p className="text-base md:text-lg font-body text-gray-600 dark:text-gray-300 leading-relaxed">
              We proudly partner with leading fashion houses, creative studios, and industry pioneers to provide real-world exposure, internships, and career opportunities for our students.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Grid of Elevated Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {collaborationPartners.map((partner, index) => (
            <AnimateOnScroll key={partner.name} delay={300 + index * 150}>
              <div className="group relative h-full bg-card/80 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-border/60 hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1.5">
                {/* Accent top gradient bar */}
                <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                {/* Logo Frame */}
                <div className="relative mb-6">
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full p-2.5 bg-white shadow-md border border-gray-100 dark:border-gray-800 flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
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
                <h3 className="text-xl font-heading font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {partner.name}
                </h3>
                <p className="text-xs font-semibold text-primary/80 uppercase tracking-wide mb-3">
                  {partner.tagline}
                </p>
                <p className="text-sm font-body text-gray-600 dark:text-gray-300 leading-relaxed mt-auto">
                  {partner.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;