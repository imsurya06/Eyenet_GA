"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface EnrollmentSuccessDialogProps {
  show: boolean;
  courseName: string;
  onClose: () => void;
}

const EnrollmentSuccessDialog: React.FC<EnrollmentSuccessDialogProps> = ({ show, courseName, onClose }) => {
  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-8 md:p-10 text-center flex flex-col items-center space-y-6"> {/* Added flex-col items-center space-y-6 */}
        <DialogHeader className="flex flex-col items-center space-y-4"> {/* Adjusted for consistent internal spacing */}
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto" /> {/* Removed mb-6 */}
          <DialogTitle className="text-h4-mobile md:text-h4-desktop font-heading text-foreground"> {/* Removed mb-2 */}
            Congratulations!
          </DialogTitle>
          <DialogDescription className="text-text-medium font-body text-gray-700"> {/* Removed mb-8 */}
            You have enrolled for <span className="font-semibold text-primary">{courseName}</span>. Let's start your career with us.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-center"> {/* Removed mt-4, now controlled by space-y-6 on parent */}
          <Button onClick={onClose} className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-text-regular">
            Awesome!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentSuccessDialog;