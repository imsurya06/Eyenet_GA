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
      {/* 
        Hero Section:
        - Viewport Height Fitted on Desktop/TV displays (lg:min-h-[calc(100dvh-120px)] lg:max-h-[calc(100dvh-70px)])
        - 100% Responsive on Mobile & Tablets with zero overflow or cropping
      */}
      <div className="hero-container-compact relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-[80px] bg-background min-h-[80vh] lg:min-h-[calc(100dvh-120px)] lg:max-h-[calc(100dvh-70px)] py-6 sm:py-8 lg:py-6 lg:gap-x-12 overflow-hidden">

        {/* Mobile Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-[center_top] bg-no-repeat lg:hidden opacity-15"
          style={{ backgroundImage: 'url(/images/Hero-Image-02.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
        </div>

        {/* Left Section: Text Content (Scales fluidly across all screen sizes) */}
        <AnimateOnScroll isHero={true} delay={100} className="relative z-10 text-center lg:text-left max-w-xl lg:max-w-2xl lg:w-1/2 flex flex-col justify-center items-center lg:items-start my-auto h-full w-full">
          <div className="w-full flex flex-col justify-center items-center lg:items-start animate-float-smooth will-change-transform">
            <h1 className="hero-title-compact text-[34px] xs:text-[42px] sm:text-5xl lg:text-[54px] xl:text-[72px] font-heading font-normal mb-3 sm:mb-4 xl:mb-5 text-foreground leading-[1.08] xl:leading-[1.05] tracking-normal drop-shadow-sm lg:drop-shadow-none text-center lg:text-left">
              Design your future <br className="hidden sm:block lg:hidden" />
              with creative <br className="hidden sm:block lg:hidden" />
              <span className="text-primary font-heading">
                excellence
              </span>
            </h1>

            {/* Hero Description - Justified Text on Desktop */}
            <p className="hero-desc-compact text-sm sm:text-base xl:text-text-large font-body mb-5 sm:mb-6 xl:mb-7 text-gray-600 drop-shadow-sm lg:drop-shadow-none leading-relaxed max-w-md lg:max-w-lg text-center lg:text-justify mx-auto lg:mx-0">
              Transform your passion into a professional career. Our institute offers
              comprehensive design education that bridges creativity with industry
              expertise.
            </p>

            <div className="flex flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start w-full">
              <Button asChild className="hero-btn-compact px-5 sm:px-6 py-2.5 sm:py-3.5 h-auto text-sm sm:text-base text-white bg-primary hover:bg-primary/90 rounded-none shadow-none font-medium transition-all">
                <Link to="/courses">Explore courses</Link>
              </Button>
              <Button variant="outline" asChild className="hero-btn-compact px-5 sm:px-6 py-2.5 sm:py-3.5 h-auto text-sm sm:text-base text-primary border border-primary bg-transparent hover:bg-primary/10 rounded-none font-medium shadow-none transition-all">
                <Link to="/contact">Request info</Link>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Right Section: Pixel-Perfect Bento Grid (Scales dynamically on all screens) */}
        <AnimateOnScroll isHero={true} delay={200} className="relative z-10 w-full lg:w-1/2 flex justify-center lg:justify-end items-center py-4 lg:py-2 mt-6 lg:mt-0">
          <div className="hero-bento-compact w-full max-w-[480px] xl:max-w-[540px] flex flex-col gap-3 sm:gap-4">

            {/* Top Grid Block: Fashion Model (7 cols) + Stacked Computer & Active Makeup (5 cols) */}
            <div className="hero-bento-top-compact grid grid-cols-12 gap-3 sm:gap-4 items-stretch">

              {/* 1. Main Feature Image: Fashion Designing */}
              <div className="hero-bento-main-img-compact col-span-7 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs bg-slate-100 group min-h-[160px] sm:min-h-[220px]">
                <img
                  src="/images/Hero-Image-02.jpg"
                  alt="Fashion Designing"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Right Stack: Computer Lab + Active Makeup Session */}
              <div className="col-span-5 flex flex-col gap-3 sm:gap-4">

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
            <div className="hero-bento-bottom-compact grid grid-cols-12 gap-3 sm:gap-4 h-[120px] sm:h-[160px] md:h-[175px]">

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