"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PencilLine } from 'lucide-react';
import StudentWriteBlogDialog from './StudentWriteBlogDialog'; // Import the new dialog component

const WriteBlogButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Button
        // Changed variant from "outline" to "default" and updated class names for filled blue background and white text
        variant="default"
        className="fixed bottom-8 right-8 z-50 px-6 py-3 text-text-regular bg-blue-700 text-white hover:bg-blue-800 shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.05] flex items-center gap-2"
        onClick={() => setIsDialogOpen(true)}
      >
        <PencilLine className="h-5 w-5" />
        Write a Blog
      </Button>

      <StudentWriteBlogDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
};

export default WriteBlogButton;