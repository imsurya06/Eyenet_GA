"use client";

import { useEffect } from 'react';

const VIRTUAL_TOUR_URL = "https://www.eyenetfashion.com/virtualtour/index.htm";

const ThreeSixtyView = () => {
  useEffect(() => {
    window.location.href = VIRTUAL_TOUR_URL;
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-body text-slate-300">Redirecting to 360° Virtual Campus Tour...</p>
      </div>
    </div>
  );
};

export default ThreeSixtyView;