"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ConfettiOverlayProps {
  show: boolean;
  duration?: number; // Duration in ms for the confetti to be visible
}

const ConfettiOverlay: React.FC<ConfettiOverlayProps> = ({ show, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration]);

  if (!isVisible) return null;

  // Generate a few confetti pieces with random positions and delays
  const confettiPieces = Array.from({ length: 50 }).map((_, i) => (
    <div
      key={i}
      className={cn(
        "absolute w-2 h-2 bg-primary rounded-full opacity-0 animate-fall",
        i % 2 === 0 ? "bg-primary" : "bg-yellow-400", // Alternate colors
      )}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
        transform: `rotate(${Math.random() * 360}deg)`,
      }}
    />
  ));

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {confettiPieces}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg) scale(0.5);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg) scale(1);
            opacity: 0;
          }
        }
        .animate-fall {
          animation-name: fall;
          animation-timing-function: ease-in;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export default ConfettiOverlay;