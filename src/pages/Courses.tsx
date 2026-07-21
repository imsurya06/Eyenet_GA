"use client";

import React from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom'; // Import useNavigate and useSearchParams
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, User } from 'lucide-react'; // Import Clock and User icons
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CallToActionSection from '@/components/CallToActionSection';
import { useCourses } from '@/context/CourseContext';
import NCFTLogo from '@/components/NCFTLogo';
import CourseCategoryFilter from '@/components/CourseCategoryFilter'; // Import new filter component

const Courses = () => {
  const { courses, loading } = useCourses();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const highlight = searchParams.get('highlight');
  const [expandedCourses, setExpandedCourses] = React.useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedCourses(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleEnrollClick = (e: React.MouseEvent, courseTitle: string) => {
    e.stopPropagation();
    navigate(`/admissions?course=${encodeURIComponent(courseTitle)}`);
  };

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + '...';
  };

  const filteredCourses = React.useMemo(() => {
    let result = courses;

    if (categoryFilter) {
      result = courses.filter(course => course.category === categoryFilter);
    }

    if (highlight) {
      const highlightedCourse = result.find(c => c.id === highlight);
      // If highlighted course is found (even if outside current filter, though Navbar implies global search), we might want to ensure it's included.
      // But for now, assuming highlight comes without category filter or within it.
      // Actually, if Navbar user click sends NO category, result is all courses.
      if (highlightedCourse) {
        const others = result.filter(c => c.id !== highlight);
        return [highlightedCourse, ...others];
      }
      // If highlighted course is NOT in the filtered list (e.g. user manually set incompatible params), we could force-fetch it from main list, but let's stick to simple reorder of current set.
      // Actually, standard behavior: Find in GLOBAL list if highlight is set?
      // "redirected to a page where all our courses are visible".
      // So if highlight is present, we likely want ALL courses irrespective of category, unless category is strictly enforced.
      // Navbar links start clean (no category). So `result` is `courses`.
      // Reordering works.
      const globalHighlight = courses.find(c => c.id === highlight);
      if (globalHighlight && !result.includes(globalHighlight)) {
        // If we want to force show it even if filtered out (edge case), add it.
        // But simpler: Navbar doesn't set category.
      }
    }

    return result;
  }, [categoryFilter, courses, highlight]);

  const getCategoryTitle = (category: string | null) => {
    switch (category) {
      case 'fashion': return 'Fashion Design Courses';
      case 'computer': return 'Computer Courses';
      case 'multimedia': return 'Multimedia Training Courses';
      case 'photography': return 'Photography Courses';
      case 'beautician': return 'Beautician Courses';
      case 'spoken-english': return 'Spoken English Courses';
      default: return 'All Our Courses';
    }
  };

  const getFallbackImage = (category: string) => {
    switch (category) {
      case 'fashion': return 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800';
      case 'computer': return 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800';
      case 'multimedia': return 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800';
      case 'photography': return 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800';
      case 'beautician': return 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800';
      default: return 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800';
    }
  };

  const getValidImage = (course: any) => {
    if (!course.image || course.image.includes('/images/img') || course.image.includes('placeholder')) {
      return getFallbackImage(course.category);
    }
    return course.image;
  };

  return (
    <div className="bg-background text-foreground">
      <NCFTLogo />
      {/* Hero Section for All Courses */}
      <section className="py-8 md:py-12 px-3 md:px-8 lg:px-[80px] text-center">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll isHero={true} delay={100}>
            <h1 className="text-h1-mobile md:text-h1-desktop font-heading mb-4 text-foreground font-bold">
              {getCategoryTitle(categoryFilter).split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-primary font-heading">
                {getCategoryTitle(categoryFilter).split(' ').slice(-1)}
              </span>
            </h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Course Category Filter */}
      <CourseCategoryFilter />

      {/* All Courses Grid */}
      <section className="py-8 md:py-12 px-3 md:px-8 lg:px-[80px] bg-muted text-foreground">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll delay={100}>
            <h2 className="text-h2-mobile md:text-h2-desktop font-heading mb-8 text-center font-bold">
              Discover Your <span className="text-primary font-heading">Path</span>
            </h2>
          </AnimateOnScroll>

          {loading ? (
            <AnimateOnScroll delay={200}>
              <p className="text-text-medium font-body text-gray-600 text-center py-10">
                Loading courses...
              </p>
            </AnimateOnScroll>
          ) : filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <AnimateOnScroll key={course.id} delay={150 + index * 75}>
                  <div className={`block group h-full ${course.id === highlight ? 'ring-2 ring-primary ring-offset-4 rounded-3xl' : ''}`}>
                    <div
                      className="bg-white rounded-3xl p-5 shadow-md hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 flex flex-col h-full max-w-full overflow-hidden cursor-pointer"
                      onClick={() => navigate(`/courses/${course.category === 'fashion' ? 'fashion-design' : course.category === 'computer' ? 'computer-courses' : 'other-courses'}/${course.id}`)}
                    >
                      <Link to={`/courses/${course.category === 'fashion' ? 'fashion-design' : course.category === 'computer' ? 'computer-courses' : 'other-courses'}/${course.id}`} className="w-full h-52 overflow-hidden rounded-2xl block mb-4 flex-shrink-0">
                        <img
                          src={getValidImage(course)}
                          alt={course.title}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = getFallbackImage(course.category);
                          }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </Link>
                      <div className="flex flex-col flex-grow justify-between min-w-0">
                        <div>
                          <span className="inline-block bg-muted text-xs font-semibold font-body text-gray-600 px-3 py-1 rounded-full mb-3 border border-gray-200 max-w-full truncate">
                            {course.tag} / {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
                          </span>

                          <Link to={`/courses/${course.category === 'fashion' ? 'fashion-design' : course.category === 'computer' ? 'computer-courses' : 'other-courses'}/${course.id}`}>
                            <h3 className="text-xl font-heading font-bold mb-2 text-foreground line-clamp-2 hover:text-primary transition-colors break-words [overflow-wrap:anywhere]">
                              {course.title}
                            </h3>
                          </Link>

                          <p className="text-sm font-body text-gray-600 mb-4 leading-relaxed flex-grow break-words [overflow-wrap:anywhere]">
                            {truncateDescription(course.description.replace(' Details...', ''), 120)}{' '}
                            <Link to={`/courses/${course.category === 'fashion' ? 'fashion-design' : course.category === 'computer' ? 'computer-courses' : 'other-courses'}/${course.id}`} className="text-primary hover:underline ml-1 font-semibold">
                              more...
                            </Link>
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-4 text-xs font-body text-gray-600 mb-4 pt-3 border-t border-gray-100 flex-wrap">
                            <div className="flex items-center gap-1 min-w-0">
                              <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="truncate">{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-1 min-w-0">
                              <User className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="truncate">{course.eligibility}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between gap-2 pt-3 border-t border-gray-100">
                            <a href="/brochures/Course-details-v1.pdf" download onClick={(e) => e.stopPropagation()} className="text-xs font-semibold text-primary hover:underline truncate">
                              Download Brochure
                            </a>
                            <Button
                              className="bg-primary hover:bg-primary/90 text-white rounded-full px-4 py-2 text-xs font-semibold shadow-sm flex-shrink-0"
                              onClick={(e) => handleEnrollClick(e, course.title)}
                            >
                              Enroll <ArrowRight className="ml-1 h-3 w-3 inline-block" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          ) : (
            <AnimateOnScroll delay={200}>
              <p className="text-text-medium font-body text-gray-600 text-center py-10">
                No courses available for this category at the moment.
              </p>
            </AnimateOnScroll>
          )}
        </div>
      </section>

      <CallToActionSection />
    </div >
  );
};

export default Courses;