"use client";

import React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LayoutGrid, Scissors, Laptop, Monitor, Camera, Flower2, Mic } from 'lucide-react';

const filterItems = [
  { name: 'All Courses', category: null, icon: LayoutGrid },
  { name: 'Fashion Design', category: 'fashion', icon: Scissors },
  { name: 'Computer Courses', category: 'computer', icon: Laptop },
  { name: 'Visual Media Training', category: 'multimedia', icon: Monitor },
  { name: 'Photography', category: 'photography', icon: Camera },
  { name: 'Beautician Course', category: 'beautician', icon: Flower2 },
  { name: 'Spoken English', category: 'spoken-english', icon: Mic },
];

const CourseCategoryFilter = () => {
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get('category');

  return (
    <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 px-3 md:px-8 lg:px-[80px] py-4 bg-transparent relative z-20">
      {filterItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = item.category === currentCategory || (item.category === null && !currentCategory);
        
        return (
          <NavLink
            key={item.name}
            to={item.category ? `/courses?category=${item.category}` : '/courses'}
            className={() =>
              cn(
                "group inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-heading transition-all duration-300 border shadow-sm",
                isActive
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/25 scale-[1.04] font-semibold"
                  : "bg-white/95 text-slate-700 hover:text-primary border-slate-200/90 hover:border-primary/40 hover:bg-white hover:shadow-md hover:-translate-y-0.5 font-medium"
              )
            }
          >
            <IconComponent
              className={cn(
                "w-4 h-4 transition-transform duration-300 group-hover:scale-110",
                isActive ? "text-white" : "text-primary group-hover:text-primary"
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