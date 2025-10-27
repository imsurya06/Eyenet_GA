import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll'; // Import AnimateOnScroll

const StudentsZone = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-100">
      <AnimateOnScroll isHero={true} delay={500}> {/* Apply hero animation */}
        <h1 className="text-h1-mobile md:text-h1-desktop font-heading">Students Zone Page</h1>
      </AnimateOnScroll>
    </div>
  );
};

export default StudentsZone;