import React from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, User, Search, SearchX, X, BookOpen, Frown, CheckCircle2 } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CallToActionSection from '@/components/CallToActionSection';
import { useCourses } from '@/context/CourseContext';
import NCFTLogo from '@/components/NCFTLogo';
import CourseCategoryFilter from '@/components/CourseCategoryFilter';

const Courses = () => {
  const { courses, loading } = useCourses();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const highlight = searchParams.get('highlight');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const searchContainerRef = React.useRef<HTMLDivElement>(null);

  // Close suggestions when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleEnrollClick = (e: React.MouseEvent, courseTitle: string) => {
    e.stopPropagation();
    navigate(`/admissions?course=${encodeURIComponent(courseTitle)}`);
  };

  const getCourseSubtitle = (title: string) => {
    if (title === "Diploma in Fashion Designing") {
      return "Part Time - 2Hrs/Day";
    }
    if (title.toLowerCase().includes("diploma")) {
      return "Part Time - 2Hrs/Day";
    }
    return "Flexible Batches - 1.5Hrs/Day";
  };

  const getFormattedDuration = (duration: string) => {
    if (duration.toLowerCase().startsWith("duration")) {
      return duration;
    }
    return `Duration ${duration}.`;
  };

  const getFormattedEligibility = (eligibility: string) => {
    if (eligibility.toLowerCase().startsWith("eligibility")) {
      return eligibility;
    }
    if (eligibility === "10th / 12th Pass" || eligibility === "10th Pass / Open to All") {
      return "Eligibility: 10th-Pass/Fail. No Age Limit";
    }
    return `Eligibility: ${eligibility}`;
  };

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + '...';
  };

  // Compute autocomplete suggestions for the typed word
  const suggestions = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return courses.filter(course =>
      course.title.toLowerCase().includes(q) ||
      course.category.toLowerCase().includes(q) ||
      (course.tag && course.tag.toLowerCase().includes(q)) ||
      course.description.toLowerCase().includes(q)
    );
  }, [searchQuery, courses]);

  const filteredCourses = React.useMemo(() => {
    let result = courses;

    if (categoryFilter) {
      result = result.filter(course => course.category === categoryFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(course =>
        course.title.toLowerCase().includes(q) ||
        course.category.toLowerCase().includes(q) ||
        (course.tag && course.tag.toLowerCase().includes(q)) ||
        course.description.toLowerCase().includes(q)
      );
    }

    // Sort: prioritize Diploma courses first (checking both tag and title), then by category order (fashion first), then by title
    const categoryOrder: Record<string, number> = {
      'fashion': 1,
      'computer': 2,
      'multimedia': 3,
      'photography': 4,
      'beautician': 5,
      'spoken-english': 6
    };

    const sorted = [...result].sort((a, b) => {
      // 1. Primary Flagship Course: Diploma in Fashion Designing
      const isAFashionDesigning = a.title && a.title.toLowerCase().includes('fashion designing');
      const isBFashionDesigning = b.title && b.title.toLowerCase().includes('fashion designing');

      if (isAFashionDesigning && !isBFashionDesigning) return -1;
      if (!isAFashionDesigning && isBFashionDesigning) return 1;

      // 2. Strict Category Grouping: Fashion courses first, then Computer, Multimedia, Photography, Beautician, Spoken English
      const catA = categoryOrder[a.category] || 99;
      const catB = categoryOrder[b.category] || 99;
      if (catA !== catB) {
        return catA - catB;
      }

      // 3. Within the same category, prioritize Diplomas
      const isADiploma = a.tag && a.tag.toLowerCase().includes('diploma');
      const isBDiploma = b.tag && b.tag.toLowerCase().includes('diploma');
      
      if (isADiploma && !isBDiploma) return -1;
      if (!isADiploma && isBDiploma) return 1;

      // 4. Alphabetical by title
      return (a.title || '').localeCompare(b.title || '');
    });

    if (highlight) {
      const highlightedCourse = sorted.find(c => c.id === highlight);
      if (highlightedCourse) {
        const others = sorted.filter(c => c.id !== highlight);
        return [highlightedCourse, ...others];
      }
    }

    return sorted;
  }, [categoryFilter, courses, highlight, searchQuery]);

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
      <NCFTLogo className="pt-6 md:pt-8 lg:pt-8 pb-0 mb-2" />
      {/* Hero Section for All Courses */}
      <section className="py-0 px-3 md:px-8 lg:px-[80px] text-center mb-6">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll isHero={true} delay={100}>
            <h1 className="text-h1-mobile md:text-h1-desktop font-heading mb-0 text-foreground font-bold">
              {getCategoryTitle(categoryFilter).split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-primary font-heading">
                {getCategoryTitle(categoryFilter).split(' ').slice(-1)}
              </span>
            </h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Premium Interactive Search Bar */}
      <div className="max-w-3xl mx-auto px-4 mb-8 relative z-30" ref={searchContainerRef}>
        <AnimateOnScroll delay={150}>
          <div className="relative flex items-center bg-white shadow-[0_12px_35px_rgba(0,0,0,0.08)] rounded-2xl sm:rounded-full p-2 border-2 border-primary/20 hover:border-primary/50 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/15 transition-all duration-300">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-primary to-rose-600 text-white flex items-center justify-center shadow-md shadow-primary/30 shrink-0 ml-1">
              <Search className="h-5 w-5 stroke-[2.5]" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Search courses (e.g., Fashion, Aari, Python, Beautician)..."
              className="w-full h-12 px-4 bg-transparent text-base md:text-lg font-body text-slate-900 font-medium placeholder:text-slate-400 placeholder:font-normal focus:outline-none"
            />
            {searchQuery ? (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setShowSuggestions(false);
                }}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors mr-1"
                aria-label="Clear search"
              >
                <X className="h-5 w-5" />
              </button>
            ) : (
              <Button
                className="bg-gradient-to-r from-primary to-[#7a1228] hover:from-[#7a1228] hover:to-primary text-white rounded-full px-7 py-3 text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 hidden sm:flex items-center gap-2 shrink-0 mr-1"
                onClick={() => setShowSuggestions(true)}
              >
                <span>Search</span>
              </Button>
            )}
          </div>
        </AnimateOnScroll>

        {/* Live Word Autocomplete Suggestions Dropdown */}
        {showSuggestions && searchQuery.trim().length > 0 && (
          <div className="absolute left-4 right-4 top-full mt-3 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden max-h-80 overflow-y-auto divide-y divide-gray-100 z-50 p-2">
            {suggestions.length > 0 ? (
              suggestions.map((course) => (
                <div
                  key={course.id}
                  onClick={() => {
                    setSearchQuery(course.title);
                    setShowSuggestions(false);
                    navigate(`/courses/${course.category === 'fashion' ? 'fashion-design' : course.category === 'computer' ? 'computer-courses' : 'other-courses'}/${course.id}`);
                  }}
                  className="p-3.5 rounded-2xl hover:bg-primary/5 cursor-pointer flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-heading font-bold text-base text-foreground group-hover:text-primary transition-colors truncate">
                        {course.title}
                      </p>
                      <p className="text-xs text-gray-500 font-body line-clamp-1">
                        {course.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-muted rounded-full text-gray-700 border border-gray-200 flex-shrink-0 ml-3 capitalize">
                    {course.category}
                  </span>
                </div>
              ))
            ) : (
              <div className="p-5 text-center text-sm text-gray-500 font-body">
                No suggestions matching "<span className="font-semibold text-primary">{searchQuery}</span>"
              </div>
            )}
          </div>
        )}
      </div>

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
                            <h3 className="text-xl font-heading font-bold mb-1 text-primary hover:text-primary/80 transition-colors break-words [overflow-wrap:anywhere]">
                              {course.title}
                            </h3>
                          </Link>

                          <p className="text-xs font-semibold font-body text-blue-600 mb-3 uppercase tracking-wider">
                            {getCourseSubtitle(course.title)}
                          </p>

                          <div className="flex flex-col gap-2 mb-4 text-sm font-body text-gray-700">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0" />
                              <span>{getFormattedDuration(course.duration)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0" />
                              <span>{getFormattedEligibility(course.eligibility)}</span>
                            </div>
                          </div>

                          <p className="text-sm font-body text-gray-600 mb-5 leading-relaxed break-words [overflow-wrap:anywhere]">
                            {truncateDescription(course.description.replace(' Details...', ''), 140)}{' '}
                            <Link to={`/courses/${course.category === 'fashion' ? 'fashion-design' : course.category === 'computer' ? 'computer-courses' : 'other-courses'}/${course.id}`} className="text-blue-600 underline font-semibold hover:text-blue-800 transition-colors">
                              Read More...
                            </Link>
                          </p>
                        </div>

                        <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
                          <Button
                            className="flex-1 bg-primary hover:bg-primary/95 text-white rounded-xl py-2.5 text-xs font-semibold shadow-sm transition-all"
                            onClick={(e) => handleEnrollClick(e, course.title)}
                          >
                            Book Now
                          </Button>
                          <Button
                            variant="outline"
                            asChild
                            className="flex-1 border-primary text-primary hover:bg-primary hover:text-white rounded-xl py-2.5 text-xs font-semibold shadow-sm transition-all"
                          >
                            <a href="/brochures/diploma%20in%20fashion%20designing.pdf" download="Diploma-in-Fashion-Designing.pdf" onClick={(e) => e.stopPropagation()}>
                              Download Brochure
                            </a>
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
              <div className="text-center py-14 px-6 bg-white rounded-3xl border border-gray-100 shadow-md max-w-2xl mx-auto my-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SearchX className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2 text-foreground">
                  No Matching Courses Found
                </h3>
                <p className="text-gray-600 font-body max-w-md mx-auto mb-6 leading-relaxed text-sm md:text-base">
                  We couldn't find any courses matching "<span className="font-semibold text-primary">{searchQuery}</span>". Try searching for terms like <span className="font-medium text-foreground">"Fashion"</span>, <span className="font-medium text-foreground">"Aari"</span>, <span className="font-medium text-foreground">"Python"</span>, or clear the search to view all options.
                </p>
                <Button
                  onClick={() => setSearchQuery('')}
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-2.5 font-bold shadow-md text-sm"
                >
                  Clear Search & View All Courses
                </Button>
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </section>

      <CallToActionSection />
    </div>
  );
};

export default Courses;