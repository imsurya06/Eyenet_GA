"use client";

import React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Sparkles, Scissors, Laptop, Monitor, Camera, Mic } from 'lucide-react';

const filterItems = [
  { name: 'All Courses', category: null, icon: Sparkles },
  { name: 'Fashion Design', category: 'fashion', icon: Scissors },
  { name: 'Computer Courses', category: 'computer', icon: Laptop },
  { name: 'Multimedia Training', category: 'multimedia', icon: Monitor },
  { name: 'Photography', category: 'photography', icon: Camera },
  { name: 'Beautician Course', category: 'beautician', icon: Sparkles },
  { name: 'Spoken English', category: 'spoken-english', icon: Mic },
];

const CourseCategoryFilter = () => {
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get('category');

  return (
    <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 px-3 md:px-8 lg:px-[80px] py-6 bg-gradient-to-b from-slate-50/50 via-slate-100/30 to-slate-50/50 relative z-20">
      {filterItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = item.category === currentCategory || (item.category === null && !currentCategory);
        
        return (
          <NavLink
            key={item.name}
            to={item.category ? `/courses?category=${item.category}` : '/courses'}
            className={() =>
              cn(
                "group inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-heading transition-all duration-300 border shadow-xs",
                isActive
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/25 scale-[1.03] font-normal"
                  : "bg-white/90 text-slate-700 hover:text-primary border-slate-200/90 hover:border-primary/40 hover:bg-white hover:shadow-md hover:-translate-y-0.5 font-normal"
              )
            }
          >
            <IconComponent
              className={cn(
                "w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:scale-110",
                isActive ? "text-white" : "text-primary/70 group-hover:text-primary"
              )}
            />
            <span>{item.name}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default CourseCategoryFilter;