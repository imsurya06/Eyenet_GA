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
import { Checkbox } from '@/components/ui/checkbox';
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
  FormDescription, // Imported FormDescription
} from '@/components/ui/form';
import { useTestimonials } from '@/context/TestimonialContext';
import { toast } from 'sonner';
import { Testimonial } from '@/data/testimonials';
import StarRating from './StarRating'; // Import StarRating
import { format } from 'date-fns';

interface AdminAddTestimonialDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editingTestimonial: Testimonial | null;
  onSave: (testimonial: Testimonial) => void;
}

// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  quote: z.string().min(20, { message: 'Testimonial must be at least 20 characters.' }),
  rating: z.number().min(1, { message: 'Please provide a rating.' }).max(5, { message: 'Rating must be between 1 and 5.' }),
  approved: z.boolean().default(false),
  avatar: z.string().optional(), // Allow admin to set/change avatar URL
});

const AdminAddTestimonialDialog: React.FC<AdminAddTestimonialDialogProps> = ({ open, onOpenChange, editingTestimonial, onSave }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      quote: '',
      rating: 0,
      approved: false,
      avatar: '',
    },
  });

  useEffect(() => {
    if (open && editingTestimonial) {
      form.reset({
        name: editingTestimonial.name,
        quote: editingTestimonial.quote,
        rating: editingTestimonial.rating,
        approved: editingTestimonial.approved,
        avatar: editingTestimonial.avatar || '',
      });
    } else if (open && !editingTestimonial) {
      form.reset({
        name: '',
        quote: '',
        rating: 0,
        approved: false,
        avatar: '',
      });
    }
  }, [open, editingTestimonial, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const testimonialToSave: Testimonial = {
      id: editingTestimonial?.id || `admin-test-${Date.now()}`,
      name: values.name,
      quote: values.quote,
      rating: values.rating,
      approved: values.approved,
      date: editingTestimonial?.date || format(new Date(), 'yyyy-MM-dd'), // Keep original date or set new
      avatar: values.avatar || `https://api.dicebear.com/8.x/adventurer/svg?seed=${encodeURIComponent(values.name)}`,
    };

    onSave(testimonialToSave);
    toast.success(`${editingTestimonial ? 'Testimonial updated' : 'Testimonial added'} successfully!`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-6 md:p-8 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-h4-mobile md:text-h4-desktop font-heading text-foreground">
            {editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
          </DialogTitle>
          <DialogDescription className="text-text-regular font-body text-gray-600">
            {editingTestimonial ? 'Update the details of this testimonial.' : 'Fill in the details to add a new testimonial.'}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-text-regular font-body text-foreground">Name:</FormLabel>
                  <FormControl>
                    <Input placeholder="Student Name" {...field} />
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
                  <FormLabel className="text-text-regular font-body text-foreground">Testimonial Quote:</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter testimonial quote" rows={6} {...field} />
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
                  <FormLabel className="text-text-regular font-body text-foreground">Rating:</FormLabel>
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
            <FormField
              control={form.control}
              name="avatar"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-text-regular font-body text-foreground">Avatar URL (Optional):</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/avatar.png" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="approved"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-text-regular font-body text-foreground">
                      Approved
                    </FormLabel>
                    <FormDescription className="text-text-small font-body text-gray-600">
                      Check to make this testimonial visible on the public site.
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="mt-4">
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 !text-white text-text-regular">
                {editingTestimonial ? 'Save Changes' : 'Add Testimonial'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminAddTestimonialDialog;