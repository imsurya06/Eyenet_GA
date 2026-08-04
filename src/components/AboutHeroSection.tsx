"use client";

import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const AboutHeroSection = () => {
  return (
    <section className="py-8 md:py-10 lg:py-12 px-3 md:px-8 lg:px-[80px] bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Main Title and Subtitle - Centered */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <AnimateOnScroll isHero={true} delay={100}>
            <h1 className="text-h1-mobile md:text-h1-desktop font-heading text-foreground font-bold leading-tight mb-4">
              Eyenet: A Creative <span className="text-primary font-heading">Educational Academy</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll isHero={true} delay={200}>
            <p className="text-text-large font-body text-gray-600 max-w-3xl mx-auto">
              Where Creativity Creates Career.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Main Hero Image */}
        <AnimateOnScroll isHero={true} delay={300} className="w-full h-[280px] md:h-[450px] lg:h-[520px] overflow-hidden rounded-3xl mb-12 md:mb-12 lg:mb-16 shadow-xl border border-gray-100 relative group">
          <img
            src="https://i.pinimg.com/1200x/2d/53/0a/2d530a0fe0031327fb20c99d8b30dadb.jpg"
            alt="Eyenet Creative Fashion Design"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </AnimateOnScroll>

        {/* Text Content with Side Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Section: Detailed Text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <AnimateOnScroll delay={400}>
              <h2 className="text-h3-mobile md:text-h3-desktop font-heading mb-6 font-bold">
                Shaping Confident & <span className="text-primary font-heading">Skilled Designers</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={500}>
              <p className="text-text-regular font-body text-gray-600 mb-6 text-justify">
                For over 25 years, Eyenet Institute has been a beacon for creative minds,
                providing unparalleled training in fashion design, graphic design, and
                mastery of modern tools like Photoshop and Illustrator. Our commitment
                is to bridge creativity with industry expertise, transforming passion
                into a professional career.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={600}>
              <p className="text-text-regular font-body text-gray-600 text-justify">
                Guided by our Founder and Director's vision, we shape students into
                confident and skilled professionals through hands-on training,
                industry-relevant courses, and practical projects that mirror real-world
                design challenges. Our teaching approach integrates creativity,
                technology, and professional discipline, ensuring every student
                develops the confidence to excel in today's fast-paced and highly
                competitive design world.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Right Section: Secondary Image */}
          <AnimateOnScroll delay={700} className="w-full h-[380px] md:h-[480px] overflow-hidden rounded-2xl mx-auto lg:mx-0 shadow-lg border border-gray-100">
            <img
              src="https://i.pinimg.com/736x/fe/4b/0f/fe4b0f20b80ccdfdcb0dc1803242d3a5.jpg"
              alt="Eyenet Fashion & Design Studio Model"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;