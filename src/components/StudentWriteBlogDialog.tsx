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
import { ImagePlus, CalendarIcon, Loader2, CheckCircle2 } from 'lucide-react';
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
import { toast } from 'sonner';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface StudentWriteBlogDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Helper to count words in text
const countWords = (text: string) => text ? text.trim().split(/\s+/).filter(Boolean).length : 0;

// Zod schema with word limit for blog content (15 - 300 words)
const formSchema = z.object({
  title: z.string().min(5, { message: 'Title must be at least 5 characters.' }),
  author: z.string().min(2, { message: 'Your name must be at least 2 characters.' }),
  date: z.date({ required_error: 'A date is required.' }),
  content: z.string()
    .refine((val) => countWords(val) >= 15, { message: 'Blog description must be at least 15 words.' })
    .refine((val) => countWords(val) <= 300, { message: 'Blog description cannot exceed 300 words.' }),
  imageFile: z.any()
    .refine((file) => !file || (file instanceof File && file.size <= 10 * 1024 * 1024), 'Image size must be less than 10MB.')
    .optional(),
});

const StudentWriteBlogDialog: React.FC<StudentWriteBlogDialogProps> = ({ open, onOpenChange }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      author: '',
      date: new Date(), // Default to today's date
      content: '',
      imageFile: undefined,
    },
  });

  useEffect(() => {
    if (!open) {
      // Reset form and image preview when dialog closes
      form.reset({
        title: '',
        author: '',
        date: new Date(),
        content: '',
        imageFile: undefined,
      });
      setImagePreview(null);
      setIsSuccess(false);
      setIsSubmitting(false);
    }
  }, [open, form]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      form.setValue('imageFile', file);
      form.clearErrors('imageFile');
    } else {
      setImagePreview(null);
      form.setValue('imageFile', undefined);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const payload = {
        title: values.title,
        author: values.author,
        date: format(values.date, 'yyyy-MM-dd'),
        content: values.content,
        imageBase64: imagePreview,
        imageName: values.imageFile?.name
      };

      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || 'Failed to submit blog');
      }

      setIsSuccess(true);
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || 'An error occurred while submitting your blog. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-6 md:p-8 max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="py-6 px-2 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-5 shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <DialogHeader className="p-0 text-center mb-3">
              <DialogTitle className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 text-center">
                Successfully Submitted!
              </DialogTitle>
              <DialogDescription className="text-sm font-body text-slate-600 text-center max-w-sm mx-auto leading-relaxed mt-2">
                Your blog post has been submitted for review. It will appear live once approved by our editorial team.
              </DialogDescription>
            </DialogHeader>

            <div className="w-full mt-6 pt-4 border-t border-slate-100">
              <Button 
                onClick={() => onOpenChange(false)} 
                className="w-full bg-primary hover:bg-primary/95 text-white font-bold py-3 rounded-xl shadow-md transition-all"
              >
                Close
              </Button>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-h4-mobile md:text-h4-desktop font-heading text-foreground">
                Write Your Blog
              </DialogTitle>
              <DialogDescription className="text-text-regular font-body text-gray-600">
                Share your thoughts, experiences, and creative insights with the Eye-Net community!
              </DialogDescription>
            </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6 py-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-text-regular font-body text-foreground">Blog Title:</FormLabel>
                  <FormControl>
                    <Input placeholder="Your amazing blog title" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
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
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-text-regular font-body text-foreground">Date:</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-text-regular font-body text-foreground">Blog Content:</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Write your blog post here (15 to 300 words)..." rows={8} {...field} required />
                  </FormControl>
                  <div className="flex justify-between items-center text-xs text-slate-500 mt-1 font-body">
                    <span>Limit: 15 to 300 words</span>
                    <span className={cn(
                      "font-semibold",
                      countWords(field.value) > 300 ? "text-rose-600 font-bold" : "text-slate-600"
                    )}>
                      {countWords(field.value)} / 300 words
                    </span>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormItem>
              <FormLabel className="text-text-regular font-body text-foreground">Image (Optional):</FormLabel>
              <FormControl>
                <Label htmlFor="blog-image-upload" className="flex flex-col items-center justify-center w-full h-48 border border-input bg-muted rounded-md cursor-pointer hover:bg-accent transition-colors">
                  {imagePreview ? (
                    <img src={imagePreview} alt="Blog Post Preview" className="h-full w-full object-contain rounded-md" />
                  ) : (
                    <>
                      <ImagePlus className="h-8 w-8 mb-2 text-gray-500" />
                      <span className="text-text-regular font-body text-gray-600">Upload an image for your blog</span>
                    </>
                  )}
                  <Input
                    id="blog-image-upload"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </Label>
              </FormControl>
              {form.formState.errors.imageFile && <FormMessage>{form.formState.errors.imageFile.message?.toString()}</FormMessage>}
            </FormItem>

            <DialogFooter className="mt-4">
              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 !text-white text-text-regular mt-4">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Blog Post"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default StudentWriteBlogDialog;