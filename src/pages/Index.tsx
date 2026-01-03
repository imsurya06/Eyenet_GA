import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import HomeWhyChooseUsSection from '@/components/HomeWhyChooseUsSection';
import OurProgramsSection from '@/components/OurProgramsSection';
import ImpactByNumbersSection from '@/components/ImpactByNumbersSection';
import StudentStoriesSection from '@/components/StudentStoriesSection';
import CallToActionSection from '@/components/CallToActionSection';
import FAQSection from '@/components/FAQSection';
import LocationSection from '@/components/LocationSection';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CollaborationsSection from '@/components/CollaborationsSection';

const Index = () => {
  return (
    <>
      <div className="relative flex flex-col lg:flex-row items-center justify-center px-4 lg:px-[80px] bg-background min-h-[calc(100vh-140px)] pt-6 pb-12 md:pt-10 md:pb-16 lg:pt-12 lg:pb-20 lg:gap-x-12">
        {/* Mobile Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
          style={{ backgroundImage: 'url(/images/hero-model.png)' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Left Section: Text Content */}
        <AnimateOnScroll isHero={true} delay={100} className="relative z-10 text-center lg:text-left max-w-2xl lg:w-1/2 lg:mb-0">
          <h1 className="text-h1-mobile lg:text-h1-desktop font-heading mb-4 text-white lg:text-foreground">
            Design your <br className="hidden lg:block" /> future with creative excellence
          </h1>
          <p className="text-text-regular lg:text-text-large font-body mb-8 text-white lg:text-gray-600">
            Transform your passion into a professional career. Our institute offers
            comprehensive design education that bridges creativity with industry
            expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button asChild className="px-6 py-3 text-text-regular text-white">
              <Link to="/courses">Explore courses</Link>
            </Button>
            <Button variant="outline" asChild className="px-6 py-3 text-text-regular border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/contact">Request info</Link>
            </Button>
          </div>
        </AnimateOnScroll>

        {/* Right Section: Image (Desktop Only) */}
        <AnimateOnScroll isHero={true} delay={200} className="hidden lg:flex lg:w-1/2 h-full justify-end items-center relative z-10">
          <img
            src="/images/hero-model.png"
            alt="Fashion model illustration"
            className="max-h-[85vh] lg:max-h-[850px] w-auto object-contain object-right rounded-lg animate-float"
          />
        </AnimateOnScroll>
      </div>

      {/* Our Programs Section - Moved here */}
      <OurProgramsSection />

      {/* Collaborations Section */}
      <CollaborationsSection />

      {/* Why Choose Us Section (Home Page Specific) */}
      <HomeWhyChooseUsSection />

      {/* Impact By Numbers Section */}
      <ImpactByNumbersSection />

      {/* Student Stories Section */}
      <StudentStoriesSection />

      {/* Call To Action Section */}
      <CallToActionSection />

      {/* FAQ Section */}
      <FAQSection id="faq-section" />

      {/* Location Section */}
      <LocationSection />
    </>
  );
};

export default Index;