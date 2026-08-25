"use client";

import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import DynamicGalleryCarouselSection from './DynamicGalleryCarouselSection';

const AboutHeroSection = () => {
  return (
    <section className="py-4 sm:py-6 md:py-8 px-4 md:px-8 lg:px-[80px] bg-background text-foreground min-h-[calc(100dvh-125px)] max-h-[none] lg:max-h-[calc(100dvh-80px)] flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full my-auto">
        
        {/* Main Title and Subtitle - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-4 md:mb-6">
          <AnimateOnScroll isHero={true} delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-2">
              <span>About Eye-Net</span>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll isHero={true} delay={200}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-normal leading-tight text-slate-900 tracking-tight mb-2">
              Eye-Net: A creative <span className="text-primary font-heading italic">Educational Academy</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll isHero={true} delay={300}>
            <p className="text-base sm:text-lg md:text-xl font-heading font-normal text-slate-700 tracking-wide mt-2 max-w-2xl mx-auto leading-relaxed">
              Where creativity creates <span className="text-primary font-heading italic font-semibold border-b-2 border-primary/30 pb-0.5">career.</span>
            </p>
          </AnimateOnScroll>
        </div>

        {/* Hero Showcase 3D Perspective Carousel (Adaptive Viewport Height Fitted) */}
        <div className="mb-6 md:mb-8 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden max-h-[min(480px,calc(100dvh-200px))] flex items-center justify-center">
          <DynamicGalleryCarouselSection hideHeading={true} withButton={false} variant="3d" />
        </div>

      </div>
    </section>
  );
};

export default AboutHeroSection;