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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { UploadCloud, ImagePlus, MonitorPlay, Camera, Sparkles, MessageSquareText } from 'lucide-react';
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
import { useCourses } from '@/context/CourseContext';
import { toast } from 'sonner';
import { Course } from '@/data/courses';
import { supabase } from '@/lib/supabaseClient';
import DynamicListInput from '@/components/ui/DynamicListInput';
import ModuleListInput, { ModuleItem } from '@/components/ui/ModuleListInput';

interface AdminAddCourseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editingCourse: Course | null;
  onSave: (course: Course) => void;
}

// Zod schema for form validation
const formSchema = z.object({
  courseName: z.string().min(2, { message: 'Course Name must be at least 2 characters.' }),
  courseDescription: z.string().min(10, { message: 'Course Description must be at least 10 characters.' }),
  type: z.enum(['Course', 'Others'], { message: 'Please select a valid type.' }).default('Course'),
  courseMode: z.enum(['Offline', 'Online'], { message: 'Please select a course mode.' }).default('Offline'),
  courseGenre: z.enum(['computer', 'fashion', 'multimedia', 'photography', 'beautician', 'spoken-english'], { message: 'Please select a course genre.' }),
  brochureFile: z.any()
    .refine((file) => !file || (file instanceof File && file.size <= 10 * 1024 * 1024), 'Brochure file size must be less than 10MB.')
    .optional(),
  courseImage: z.any()
    .refine((file) => !file || (file instanceof File && file.size <= 10 * 1024 * 1024), 'Image size must be less than 10MB.')
    .optional(),
  duration: z.string().min(1, { message: 'Duration is required.' }),
  eligibility: z.string().min(1, { message: 'Eligibility is required.' }),

  // Replaced string fields with arrays
  learningOutcomes: z.array(z.string()).default([]),
  careerProspects: z.array(z.string()).default([]),
  courseModules: z.array(
    z.object({
      title: z.string(),
      description: z.string()
    })
  ).default([])
});

const AdminAddCourseDialog: React.FC<AdminAddCourseDialogProps> = ({ open, onOpenChange, editingCourse, onSave }) => {
  const [brochureFileName, setBrochureFileName] = useState<string | null>(null);
  const [courseImagePreview, setCourseImagePreview] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      courseName: '',
      courseDescription: '',
      type: 'Course',
      courseMode: 'Offline',
      courseGenre: undefined,
      brochureFile: undefined,
      courseImage: undefined,
      duration: '',
      eligibility: '',
      learningOutcomes: [],
      careerProspects: [],
      courseModules: []
    },
  });

  useEffect(() => {
    if (open && editingCourse) {
      try {
        form.reset({
          courseName: editingCourse.title,
          courseDescription: editingCourse.description.replace(' Details...', ''),
          type: editingCourse.tag as 'Course' | 'Others',
          courseMode: editingCourse.enrollLink.includes('online') ? 'Online' : 'Offline',
          courseGenre: editingCourse.category,
          brochureFile: undefined,
          courseImage: undefined,
          duration: editingCourse.duration,
          eligibility: editingCourse.eligibility,
          // Map existing data to arrays
          learningOutcomes: editingCourse.learningOutcomes || [],
          careerProspects: editingCourse.careerProspects || [],
          courseModules: editingCourse.modules || []
        });
        setBrochureFileName(editingCourse.brochureLink !== '#' ? editingCourse.brochureLink.split('/').pop() || null : null);
        setCourseImagePreview(editingCourse.image !== '/public/placeholder.svg' ? editingCourse.image : null);
      } catch (e) {
        console.error("Error resetting form for editing course:", e);
        toast.error("Failed to load course for editing. Please check console for details.");
        onOpenChange(false);
      }
    } else if (open && !editingCourse) {
      form.reset({
        courseName: '',
        courseDescription: '',
        type: 'Course',
        courseMode: 'Offline',
        courseGenre: undefined,
        brochureFile: undefined,
        courseImage: undefined,
        duration: '',
        eligibility: '',
        learningOutcomes: [],
        careerProspects: [],
        courseModules: []
      });
      setBrochureFileName(null);
      setCourseImagePreview(null);
    }
  }, [open, editingCourse, form, onOpenChange]);

  const handleBrochureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setBrochureFileName(file.name);
      form.setValue('brochureFile', file);
    } else {
      setBrochureFileName(null);
      form.setValue('brochureFile', undefined);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCourseImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      form.setValue('courseImage', file);
    } else {
      setCourseImagePreview(null);
      form.setValue('courseImage', undefined);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    let brochureLink = editingCourse?.brochureLink || '#';
    let imageUrl = editingCourse?.image || '/placeholder.svg';

    if (values.brochureFile) {
      const file = values.brochureFile;
      const filePath = `brochures/${Date.now()}-${file.name}`;
      try {
        const { data, error } = await supabase.storage.from('brochures').upload(filePath, file);
        if (error) throw error;
        const { data: publicUrlData } = supabase.storage.from('brochures').getPublicUrl(filePath);
        brochureLink = publicUrlData.publicUrl;
      } catch (error: any) {
        toast.error(`Failed to upload brochure: ${error.message}`);
        return;
      }
    }

    if (values.courseImage) {
      const file = values.courseImage;
      const filePath = `images/${Date.now()}-${file.name}`;
      try {
        const { data, error } = await supabase.storage.from('images').upload(filePath, file);
        if (error) throw error;
        const { data: publicUrlData } = supabase.storage.from('images').getPublicUrl(filePath);
        imageUrl = publicUrlData.publicUrl;
      } catch (error: any) {
        toast.error(`Failed to upload course image: ${error.message}`);
        return;
      }
    }

    let courseIcon;
    switch (values.courseGenre) {
      case 'fashion': courseIcon = ImagePlus; break;
      case 'computer': courseIcon = UploadCloud; break;
      case 'multimedia': courseIcon = MonitorPlay; break;
      case 'photography': courseIcon = Camera; break;
      case 'beautician': courseIcon = Sparkles; break;
      case 'spoken-english': courseIcon = MessageSquareText; break;
      default: courseIcon = UploadCloud;
    }

    const courseToSave: Course = {
      id: editingCourse?.id || `new-course-${Date.now()}`,
      image: imageUrl,
      tag: values.type,
      title: values.courseName,
      description: values.courseDescription + ' Details...',
      brochureLink: brochureLink,
      enrollLink: '/admissions',
      category: values.courseGenre,
      icon: courseIcon,
      duration: values.duration,
      eligibility: values.eligibility,
      learningOutcomes: values.learningOutcomes,
      careerProspects: values.careerProspects,
      modules: values.courseModules,
    };

    onSave(courseToSave);
    toast.success(`${editingCourse ? 'Course updated' : 'Course added'} successfully!`);

    // Explicit reset to ensure clean state
    form.reset({
      courseName: '',
      courseDescription: '',
      type: 'Course',
      courseMode: 'Offline',
      courseGenre: undefined,
      brochureFile: undefined,
      courseImage: undefined,
      duration: '',
      eligibility: '',
      learningOutcomes: [],
      careerProspects: [],
      courseModules: []
    });
    setBrochureFileName(null);
    setCourseImagePreview(null);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] p-6 md:p-8 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-h4-mobile md:text-h4-desktop font-heading text-foreground">
            {editingCourse ? 'Edit Course' : 'Upload Course'}
          </DialogTitle>
          <DialogDescription className="text-text-regular font-body text-gray-600">
            {editingCourse ? 'Update the details of this course.' : 'Fill in the details to add a new course.'}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="courseName"
                render={({ field }) => (
                  <FormItem className="col-span-1 md:col-span-2">
                    <FormLabel className="text-foreground">Course Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Advanced Graphic Design" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="courseDescription"
                render={({ field }) => (
                  <FormItem className="col-span-1 md:col-span-2">
                    <FormLabel className="text-foreground">Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Detailed description of the course..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Duration</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 6 Months" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="eligibility"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Eligibility</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 10th Pass" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4 border rounded-md p-4 bg-muted/20">
              <h3 className="font-semibold text-sm uppercase text-muted-foreground">Classification</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Type</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl><RadioGroupItem value="Course" /></FormControl>
                            <FormLabel className="font-normal cursor-pointer">Course</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl><RadioGroupItem value="Others" /></FormControl>
                            <FormLabel className="font-normal cursor-pointer">Others</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="courseMode"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Mode</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl><RadioGroupItem value="Offline" /></FormControl>
                            <FormLabel className="font-normal cursor-pointer">Offline</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl><RadioGroupItem value="Online" /></FormControl>
                            <FormLabel className="font-normal cursor-pointer">Online</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="courseGenre"
                  render={({ field }) => (
                    <FormItem className="col-span-1 md:col-span-2 space-y-2">
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="grid grid-cols-2 md:grid-cols-3 gap-2"
                        >
                          {['computer', 'fashion', 'multimedia', 'photography', 'beautician', 'spoken-english'].map((genre) => (
                            <FormItem key={genre} className="flex items-center space-x-2 space-y-0 bg-white p-2 rounded border">
                              <FormControl><RadioGroupItem value={genre} /></FormControl>
                              <FormLabel className="font-normal text-sm cursor-pointer capitalize">
                                {genre.replace('-', ' ')}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="learningOutcomes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Learning Outcomes</FormLabel>
                    <FormControl>
                      <DynamicListInput
                        items={field.value}
                        onItemsChange={field.onChange}
                        placeholder="Add outcome (e.g. Master Adobe Suite)"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="careerProspects"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Career Prospects</FormLabel>
                    <FormControl>
                      <DynamicListInput
                        items={field.value}
                        onItemsChange={field.onChange}
                        placeholder="Add prospect (e.g. Graphic Designer)"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="courseModules"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Modules</FormLabel>
                  <FormControl>
                    <ModuleListInput
                      modules={field.value}
                      onModulesChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-4">
              <FormItem>
                <FormLabel>Brochure</FormLabel>
                <FormControl>
                  <Label htmlFor="brochure-upload" className="flex items-center justify-center w-full h-12 px-4 py-2 text-sm border border-input bg-muted/50 rounded-md cursor-pointer hover:bg-accent transition-colors">
                    <UploadCloud className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="truncate max-w-[200px]">{brochureFileName || 'Select PDF file'}</span>
                    <Input
                      id="brochure-upload"
                      type="file"
                      className="sr-only"
                      accept=".pdf"
                      onChange={handleBrochureChange}
                    />
                  </Label>
                </FormControl>
                {form.formState.errors.brochureFile && <FormMessage>{form.formState.errors.brochureFile.message?.toString()}</FormMessage>}
              </FormItem>

              <FormItem>
                <FormLabel>Cover Image</FormLabel>
                <FormControl>
                  <Label htmlFor="image-upload" className="flex flex-col items-center justify-center w-full h-32 border border-input bg-muted/50 rounded-md cursor-pointer hover:bg-accent transition-colors overflow-hidden relative">
                    {courseImagePreview ? (
                      <img src={courseImagePreview} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <>
                        <ImagePlus className="h-6 w-6 mb-2 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Upload Image</span>
                      </>
                    )}
                    <Input
                      id="image-upload"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </Label>
                </FormControl>
                {form.formState.errors.courseImage && <FormMessage>{form.formState.errors.courseImage.message?.toString()}</FormMessage>}
              </FormItem>
            </div>

            <DialogFooter className="sticky bottom-0 bg-background pt-2 border-t mt-4">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="mr-2">Cancel</Button>
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
                {editingCourse ? 'Save Changes' : 'Create Course'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminAddCourseDialog;