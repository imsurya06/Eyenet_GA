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
    },
    {
      value: '85%',
      label: 'Student satisfaction',
      icon: UserCheck,
      description: "Graduates love their journey.",
    },
    {
      value: '75%',
      label: 'Industry recognition',
      icon: Award,
      description: "Award-winning curriculum.",
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
    <section className="bg-secondary/30 relative overflow-hidden pb-20 md:pb-28">
      {/* Full Width Video Section */}
      <div className="w-full h-[60vh] md:h-[80vh] relative group overflow-hidden">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/impact-video.mp4"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>

        {/* Play Button Overlay */}
        <div onClick={() => {
          if (videoRef.current?.paused) { videoRef.current.play(); setIsPlaying(true); }
          else { videoRef.current?.pause(); setIsPlaying(false); }
        }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 border border-white/30 z-20">
          <div className={`w-0 h-0 border-t-[12px] border-t-transparent border-l-[22px] border-l-white border-b-[12px] border-b-transparent ml-1 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-[80px] relative z-10 -mt-20 md:-mt-32">

        {/* Statistics & Intro Card - Overlapping Video */}
        <div className="bg-background rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <AnimateOnScroll className="text-left">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="uppercase tracking-widest text-xs text-muted-foreground font-medium font-body">Our Impact</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-4 text-foreground">
                Results that speak <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">louder than words.</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100} className="flex items-center">
              <p className="text-lg text-muted-foreground leading-relaxed font-body">
                We define success by the achievements of our students and the mark they leave on the design world. From award-winning portfolios to industry-shaping careers, our impact is measured in real-world success.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <AnimateOnScroll key={index} delay={200 + (index * 100)} className="group">
                <div className="p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300">
                  <div className="mb-4 w-12 h-12 rounded-xl bg-background flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <stat.icon strokeWidth={1.5} className="w-6 h-6" />
                  </div>
                  <div className="text-4xl md:text-5xl font-heading font-bold mb-2 tracking-tight text-foreground">{stat.value}</div>
                  <div className="text-lg font-medium text-foreground/90 mb-1 font-body">{stat.label}</div>
                  <div className="text-sm text-muted-foreground font-body">{stat.description}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ImpactByNumbersSection;