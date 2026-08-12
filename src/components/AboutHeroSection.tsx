"use client";

import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const AboutHeroSection = () => {
  return (
    <section className="py-10 md:py-16 px-4 md:px-8 lg:px-[80px] bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Title and Subtitle - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <AnimateOnScroll isHero={true} delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-4">
              <span>About Eyenet</span>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll isHero={true} delay={200}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal leading-tight text-slate-900 tracking-tight mb-3">
              Eyenet: A creative <span className="text-primary font-heading italic">educational academy</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll isHero={true} delay={300}>
            <p className="text-base md:text-lg font-body text-slate-600">
              Where creativity creates career.
            </p>
          </AnimateOnScroll>
        </div>

        {/* 2-Column Balanced Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mb-12 md:mb-16">
          <AnimateOnScroll isHero={true} delay={400} className="w-full h-[300px] sm:h-[380px] md:h-[440px] overflow-hidden rounded-2xl shadow-md border border-slate-200/80">
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200"
              alt="Eyenet Creative Fashion Design"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </AnimateOnScroll>

          <AnimateOnScroll isHero={true} delay={500} className="w-full h-[300px] sm:h-[380px] md:h-[440px] overflow-hidden rounded-2xl shadow-md border border-slate-200/80">
            <img
              src="https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80&w=1200"
              alt="Eyenet Fashion & Design Studio"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </AnimateOnScroll>
        </div>

        {/* Clean Balanced Narrative Text Card */}
        <div className="max-w-4xl mx-auto bg-slate-50/80 p-8 sm:p-10 md:p-12 rounded-3xl border border-slate-200/80 text-left shadow-xs">
          <AnimateOnScroll delay={600}>
            <h2 className="text-2xl md:text-3xl font-heading font-normal text-slate-900 mb-5">
              Shaping confident & <span className="text-primary font-heading italic">skilled designers</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={700}>
            <p className="text-base font-body text-slate-600 leading-relaxed mb-5">
              For over 25 years, Eyenet Institute has been a beacon for creative minds, providing unparalleled training in fashion design, graphic design, and mastery of modern tools like Photoshop and Illustrator. Our commitment is to bridge creativity with industry expertise, transforming passion into a professional career.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={800}>
            <p className="text-base font-body text-slate-600 leading-relaxed">
              Guided by our Founder and Director's vision, we shape students into confident and skilled professionals through hands-on training, industry-relevant courses, and practical projects that mirror real-world design challenges. Our teaching approach integrates creativity, technology, and professional discipline, ensuring every student develops the confidence to excel in today's fast-paced and highly competitive design world.
            </p>
          </AnimateOnScroll>
        </div>

      </div>
    </section>
  );
};

export default AboutHeroSection;