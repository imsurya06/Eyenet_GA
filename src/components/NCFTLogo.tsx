import React from 'react';
import { cn } from '@/lib/utils';

interface NCFTLogoProps {
  className?: string;
}

const NCFTLogo: React.FC<NCFTLogoProps> = ({ className }) => {
  return (
    <div className={cn("w-full flex justify-center py-3 md:py-4 lg:py-4 bg-background", className)}>
      <img
        src="/images/NCFT-logo.png"
        alt="NCFT Logo"
        className="h-16 md:h-20 lg:h-28 w-auto object-contain mx-auto"
      />
    </div>
  );
};

export default NCFTLogo;