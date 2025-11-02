"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
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
import { useTestimonials } from '@/context/TestimonialContext';
import { toast } from 'sonner';
import { Testimonial } from '@/data/testimonials';
import StarRating from './StarRating'; // Import the new StarRating component
import { format } from 'date-fns';

interface StudentWriteTestimonialDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: 'Your name must be at least 2 characters.' }),
  quote: z.string().min(20, { message: 'Testimonial must be at least 20 characters.' }),
  rating: z.number().min(1, { message: 'Please provide a rating.' }).max(5, { message: 'Rating must be between 1 and 5.' }),
});

const StudentWriteTestimonialDialog: React.FC<StudentWriteTestimonialDialogProps> = ({ open, onOpenChange }) => {
  const { addTestimonial } = useTestimonials();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      quote: '',
      rating: 0,
    },
  });

  useEffect(() => {
    if (!open) {
      form.reset({
        name: '',
        quote: '',
        rating: 0,
      });
    }
  }, [open, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const testimonialToSave: Testimonial = {
      id: `student-test-${Date.now()}`,
      name: values.name,
      quote: values.quote,
      rating: values.rating,
      approved: false, // New testimonials are not approved by default
      date: format(new Date(), 'yyyy-MM-dd'),
      avatar: `https://api.dicebear.com/8.x/adventurer/svg?seed=${encodeURIComponent(values.name)}`, // Generate avatar
    };

    await addTestimonial(testimonialToSave);
    toast.success("Testimonial submitted for review!");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-6 md:p-8 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-h4-mobile md:text-h4-desktop font-heading text-foreground">
            Write Your Testimonial
          </DialogTitle>
          <DialogDescription className="text-text-regular font-body text-gray-600">
            Share your experience with Eyenet and help inspire future students!
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-text-regular font-body text-foreground">Your Name:</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Jane Doe" {...field} required />
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
                    <Textarea placeholder="Write your honest feedback here..." rows={6} {...field} required />
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
                      editable
                      size={28}
                      className="justify-center md:justify-start"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="mt-4">
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 !text-white text-text-regular">
                Submit Testimonial
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default StudentWriteTestimonialDialog;