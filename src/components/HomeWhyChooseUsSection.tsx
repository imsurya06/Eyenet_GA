"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const HomeWhyChooseUsSection = () => {
  const features = [
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      title: 'Experienced faculty',
      description: 'Industry veterans with real-world design expertise guide our students.',
      linkTo: '/explore/infrastructure#faculty-section',
    },
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      title: 'State-of-the-art facilities',
      description: 'Modern studios and advanced technology support innovative learning.',
      linkTo: '/explore/infrastructure#facilities-section',
    },
    {
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
      title: 'Industry partnerships',
      description: 'Direct connections with leading design firms create unique opportunities.',
      linkTo: '/#collaborations-section',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-[80px] bg-background text-center">
      <AnimateOnScroll delay={100}>
        <p className="text-text-regular font-body text-gray-500 uppercase tracking-widest text-xs font-semibold mb-3">Why Choose Us</p>
      </AnimateOnScroll>
      <AnimateOnScroll delay={200}>
        <h2 className="text-h2-mobile md:text-h2-desktop font-heading mb-6 max-w-3xl mx-auto text-foreground font-bold">
          Exceptional design education for <span className="text-primary font-heading">creative professionals</span>
        </h2>
      </AnimateOnScroll>
      <AnimateOnScroll delay={300}>
        <p className="text-text-medium font-body text-gray-600 mb-14 max-w-2xl mx-auto">
          We provide a transformative learning experience that prepares students for dynamic creative careers.
        </p>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-14">
        {features.map((feature, index) => (
          <AnimateOnScroll key={index} delay={150 + index * 75}>
            <Link to={feature.linkTo} className="block group h-full">
              <div className="flex flex-col h-full bg-white rounded-3xl p-5 border border-gray-100 shadow-md hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-300 text-center">
                <div className="w-full h-52 md:h-60 overflow-hidden rounded-2xl mb-5">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm font-body text-gray-600 max-w-xs mx-auto leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </Link>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll delay={100}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="px-6 py-3 text-text-regular bg-primary text-white hover:bg-primary/90 rounded-full shadow-md">
            <Link to="/about">Learn More</Link>
          </Button>
          <Button asChild variant="outline" className="px-6 py-3 text-text-regular border-primary text-primary hover:bg-primary hover:text-white rounded-full">
            <Link to="/contact">
              Contact us <ArrowRight className="ml-2 h-4 w-4 inline-block" />
            </Link>
          </Button>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default HomeWhyChooseUsSection;