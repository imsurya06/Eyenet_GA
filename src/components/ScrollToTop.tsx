"use client";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // Disable automatic browser scroll restoration so it never jumps to previous page bottom
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // If there's no hash, IMMEDIATELY reset scroll position to top
    if (!hash) {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      return;
    }

    // If this is the enrollment form, Admissions.tsx handles the dedicated smooth scroll
    if (hash === '#enrollment-form') {
      return;
    }

    // If there's a hash, scroll smoothly accounting for sticky navbar
    const id = hash.replace('#', '');

    const scrollToTarget = () => {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 110;
        const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        return true;
      }
      return false;
    };

    // Single attempt or delayed attempt once element is mounted
    if (!scrollToTarget()) {
      const timer = setTimeout(() => {
        scrollToTarget();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;