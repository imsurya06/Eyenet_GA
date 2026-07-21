"use client";

import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { useCourses } from '@/context/CourseContext';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Clock, User, Briefcase, Download, Frown, ArrowLeft, GraduationCap, LayoutList, BookOpen, ArrowRight } from 'lucide-react';
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
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll isHero={true} delay={100}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground text-center lg:text-left">
              {course.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-primary font-heading">
                {course.title.split(' ').slice(-1)}
              </span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll isHero={true} delay={200}>
            <p className="text-text-medium font-body text-gray-600 mb-6 leading-relaxed">
              {course.description.replace(' Details...', '')}
            </p>
          </AnimateOnScroll>

          {/* Action Buttons: Enroll Now & Download Brochure */}
          <AnimateOnScroll isHero={true} delay={250}>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <Button
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 text-base font-bold shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
                onClick={() => navigate(`/admissions?course=${encodeURIComponent(course.title)}`)}
              >
                Enroll Now <ArrowRight className="h-4 w-4" />
              </Button>
              <a
                href="/brochures/Course-details-v1.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-all text-sm shadow-sm"
              >
                Download Brochure <Download className="h-4 w-4" />
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll isHero={true} delay={300} className="mt-4 w-full rounded-3xl overflow-hidden shadow-xl border border-gray-100 mx-auto max-h-[450px]">
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

      {/* Call to Action */}
      <CallToActionSection courseTitle={course.title} />
    </div>
  );
};

export default CourseDetailsPage;