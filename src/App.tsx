import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Admissions from "./pages/Admissions";
import Explore from "./pages/Explore";
import StudentsZone from "./pages/StudentsZone"; // Import new page
import Infrastructure from "./pages/Infrastructure"; // Import new page
import NewsEvents from "./pages/NewsEvents"; // Import new page
import { MadeWithDyad } from "@/components/made-with-dyad";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/gallery" element={<Gallery />} /> {/* Keep existing gallery route */}
          <Route path="/explore" element={<Explore />} /> {/* Keep existing explore route */}
          <Route path="/explore/students-zone" element={<StudentsZone />} /> {/* New route */}
          <Route path="/explore/infrastructure" element={<Infrastructure />} /> {/* New route */}
          <Route path="/explore/gallery" element={<Gallery />} /> {/* New route for dropdown */}
          <Route path="/explore/news-events" element={<NewsEvents />} /> {/* New route */}
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MadeWithDyad />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;