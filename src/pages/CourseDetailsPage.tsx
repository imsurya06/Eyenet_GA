"use client";

import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { useCourses } from '@/context/CourseContext';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Clock, User, Briefcase, BookOpen, Download, Frown, ArrowLeft, GraduationCap, LayoutList } from 'lucide-react';
import NCFTLogo from '@/components/NCFTLogo'; // Import NCFTLogo

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

  return (
    <div className="bg-background text-foreground">
      <NCFTLogo /> {/* Added NCFTLogo here */}
      {/* Back Button */}
      <div className="px-3 md:px-8 lg:px-[80px] pt-8">
        <AnimateOnScroll delay={50}>
          <Button
            variant="ghost"
            className="text-text-regular font-body text-primary hover:bg-primary/10 flex items-center gap-2"
            asChild
          >
            <Link to={`/courses?category=${course.category}`}>
              <ArrowLeft className="h-4 w-4" /> Back to Courses
            </Link>
          </Button>
        </AnimateOnScroll>
      </div>

      {/* Hero Section */}
      <section className="py-8 md:py-10 lg:py-12 px-3 md:px-8 lg:px-[80px]">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll isHero={true} delay={100}>
            <h1 className="text-h1-mobile md:text-h1-desktop font-heading mb-4 text-foreground text-center lg:text-left">
              {course.title}
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll isHero={true} delay={200}>
            <p className="text-text-medium font-body text-gray-600 mb-8 text-justify"> {/* Removed text-center */}
              {course.description.replace(' Details...', '')}
            </p>
          </AnimateOnScroll>
          {course.image && (
            <AnimateOnScroll isHero={true} delay={300} className="mt-8 w-full rounded-lg overflow-hidden shadow-lg mx-auto">
              <img src={course.image} alt={course.title} className="w-full h-auto object-cover object-top" />
            </AnimateOnScroll>
          )}
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
              <TabsList className="grid w-full max-w-[400px] grid-cols-2 h-12">
                <TabsTrigger value="overview" className="text-base">Overview</TabsTrigger>
                <TabsTrigger value="curriculum" className="text-base">Curriculum</TabsTrigger>
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
      <section className="py-8 md:py-10 lg:py-12 px-3 md:px-8 lg:px-[80px] text-center">
        <AnimateOnScroll delay={100}>
          <h2 className="text-h3-mobile md:text-h3-desktop font-heading mb-6">
            Ready to Start Your Journey?
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {course.brochureLink !== '#' && (
              <Button asChild variant="outline" className="px-6 py-3 text-text-regular border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href={course.brochureLink} download>
                  <Download className="mr-2 h-4 w-4" /> Download Brochure
                </a>
              </Button>
            )}
            <Button asChild className="px-6 py-3 text-text-regular bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to={`/admissions?course=${encodeURIComponent(course.title)}`}>Enroll Now</Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
};

export default CourseDetailsPage;