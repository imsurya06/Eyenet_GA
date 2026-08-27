"use client";

import React from 'react';
import { NavLink } from 'react-router-dom';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface CourseDropdownMenuItemProps extends React.ComponentPropsWithoutRef<typeof NavLink> {
  to: string;
  title: string;
  description?: string;
  icon?: React.ElementType;
}

const CourseDropdownMenuItem = React.forwardRef<
  HTMLAnchorElement,
  CourseDropdownMenuItemProps
>(({ className, title, to, description, icon: IconComponent, ...props }, ref) => {
  return (
    <DropdownMenuItem asChild>
      <NavLink
        ref={ref}
        to={to}
        className={({ isActive }) =>
          cn(
            "flex items-start gap-3.5 rounded-xl p-3 text-left transition-colors hover:bg-slate-100/80 focus:bg-slate-100/80 group cursor-pointer",
            isActive && "bg-primary/5 text-primary",
            className
          )
        }
        {...props}
      >
        {IconComponent ? (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <IconComponent className="h-5.5 w-5.5" />
          </div>
        ) : (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
            ?
          </div>
        )}
        <div className="flex flex-col justify-center py-0.5">
          <p className="text-base sm:text-[17px] font-semibold text-slate-900 leading-tight mb-1 group-hover:text-primary transition-colors">{title}</p>
          {description && (
            <p className="line-clamp-2 text-xs sm:text-[13.5px] text-slate-600 leading-snug">
              {description}
            </p>
          )}
        </div>
      </NavLink>
    </DropdownMenuItem>
  );
});
CourseDropdownMenuItem.displayName = "CourseDropdownMenuItem";

export default CourseDropdownMenuItem;