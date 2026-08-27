"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { sendEmailJSNotification, EMAILJS_CONFIG } from '@/lib/emailjs';
import { sanityClient, urlFor } from '@/lib/sanityClient';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import SubmissionSuccessModal from '@/components/SubmissionSuccessModal';
import { useCourses } from '@/context/CourseContext';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ArrowRight, 
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Sparkles,
  Image as ImageIcon,
  Loader2
} from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  mobile: z.string().regex(/^\d{10}$/, { message: 'Mobile number must be 10 digits.' }),
  program: z.string().min(1, { message: 'Please select a program.' }),
  terms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions.',
  }),
});

interface BatchItem {
  id: string;
  title: string;
  category?: string;
  tag: string;
  tagBg: string;
  startDate: string;
  duration: string;
  mode: string;
  timing: string;
  seatsLeft: number;
  courseTitleToSelect: string;
}

interface AdmissionAdItem {
  id: string;
  title: string;
  imageUrl: string;
  link?: string;
}

const AdmissionsCarousel: React.FC<{ ads: AdmissionAdItem[]; onAdClick: () => void }> = ({ ads, onAdClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Duplicate items array for infinite loop
  const displayAds = [...ads, ...ads, ...ads, ...ads];

  // Auto-scroll animation loop
  useEffect(() => {
    let animationFrameId: number;

    const scroll = () => {
      if (containerRef.current && !isUserInteracting && !isDragging) {
        containerRef.current.scrollLeft += 1.2;

        const halfWidth = containerRef.current.scrollWidth / 2;
        if (containerRef.current.scrollLeft >= halfWidth) {
          containerRef.current.scrollLeft -= halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isUserInteracting, isDragging]);

  const pauseAutoScroll = () => {
    setIsUserInteracting(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const resumeAutoScroll = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 1500);
  };

  // Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(false);
    pauseAutoScroll();
    if (!containerRef.current) return;
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeftState(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    if (e.buttons !== 1) return;
    setIsDragging(true);
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUp = () => {
    setTimeout(() => setIsDragging(false), 50);
    resumeAutoScroll();
  };

  // Button Scroll Handlers
  const scrollByAmount = (offset: number) => {
    pauseAutoScroll();
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
    resumeAutoScroll();
  };

  return (
    <div className="relative group/carousel w-full py-4 select-none">
      {/* Left Scroll Button */}
      <button
        onClick={() => scrollByAmount(-380)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 cursor-pointer"
        aria-label="Scroll Left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Scroll Button */}
      <button
        onClick={() => scrollByAmount(380)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 cursor-pointer"
        aria-label="Scroll Right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Draggable & Auto-Scrolling Track */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={pauseAutoScroll}
        onTouchEnd={resumeAutoScroll}
        onWheel={pauseAutoScroll}
        className="flex items-center gap-6 md:gap-8 px-4 overflow-x-auto scrollbar-none cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {displayAds.map((ad, idx) => (
          <div
            key={`${ad.id}-${idx}`}
            onClick={() => {
              if (!isDragging) onAdClick();
            }}
            className="shrink-0 cursor-pointer rounded-2xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group bg-white"
          >
            <img
              src={ad.imageUrl}
              alt={ad.title || `Admission Ad ${idx + 1}`}
              className="h-[360px] sm:h-[440px] md:h-[480px] w-auto object-contain rounded-2xl pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Admissions = () => {
  const { courses, loading: coursesLoading } = useCourses();
  const [searchParams] = useSearchParams();
  const courseParam = searchParams.get('course');

  const [batches, setBatches] = useState<BatchItem[]>([]);
  const [batchesLoading, setBatchesLoading] = useState(true);

  const [admissionAds, setAdmissionAds] = useState<AdmissionAdItem[]>([]);
  const [adsLoading, setAdsLoading] = useState(true);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  // Fetch Upcoming Batches dynamically from Sanity CMS Studio
  useEffect(() => {
    const query = '*[_type == "batch" || _type == "upcomingBatch"] | order(_createdAt asc)';

    const getTagBg = (tagStr?: string, index = 0) => {
      const lower = (tagStr || '').toLowerCase();
      if (lower.includes('seats') || lower.includes('filling') || index === 0) {
        return 'bg-amber-100 text-amber-800 border-amber-200';
      }
      if (lower.includes('new')) {
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      }
      return 'bg-rose-100 text-rose-800 border-rose-200';
    };

    const fetchSanityBatches = async () => {
      setBatchesLoading(true);
      try {
        const data = await sanityClient.fetch(query);
        if (data && data.length > 0) {
          const mapped: BatchItem[] = data.map((doc: any, index: number) => ({
            id: doc._id || `sanity-batch-${index}`,
            title: doc.title || doc.name || 'Upcoming Batch',
            category: doc.category || 'Academy Program',
            tag: doc.tag || 'Seats filling fast',
            tagBg: getTagBg(doc.tag, index),
            startDate: doc.startDate || doc.date || 'Coming Soon',
            duration: doc.duration || 'Flexible',
            mode: doc.mode || 'Hands-on Studio',
            timing: doc.timing || 'Flexible Hours',
            seatsLeft: doc.seatsLeft ?? doc.seats ?? 10,
            courseTitleToSelect: doc.courseTitleToSelect || doc.title || '',
          }));
          setBatches(mapped);
        } else {
          setBatches([]);
        }
      } catch (err) {
        console.warn('Error fetching batches from Sanity:', err);
      } finally {
        setBatchesLoading(false);
      }
    };

    fetchSanityBatches();

    const subscription = sanityClient.listen(query).subscribe({
      next: () => fetchSanityBatches(),
      error: (err) => console.warn('Sanity batch subscription error:', err),
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fetch Admission Ads dynamically from Sanity CMS Studio (Admission Ads)
  useEffect(() => {
    const fetchSanityAds = async () => {
      try {
        const query = '*[_type == "admissionAd" && active != false] | order(_createdAt desc)';
        const data = await sanityClient.fetch(query);
        if (data && data.length > 0) {
          const mapped: AdmissionAdItem[] = data
            .map((doc: any, index: number) => {
              let imgUrl = '';
              if (doc.image) {
                try {
                  imgUrl = urlFor(doc.image).url();
                } catch {
                  imgUrl = '';
                }
              }
              return {
                id: doc._id || `ad-${index}`,
                title: doc.title || 'Admission Showcase',
                imageUrl: imgUrl,
                link: doc.link || '#enrollment-form',
              };
            })
            .filter((item: AdmissionAdItem) => item.imageUrl !== '');
          setAdmissionAds(mapped);
        }
      } catch (err) {
        console.warn('Sanity CMS Admission Ads fetch error:', err);
      } finally {
        setAdsLoading(false);
      }
    };

    fetchSanityAds();
  }, []);

  // Auto-looping for Admission Ads Carousel (every 4 seconds)
  useEffect(() => {
    if (admissionAds.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentAdIndex((prev) => (prev + 1) % admissionAds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [admissionAds.length]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      program: courseParam || '',
      terms: false,
    },
  });

  useEffect(() => {
    if (courseParam) {
      const matched = courses.find(
        (c) => c.title.toLowerCase() === courseParam.toLowerCase()
      );
      if (matched) {
        form.setValue('program', matched.title);
      } else {
        form.setValue('program', courseParam);
      }
    }

    if (window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [courseParam, courses, form]);

  const [showConfetti, setShowConfetti] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [enrolledCourseName, setEnrolledCourseName] = useState('');
  const [enrolledUserName, setEnrolledUserName] = useState('');

  const googleMapsUrl = "https://www.google.com/maps/dir//Suguna+store,+Hamdhiya+towers+2nd+floor,+80+feet+road,+Jn,+Anna+Nagar,+Madurai,+Tamil+Nadu+625020/@9.9291093,78.1409982,15.78z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b00c5072a46551f:0x3feb0d2a94af46bb!2m2!1d78.1485275!2d9.9215582?entry=ttu";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1558223405787!2d78.14633887586524!3d9.921563490180477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5072a46551f%3A0x3feb0d2a94af46bb!2sEye-Net%20Educational%20Academy!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  const scrollToElement = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectBatchAndEnroll = (courseTitle: string) => {
    const matched = courses.find(
      (c) => c.title.toLowerCase() === courseTitle.toLowerCase()
    );
    if (matched) {
      form.setValue('program', matched.title);
    } else {
      form.setValue('program', courseTitle);
    }
    scrollToElement('enrollment-form');
  };

  const handleNextAd = () => {
    if (admissionAds.length > 0) {
      setCurrentAdIndex((prev) => (prev + 1) % admissionAds.length);
    }
  };

  const handlePrevAd = () => {
    if (admissionAds.length > 0) {
      setCurrentAdIndex((prev) => (prev === 0 ? admissionAds.length - 1 : prev - 1));
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (isSubmitting) return; // Prevent double clicks
    setIsSubmitting(true);

    try {
      // Send email notification via EmailJS
      await sendEmailJSNotification(EMAILJS_CONFIG.TEMPLATES.ADMISSIONS, {
        from_name: values.name,
        from_email: values.email,
        contact_number: values.mobile,
        mobile_number: values.mobile,
        subject_or_program: values.program,
        program_selected: values.program,
        message_details: `Course Enrollment Request for: ${values.program}`,
        form_type: 'Admissions & Course Enrollment',
      });
      
      setEnrolledCourseName(values.program);
      setEnrolledUserName(values.name);
      setShowSuccessDialog(true);
      form.reset();
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSuccessDialog = () => {
    setShowSuccessDialog(false);
    setShowConfetti(false);
  };

  return (
    <div className="bg-gradient-to-b from-[#fdfaf6] via-white to-background min-h-screen">
      
      {/* 1. HERO SECTION: UPCOMING BATCHES (SANITY CMS COMPATIBLE) */}
      <section id="upcoming-batches" className="relative pt-4 md:pt-6 lg:pt-8 pb-10 md:pb-14 px-4 md:px-8 lg:px-[80px] overflow-hidden border-b border-slate-200/80 scroll-mt-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <AnimateOnScroll isHero={true} delay={100}>
            <span className="uppercase tracking-widest text-xs font-bold text-primary mb-1.5 block">
              LIVE COHORTS
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-2 sm:mb-3 tracking-tight">
              Upcoming Batches
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto mb-6 md:mb-8">
              Select your preferred batch schedule and register early before seats are filled.
            </p>
          </AnimateOnScroll>

          {/* Batch Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
            {batches.map((batch, index) => (
              <AnimateOnScroll key={batch.id} delay={200 + index * 100} className="flex">
                <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between w-full relative overflow-hidden group">
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${batch.tagBg}`}>
                        {batch.tag}
                      </span>
                      <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-100">
                        {batch.seatsLeft} seats left
                      </span>
                    </div>

                    <h3 className="text-[22px] sm:text-2xl font-heading font-extrabold text-slate-900 mb-4 group-hover:text-primary transition-colors tracking-tight leading-snug drop-shadow-[0_0.5px_0px_rgba(0,0,0,0.15)]">
                      {batch.title}
                    </h3>

                    <div className="space-y-3 text-xs md:text-sm font-body text-slate-600 mb-6">
                      <div className="flex items-center gap-2.5">
                        <Calendar className="w-4 h-4 text-primary shrink-0" />
                        <span><strong>Starts:</strong> {batch.startDate}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-primary shrink-0" />
                        <span><strong>Timing:</strong> {batch.timing}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Users className="w-4 h-4 text-primary shrink-0" />
                        <span><strong>Duration & Mode:</strong> {batch.duration} ({batch.mode})</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleSelectBatchAndEnroll(batch.courseTitleToSelect)}
                    className="w-full bg-primary hover:bg-primary/95 text-white font-bold py-3 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>

                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CONTINUOUS RUNNING TICKER SHOWCASE (PURE AD IMAGES, DRAG-SCROLLABLE & AUTO-SCROLLING) */}
      <section className="py-10 md:py-14 bg-white overflow-hidden border-b border-slate-200/80">
        <div className="w-full text-center mb-8 px-4">
          <AnimateOnScroll delay={100}>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
              Special Announcements & Highlights
            </h2>
          </AnimateOnScroll>
        </div>

        {admissionAds.length > 0 ? (
          <AdmissionsCarousel ads={admissionAds} onAdClick={() => scrollToElement('enrollment-form')} />
        ) : (
          /* Guidance Container when 0 images are uploaded in Sanity CMS yet */
          <AnimateOnScroll delay={150}>
            <div className="max-w-xl mx-auto p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center shadow-sm">
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center mb-4">
                <ImageIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">
                Admission Ads Ticker
              </h3>
              <p className="text-xs sm:text-sm font-body text-slate-600 mb-6 leading-relaxed">
                Upload your vertical ad images in Sanity CMS Studio under the <strong>"Admission Ads"</strong> document menu to display them live in this continuous running ticker loop.
              </p>
              <Button
                onClick={() => window.open('https://eyenet-cms-studio.sanity.studio/', '_blank')}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white rounded-full text-xs font-bold"
              >
                Open Sanity Studio
              </Button>
            </div>
          </AnimateOnScroll>
        )}
      </section>

      {/* 3. ENROLL NOW FORM SECTION (AT THE BOTTOM OF THE PAGE) */}
      <section id="enrollment-form" className="py-16 md:py-24 px-4 md:px-8 lg:px-[80px] scroll-mt-10">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-10">
          
          {/* Left Section: Enroll Now Form Card */}
          <AnimateOnScroll delay={100} className="w-full lg:w-1/2 flex">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 w-full flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="uppercase tracking-widest text-xs font-bold text-primary">
                    ONLINE APPLICATION FORM
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-3 text-foreground">
                  Enroll <span className="text-primary font-heading italic">now</span>
                </h2>
                <p className="text-sm font-body text-gray-600 mb-8">
                  Let's start your professional design journey today.
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">Full Name*</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" className="h-12 px-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">Email Address*</FormLabel>
                          <FormControl>
                            <Input placeholder="name@example.com" type="email" className="h-12 px-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">Mobile Number*</FormLabel>
                          <FormControl>
                            <Input placeholder="10-digit mobile number" type="tel" className="h-12 px-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="program"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">Select Program*</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 px-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary">
                                <SelectValue placeholder="Select a program" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="max-h-60 overflow-y-auto">
                              {coursesLoading ? (
                                <SelectItem value="loading" disabled>Loading programs...</SelectItem>
                              ) : (
                                courses.map((course) => (
                                  <SelectItem key={course.id} value={course.title}>
                                    {course.title}
                                  </SelectItem>
                                ))
                              )}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="terms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-xl p-3 bg-gray-50 border border-gray-100">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-primary data-[state=checked]:bg-primary text-white"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-xs font-body text-gray-600 cursor-pointer">
                              I accept the <a href="/terms-of-service" className="underline hover:text-primary font-semibold">Terms & Conditions</a>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 text-base font-bold bg-primary hover:bg-primary/95 text-white rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Submitting Application...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application Now</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right Section: Campus & Location Info Card */}
          <AnimateOnScroll delay={200} className="w-full lg:w-1/2 flex">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 w-full flex flex-col justify-between relative overflow-hidden">
              
              <div>
                <span className="uppercase tracking-widest text-xs font-bold text-primary mb-2 block">
                  CAMPUS & CONTACT
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-3 text-foreground">
                  Find us <span className="text-primary font-heading italic">here</span>
                </h2>
                <p className="text-sm font-body text-gray-600 mb-8">
                  Visit our Madurai campus or connect with our admission counselors.
                </p>

                {/* Campus Information Box */}
                <div className="space-y-4 mb-8 bg-slate-50 p-6 rounded-2xl border border-slate-200/80 text-left">
                  <h3 className="font-heading font-bold text-slate-900 text-lg">Eye-Net Educational Academy</h3>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Hamdhiya Towers, 2nd Floor, 80 Feet Road Jn, Anna Nagar, Madurai, Tamil Nadu 625020</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <a href="tel:+919842173725" className="hover:text-primary hover:underline font-semibold text-slate-900">+91 98421 73725</a>
                      <span className="text-slate-400 font-normal">/</span>
                      <a href="tel:+918300064651" className="hover:text-primary hover:underline font-semibold text-slate-900">+91 83000 64651</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <span>eyenetfashion@gmail.com</span>
                  </div>

                  <a 
                    href={googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline pt-2"
                  >
                    <span>View on Google Maps</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Google Map Embed */}
                <div className="w-full h-56 rounded-2xl overflow-hidden shadow-inner border border-gray-200">
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Eye-Net Campus Location"
                  ></iframe>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 text-xs text-gray-500 text-center">
                Need immediate admission guidance? Call <a href="tel:+919842173725" className="font-bold text-primary hover:underline">+91 98421 73725</a> or <a href="tel:+918300064651" className="font-bold text-primary hover:underline">+91 83000 64651</a>
              </div>

            </div>
          </AnimateOnScroll>

        </div>
      </section>

      {/* Premium Minimal Success Modal */}
      <SubmissionSuccessModal
        isOpen={showSuccessDialog}
        onClose={handleCloseSuccessDialog}
        title="Application Received!"
        userName={enrolledUserName}
        serviceOrCourse={enrolledCourseName}
      />
    </div>
  );
};

export default Admissions;