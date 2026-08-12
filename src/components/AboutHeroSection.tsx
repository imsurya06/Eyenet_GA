"use client";

import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { Sparkles, Award, Users, BookOpen, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutHeroSection = () => {
  return (
    <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 px-4 md:px-8 lg:px-[80px] bg-gradient-to-b from-slate-50 via-slate-100/50 to-white text-foreground overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- SECTION 1: EDITORIAL HEADER --- */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <AnimateOnScroll isHero={true} delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-xs uppercase tracking-widest mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ESTABLISHED FOR OVER 25 YEARS</span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll isHero={true} delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal leading-tight text-slate-900 tracking-tight mb-6">
              Bridging <span className="font-heading italic text-primary">Creative Vision</span> With Real-World Industry Mastery
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll isHero={true} delay={300}>
            <p className="text-base md:text-xl font-body text-slate-600 max-w-2xl mx-auto leading-relaxed">
              At Eyenet Educational Academy, we empower aspiring designers, artists, and innovators through immersive hands-on training and career-ready mentorship.
            </p>
          </AnimateOnScroll>
        </div>

        {/* --- SECTION 2: ASYMMETRIC CREATIVE BENTO COMPOSITION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-16 md:mb-24">
          
          {/* Main Hero Card (7 Cols) */}
          <div className="lg:col-span-7 relative group">
            <AnimateOnScroll isHero={true} delay={400} className="w-full h-[320px] sm:h-[420px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 relative">
              <img
                src="https://i.pinimg.com/1200x/2d/53/0a/2d530a0fe0031327fb20c99d8b30dadb.jpg"
                alt="Eyenet Creative Fashion Design"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10" />

              {/* Floating Headline Overlay inside image */}
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium uppercase tracking-wider mb-2 border border-white/30">
                  Fashion & Design Studio
                </span>
                <h3 className="text-xl sm:text-2xl font-heading text-white font-normal leading-snug">
                  Where Passion Transforms Into Professional Couture
                </h3>
              </div>
            </AnimateOnScroll>

            {/* Overlapping Glassmorphic Stat Pill (Bottom Left) */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 z-30 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-slate-200/80 items-center gap-4 max-w-xs">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900 font-heading leading-none mb-1">25+ Years</p>
                <p className="text-xs font-body text-slate-600">Legacy of educational excellence & innovation</p>
              </div>
            </div>
          </div>

          {/* Secondary Editorial Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 relative">
            <AnimateOnScroll isHero={true} delay={500} className="w-full h-[280px] sm:h-[360px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 relative group">
              <img
                src="https://i.pinimg.com/736x/fe/4b/0f/fe4b0f20b80ccdfdcb0dc1803242d3a5.jpg"
                alt="Eyenet Design Model"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent z-10" />

              {/* Floating Card Badge (Top Right) */}
              <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-white/50 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-900">100% Studio Practical</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <p className="text-xs uppercase tracking-widest text-white/80 font-semibold mb-1">Creative Mentorship</p>
                <p className="text-base font-heading font-normal text-white">Expert Guidance Every Step of the Way</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* --- SECTION 3: KEY ACADEMY METRICS RIBBON --- */}
        <AnimateOnScroll delay={600} className="mb-16 md:mb-24">
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-slate-200/80 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            <div className="p-2">
              <p className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal text-primary mb-1">25+</p>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-700 mb-1">Years Legacy</p>
              <p className="text-xs font-body text-slate-500">Pioneering creative education</p>
            </div>
            <div className="p-2 pt-6 lg:pt-2">
              <p className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal text-primary mb-1">5,000+</p>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-700 mb-1">Successful Alumni</p>
              <p className="text-xs font-body text-slate-500">Working in top design studios</p>
            </div>
            <div className="p-2 pt-6 lg:pt-2">
              <p className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal text-primary mb-1">15+</p>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-700 mb-1">Certified Programs</p>
              <p className="text-xs font-body text-slate-500">Diploma & intensive terms</p>
            </div>
            <div className="p-2 pt-6 lg:pt-2">
              <p className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal text-primary mb-1">100%</p>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-700 mb-1">Practical Focus</p>
              <p className="text-xs font-body text-slate-500">Real-world studio workflows</p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* --- SECTION 4: NARRATIVE & PILLARS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Narrative Story (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <AnimateOnScroll delay={700}>
              <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-heading font-normal text-slate-900 mb-6 leading-tight">
                Shaping Confident & <span className="text-primary font-heading italic">Skilled Designers</span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={800}>
              <p className="text-base md:text-lg font-body text-slate-600 leading-relaxed mb-6">
                For over 25 years, Eyenet Institute has been a beacon for creative minds, providing structured, practical training in fashion design, garment construction, graphic design, and modern digital creative software.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={900}>
              <p className="text-sm md:text-base font-body text-slate-600 leading-relaxed mb-8">
                Guided by our Founder and Director's vision, we shape students into confident, industry-ready professionals through interactive studio sessions, real-world project portfolios, and personalized mentorship tailored to each student's artistic style.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={1000}>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="px-7 py-3.5 text-base font-semibold bg-primary text-white hover:bg-primary/90 rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-105">
                  <Link to="/courses">
                    Explore Programs <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-7 py-3.5 text-base font-semibold border-2 border-primary/80 text-primary hover:bg-primary hover:text-white rounded-full transition-all">
                  <Link to="/contact">Contact Admissions</Link>
                </Button>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Pillars List (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <AnimateOnScroll delay={750}>
              <div className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-normal text-slate-900 mb-1">Industry-Aligned Curriculum</h3>
                  <p className="text-xs font-body text-slate-600 leading-relaxed">
                    Continuously updated course modules reflecting modern fashion trends, software tools, and commercial demands.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={850}>
              <div className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-normal text-slate-900 mb-1">Expert Master Mentors</h3>
                  <p className="text-xs font-body text-slate-600 leading-relaxed">
                    Learn directly from seasoned industry practitioners with decades of boutique, studio, and commercial experience.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={950}>
              <div className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-normal text-slate-900 mb-1">Portfolio & Placement Support</h3>
                  <p className="text-xs font-body text-slate-600 leading-relaxed">
                    Build a commercial portfolio and receive placement guidance for boutique setups, studios, and corporate careers.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutHeroSection;