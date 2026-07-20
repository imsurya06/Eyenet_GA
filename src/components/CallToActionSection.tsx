import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimateOnScroll from './AnimateOnScroll';

const CallToActionSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8 lg:px-[80px] bg-[#f8f6f0]">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 md:p-14 lg:p-16 border border-gray-100 shadow-xl text-center relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <AnimateOnScroll delay={100}>
            <span className="inline-block uppercase tracking-widest text-xs font-semibold text-gray-500 mb-3">Begin Today</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 max-w-3xl mx-auto text-foreground">
              Start your <span className="text-primary">design journey</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-base md:text-lg font-body text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Take the first step towards a creative and fulfilling professional career in design, fashion, and technology.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="px-8 py-6 text-base font-semibold bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg transition-all duration-300">
                <Link to="/admissions">Apply Now</Link>
              </Button>
              <Button asChild variant="outline" className="px-8 py-6 text-base font-semibold border-primary text-primary hover:bg-primary hover:text-white rounded-full transition-all duration-300">
                <Link to="/contact">Request Info</Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;