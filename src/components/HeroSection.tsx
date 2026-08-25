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
    return validGalleryImages.map(img => img.src);
  };

  const displaySources = getOrderedSources();
  const totalCards = displaySources.length;

  useEffect(() => {
    if (totalCards === 0) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalCards);
    }, 2000);
    return () => clearInterval(timer);
  }, [totalCards]);

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/70 text-foreground overflow-hidden py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-[80px]">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl font-heading font-normal mb-4">Student Creative Showcase</h2>
      </div>
    </section>
  );
};

export default HeroSection;
