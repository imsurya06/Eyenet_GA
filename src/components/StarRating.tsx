"use client";

import React, { useState } from 'react'; // Added useState import
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
  maxStars?: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  onRatingChange,
  maxStars = 5,
  className,
}) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={starValue}
            className={cn(
              "h-6 w-6 cursor-pointer transition-colors",
              (hoverRating || rating) >= starValue ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"
            )}
            onClick={() => onRatingChange(starValue)}
            onMouseEnter={() => setHoverRating(starValue)}
            onMouseLeave={() => setHoverRating(0)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;