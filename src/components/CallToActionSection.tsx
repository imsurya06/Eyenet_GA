import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Send } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

interface CallToActionSectionProps {
  courseTitle?: string;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({ courseTitle }) => {
  const applyLink = courseTitle ? `/admissions?course=${encodeURIComponent(courseTitle)}` : '/admissions';

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-[80px] bg-gradient-to-b from-[#fbf9f5] via-white to-slate-100">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900 via-[#570a1a] to-slate-950 rounded-[2.5rem] p-10 md:p-16 lg:p-20 border border-white/15 shadow-2xl text-center relative overflow-hidden">
        
        {/* Floating Ambient Glow Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10">
          <AnimateOnScroll delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-rose-200 mb-5 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-rose-300" />
              <span>Begin Today</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-normal mb-5 max-w-3xl mx-auto text-white leading-tight">
              Start your{' '}
              <span className="bg-gradient-to-r from-rose-200 via-pink-100 to-white bg-clip-text text-transparent font-serif italic">
                design journey
              </span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-base md:text-lg font-body text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Take the first step towards a creative and fulfilling professional career in design, fashion, and technology with Eyenet Educational Academy.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild className="w-full sm:w-auto px-9 py-6 text-base font-bold bg-white text-slate-950 hover:bg-slate-100 rounded-full shadow-xl hover:scale-105 transition-all duration-300 group">
                <Link to={applyLink} className="flex items-center justify-center gap-2">
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="w-full sm:w-auto px-9 py-6 text-base font-semibold border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60 rounded-full transition-all duration-300 backdrop-blur-sm">
                <Link to="/contact" className="flex items-center justify-center gap-2">
                  <span>Request Info</span>
                  <Send className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>

      </div>
    </section>
  );
};

export default CallToActionSection;