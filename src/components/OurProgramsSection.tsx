"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const OurProgramsSection = () => {
  const programs = [
    {
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800',
      title: 'Fashion design',
      description: 'Learn garment sketching, pattern making, and haute couture creation.',
      href: '/courses?category=fashion',
    },
    {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
      title: 'Computer Courses',
      description: 'Master essential computer software, CAD, graphic design, and tech tools.',
      href: '/courses?category=computer',
    },
    {
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800',
      title: 'Photography',
      description: 'Master studio lighting, framing, portraiture, and commercial photography.',
      href: '/courses?category=photography',
    },
    {
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800',
      title: 'Multimedia Training',
      description: 'Explore video editing, motion graphics, 2D/3D animation, and digital production.',
      href: '/courses?category=multimedia',
    },
    {
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
      title: 'Spoken English',
      description: 'Enhance your communication skills, fluency, corporate etiquette, and confidence.',
      href: '/courses?category=spoken-english',
    },
    {
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
      title: 'Beautician Course',
      description: 'Learn professional makeup artistry, hair styling, skin therapy, and cosmetology.',
      href: '/courses?category=beautician',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-[80px] bg-[#fdfaf6] text-center">
      <AnimateOnScroll delay={100}>
        <p className="text-text-regular font-body text-gray-500 uppercase tracking-widest text-xs font-semibold mb-3">Our Programs</p>
      </AnimateOnScroll>
      <AnimateOnScroll delay={200}>
        <h2 className="text-h2-mobile md:text-h2-desktop font-heading mb-6 max-w-3xl mx-auto text-foreground font-bold">
          Comprehensive design courses for <span className="text-primary font-heading">aspiring creatives</span>
        </h2>
      </AnimateOnScroll>
      <AnimateOnScroll delay={300}>
        <p className="text-text-medium font-body text-gray-600 mb-14 max-w-2xl mx-auto">
          Discover our range of specialized design programs tailored to modern industry demands.
        </p>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-14">
        {programs.map((program, index) => (
          <AnimateOnScroll key={index} delay={150 + index * 75}>
            <Link to={program.href} className="block group h-full">
              <div className="flex flex-col h-full bg-white rounded-3xl p-5 border border-gray-100 shadow-md hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-300 text-center">
                <div className="w-full h-52 md:h-60 overflow-hidden rounded-2xl mb-5">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-sm font-body text-gray-600 max-w-xs mx-auto leading-relaxed flex-grow">
                  {program.description}
                </p>
              </div>
            </Link>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll delay={100}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="px-6 py-3 text-text-regular bg-primary text-white hover:bg-primary/90 rounded-full shadow-md">
            <Link to="/courses">View Courses</Link>
          </Button>
          <Button asChild variant="outline" className="px-6 py-3 text-text-regular border-primary text-primary hover:bg-primary hover:text-white rounded-full">
            <Link to="/contact">
              Request details <ArrowRight className="ml-2 h-4 w-4 inline-block" />
            </Link>
          </Button>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default OurProgramsSection;