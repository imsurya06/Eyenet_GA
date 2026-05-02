import React from 'react';
import { Loader2 } from 'lucide-react';

interface AdminActionOverlayProps {
  isProcessing: boolean;
}

export const AdminActionOverlay: React.FC<AdminActionOverlayProps> = ({ isProcessing }) => {
  if (!isProcessing) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center">
      <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
      <h2 className="text-xl font-heading font-semibold text-foreground">Processing...</h2>
      <p className="text-muted-foreground mt-2">Please wait while the changes are saved.</p>
    </div>
  );
};
