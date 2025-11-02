"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2, CheckCircle, Clock } from 'lucide-react';
import { Testimonial } from '@/data/testimonials';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import StarRating from './StarRating'; // Import StarRating

interface AdminTestimonialCardProps {
  testimonial: Testimonial;
  onDelete: (id: string) => void;
  onEdit: (testimonial: Testimonial) => void;
  onToggleApproval: (testimonial: Testimonial) => void;
}

const AdminTestimonialCard: React.FC<AdminTestimonialCardProps> = ({ testimonial, onDelete, onEdit, onToggleApproval }) => {
  const formattedDate = new Date(testimonial.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white rounded-lg shadow-md drop-shadow-lg overflow-hidden border border-gray-200 flex flex-col h-full">
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <img
              src={testimonial.avatar || `https://api.dicebear.com/8.x/adventurer/svg?seed=${encodeURIComponent(testimonial.name)}`}
              alt={testimonial.name}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-text-medium font-body font-semibold text-foreground leading-none">
                {testimonial.name}
              </p>
              <p className="text-text-small font-body text-gray-600 leading-none">
                {formattedDate}
              </p>
            </div>
          </div>
          <StarRating rating={testimonial.rating} size={18} />
        </div>

        <p className="text-text-regular font-body text-gray-600 mb-4 flex-grow italic h-[6.4rem] overflow-hidden">
          "{testimonial.quote}"
        </p>

        <div className="flex items-center gap-2 mt-auto">
          <Button
            variant={testimonial.approved ? "secondary" : "default"}
            size="sm"
            className="flex-1"
            onClick={() => onToggleApproval(testimonial)}
          >
            {testimonial.approved ? (
              <>
                <CheckCircle className="h-4 w-4 mr-2" /> Approved
              </>
            ) : (
              <>
                <Clock className="h-4 w-4 mr-2" /> Approve
              </>
            )}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => onEdit(testimonial)}
          >
            <Pencil className="h-4 w-4 mr-2" /> Edit
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="sm" className="flex-1">
                <Trash2 className="h-4 w-4 mr-2" /> Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  testimonial from "{testimonial.name}".
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => onDelete(testimonial.id)}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default AdminTestimonialCard;