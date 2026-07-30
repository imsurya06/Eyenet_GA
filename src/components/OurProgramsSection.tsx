"use client";

import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Clock, Award } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import NCFTLogo from './NCFTLogo';

const OurProgramsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const programs = [
    {
      image: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80&w=1000',
      title: 'Fashion Design',
      category: 'Creative Arts',
      duration: 'Diploma / Certificate',
      description: 'Master garment sketching, haute couture pattern making, textile selection, and runway fashion creation.',
      href: '/courses?category=fashion',
      badge: 'Popular'
    },
    {
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000',
      title: 'Computer Courses',
      category: 'Information Tech',
      duration: 'Short & Advanced Terms',
      description: 'Master essential office software, CAD, graphic design tools, web basics, and modern IT utilities.',
      href: '/courses?category=computer',
      badge: 'High Demand'
    },
    {
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000',
      title: 'Photography',
      category: 'Visual Media',
      duration: 'Practical Hands-on',
      description: 'Master studio lighting, camera mechanics, framing, portraiture, and commercial studio photography.',
      href: '/courses?category=photography',
      badge: 'Professional'
    },
    {
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1000',
      title: 'Multimedia Training',
      category: 'Digital Production',
      duration: 'Studio Oriented',
      description: 'Explore video editing suite, motion graphics timeline, 2D/3D animation, and digital post-production.',
      href: '/courses?category=multimedia',
      badge: 'Industry Standard'
    },
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000',
      title: 'Spoken English',
      category: 'Skill Enhancement',
      duration: 'Interactive Batches',
      description: 'Enhance your verbal fluency, corporate communication etiquette, public speaking, and self-confidence.',
      href: '/courses?category=spoken-english',
      badge: 'Career Boost'
    },
    {
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000',
      title: 'Beautician & Cosmetology',
      category: 'Personal Care',
      duration: 'Certified Program',
      description: 'Learn professional makeup artistry, hair styling, bridal aesthetics, skin therapy, and cosmetology.',
      href: '/courses?category=beautician',
      badge: 'Certified'
    },
  ];

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.firstElementChild?.clientWidth || 280;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), programs.length - 1));
  };

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const child = container.children[index] as HTMLElement;
    if (child) {
      container.scrollTo({
        left: child.offsetLeft - container.offsetLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-14 md:py-20 lg:py-24 px-4 md:px-8 lg:px-[80px] bg-gradient-to-b from-slate-50 via-slate-100/40 to-slate-50 text-center overflow-hidden">
      <NCFTLogo className="bg-transparent py-0 md:py-0 lg:py-0 mb-2" />
      
      <AnimateOnScroll delay={100}>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-4">
          <span>Our Programs</span>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={200}>
        <h2 className="text-h2-mobile md:text-h2-desktop font-heading mb-4 max-w-4xl mx-auto text-slate-900 font-extrabold tracking-tight">
          Comprehensive design courses for <span className="text-primary font-heading italic font-serif">aspiring creatives</span>
        </h2>
        <p className="text-slate-600 font-body text-base md:text-lg max-w-2xl mx-auto mb-10 md:mb-14">
          Industry-aligned vocational and professional programs crafted to transform passion into successful creative careers.
        </p>
      </AnimateOnScroll>

      {/* Responsive Cards: Horizontal Scroll Carousel on Mobile, 3-Column Grid on Desktop */}
      <div className="relative max-w-7xl mx-auto mb-10 md:mb-16">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar px-4 -mx-4 md:px-0 md:mx-0 py-3"
        >
          {programs.map((program, index) => (
            <div
              key={index}
              className="w-[85vw] sm:w-[340px] md:w-auto shrink-0 md:shrink snap-center h-full"
            >
              <AnimateOnScroll delay={150 + index * 75}>
                <Link to={program.href} className="block group h-full">
                  <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-primary/40 hover:-translate-y-2 transition-all duration-500 text-left">
                    
                    {/* Premium Image Container */}
                    <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-slate-900">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10 opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                      
                      {/* Category Badge - Top Left */}
                      <span className="absolute top-3 left-3 z-20 bg-white/90 backdrop-blur-md text-slate-900 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm border border-white/50 tracking-wide uppercase">
                        {program.category}
                      </span>

                      {/* Tag Badge - Top Right */}
                      <span className="absolute top-3 right-3 z-20 bg-primary/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-sm">
                        {program.badge}
                      </span>

                      {/* Program Title inside image overlay for high readability */}
                      <div className="absolute bottom-3 left-4 right-4 z-20">
                        <span className="text-white/80 text-xs flex items-center gap-1 font-medium mb-0.5">
                          <Award className="w-3.5 h-3.5 text-primary-foreground/90" />
                          {program.duration}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6 flex flex-col flex-grow bg-white">
                      <h3 className="text-xl font-heading font-bold text-slate-900 group-hover:text-primary transition-colors duration-300 mb-2 flex items-center justify-between">
                        <span>{program.title}</span>
                      </h3>
                      
                      <p className="text-sm font-body text-slate-600 leading-relaxed mb-6 flex-grow line-clamp-3">
                        {program.description}
                      </p>

                      {/* Card Footer CTA */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-primary group-hover:text-primary/90 transition-colors">
                        <span>Explore Program</span>
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>

                  </div>
                </Link>
              </AnimateOnScroll>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicators */}
        <div className="flex flex-col items-center gap-2 mt-6 md:hidden">
          <div className="flex items-center justify-center gap-1.5">
            {programs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToCard(idx)}
                aria-label={`Go to program ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-7 bg-primary' : 'w-2 bg-slate-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-slate-500 font-medium">Swipe to explore ({activeIndex + 1}/{programs.length})</span>
        </div>
      </div>

      <AnimateOnScroll delay={100}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="px-8 py-3.5 text-base font-semibold bg-primary text-white hover:bg-primary/90 rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-105">
            <Link to="/courses">View All Courses</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8 py-3.5 text-base font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full transition-all">
            <Link to="/contact">
              Request Details <ArrowRight className="ml-2 h-4 w-4 inline-block" />
            </Link>
          </Button>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default OurProgramsSection;