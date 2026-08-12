import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import SecondaryNavbar from "./components/SecondaryNavbar";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Admissions from "./pages/Admissions";
import FashionDesignCourses from "./pages/FashionDesignCourses";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import ComputerCourses from "./pages/ComputerCourses";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { CourseProvider } from "./context/CourseContext";
import { GalleryImageProvider } from "./context/GalleryImageContext";
import { InfrastructureImageProvider } from "./context/InfrastructureImageContext";
import { NewsEventsProvider } from "./context/NewsEventsContext";
import { BlogProvider } from "./context/BlogContext";
import { TestimonialProvider } from "./context/TestimonialContext";
import { FacultyProvider } from "./context/FacultyContext";

// Lazy-loaded routes for performance & smaller initial bundle size
const Gallery = lazy(() => import("./pages/Gallery"));
const Explore = lazy(() => import("./pages/Explore"));
const StudentsZone = lazy(() => import("./pages/StudentsZone"));
const Infrastructure = lazy(() => import("./pages/Infrastructure"));
const NewsEvents = lazy(() => import("./pages/NewsEvents"));
const Blogs = lazy(() => import("./pages/Blogs"));
const FacultyPage = lazy(() => import("./pages/FacultyPage"));
const OurServices = lazy(() => import("./pages/OurServices"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="text-sm font-body text-gray-500 font-medium">Loading page...</p>
    </div>
  </div>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <CourseProvider>
            <GalleryImageProvider>
              <InfrastructureImageProvider>
                <NewsEventsProvider>
                  <BlogProvider>
                    <TestimonialProvider>
                      <FacultyProvider>
                        <SecondaryNavbar />
                        <Navbar />
                        <Suspense fallback={<PageLoader />}>
                          <Routes>
                            <Route path="/" element={<Index />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/admissions" element={<Admissions />} />
                            <Route path="/courses" element={<Courses />} />
                            <Route path="/courses/:slug" element={<CourseDetailsPage />} />
                            <Route path="/courses/fashion-design" element={<FashionDesignCourses />} />
                            <Route path="/courses/fashion-design/:slug" element={<CourseDetailsPage />} />
                            <Route path="/courses/computer-courses" element={<ComputerCourses />} />
                            <Route path="/courses/computer-courses/:slug" element={<CourseDetailsPage />} />
                            <Route path="/courses/other-courses/:slug" element={<CourseDetailsPage />} />
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/explore" element={<Explore />} />
                            <Route path="/explore/students-zone" element={<StudentsZone />} />
                            <Route path="/explore/infrastructure" element={<Infrastructure />} />
                            <Route path="/infrastructure" element={<Infrastructure />} />
                            <Route path="/explore/gallery" element={<Gallery />} />
                            <Route path="/explore/news-events" element={<NewsEvents />} />
                            <Route path="/news-events" element={<NewsEvents />} />
                            <Route path="/students-zone" element={<StudentsZone />} />
                            <Route path="/blogs" element={<Blogs />} />
                            <Route path="/faculty" element={<FacultyPage />} />
                            <Route path="/our-services" element={<OurServices />} />
                            <Route path="/contact" element={<Contact />} />
                            
                            <Route path="*" element={<NotFound />} />
                          </Routes>
                        </Suspense>
                        <Footer />
                      </FacultyProvider>
                    </TestimonialProvider>
                  </BlogProvider>
                </NewsEventsProvider>
              </InfrastructureImageProvider>
            </GalleryImageProvider>
          </CourseProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;