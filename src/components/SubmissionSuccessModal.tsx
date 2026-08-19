"use client";

import React, { useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SubmissionSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  userName?: string;
  serviceOrCourse?: string;
  message?: string;
}

const SubmissionSuccessModal: React.FC<SubmissionSuccessModalProps> = ({
  isOpen,
  onClose,
  title = "Inquiry Received!",
  userName = "Friend",
  serviceOrCourse,
  message,
}) => {
  // ESC key to close modal safely
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Card Box */}
      <div
        className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-amber-100 text-center flex flex-col items-center animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()} // Prevent backdrop click from bubbling
      >
        {/* Close Icon Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Minimal Emerald Icon Circle */}
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 ring-8 ring-emerald-50/60 shadow-inner">
          <Check className="w-8 h-8 stroke-[2.5]" />
        </div>

        {/* Tag Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/60 text-xs font-semibold uppercase tracking-wider mb-3">
          <Check className="w-3.5 h-3.5 text-amber-600" />
          <span>Submission Confirmed</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-2">
          {title}
        </h3>

        {/* Message */}
        <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
          Thank you, <span className="font-semibold text-slate-900">{userName}</span>!{' '}
          {message || (
            <>
              Your request for{' '}
              {serviceOrCourse ? (
                <span className="font-semibold text-primary">{serviceOrCourse}</span>
              ) : (
                'information'
              )}{' '}
              has been successfully received. Our academy counselor will contact you shortly.
            </>
          )}
        </p>

        {/* Action Button */}
        <Button
          onClick={onClose}
          className="w-full bg-[#701a2b] hover:bg-[#581321] text-white font-semibold text-sm md:text-base py-6 rounded-full shadow-lg shadow-[#701a2b]/20 hover:shadow-xl transition-all duration-200"
        >
          Got it, Thank you!
        </Button>
      </div>
    </div>
  );
};

export default SubmissionSuccessModal;
