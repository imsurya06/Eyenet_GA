"use client";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top on pathname change if no hash
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // If there's a hash, try to scroll to the element
    const id = hash.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
      // If element is found immediately, scroll
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not found immediately, wait for DOM to be ready or element to appear
      const checkElement = setInterval(() => {
        const foundElement = document.getElementById(id);
        if (foundElement) {
          foundElement.scrollIntoView({ behavior: 'smooth' });
          clearInterval(checkElement);
        }
      }, 100); // Check every 100ms

      // Clear interval after a certain time to prevent infinite loop
      const timeout = setTimeout(() => {
        clearInterval(checkElement);
      }, 2000); // Stop checking after 2 seconds

      return () => {
        clearInterval(checkElement);
        clearTimeout(timeout);
      };
    }
  }, [pathname, hash]); // Depend on both pathname and hash

  return null;
};

export default ScrollToTop;