"use client";

import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const AdminLogin = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-100 p-4">
      <AnimateOnScroll isHero={true} delay={500}>
        <h1 className="text-h1-mobile md:text-h1-desktop font-heading mb-4 text-foreground text-center">
          Admin Login
        </h1>
      </AnimateOnScroll>
      <AnimateOnScroll isHero={true} delay={600}>
        <p className="text-text-medium font-body text-gray-600 text-center">
          This page will be developed for admin access to manage content.
        </p>
      </AnimateOnScroll>
    </div>
  );
};

export default AdminLogin;