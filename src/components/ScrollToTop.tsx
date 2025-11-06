"use client";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Remove '#' from hash
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0); // Fallback to top if hash element not found
      }
    } else {
      window.scrollTo(0, 0); // Scroll to top on regular route changes
    }
  }, [pathname, hash]); // Re-run effect when pathname or hash changes

  return null;
};

export default ScrollToTop;