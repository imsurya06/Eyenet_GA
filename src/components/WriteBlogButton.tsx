"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PencilLine } from 'lucide-react';
import StudentWriteBlogDialog from './StudentWriteBlogDialog'; // Import the new dialog

const WriteBlogButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsDialogOpen(true)}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50
                   bg-primary hover:bg-primary/90 !text-white
                   px-6 py-3 text-text-regular rounded-full shadow-lg
                   flex items-center gap-2 transition-all duration-300 ease-in-out hover:scale-[1.05]"
      >
        <PencilLine className="h-5 w-5" />
        Write your own Blog?
      </Button>

      <StudentWriteBlogDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
};

export default WriteBlogButton;