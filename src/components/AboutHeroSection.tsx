"use client";

import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import DynamicGalleryCarouselSection from './DynamicGalleryCarouselSection';

const AboutHeroSection = () => {
  return (
    <section className="pt-2 sm:pt-4 pb-6 sm:pb-8 px-4 md:px-8 lg:px-[80px] bg-background text-foreground">
      <div className="max-w-7xl mx-auto">

        {/* Main Title and Subtitle - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-1 sm:mb-2">
          <AnimateOnScroll isHero={true} delay={100}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal leading-tight text-slate-900 tracking-tight mb-1.5">
              <span className="font-sans font-extrabold text-slate-950 tracking-normal mr-2">Eye-Net</span>
              A creative <span className="text-primary font-heading italic">Educational Academy</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll isHero={true} delay={200}>
            <p className="text-lg sm:text-xl md:text-2xl font-heading font-normal text-slate-700 tracking-wide max-w-2xl mx-auto leading-relaxed">
              Where creativity creates <span className="text-primary font-heading italic font-semibold border-b-2 border-primary/30 pb-0.5">career.</span>
            </p>
          </AnimateOnScroll>
        </div>

        {/* Hero Showcase 3D Perspective Carousel */}
        <div className="mb-2 sm:mb-4 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-0">
          <DynamicGalleryCarouselSection hideHeading={true} withButton={false} variant="3d" />
        </div>

        {/* Wide Full-Width Narrative Text Card */}
        <div className="w-full max-w-7xl mx-auto bg-slate-50/80 p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl border border-slate-200/80 text-left shadow-xs">
          <AnimateOnScroll delay={300}>
            <h2 className="text-2xl md:text-3xl font-heading font-normal text-slate-900 mb-4">
              Shaping confident & <span className="text-primary font-heading italic">skilled designers</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <p className="text-base font-body text-slate-600 leading-relaxed text-justify mb-4">
              Eye-Net Educational Academy, a franchise of <strong className="font-semibold text-slate-900">NCFT Heights</strong>, a leading vocational training institute in Madurai with 25+ years of excellence in skill-based education. Established in 2000, we provide industry-focused training in <strong className="font-semibold text-slate-900">Fashion Designing</strong>, <strong className="font-semibold text-slate-900">Web Developement with AI</strong>, <strong className="font-semibold text-slate-900">Beautician Training</strong>, <strong className="font-semibold text-slate-900">Computer Applications</strong>, <strong className="font-semibold text-slate-900">CAD</strong>, <strong className="font-semibold text-slate-900">Graphic Design</strong>, <strong className="font-semibold text-slate-900">UI/UX</strong>, <strong className="font-semibold text-slate-900">Digital Marketing</strong>, <strong className="font-semibold text-slate-900">Generative AI</strong>, and more.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={500}>
            <p className="text-base font-body text-slate-600 leading-relaxed text-justify">
              With more than two decades of experience in vocational education, Eye-Net Educational Academy has established itself as a trusted and distinctive institution for students and aspiring professionals seeking job-oriented and business-oriented courses. Over the years, the Academy has continuously grown in reputation, quality, and professional excellence.
            </p>
          </AnimateOnScroll>
        </div>

      </div>
    </section>
  );
};

export default AboutHeroSection;