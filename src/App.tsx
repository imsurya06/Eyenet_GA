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
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Admissions from "./pages/Admissions";
import Explore from "./pages/Explore";
import StudentsZone from "./pages/StudentsZone";
import Infrastructure from "./pages/Infrastructure";
import NewsEvents from "./pages/NewsEvents";
import FashionDesignCourses from "./pages/FashionDesignCourses";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import ComputerCourses from "./pages/ComputerCourses";
import Blogs from "./pages/Blogs";
import FacultyPage from "./pages/FacultyPage";
import ThreeSixtyView from "./pages/ThreeSixtyView";
import OurServices from "./pages/OurServices";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { CourseProvider } from "./context/CourseContext";
import { GalleryImageProvider } from "./context/GalleryImageContext";
import { InfrastructureImageProvider } from "./context/InfrastructureImageContext";
import { NewsEventsProvider } from "./context/NewsEventsContext";
import { BlogProvider } from "./context/BlogContext";
import { TestimonialProvider } from "./context/TestimonialContext";
import { FacultyProvider } from "./context/FacultyContext";

const queryClient = new QueryClient();

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
                        <Routes>
                          <Route path="/" element={<Index />} />
                          <Route path="/about" element={<About />} />
                          <Route path="/admissions" element={<Admissions />} />
                          <Route path="/courses" element={<Courses />} />
                          <Route path="/courses/fashion-design" element={<FashionDesignCourses />} />
                          <Route path="/courses/fashion-design/:slug" element={<CourseDetailsPage />} />
                          <Route path="/courses/computer-courses" element={<ComputerCourses />} />
                          <Route path="/courses/computer-courses/:slug" element={<CourseDetailsPage />} />
                          <Route path="/courses/other-courses/:slug" element={<CourseDetailsPage />} />
                          <Route path="/gallery" element={<Gallery />} />
                          <Route path="/explore" element={<Explore />} />
                          <Route path="/explore/students-zone" element={<StudentsZone />} />
                          <Route path="/explore/infrastructure" element={<Infrastructure />} />
                          <Route path="/explore/gallery" element={<Gallery />} />
                          <Route path="/explore/news-events" element={<NewsEvents />} />
                          <Route path="/blogs" element={<Blogs />} />
                          <Route path="/faculty" element={<FacultyPage />} />
                          <Route path="/360-view" element={<ThreeSixtyView />} />
                          <Route path="/our-services" element={<OurServices />} />
                          <Route path="/contact" element={<Contact />} />
                          
                          <Route path="*" element={<NotFound />} />
                        </Routes>
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