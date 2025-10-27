"use client";

import React from 'react';

const GalleryGridSection = () => {
  const images = [
    { src: '/images/img5.png', alt: 'Traditional attire model 3' },
    { src: '/images/img6.png', alt: 'Traditional attire model 4' },
    { src: '/images/img7.png', alt: 'Studio portrait model' },
    { src: '/public/placeholder.svg', alt: 'Placeholder image' }, // Using a placeholder for the empty slots
    { src: '/public/placeholder.svg', alt: 'Placeholder image' },
    { src: '/public/placeholder.svg', alt: 'Placeholder image' },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-3 md:px-8 lg:px-[80px] bg-background text-foreground text-center">
      <h2 className="text-h2-mobile md:text-h2-desktop font-heading mb-4">
        Our Latest Works
      </h2>
      <p className="text-text-medium font-body text-gray-600 mb-16 max-w-2xl mx-auto">
        Explore the diverse and innovative projects from our talented students.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <div key={index} className="w-full aspect-square overflow-hidden rounded-lg shadow-md">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryGridSection;