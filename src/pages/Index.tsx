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
      <div className="relative flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 lg:px-[80px] bg-background h-[85svh] min-h-[85svh] max-h-[85svh] py-8 lg:py-6 lg:gap-x-12 overflow-hidden">
        {/* Mobile Background Image (Bright, Vibrant Original Image) */}
        <div
          className="absolute inset-0 bg-cover bg-[center_top] bg-no-repeat lg:hidden opacity-100"
          style={{ backgroundImage: 'url(/images/hero-model.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/45"></div>
        </div>

        {/* Left Section: Text Content */}
        <AnimateOnScroll isHero={true} delay={100} className="relative z-10 text-center lg:text-left max-w-xl lg:max-w-2xl lg:w-1/2 flex flex-col justify-center items-center lg:items-start my-auto h-full w-full">
          <div className="w-full flex flex-col justify-center items-center lg:items-start animate-float-smooth will-change-transform">
            <h1 className="text-[42px] xs:text-[48px] sm:text-6xl lg:text-[58px] xl:text-[76px] font-heading font-normal mb-4 xl:mb-6 text-white lg:text-foreground leading-[1.08] xl:leading-[1.05] tracking-normal drop-shadow-sm lg:drop-shadow-none text-center lg:text-left">
              Design your future <br className="hidden sm:block lg:hidden" />
              with creative <br className="hidden sm:block lg:hidden" />
              <span className="text-white lg:text-primary font-heading">
                excellence
              </span>
            </h1>
            <p className="text-base sm:text-lg xl:text-text-large font-body mb-6 xl:mb-8 text-gray-100/95 lg:text-gray-600 drop-shadow-sm lg:drop-shadow-none leading-relaxed max-w-md lg:max-w-lg text-center lg:text-left mx-auto lg:mx-0">
              Transform your passion into a professional career. Our institute offers
              comprehensive design education that bridges creativity with industry
              expertise.
            </p>
            <div className="flex flex-row items-center gap-3.5 sm:gap-4 justify-center lg:justify-start w-full">
              <Button asChild className="px-5 sm:px-6 py-3 sm:py-3.5 h-auto text-sm sm:text-base text-white bg-[#b91c1c] hover:bg-[#991b1b] lg:bg-primary lg:hover:bg-primary/90 rounded-none shadow-none font-medium transition-all">
                <Link to="/courses">Explore courses</Link>
              </Button>
              <Button variant="outline" asChild className="px-5 sm:px-6 py-3 sm:py-3.5 h-auto text-sm sm:text-base text-white lg:text-primary border border-white lg:border-primary bg-transparent hover:bg-white/10 lg:hover:bg-primary/10 rounded-none font-medium shadow-none transition-all">
                <Link to="/contact">Request info</Link>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Right Section: Image (Desktop Only) */}
        <AnimateOnScroll isHero={true} delay={200} className="hidden lg:flex lg:w-1/2 h-full justify-end items-center relative z-10 overflow-hidden">
          <img
            src="/images/hero-model.jpg"
            alt="Fashion model"
            className="h-full max-h-[74vh] w-auto object-contain object-right rounded-lg animate-float"
          />
        </AnimateOnScroll>
      </div>

      {/* Our Programs Section */}
      <OurProgramsSection />

      {/* Impact By Numbers / Video Section */}
      <ImpactByNumbersSection />

      {/* Collaborations Section */}
      <CollaborationsSection />

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