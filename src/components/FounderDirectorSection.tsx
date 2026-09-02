"use client";

import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { Award, Quote, CheckCircle2 } from 'lucide-react';

const FounderDirectorSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-[80px] bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Card Wrapper */}
        <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100/50 rounded-3xl p-6 sm:p-10 md:p-14 border border-slate-200/80 shadow-xl relative overflow-hidden">
          
          {/* Subtle Ambient Background Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-14 items-center relative z-10">
            
            {/* Left Column: Image with Frame (5 Cols) */}
            <div className="lg:col-span-5 relative group mx-auto lg:mx-0 w-full max-w-md lg:max-w-none">
              <AnimateOnScroll delay={100} className="w-full h-[300px] sm:h-[380px] md:h-[500px] overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200/80 relative">
                <img
                  src="/images/Founder Image.jpg"
                  alt="Kubendra Rajan S - Founder & Director"
                  className="w-full h-full object-cover object-[center_28%] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </AnimateOnScroll>

              {/* Dedicated Name & Subheading Badge Below Founder Image (No text on image) */}
              <div className="mt-4 p-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/80 shadow-md text-center">
                <h3 className="text-lg md:text-xl font-heading font-bold text-slate-900">
                  Kubendra Rajan S
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-primary mt-0.5">
                  Founder & Director
                </p>
                <p className="text-xs font-body text-slate-500 mt-0.5">
                  Eye-Net Educational Academy
                </p>
              </div>

              {/* Floating Quote Accent Badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-primary text-white items-center justify-center shadow-lg border-2 border-white z-30">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Right Column: Text & Vision Narrative (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Header Badge */}
              <AnimateOnScroll delay={200}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-3 md:mb-4">
                  <Award className="w-3.5 h-3.5" />
                  <span>Leadership & Vision</span>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={300}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-normal text-slate-900 mb-4 md:mb-6 tracking-tight leading-snug">
                  Meet our Founder & <span className="text-primary font-heading italic">Director</span>
                </h2>
              </AnimateOnScroll>

              {/* Highlighted Pull Quote */}
              <AnimateOnScroll delay={400} className="w-full">
                <div className="border-l-4 border-primary pl-3.5 py-1.5 mb-4 md:mb-6 bg-primary/5 rounded-r-xl">
                  <p className="font-heading italic text-base sm:text-lg md:text-xl text-slate-800 leading-snug">
                    "We go beyond theory to shape students into confident, industry-ready creative leaders."
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Mobile Concise Narrative */}
              <div className="block md:hidden w-full">
                <AnimateOnScroll delay={500}>
                  <p className="text-xs sm:text-sm font-body text-slate-600 leading-relaxed text-justify mb-4">
                    Guided by our Founder & Director, Eye-Net is committed to shaping students into confident, skilled professionals through hands-on practical training, real-world design projects, and career-focused mentorship.
                  </p>
                </AnimateOnScroll>
              </div>

              {/* Desktop Full Narrative */}
              <div className="hidden md:block w-full">
                <AnimateOnScroll delay={500}>
                  <p className="text-base font-body text-slate-600 leading-relaxed text-justify mb-6">
                    Guided by the vision of our Founder and Director, Eye-Net is committed to shaping students into confident and skilled professionals. We go beyond theory by offering hands-on training, industry-relevant courses, and practical projects that mirror real-world design challenges.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll delay={600}>
                  <p className="text-base font-body text-slate-600 leading-relaxed text-justify mb-8">
                    Our teaching approach combines creativity, technology, and professional discipline, ensuring that every student not only masters tools like Photoshop and Illustrator but also develops the confidence to apply their skills in diverse industry settings. By fostering a supportive and inspiring learning environment, we prepare our students to excel in today's fast-paced and highly competitive design world.
                  </p>
                </AnimateOnScroll>
              </div>

              {/* Vision Highlights Pills (Prominent & Larger Font Size) */}
              <AnimateOnScroll delay={700} className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5 pt-4 md:pt-6 border-t border-slate-200/80">
                <div className="flex items-center gap-3 text-base sm:text-lg font-bold text-slate-900">
                  <CheckCircle2 className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-primary shrink-0" />
                  <span>Hands-On Training</span>
                </div>
                <div className="flex items-center gap-3 text-base sm:text-lg font-bold text-slate-900">
                  <CheckCircle2 className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-primary shrink-0" />
                  <span>Real-World Design Projects</span>
                </div>
                <div className="flex items-center gap-3 text-base sm:text-lg font-bold text-slate-900">
                  <CheckCircle2 className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-primary shrink-0" />
                  <span>Mastery of Design Tools</span>
                </div>
                <div className="flex items-center gap-3 text-base sm:text-lg font-bold text-slate-900">
                  <CheckCircle2 className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-primary shrink-0" />
                  <span>Supportive Mentorship</span>
                </div>
              </AnimateOnScroll>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FounderDirectorSection;