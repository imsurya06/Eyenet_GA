"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface EnrollmentSuccessDialogProps {
  show: boolean;
  courseName: string;
  userName: string;
  onClose: () => void;
}

const EnrollmentSuccessDialog: React.FC<EnrollmentSuccessDialogProps> = ({ show, courseName, userName, onClose }) => {
  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-8 md:p-10 text-center flex flex-col items-center bg-gradient-to-b from-white via-rose-50/20 to-slate-50 border border-rose-100/80 shadow-2xl rounded-[2.5rem] relative overflow-hidden backdrop-blur-md" hideCloseButton={true}>
        
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Animated Check Icon Badge */}
        <div className="relative my-2">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-xl shadow-emerald-500/30">
            <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
          </div>
          <div className="absolute inset-0 rounded-full bg-emerald-400/30 blur-lg pointer-events-none animate-pulse" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-bold uppercase tracking-wider shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Application Submitted</span>
        </div>

        <DialogHeader className="flex flex-col items-center space-y-2 text-center w-full">
          <DialogTitle className="text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight">
            Congratulations!
          </DialogTitle>
        </DialogHeader>

        {/* Summary Card */}
        <div className="w-full bg-white/90 border border-slate-200/80 rounded-2xl p-4 md:p-5 shadow-sm text-slate-700 text-sm md:text-base leading-relaxed text-center my-2">
          Welcome <span className="font-bold text-slate-900">{userName || 'Student'}</span>! You have successfully applied for{' '}
          <span className="font-bold text-primary">{courseName}</span>. Our admissions team will connect with you shortly.
        </div>

        <div className="w-full pt-2">
          <Button
            onClick={onClose}
            className="w-full bg-primary hover:bg-primary/95 text-white font-bold text-base py-6 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Awesome, Got It!</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentSuccessDialog;