"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, CheckCircle2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import AnimateOnScroll from './AnimateOnScroll';
import StarRating from './StarRating'; // Import the new StarRating component
import { useTestimonials } from '@/context/TestimonialContext';
import { toast } from 'sonner';
import { Testimonial } from '@/context/TestimonialContext'; // Import Testimonial interface

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  rating: z.number().min(1, { message: 'Please provide a star rating.' }).max(5),
  quote: z.string().min(10, { message: 'Testimonial must be at least 10 characters.' }),
});

const StudentTestimonialForm = () => {
  const { addTestimonial } = useTestimonials();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      rating: 0,
      quote: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Explicitly cast values to ensure type compatibility, excluding 'approved' as it's set in context
      await addTestimonial(values as Omit<Testimonial, 'id' | 'created_at' | 'approved'>);
      form.reset(); // Reset form after successful submission
      setIsSuccess(true);
    } catch (error) {
      // Error handling is already in context, but can add more specific here if needed
      console.error("Error submitting testimonial from component:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 px-3 md:px-8 lg:px-[80px] bg-muted text-foreground">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll delay={100}>
          <h2 className="text-h2-mobile md:text-h2-desktop font-heading mb-4 text-center">
            Share Your Experience
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="text-text-medium font-body text-gray-600 mb-10 text-center">
            We'd love to hear about your journey at Eyenet! Your feedback helps us grow.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-background p-8 rounded-lg shadow-md">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-text-regular font-body text-foreground">Your Name:</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-text-regular font-body text-foreground">Your Rating:</FormLabel>
                    <FormControl>
                      <StarRating
                        rating={field.value}
                        onRatingChange={field.onChange}
                        className="justify-center md:justify-start"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="quote"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-text-regular font-body text-foreground">Your Testimonial:</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Write your experience here..." rows={5} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 !text-white text-text-regular">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Testimonial"
                )}
              </Button>
            </form>
          </Form>
        </AnimateOnScroll>
      </div>

      <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex flex-col items-center gap-4">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
              Success!
            </DialogTitle>
            <DialogDescription className="text-center pt-2">
              Your review has been submitted successfully and is pending approval.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setIsSuccess(false)} className="w-full">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default StudentTestimonialForm;