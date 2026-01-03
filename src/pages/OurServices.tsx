"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CallToActionSection from '@/components/CallToActionSection';
import { Briefcase, Camera, Mic, Sparkles, Monitor, Scissors, Laptop } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Fashion Designing',
    description: 'Comprehensive fashion design training including sketching, pattern making, and garment construction.',
    link: '/courses?category=fashion',
  },
  {
    icon: Laptop,
    title: 'Computer Courses',
    description: 'Professional computer courses covering office automation, graphic design, and programming.',
    link: '/courses?category=computer',
  },
  {
    icon: Monitor,
    title: 'Multimedia Training',
    description: 'Comprehensive training in video editing, animation, and digital content creation.',
    link: '/courses?category=multimedia',
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Master the art of photography, from basic techniques to advanced studio setups.',
    link: '/courses?category=photography',
  },
  {
    icon: Mic,
    title: 'Spoken English',
    description: 'Improve your communication skills with our interactive spoken English courses.',
    link: '/courses?category=spoken-english',
  },
  {
    icon: Sparkles,
    title: 'Beautician Course',
    description: 'Learn professional beauty techniques, makeup artistry, and salon management.',
    link: '/courses?category=beautician',
  },
];

const OurServices = () => {
  return (
    <>
      <section className="py-8 md:py-12 lg:py-16 px-3 md:px-8 lg:px-[80px] bg-background text-foreground text-center">
        <AnimateOnScroll isHero={true} delay={100}>
          <h1 className="text-h1-mobile md:text-h1-desktop font-heading mb-4">
            Our Services
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll isHero={true} delay={200}>
          <p className="text-text-medium font-body text-gray-600 mb-16 max-w-2xl mx-auto">
            Beyond our core courses, we offer specialized training and services to enhance your skills.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <AnimateOnScroll key={index} delay={300 + index * 100}>
              <Link to={service.link} className="block h-full cursor-pointer group">
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md drop-shadow-lg border border-gray-200 h-full transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:bg-primary/90 transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-h5-mobile md:text-h5-desktop font-heading mb-2 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-regular font-body text-gray-600">
                    {service.description}
                  </p>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
      <CallToActionSection />
    </>
  );
};

export default OurServices;