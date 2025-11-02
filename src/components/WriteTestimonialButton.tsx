"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquarePlus } from 'lucide-react';
import StudentWriteTestimonialDialog from './StudentWriteTestimonialDialog'; // Import the new dialog

const WriteTestimonialButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsDialogOpen(true)}
        className="fixed bottom-20 right-4 md:bottom-24 md:right-8 z-50
                   bg-secondary hover:bg-secondary/90 text-secondary-foreground
                   px-6 py-3 text-text-regular rounded-full shadow-lg
                   flex items-center gap-2 transition-all duration-300 ease-in-out hover:scale-[1.05]"
      >
        <MessageSquarePlus className="h-5 w-5" />
        Write a Testimonial
      </Button>

      <StudentWriteTestimonialDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
};

export default WriteTestimonialButton;