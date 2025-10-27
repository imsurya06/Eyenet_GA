import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll'; // Import AnimateOnScroll

const Explore = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <AnimateOnScroll isHero={true} delay={500}> {/* Apply hero animation */}
        <h1 className="text-h1-mobile md:text-h1-desktop font-heading">Explore Page</h1>
      </AnimateOnScroll>
    </div>
  );
};

export default Explore;