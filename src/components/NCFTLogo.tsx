import React from 'react';
import { cn } from '@/lib/utils';

interface NCFTLogoProps {
  className?: string;
}

const NCFTLogo: React.FC<NCFTLogoProps> = ({ className }) => {
  return (
    <div className={cn("w-full flex justify-center bg-transparent my-1", className)}>
      <img
        src="/images/NCFT-logo.png"
        alt="NCFT Logo"
        className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain mx-auto"
      />
    </div>
  );
};

export default NCFTLogo;