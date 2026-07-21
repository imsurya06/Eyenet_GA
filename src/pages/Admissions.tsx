"use client";

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import ConfettiOverlay from '@/components/ConfettiOverlay';
import EnrollmentSuccessDialog from '@/components/EnrollmentSuccessDialog';
import { useCourses } from '@/context/CourseContext'; // Import useCourses

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  mobile: z.string().regex(/^\d{10}$/, { message: 'Mobile number must be 10 digits.' }),
  program: z.string().min(1, { message: 'Please select a program.' }),
  terms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions.',
  }),
});

const Admissions = () => {
  const { courses, loading: coursesLoading } = useCourses();
  const [searchParams] = useSearchParams();
  const courseParam = searchParams.get('course');

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
  }, [courseParam, courses, form]);

  const [showConfetti, setShowConfetti] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [enrolledCourseName, setEnrolledCourseName] = useState('');
  const [enrolledUserName, setEnrolledUserName] = useState('');

  const googleMapsUrl = "https://www.google.com/maps/dir//Suguna+store,+Hamdhiya+towers+2nd+floor,+80+feet+road,+Jn,+Anna+Nagar,+Madurai,+Tamil+Nadu+625020/@9.9291093,78.1409982,15.78z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b00c5072a46551f:0x3feb0d2a94af46bb!2m2!1d78.1485275!2d9.9215582?entry=ttu";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1558223405787!2d78.14633887586524!3d9.921563490180477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5072a46551f%3A0x3feb0d2a94af46bb!2sEye-Net%20Educational%20Academy!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values);
    setEnrolledCourseName(values.program);
    setEnrolledUserName(values.name);
    setShowConfetti(true);
    setShowSuccessDialog(true);
    form.reset();
  };

  const handleCloseSuccessDialog = () => {
    setShowSuccessDialog(false);
    setShowConfetti(false);
  };

  return (
    <section className="bg-gradient-to-b from-[#fdfaf6] via-white to-background min-h-screen py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-[80px]">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-10">
        
        {/* Left Section: Enroll Now Form Card */}
        <AnimateOnScroll isHero={true} delay={100} className="w-full lg:w-1/2 flex">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 w-full flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-primary/5 rounded-bl-full pointer-events-none"></div>

            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                ✦ Online Application Form
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2 text-foreground">
                Enroll <span className="text-primary font-heading">Now</span>
              </h2>
              <p className="text-sm font-body text-gray-600 mb-8">
                Let's start your professional design journey today.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-foreground mb-1 block text-left">
                          Full Name*
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            className="h-12 px-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary"
                            {...field}
                            required
                          />
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
                        <FormLabel className="text-sm font-semibold text-foreground mb-1 block text-left">
                          Email Address*
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            className="h-12 px-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary"
                            {...field}
                            required
                          />
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
                        <FormLabel className="text-sm font-semibold text-foreground mb-1 block text-left">
                          Mobile Number*
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="mobile"
                            type="tel"
                            placeholder="10-digit mobile number"
                            className="h-12 px-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary"
                            {...field}
                            required
                          />
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
                        <FormLabel className="text-sm font-semibold text-foreground mb-1 block text-left">
                          Select Program*
                        </FormLabel>
                        <Select onValueChange={field.onChange} value={field.value || ''} disabled={coursesLoading}>
                          <FormControl>
                            <SelectTrigger className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary text-sm">
                              <SelectValue placeholder={coursesLoading ? "Loading programs..." : "Select a program"} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-xl">
                            {courses.length > 0 ? (
                              courses.map((course) => (
                                <SelectItem key={course.id} value={course.title}>
                                  {course.title}
                                </SelectItem>
                              ))
                            ) : (
                              <SelectItem value="no-programs" disabled>
                                No programs available
                              </SelectItem>
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
                            id="terms"
                            required
                            className="border-primary data-[state=checked]:bg-primary text-white mt-0.5"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel htmlFor="terms" className="text-xs font-body text-gray-600 text-left">
                            I accept the{' '}
                            <Link to="/terms-of-service" className="underline hover:text-primary font-semibold">
                              Terms & Conditions
                            </Link>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full h-12 px-6 py-2 text-base font-semibold bg-primary hover:bg-primary/90 text-white rounded-full shadow-md transition-all duration-300">
                    Submit Application Now →
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Right Section: Location & Campus Visit Info */}
        <AnimateOnScroll isHero={true} delay={300} className="w-full lg:w-1/2 flex flex-col justify-between">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 h-full flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                ✦ Campus & Contact
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2 text-foreground">
                Find Us <span className="text-primary font-heading">Here</span>
              </h2>
              <p className="text-sm font-body text-gray-600 mb-6">
                Visit our campus in Madurai or connect with our admission counselors.
              </p>

              <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 mb-6 space-y-2">
                <h3 className="text-lg font-heading font-bold text-foreground">
                  Eye-Net Educational Academy
                </h3>
                <p className="text-xs font-body text-gray-600 leading-relaxed">
                  Hamdhiya Towers 2nd Floor, 80 Feet Road Jn, Anna Nagar, Madurai, Tamil Nadu 625020
                </p>
                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-gray-500">Mon - Sat: 9:00 AM - 7:00 PM</span>
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                    View on Maps →
                  </a>
                </div>
              </div>

              {/* Interactive Live Map Embed */}
              <div className="w-full h-[240px] rounded-2xl overflow-hidden border border-gray-200 shadow-md">
                <iframe
                  title="Academy Location Map"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 text-center text-xs text-gray-500">
              Need immediate admission guidance? Call <span className="font-semibold text-primary">+91 98421 73725</span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      <ConfettiOverlay show={showConfetti} />
      <EnrollmentSuccessDialog
        show={showSuccessDialog}
        courseName={enrolledCourseName}
        userName={enrolledUserName}
        onClose={handleCloseSuccessDialog}
      />
    </section>
  );
};

export default Admissions;