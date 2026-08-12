"use client";

import React from 'react';
import { ExternalLink, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VIRTUAL_TOUR_URL = "https://www.eyenetfashion.com/virtualtour/index.htm";

const ThreeSixtyView = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Top Header Bar */}
      <div className="bg-slate-900 border-b border-slate-800 py-4 px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary shrink-0">
            <Compass className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h1 className="text-xl font-heading font-normal text-white leading-tight">Eyenet 360° Virtual Campus Tour</h1>
            <p className="text-xs font-body text-slate-400">Explore our studio classrooms, fashion labs, & CAD facilities in interactive 360°</p>
          </div>
        </div>

        <a
          href={VIRTUAL_TOUR_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md">
            <span>Open Fullscreen Tour</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Button>
        </a>
      </div>

      {/* Embedded Interactive 360 Virtual Tour Frame */}
      <div className="flex-1 w-full h-[calc(100vh-5rem)] min-h-[600px] relative bg-black">
        <iframe
          src={VIRTUAL_TOUR_URL}
          title="Eyenet 360° Virtual Tour"
          className="w-full h-full border-0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
};

export default ThreeSixtyView;