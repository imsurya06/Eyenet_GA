"use client";

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award } from 'lucide-react';
import NCFTLogo from './NCFTLogo';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const programs = [
  {
    image: 'https://i.pinimg.com/736x/22/b3/4d/22b34d2ee7def7b9e9dbdac6d9f027eb.jpg',
    title: 'Fashion Design',
    category: 'Creative Arts',
    duration: 'Diploma / Certificate',
    description: 'Master garment sketching, haute couture pattern making, textile selection, and runway fashion creation.',
    href: '/courses?category=fashion',
    badge: 'Popular'
  },
  {
    image: 'https://i.pinimg.com/736x/54/02/8d/54028dfe6f4775ed2afdf481735d0143.jpg',
    title: 'Computer Courses',
    category: 'Information Tech',
    duration: 'Short & Advanced Terms',
    description: 'Master essential office software, CAD, graphic design tools, web basics, and modern IT utilities.',
    href: '/courses?category=computer',
    badge: 'High Demand'
  },
  {
    image: 'https://i.pinimg.com/736x/0b/3e/28/0b3e28bc4f888f2eeed42d021ff95c8a.jpg',
    title: 'Photography',
    category: 'Visual Media',
    duration: 'Practical Hands-on',
    description: 'Master studio lighting, camera mechanics, framing, portraiture, and commercial studio photography.',
    href: '/courses?category=photography',
    badge: 'Professional'
  },
  {
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1000',
    title: 'Visual Media Training',
    category: 'Digital Production',
    duration: 'Studio Oriented',
    description: 'Explore video editing suite, motion graphics timeline, 2D/3D animation, and digital post-production.',
    href: '/courses?category=multimedia',
    badge: 'Industry Standard'
  },
  {
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000',
    title: 'Communication Skills',
    category: 'Skill Enhancement',
    duration: 'Interactive Batches',
    description: 'Enhance your verbal fluency, corporate communication etiquette, public speaking, and self-confidence.',
    href: '/courses?category=spoken-english',
    badge: 'Career Boost'
  },
  {
    image: 'https://i.pinimg.com/736x/81/69/c7/8169c76187973b2a994c2823fdc0ce6b.jpg',
    title: 'Beautician Course',
    category: 'Personal Care',
    duration: 'Certified Program',
    description: 'Learn professional makeup artistry, hair styling, bridal aesthetics, skin therapy, and cosmetology.',
    href: '/courses?category=beautician',
    badge: 'Certified'
  },
];

const OurProgramsSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 2800, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <section className="py-14 md:py-20 lg:py-24 px-4 md:px-8 lg:px-[80px] bg-gradient-to-b from-slate-50 via-slate-100/40 to-slate-50 text-center overflow-hidden">
      <NCFTLogo className="bg-transparent py-0 md:py-0 lg:py-0 mb-2" />
      
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-4">
        <span>Our Programs</span>
      </div>

      <h2 className="text-h2-mobile md:text-h2-desktop font-heading font-normal mb-4 max-w-4xl mx-auto text-slate-900 tracking-tight">
        Comprehensive design courses for <span className="text-primary font-heading italic">aspiring creatives</span>
      </h2>
      <p className="text-slate-600 font-body text-base md:text-lg max-w-2xl mx-auto mb-10 md:mb-14">
        Industry-aligned vocational and professional programs crafted to transform passion into successful creative careers.
      </p>

      {/* Mobile View: Embla Carousel with Autoplay + Touch Swipe (Hidden on Desktop) */}
      <div className="md:hidden w-full relative py-4 mb-8">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3">
            {programs.map((program, index) => (
              <CarouselItem key={`program-mobile-${index}`} className="pl-3 basis-[82%] sm:basis-[300px]">
                <Link to={program.href} className="block group h-full">
                  <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 text-left">
                    {/* Image Container */}
                    <div className="relative w-full h-48 overflow-hidden bg-slate-900">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10 opacity-70" />
                      
                      <span className="absolute top-3 left-3 z-20 bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs uppercase">
                        {program.category}
                      </span>

                      <span className="absolute top-3 right-3 z-20 bg-primary/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-xs">
                        {program.badge}
                      </span>

                      <div className="absolute bottom-3 left-3 right-3 z-20">
                        <span className="text-white/90 text-xs flex items-center gap-1 font-medium">
                          <Award className="w-3.5 h-3.5 text-primary-foreground" />
                          {program.duration}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-grow bg-white">
                      <h3 className="text-lg font-heading font-normal text-slate-900 group-hover:text-primary transition-colors mb-1.5">
                        {program.title}
                      </h3>
                      
                      <p className="text-xs font-body text-slate-600 leading-relaxed mb-4 flex-grow line-clamp-2">
                        {program.description}
                      </p>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-primary">
                        <span>Explore Program</span>
                        <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Desktop View: 3-Column Grid (Hidden on Mobile) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-10 md:mb-16">
        {programs.map((program, index) => (
          <div key={index} className="h-full">
            <Link to={program.href} className="block group h-full">
              <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-primary/40 hover:-translate-y-2 transition-all duration-500 text-left">
                
                <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-slate-900">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10 opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  <span className="absolute top-3 left-3 z-20 bg-white/90 backdrop-blur-md text-slate-900 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm border border-white/50 tracking-wide uppercase">
                    {program.category}
                  </span>

                  <span className="absolute top-3 right-3 z-20 bg-primary/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-sm">
                    {program.badge}
                  </span>

                  <div className="absolute bottom-3 left-4 right-4 z-20">
                    <span className="text-white/80 text-xs flex items-center gap-1 font-medium mb-0.5">
                      <Award className="w-3.5 h-3.5 text-primary-foreground/90" />
                      {program.duration}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow bg-white">
                  <h3 className="text-xl font-heading font-normal text-slate-900 group-hover:text-primary transition-colors duration-300 mb-2 flex items-center justify-between">
                    <span>{program.title}</span>
                  </h3>
                  
                  <p className="text-sm font-body text-slate-600 leading-relaxed mb-6 flex-grow line-clamp-3">
                    {program.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-primary group-hover:text-primary/90 transition-colors">
                    <span>Explore Program</span>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>

              </div>
            </Link>
          </div>
        ))}
      </div>

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
    </section>
  );
};

export default OurProgramsSection;