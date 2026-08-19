"use client";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  GraduationCap 
} from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import { useGalleryImages } from '@/context/GalleryImageContext';

const HeroSection = () => {
  const { images: galleryImages = [] } = useGalleryImages();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Fallback images if Sanity images loading
  const fallbackImages = [
    'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1542744094-3a317272018a?auto=format&fit=crop&q=80&w=1200',
  ];

  const validGalleryImages = galleryImages.filter(img => Boolean(img.src));

  const getOrderedSources = () => {
    if (validGalleryImages.length === 0) return fallbackImages;

    const redGowns: string[] = [];
    const rainbowSkirts: string[] = [];
    const greenBlouses: string[] = [];
    const lehengasAndDresses: string[] = [];
    const remainingPhotos: string[] = [];

    validGalleryImages.forEach(img => {
      const text = `${img.alt || ''} ${img.category || ''} ${img.src || ''}`.toLowerCase();
      if (text.includes('salwar') || text.includes('pattern') || text.includes('red') || text.includes('gown') || text.includes('stitching')) {
        redGowns.push(img.src);
      } else if (text.includes('rainbow') || text.includes('skirt') || text.includes('runway') || text.includes('exhibition') || text.includes('annual')) {
        rainbowSkirts.push(img.src);
      } else if (text.includes('aari') || text.includes('green') || text.includes('blouse') || text.includes('computer') || text.includes('lab') || text.includes('workshop')) {
        greenBlouses.push(img.src);
      } else if (text.includes('illustration') || text.includes('sketching') || text.includes('convocation') || text.includes('ceremony') || text.includes('painting') || text.includes('lehenga')) {
        lehengasAndDresses.push(img.src);
      } else {
        remainingPhotos.push(img.src);
      }
    });

    const combined = [
      ...greenBlouses,
      ...redGowns,
      ...lehengasAndDresses,
      ...rainbowSkirts,
      ...remainingPhotos,
    ];

    const uniqueSequence: string[] = [];
    combined.forEach(src => {
      if (!uniqueSequence.includes(src)) uniqueSequence.push(src);
    });
    validGalleryImages.forEach(img => {
      if (!uniqueSequence.includes(img.src)) uniqueSequence.push(img.src);
    });

    return uniqueSequence;
  };

  const displaySources = getOrderedSources();
  const totalCards = displaySources.length;

  // Continuous non-stop 3D Carousel loop (2.0 seconds per card)
  useEffect(() => {
    if (totalCards === 0) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalCards);
    }, 2000);

    return () => clearInterval(timer);
  }, [totalCards]);

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/70 text-foreground overflow-hidden py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-[80px]">
      
      {/* Ambient Lighting Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-r from-primary/5 via-rose-500/5 to-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* --- 1. SPLIT HEADER STAGE: HEADLINE ON LEFT, DESCRIPTION & CTAS ON RIGHT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-8 sm:mb-12">
          
          {/* LEFT COLUMN: Headline & Pill (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Left-Aligned Headline */}
            <AnimateOnScroll isHero={true} delay={200}>
              <h1 className="text-[32px] xs:text-[38px] sm:text-[44px] lg:text-[46px] xl:text-[54px] 2xl:text-[60px] font-heading font-normal text-slate-950 leading-[1.12] tracking-tight mb-3">
                <span className="block lg:whitespace-nowrap">Design your future with</span>
                <span className="text-primary font-heading italic font-semibold border-b-2 border-primary/20 pb-0.5 inline-block">
                  creative excellence
                </span>
              </h1>
            </AnimateOnScroll>

          </div>

          {/* RIGHT COLUMN: Description & CTAs (6 Cols) - Perfectly Aligned */}
          <div className="lg:col-span-6 flex flex-col items-start text-left lg:pb-1">
            
            {/* Description Paragraph */}
            <AnimateOnScroll isHero={true} delay={300}>
              <p className="text-base sm:text-lg lg:text-xl font-body text-slate-600 leading-relaxed mb-6">
                Madurai’s premier vocational academy empowering students with 100% practical studio education in <span className="font-semibold text-slate-900">Fashion Designing, Web Development with AI, Beautician & Makeup Course, UI/UX, CAD & Digital Arts</span>.
              </p>
            </AnimateOnScroll>

            {/* Two Call to Action Buttons */}
            <AnimateOnScroll isHero={true} delay={400} className="w-full">
              <div className="flex flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                <Button 
                  asChild 
                  className="px-6 sm:px-8 py-3.5 h-auto text-sm sm:text-base text-white bg-primary hover:bg-primary/95 rounded-full font-semibold shadow-md shadow-primary/20 hover:shadow-lg transition-all duration-300 group"
                >
                  <Link to="/courses" className="flex items-center gap-2">
                    <span>Explore Courses</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button 
                  variant="outline" 
                  asChild 
                  className="px-6 sm:px-8 py-3.5 h-auto text-sm sm:text-base text-slate-800 border border-slate-300 bg-white hover:bg-slate-50 rounded-full font-semibold shadow-2xs transition-all duration-300"
                >
                  <Link to="/contact">Request Info</Link>
                </Button>
              </div>
            </AnimateOnScroll>

          </div>

        </div>

      </div>

      {/* --- 2. PURE WHITE CREDIBILITY MARQUEE STRIP (BEFORE CAROUSEL) --- */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-8 sm:mb-12 py-3.5 bg-white text-slate-800 border-y border-slate-200/90 shadow-2xs overflow-hidden select-none">
        <style>{`
          @keyframes heroWhiteMarquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-hero-white-marquee {
            animation: heroWhiteMarquee 38s linear infinite;
            will-change: transform;
          }
        `}</style>
        <div className="flex w-max animate-hero-white-marquee items-center gap-8 sm:gap-12 text-xs font-bold uppercase tracking-widest text-slate-700">
          {/* Loop Set 1 */}
          <div className="flex items-center gap-8 sm:gap-12 shrink-0">
            <span className="flex items-center gap-2 text-primary font-bold"><Award className="w-4 h-4 text-primary" /> ESTABLISHED IN 2000</span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 25+ YEARS OF EXCELLENCE LEGACY</span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> MADURAI&apos;S PREMIER VOCATIONAL ACADEMY</span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-2"><GraduationCap className="w-4 h-4 text-slate-800" /> 100% PRACTICAL STUDIO EDUCATION</span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> INDUSTRY-FOCUSED CURRICULUM</span>
            <span className="text-slate-300">•</span>
          </div>

          {/* Loop Set 2 */}
          <div className="flex items-center gap-8 sm:gap-12 shrink-0">
            <span className="flex items-center gap-2 text-primary font-bold"><Award className="w-4 h-4 text-primary" /> ESTABLISHED IN 2000</span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 25+ YEARS OF EXCELLENCE LEGACY</span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> MADURAI&apos;S PREMIER VOCATIONAL ACADEMY</span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-2"><GraduationCap className="w-4 h-4 text-slate-800" /> 100% PRACTICAL STUDIO EDUCATION</span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> INDUSTRY-FOCUSED CURRICULUM</span>
            <span className="text-slate-300">•</span>
          </div>
        </div>
      </div>

      {/* --- 3. FULL-BLEED 3D PERSPECTIVE CAROUSEL (1S CONTINUOUS LOOP, 5 MOBILE CARDS, SMALL CORNER RADIUS) --- */}
      <AnimateOnScroll isHero={true} delay={500} className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
        <div className="relative w-full overflow-hidden py-4 sm:py-8 select-none">
          
          {/* 3D Stage Container */}
          <div className="relative w-full h-[340px] xs:h-[390px] sm:h-[450px] md:h-[510px] lg:h-[550px] flex items-center justify-center [perspective:1400px] [perspective-origin:50%_50%]">
            
            {displaySources.map((src, idx) => {
              let rawOffset = idx - activeIndex;
              if (rawOffset > totalCards / 2) rawOffset -= totalCards;
              if (rawOffset < -totalCards / 2) rawOffset += totalCards;

              // Render up to 5 cards on mobile (1 center + 2 left + 2 right) and 9 on desktop
              const maxOffset = typeof window !== 'undefined' && window.innerWidth < 640 ? 2 : 4;
              const isVisible = Math.abs(rawOffset) <= maxOffset;
              if (!isVisible) return null;

              const isCenter = rawOffset === 0;

              // Responsive 3D transform calculations
              let rotateY = 0;
              let translateZ = 0;
              let translateX = 0;
              let scale = 1;
              let zIndex = 30;
              let opacity = 1;

              const isSmallMobile = typeof window !== 'undefined' && window.innerWidth < 640;

              if (rawOffset === 0) {
                // Center Active Card
                rotateY = 0;
                translateZ = 0;
                translateX = 0;
                scale = isSmallMobile ? 1.05 : 1.08;
                zIndex = 50;
                opacity = 1;
              } else if (rawOffset === 1) {
                rotateY = isSmallMobile ? -16 : -24;
                translateZ = isSmallMobile ? -50 : -90;
                translateX = isSmallMobile ? 135 : 360;
                scale = isSmallMobile ? 0.86 : 0.92;
                zIndex = 40;
                opacity = isSmallMobile ? 0.85 : 0.95;
              } else if (rawOffset === 2) {
                rotateY = isSmallMobile ? -30 : -38;
                translateZ = isSmallMobile ? -110 : -180;
                translateX = isSmallMobile ? 250 : 700;
                scale = isSmallMobile ? 0.72 : 0.78;
                zIndex = 30;
                opacity = isSmallMobile ? 0.65 : 0.8;
              } else if (rawOffset === 3) {
                rotateY = -52;
                translateZ = -280;
                translateX = 1040;
                scale = 0.65;
                zIndex = 20;
                opacity = 0.65;
              } else if (rawOffset === 4) {
                rotateY = -64;
                translateZ = -380;
                translateX = 1380;
                scale = 0.52;
                zIndex = 10;
                opacity = 0.45;
              } else if (rawOffset === -1) {
                rotateY = isSmallMobile ? 16 : 24;
                translateZ = isSmallMobile ? -50 : -90;
                translateX = isSmallMobile ? -135 : -360;
                scale = isSmallMobile ? 0.86 : 0.92;
                zIndex = 40;
                opacity = isSmallMobile ? 0.85 : 0.95;
              } else if (rawOffset === -2) {
                rotateY = isSmallMobile ? 30 : 38;
                translateZ = isSmallMobile ? -110 : -180;
                translateX = isSmallMobile ? -250 : -700;
                scale = isSmallMobile ? 0.72 : 0.78;
                zIndex = 30;
                opacity = isSmallMobile ? 0.65 : 0.8;
              } else if (rawOffset === -3) {
                rotateY = 52;
                translateZ = -280;
                translateX = -1040;
                scale = 0.65;
                zIndex = 20;
                opacity = 0.65;
              } else if (rawOffset === -4) {
                rotateY = 64;
                translateZ = -380;
                translateX = -1380;
                scale = 0.52;
                zIndex = 10;
                opacity = 0.45;
              }

              return (
                <div
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className="absolute top-1/2 left-1/2 transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    zIndex,
                    opacity,
                    transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* High-End Studio Card (Clean Corner Radius & Subtle Studio Shadow) */}
                  <div className="relative w-[230px] xs:w-[270px] sm:w-[320px] md:w-[380px] h-[320px] xs:h-[370px] sm:h-[430px] md:h-[490px] bg-slate-900 border border-slate-200/80 shadow-lg rounded-2xl overflow-hidden group">
                    
                    {/* Vivid Creative Work Photo */}
                    <img
                      src={src}
                      alt={`Eyenet Creative Work ${idx + 1}`}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Subtle Gradient Shadow Base */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none rounded-2xl" />

                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </AnimateOnScroll>

    </section>
  );
};

export default HeroSection;
