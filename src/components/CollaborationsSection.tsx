"use client";

import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const CollaborationsSection = () => {
  const collaborationLogos = [
    { src: '/images/thugil-couture.png', alt: 'Thugil Couture' },
    { src: '/images/fashion-dazzling.png', alt: 'Fashion Dazzling' },
    { src: '/images/sbs-logo.png', alt: 'SBS' },
  ];

  return (
    <section id="collaborations-section" className="py-8 md:py-10 lg:py-12 px-3 md:px-8 lg:px-[80px] bg-muted text-foreground text-center">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll delay={100}>
          <h2 className="text-h4-mobile md:text-h4-desktop font-heading mb-6 text-foreground">
            Our Collaborations
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="text-text-regular font-body text-gray-600 mb-8 max-w-2xl mx-auto">
            Proudly partnering with leading names in the industry.
          </p>
        </AnimateOnScroll>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {collaborationLogos.map((logo, index) => (
            <AnimateOnScroll key={index} delay={300 + index * 100}>
              <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-white p-2 shadow-md transition-transform duration-300 hover:scale-105">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;