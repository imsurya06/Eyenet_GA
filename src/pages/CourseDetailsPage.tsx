"use client";

import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { useCourses } from '@/context/CourseContext';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Clock, User, Briefcase, Download, Frown, X, ArrowLeft, GraduationCap, LayoutList, BookOpen, ArrowRight } from 'lucide-react';
import NCFTLogo from '@/components/NCFTLogo';
import CallToActionSection from '@/components/CallToActionSection';

const CourseDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { courses, loading } = useCourses();
  const course = courses.find(c => c.id === slug);
  const navigate = useNavigate();

  console.log('CourseDetailsPage - Slug:', slug);
  console.log('CourseDetailsPage - Courses (length):', courses.length);
  console.log('CourseDetailsPage - Loading:', loading);
  console.log('CourseDetailsPage - Found Course:', course);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <AnimateOnScroll isHero={true} delay={500}>
          <h1 className="text-h1-mobile md:text-h1-desktop font-heading mb-4 text-foreground text-center">
            Loading Course Details...
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll isHero={true} delay={600}>
          <p className="text-text-medium font-body text-gray-600 text-center">
            Please wait while we fetch the course information.
          </p>
        </AnimateOnScroll>
      </div>
    );
  }

  if (!course) {
    console.error(`CourseDetailsPage: Course with slug "${slug}" not found.`);
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-foreground">
        <AnimateOnScroll isHero={true} delay={500}>
          <Frown className="h-20 w-20 text-destructive mb-6" />
          <h1 className="text-h1-mobile md:text-h1-desktop font-heading mb-4 text-center">
            Course Not Found
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll isHero={true} delay={600}>
          <p className="text-text-medium font-body text-gray-600 text-center mb-8">
            We couldn't find the course you're looking for. It might have been moved or doesn't exist.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll isHero={true} delay={700}>
          <Button asChild className="px-6 py-3 text-text-regular bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/courses">View All Courses</Link>
          </Button>
        </AnimateOnScroll>
      </div>
    );
  }

  // Ensure array properties are always arrays, even if null/undefined from DB
  const learningOutcomes = course.learningOutcomes || [];
  const careerProspects = course.careerProspects || [];
  const modules = course.modules || [];

  // Course Gallery Images (from Sanity or category-based fallbacks)
  const getCategoryFallbackGallery = (category: string) => {
    switch (category) {
      case 'fashion':
        return [
          'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200',
          'https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80&w=1200',
          'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=1200',
          'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200',
        ];
      case 'computer':
      case 'multimedia':
        return [
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
          'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200',
          'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
          'https://images.unsplash.com/photo-1542744094-3a317272018a?auto=format&fit=crop&q=80&w=1200',
        ];
      case 'beautician':
        return [
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1200',
          'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=1200',
          'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200',
          'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=1200',
        ];
      default:
        return [
          'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200',
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
          'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200',
        ];
    }
  };

  const galleryImages = (course.gallery && course.gallery.length > 0)
    ? course.gallery
    : getCategoryFallbackGallery(course.category);

  const getFallbackImage = (category: string) => {
    switch (category) {
      case 'fashion': return 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200';
      case 'computer': return 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200';
      case 'multimedia': return 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200';
      case 'photography': return 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200';
      case 'beautician': return 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1200';
      default: return 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200';
    }
  };

  const validImage = course.image && !course.image.includes('/images/img') && !course.image.includes('placeholder')
    ? course.image
    : getFallbackImage(course.category);

  const [selectedLightboxImage, setSelectedLightboxImage] = React.useState<string | null>(null);

  return (
    <div className="bg-background text-foreground">
      <NCFTLogo />
      {/* Back Button */}
      <div className="px-3 md:px-8 lg:px-[80px] pt-8">
        <AnimateOnScroll delay={50}>
          <Button
            asChild
            className="bg-white hover:bg-primary hover:text-white border-2 border-primary text-primary font-bold px-6 py-2.5 rounded-full shadow-md transition-all duration-300 gap-2 inline-flex items-center"
          >
            <Link to="/courses">
              <ArrowLeft className="h-5 w-5 stroke-[2.5]" /> Back to Courses
            </Link>
          </Button>
        </AnimateOnScroll>
      </div>

      {/* Hero Section */}
      <section className="py-8 md:py-10 lg:py-12 px-3 md:px-8 lg:px-[80px]">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <AnimateOnScroll isHero={true} delay={100}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground text-center">
              {course.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-primary font-heading">
                {course.title.split(' ').slice(-1)}
              </span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll isHero={true} delay={200}>
            <p className="text-text-medium font-body text-gray-600 mb-8 leading-relaxed text-center max-w-3xl mx-auto">
              {course.description.replace(' Details...', '')}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll isHero={true} delay={300} className="w-full rounded-3xl overflow-hidden shadow-xl border border-gray-100 mx-auto max-h-[450px]">
            <img src={validImage} alt={course.title} className="w-full h-full object-cover" />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Key Information Section */}
      <section className="py-8 md:py-10 lg:py-12 px-3 md:px-8 lg:px-[80px] bg-muted">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <AnimateOnScroll delay={100}>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <Clock className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-h6-mobile md:text-h6-desktop font-heading mb-1">Duration</h3>
              <p className="text-text-regular font-body text-gray-700">{course.duration}</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <User className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-h6-mobile md:text-h6-desktop font-heading mb-1">Eligibility</h3>
              <p className="text-text-regular font-body text-gray-700">{course.eligibility}</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <BookOpen className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-h6-mobile md:text-h6-desktop font-heading mb-1">Category</h3>
              <p className="text-text-regular font-body text-gray-700">
                {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Course Showcase Gallery Ticker */}
      <section className="py-12 md:py-16 px-3 md:px-8 lg:px-[80px] bg-gradient-to-b from-background via-slate-50 to-background overflow-hidden border-t border-b border-gray-100">
        <style>{`
          @keyframes courseGalleryMarquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-course-gallery {
            animation: courseGalleryMarquee 60s linear infinite;
            will-change: transform;
          }
          .animate-course-gallery.paused {
            animation-play-state: paused !important;
          }
        `}</style>
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll delay={100}>
            <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
              <span className="inline-block uppercase tracking-widest text-xs font-semibold text-primary mb-2">
                PRACTICAL WORK & WORKSHOPS
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                Course <span className="text-primary font-heading italic">gallery showcase</span>
              </h2>
            </div>
          </AnimateOnScroll>

          {/* Marquee Ticker */}
          <CourseGalleryTicker images={galleryImages} onSelectImage={setSelectedLightboxImage} />
        </div>
      </section>

      {/* Course Details Tabs */}
      <section className="py-8 md:py-10 lg:py-12 px-3 md:px-8 lg:px-[80px]">
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <AnimateOnScroll delay={100} className="mb-10 flex justify-center">
              <TabsList className="grid w-full max-w-[480px] grid-cols-2 h-14 bg-gray-200/90 p-1.5 rounded-2xl shadow-inner border border-gray-300/60">
                <TabsTrigger
                  value="overview"
                  className="h-full rounded-xl text-base font-bold transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-300/70"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="curriculum"
                  className="h-full rounded-xl text-base font-bold transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-300/70"
                >
                  Curriculum
                </TabsTrigger>
              </TabsList>
            </AnimateOnScroll>

            <TabsContent value="overview" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <div className="flex flex-col items-start">
                  <AnimateOnScroll delay={100}>
                    <div className="flex items-center gap-3 mb-6">
                      <GraduationCap className="h-6 w-6 text-primary" />
                      <h2 className="text-h4-mobile md:text-h4-desktop font-heading">
                        What You'll Learn
                      </h2>
                    </div>
                  </AnimateOnScroll>
                  <ul className="space-y-4 text-text-regular font-body text-gray-700 list-none p-0 w-full">
                    {learningOutcomes.map((outcome, index) => (
                      <AnimateOnScroll key={index} delay={200 + index * 50} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm w-full">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </AnimateOnScroll>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-start">
                  <AnimateOnScroll delay={100}>
                    <div className="flex items-center gap-3 mb-6">
                      <Briefcase className="h-6 w-6 text-primary" />
                      <h2 className="text-h4-mobile md:text-h4-desktop font-heading">
                        Career Prospects
                      </h2>
                    </div>
                  </AnimateOnScroll>
                  <ul className="space-y-4 text-text-regular font-body text-gray-700 list-none p-0 w-full">
                    {careerProspects.map((prospect, index) => (
                      <AnimateOnScroll key={index} delay={200 + index * 50} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm w-full">
                        <Briefcase className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{prospect}</span>
                      </AnimateOnScroll>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="mt-0">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <AnimateOnScroll delay={100}>
                  <div className="flex items-center gap-3 mb-8 justify-center">
                    <LayoutList className="h-6 w-6 text-primary" />
                    <h2 className="text-h3-mobile md:text-h3-desktop font-heading text-center">
                      Course Modules
                    </h2>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll delay={200}>
                  <Accordion type="single" collapsible className="w-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                    {modules.map((module, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-0 px-4">
                        <AccordionTrigger className="text-h6-mobile md:text-h6-desktop font-heading text-foreground hover:no-underline py-4 text-left hover:text-primary transition-colors">
                          {module.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-text-regular font-body text-gray-700 pb-4 text-justify pl-4 border-l-2 border-primary/20 ml-2 mb-2">
                          {module.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AnimateOnScroll>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Action Buttons: Enroll Now & Download Brochure */}
      <section className="py-6 px-3 md:px-8 lg:px-[80px] bg-background">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-4">
          <Button
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3.5 text-base font-bold shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
            onClick={() => navigate(`/admissions?course=${encodeURIComponent(course.title)}`)}
          >
            Enroll Now <ArrowRight className="h-4 w-4" />
          </Button>
          <a
            href="/brochures/diploma%20in%20fashion%20designing.pdf"
            download="Diploma-in-Fashion-Designing.pdf"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-all text-base shadow-sm"
          >
            Download Brochure <Download className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <CallToActionSection courseTitle={course.title} />

      {/* Lightbox Modal for Gallery Full View */}
      {selectedLightboxImage && (
        <div
          className="fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedLightboxImage(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedLightboxImage(null)}
              className="absolute -top-12 right-0 md:top-2 md:-right-12 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedLightboxImage}
              alt="Course Gallery Full View"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Course Gallery Vertical Cards Ticker Sub-component
const CourseGalleryTicker: React.FC<{
  images: string[];
  onSelectImage: (img: string) => void;
}> = ({ images, onSelectImage }) => {
  const [isPaused, setIsPaused] = React.useState(false);
  const resumeTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  // Duplicate images array to ensure a rich, endless loop showing all uploaded images
  let trackSources = [...images];
  while (trackSources.length < 16) {
    trackSources = [...trackSources, ...images];
  }

  const handleInteractionStart = () => {
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const handleInteractionEnd = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 500);
  };

  const renderVerticalCard = (src: string, indexKey: string) => (
    <div
      key={indexKey}
      onClick={() => onSelectImage(src)}
      className="group relative w-[240px] sm:w-[280px] md:w-[320px] h-[340px] sm:h-[400px] md:h-[460px] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex-shrink-0"
    >
      <img
        src={src}
        alt="Course Gallery Work"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span className="text-white text-xs font-semibold tracking-wider uppercase font-body bg-slate-900/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
          View Image
        </span>
      </div>
    </div>
  );

  return (
    <div className="relative w-full py-2 overflow-hidden select-none">
      <div
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
        onMouseDown={handleInteractionStart}
        onMouseUp={handleInteractionEnd}
        onMouseLeave={handleInteractionEnd}
        onWheel={handleInteractionStart}
        className="w-full overflow-hidden flex"
      >
        <div className={`flex w-max animate-course-gallery ease-linear ${isPaused ? 'paused' : ''}`}>
          {/* Set 1 */}
          <div className="flex shrink-0 space-x-4 sm:space-x-5 md:space-x-6 pr-4 sm:pr-5 md:pr-6">
            {trackSources.map((src, idx) => renderVerticalCard(src, `cvset1-${idx}`))}
          </div>

          {/* Set 2 (100% Endless Infinite Loop) */}
          <div className="flex shrink-0 space-x-4 sm:space-x-5 md:space-x-6 pr-4 sm:pr-5 md:pr-6">
            {trackSources.map((src, idx) => renderVerticalCard(src, `cvset2-${idx}`))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;