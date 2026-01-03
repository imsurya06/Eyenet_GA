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

  const handleEnrollClick = (e: React.MouseEvent, enrollLink: string) => {
    e.stopPropagation();
    navigate(enrollLink);
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

  return (
    <div className="bg-background text-foreground">
      <NCFTLogo />
      {/* Hero Section for All Courses */}
      <section className="py-8 md:py-12 lg:py-16 px-3 md:px-8 lg:px-[80px] text-center">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll isHero={true} delay={100}>
            <h1 className="text-h1-mobile md:text-h1-desktop font-heading mb-4 text-foreground">
              {getCategoryTitle(categoryFilter)}
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll isHero={true} delay={200}>
            <p className="text-text-medium font-body text-gray-600 mb-8">
              Explore our diverse range of design and skill-building programs, crafted to ignite your creativity and build your professional skills.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Course Category Filter */}
      <CourseCategoryFilter />

      {/* All Courses Grid */}
      <section className="py-10 px-3 md:px-8 lg:px-[80px] bg-muted text-foreground">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll delay={100}>
            <h2 className="text-h2-mobile md:text-h2-desktop font-heading mb-10 text-center">
              Discover Your Path
            </h2>
          </AnimateOnScroll>

          {loading ? (
            <AnimateOnScroll delay={200}>
              <p className="text-text-medium font-body text-gray-600 text-center">
                Loading courses...
              </p>
            </AnimateOnScroll>
          ) : filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <AnimateOnScroll key={course.id} delay={200 + index * 75}>
                  <div className={`block group h-full ${course.id === highlight ? 'ring-2 ring-primary ring-offset-4 rounded-lg' : ''}`}>
                    <div className="bg-white rounded-lg shadow-md drop-shadow-lg overflow-hidden border border-gray-200 flex flex-col h-full">
                      <Link to={`/courses/${course.category === 'fashion' ? 'fashion-design' : course.category === 'computer' ? 'computer-courses' : 'other-courses'}/${course.id}`} className="w-full h-48 overflow-hidden block">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </Link>
                      <div className="p-4 flex flex-col flex-grow">
                        <span className="inline-block bg-muted text-text-small font-body text-gray-600 px-3 py-1 rounded-full mb-2 border border-input w-fit">
                          {course.tag} / {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
                        </span>

                        <Link to={`/courses/${course.category === 'fashion' ? 'fashion-design' : course.category === 'computer' ? 'computer-courses' : 'other-courses'}/${course.id}`}>
                          <h3 className="text-h5-mobile md:text-h5-desktop font-heading mb-2 text-foreground h-[6rem] line-clamp-3 overflow-hidden hover:text-primary transition-colors">
                            {course.title}
                          </h3>
                        </Link>

                        <p className="text-text-regular font-body text-gray-600 mb-3">
                          {truncateDescription(course.description.replace(' Details...', ''), 120)}{' '}
                          <Link to={`/courses/${course.category === 'fashion' ? 'fashion-design' : course.category === 'computer' ? 'computer-courses' : 'other-courses'}/${course.id}`} className="text-primary hover:underline ml-1">
                            more...
                          </Link>
                        </p>

                        <div className="flex flex-col md:flex-row items-center gap-4 text-text-small font-body text-gray-700 mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4 text-primary" />
                            <span>{course.eligibility}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-2 mt-auto md:flex-row md:justify-between">
                          <a href={course.brochureLink} download className="text-text-small font-body text-primary hover:underline whitespace-nowrap w-full text-center md:w-auto md:text-left">
                            Download Brochure
                          </a>
                          <Button
                            className="bg-primary hover:bg-primary/90 px-4 py-2 text-text-small flex-shrink-0 w-full md:w-auto transition-all duration-300 ease-in-out hover:scale-[1.02] text-white z-20 relative"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              navigate(`/admissions?course=${encodeURIComponent(course.title)}`);
                            }}
                          >
                            Enroll <ArrowRight className="ml-1 h-3 w-3 inline-block" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          ) : (
            <AnimateOnScroll delay={200}>
              <p className="text-text-medium font-body text-gray-600 text-center">
                No courses available for this category at the moment.
              </p>
            </AnimateOnScroll>
          )}
        </div >
      </section >

      <CallToActionSection />
    </div >
  );
};

export default Courses;