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
      {/* Hero Section - Viewport Height-Scaled (Fits 100% inside screen fold on TVs, Monitors & Laptops) */}
      <section className="relative w-full bg-background overflow-hidden min-h-[calc(100dvh-125px)] max-h-[none] lg:max-h-[calc(100dvh-80px)] flex flex-col justify-center py-4 lg:py-6 px-6 sm:px-8 lg:px-[80px]">
        
        {/* Mobile Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-[center_top] bg-no-repeat lg:hidden opacity-15"
          style={{ backgroundImage: 'url(/images/Hero-Image-02.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
        </div>

        {/* Master Scaled Hero Container */}
        <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-x-10 xl:gap-x-12 my-auto">
          
          {/* Left Section: Text Content */}
          <AnimateOnScroll isHero={true} delay={100} className="relative z-10 text-center lg:text-left max-w-xl lg:max-w-xl xl:max-w-2xl lg:w-1/2 flex flex-col justify-center items-center lg:items-start my-auto h-full w-full">
            <div className="w-full flex flex-col justify-center items-center lg:items-start animate-float-smooth will-change-transform">
              <h1 className="text-[36px] xs:text-[42px] sm:text-5xl lg:text-[46px] xl:text-[58px] 2xl:text-[72px] font-heading font-normal mb-2.5 sm:mb-3 xl:mb-5 text-foreground leading-[1.08] xl:leading-[1.05] tracking-normal drop-shadow-sm lg:drop-shadow-none text-center lg:text-left">
                Design your future <br className="hidden sm:block lg:hidden" />
                with creative <br className="hidden sm:block lg:hidden" />
                <span className="text-primary font-heading">
                  excellence
                </span>
              </h1>
              
              {/* Hero Description */}
              <p className="text-xs sm:text-base xl:text-text-large font-body mb-4 sm:mb-5 xl:mb-6 text-gray-600 drop-shadow-sm lg:drop-shadow-none leading-relaxed max-w-md lg:max-w-lg text-center lg:text-justify mx-auto lg:mx-0">
                Transform your passion into a professional career. Our institute offers
                comprehensive design education that bridges creativity with industry
                expertise.
              </p>

              <div className="flex flex-row items-center gap-3.5 sm:gap-4 justify-center lg:justify-start w-full">
                <Button asChild className="px-5 sm:px-6 py-2.5 sm:py-3 h-auto text-xs sm:text-sm xl:text-base text-white bg-primary hover:bg-primary/90 rounded-none shadow-none font-medium transition-all">
                  <Link to="/courses">Explore courses</Link>
                </Button>
                <Button variant="outline" asChild className="px-5 sm:px-6 py-2.5 sm:py-3 h-auto text-xs sm:text-sm xl:text-base text-primary border border-primary bg-transparent hover:bg-primary/10 rounded-none font-medium shadow-none transition-all">
                  <Link to="/contact">Request info</Link>
                </Button>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right Section: Bento Grid (Viewport Height Adaptive) */}
          <AnimateOnScroll isHero={true} delay={200} className="relative z-10 w-full lg:w-1/2 flex justify-center lg:justify-end items-center py-2 sm:py-4">
            <div className="w-full max-w-[460px] lg:max-w-[480px] xl:max-w-[520px] 2xl:max-w-[540px] max-h-[min(500px,calc(100dvh-200px))] flex flex-col gap-2.5 sm:gap-3.5">
              
              {/* Top Grid Block: Fashion Model (7 cols) + Stacked Computer & Active Makeup (5 cols) */}
              <div className="grid grid-cols-12 gap-2.5 sm:gap-3.5 items-stretch">
                
                {/* 1. Main Feature Image: Fashion Designing */}
                <div className="col-span-7 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs bg-slate-100 group min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] xl:min-h-[210px]">
                  <img
                    src="/images/Hero-Image-02.jpg"
                    alt="Fashion Designing"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Right Stack: Computer Lab + Active Makeup Session */}
                <div className="col-span-5 flex flex-col gap-2.5 sm:gap-3.5">
                  
                  {/* 2. Computer Courses & AI */}
                  <div className="flex-1 relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs bg-slate-100 group">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                      alt="Students Learning Computer & AI"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* 3. Beautician & Makeup */}
                  <div className="flex-1 relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs bg-slate-100 group">
                    <img
                      src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800"
                      alt="Makeup Artist Applying Makeup on Client"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                </div>

              </div>

              {/* Bottom Grid Block: Photography (5 cols) + Architectural Site Planning (7 cols) */}
              <div className="grid grid-cols-12 gap-2.5 sm:gap-3.5 h-[105px] sm:h-[125px] lg:h-[135px] xl:h-[160px]">
                
                {/* 4. Photography */}
                <div className="col-span-5 h-full relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs bg-slate-100 group">
                  <img
                    src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=800"
                    alt="Photographer Capturing a Moment Through Camera Lens"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* 5. Architectural & CAD Planning */}
                <div className="col-span-7 h-full relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs bg-slate-100 group">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
                    alt="Architectural Site Blueprint & Floor Plan Drafting"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

              </div>

            </div>
          </AnimateOnScroll>

        </div>

      </section>

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