import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import OurProgramsSection from '@/components/OurProgramsSection';
import ImpactByNumbersSection from '@/components/ImpactByNumbersSection';
import StudentStoriesSection from '@/components/StudentStoriesSection';
import FAQSection from '@/components/FAQSection';
import LocationSection from '@/components/LocationSection';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CollaborationsSection from '@/components/CollaborationsSection';

const Index = () => {
  return (
    <>
      <div className="relative flex flex-col lg:flex-row items-center justify-center px-4 lg:px-[80px] bg-background min-h-[calc(100dvh-170px)] lg:h-[calc(100dvh-170px)] py-12 lg:py-4 xl:py-8 lg:gap-x-12 overflow-hidden">
        {/* Mobile Background Image (Original Crisp Image with Dark Gradient Overlay) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden opacity-100"
          style={{ backgroundImage: 'url(/images/hero-model.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85"></div>
        </div>

        {/* Left Section: Text Content */}
        <AnimateOnScroll isHero={true} delay={100} className="relative z-10 text-center lg:text-left max-w-2xl lg:w-1/2 lg:mb-0 flex flex-col justify-center h-full">
          <h1 className="text-h1-mobile lg:text-4xl xl:text-h1-desktop font-heading mb-2 xl:mb-3 text-white lg:text-foreground font-bold leading-tight drop-shadow-md lg:drop-shadow-none">
            Design your <br className="hidden lg:block" /> future with{' '}
            <span className="text-white lg:text-primary font-heading underline decoration-primary decoration-2 underline-offset-4 lg:no-underline">
              creative excellence
            </span>
          </h1>
          <p className="text-text-regular lg:text-sm xl:text-text-large font-body mb-4 xl:mb-6 text-gray-100 lg:text-gray-600 drop-shadow-sm lg:drop-shadow-none leading-relaxed">
            Transform your passion into a professional career. Our institute offers
            comprehensive design education that bridges creativity with industry
            expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 xl:gap-4 justify-center lg:justify-start">
            <Button asChild className="px-6 py-3.5 text-sm xl:text-text-regular text-white bg-primary hover:bg-primary/90 rounded-full shadow-lg font-bold border-2 border-primary">
              <Link to="/courses">Explore courses</Link>
            </Button>
            <Button variant="outline" asChild className="px-6 py-3.5 text-sm xl:text-text-regular text-white lg:text-primary border-2 border-white lg:border-primary bg-white/10 lg:bg-transparent hover:bg-white hover:text-gray-900 rounded-full font-bold backdrop-blur-sm shadow-md transition-colors">
              <Link to="/contact">Request info</Link>
            </Button>
          </div>
        </AnimateOnScroll>

        {/* Right Section: Image (Desktop Only) */}
        <AnimateOnScroll isHero={true} delay={200} className="hidden lg:flex lg:w-1/2 h-full justify-end items-center relative z-10">
          <img
            src="/images/hero-model.jpg"
            alt="Fashion model"
            className="max-h-full w-auto object-contain object-right rounded-lg animate-float"
          />
        </AnimateOnScroll>
      </div>

      {/* Our Programs Section - Moved here */}
      <OurProgramsSection />

      {/* Collaborations Section */}
      <CollaborationsSection />

      {/* Impact By Numbers Section */}
      <ImpactByNumbersSection />

      {/* Student Stories Section */}
      <StudentStoriesSection />

      {/* FAQ Section */}
      <FAQSection id="faq-section" />

      {/* Location Section */}
      <LocationSection />
    </>
  );
};

export default Index;