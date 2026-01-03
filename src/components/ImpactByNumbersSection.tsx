"use client";

import React, { useRef, useEffect, useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { Clock, UserCheck, Award, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ImpactByNumbersSection = () => {
  const stats = [
    {
      value: '25+',
      label: 'Years of Experience',
      icon: Clock,
      description: "Dedicated to excellence in design.",
      className: "col-span-1 md:col-span-1 lg:row-span-1"
    },
    {
      value: '85%',
      label: 'Student satisfaction',
      icon: UserCheck,
      description: "Graduates love their journey.",
      className: "col-span-1 md:col-span-1 lg:row-span-1"
    },
    {
      value: '75%',
      label: 'Industry recognition',
      icon: Award,
      description: "Award-winning curriculum.",
      className: "col-span-1 md:col-span-1 lg:row-span-1"
    },
  ];

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Only play if not already playing to avoid interruption
          if (videoElement.paused) {
            videoElement.play().catch(error => console.log("Video play interrupted:", error));
            setIsPlaying(true);
          }
        } else {
          videoElement.pause();
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(videoElement);

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <section className="py-20 md:py-28 bg-secondary/30 text-foreground overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[150px] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-[80px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

          {/* Header Block */}
          <AnimateOnScroll className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-center text-left mb-6 lg:mb-0">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="uppercase tracking-widest text-xs text-muted-foreground font-medium font-body">Our Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4 text-foreground">
              Results that speak <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">louder than words.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed font-body">
              We define success by the achievements of our students and the mark they leave on the design world.
            </p>
          </AnimateOnScroll>

          {/* Stat 1 */}
          <AnimateOnScroll delay={100} className="col-span-1 row-span-1">
            <div className="h-full bg-background border border-border/50 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowUpRight className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="mb-6 w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary p-2.5">
                <Clock strokeWidth={1.5} className="w-full h-full" />
              </div>
              <div className="text-5xl font-heading font-bold mb-2 tracking-tight text-foreground">{stats[0].value}</div>
              <div className="text-lg font-medium text-foreground/80 mb-1 font-body">{stats[0].label}</div>
              <div className="text-sm text-muted-foreground font-body">{stats[0].description}</div>
            </div>
          </AnimateOnScroll>

          {/* Video Block - Large */}
          <AnimateOnScroll delay={200} className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[300px] lg:min-h-[400px]">
            <div className="h-full w-full bg-black rounded-3xl overflow-hidden relative group border border-border/50 shadow-xl">
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                src="/videos/impact-video.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                <div className="bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-white py-1 px-3 rounded-full inline-block mb-3 border border-white/10 font-body">Featured</div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2 text-white">Student Showcase 2024</h3>
                <p className="text-white/70 max-w-md text-sm md:text-base font-body">Watch select highlights from our graduating class's final runway show and design exhibition.</p>
              </div>
              {/* Play Button Overlay */}
              <div onClick={() => {
                if (videoRef.current?.paused) { videoRef.current.play(); setIsPlaying(true); }
                else { videoRef.current?.pause(); setIsPlaying(false); }
              }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform duration-300 border border-white/30">
                <div className={`w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}></div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Stat 2 */}
          <AnimateOnScroll delay={300} className="col-span-1 row-span-1">
            <div className="h-full bg-background border border-border/50 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowUpRight className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="mb-6 w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary p-2.5">
                <UserCheck strokeWidth={1.5} className="w-full h-full" />
              </div>
              <div className="text-5xl font-heading font-bold mb-2 tracking-tight text-foreground">{stats[1].value}</div>
              <div className="text-lg font-medium text-foreground/80 mb-1 font-body">{stats[1].label}</div>
              <div className="text-sm text-muted-foreground font-body">{stats[1].description}</div>
            </div>
          </AnimateOnScroll>

          {/* Stat 3 */}
          <AnimateOnScroll delay={400} className="col-span-1 row-span-1">
            <div className="h-full bg-background border border-border/50 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowUpRight className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="mb-6 w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary p-2.5">
                <Award strokeWidth={1.5} className="w-full h-full" />
              </div>
              <div className="text-5xl font-heading font-bold mb-2 tracking-tight text-foreground">{stats[2].value}</div>
              <div className="text-lg font-medium text-foreground/80 mb-1 font-body">{stats[2].label}</div>
              <div className="text-sm text-muted-foreground font-body">{stats[2].description}</div>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
};

export default ImpactByNumbersSection;