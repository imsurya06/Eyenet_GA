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
              Eyenet: A creative <span className="text-primary font-heading italic">Educational Academy</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll isHero={true} delay={300}>
            <p className="text-lg sm:text-xl md:text-2xl font-heading font-normal text-slate-700 tracking-wide mt-3 max-w-2xl mx-auto leading-relaxed">
              Where creativity creates <span className="text-primary font-heading italic font-semibold border-b-2 border-primary/30 pb-0.5">career.</span>
            </p>
          </AnimateOnScroll>
        </div>

        {/* 2-Column Balanced Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mb-12 md:mb-16">
          <AnimateOnScroll isHero={true} delay={400} className="w-full h-[300px] sm:h-[380px] md:h-[440px] overflow-hidden rounded-2xl shadow-md border border-slate-200/80">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200"
              alt="Eyenet Creative Design Studio Lab"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </AnimateOnScroll>

          <AnimateOnScroll isHero={true} delay={500} className="w-full h-[300px] sm:h-[380px] md:h-[440px] overflow-hidden rounded-2xl shadow-md border border-slate-200/80">
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200"
              alt="Eyenet Fashion Atelier Workspace"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
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
              Eye-net Educational Academy is a leading vocational training institute in Madurai with 25+ years of excellence in skill-based education. Established in 2000, we provide industry-focused training in Fashion Designing, Web Developement with AI, Beautician Training, Computer Applications, CAD, Graphic Design, UI/UX, Digital Marketing, Generative AI, and more.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={800}>
            <p className="text-base font-body text-slate-600 leading-relaxed">
              Our mission is to transform passion into professional skills through practical training, industry exposure, expert guidance, and career-oriented education. With a strong commitment to quality and innovation, Eye-net continues to empower students, entrepreneurs, and aspiring professionals to learn, create, and build successful careers.
            </p>
          </AnimateOnScroll>
        </div>

      </div>
    </section>
  );
};

export default AboutHeroSection;