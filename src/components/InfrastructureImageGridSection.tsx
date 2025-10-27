"use client";

import React from 'react';

const InfrastructureImageGridSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-3 md:px-8 lg:px-[80px] bg-background text-foreground text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-h2-mobile md:text-h2-desktop font-heading mb-4">
          More Campus Views
        </h2>
        <p className="text-text-medium font-body text-gray-600 mb-16 max-w-2xl mx-auto">
          Discover more of our inspiring learning spaces and facilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Left Column - Contains two regular images stacked */}
          <div className="flex flex-col gap-6">
            <div className="w-full h-[250px] overflow-hidden rounded-lg shadow-md">
              <img src="/images/pexels-pixabay-256491.jpg" alt="Computer Lab" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-[250px] overflow-hidden rounded-lg shadow-md">
              <img src="/images/pexels-tima-miroshnichenko-6550407.jpg" alt="Classroom" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column - Contains one tall image */}
          <div className="w-full h-[524px] overflow-hidden rounded-lg shadow-md"> {/* Adjusted height to match stacked images + gap */}
            <img src="/images/pexels-pixabay-356065.jpg" alt="Library" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureImageGridSection;