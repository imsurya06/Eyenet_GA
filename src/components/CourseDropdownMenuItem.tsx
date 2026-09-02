"use client";

import React from 'react';
import { NavLink } from 'react-router-dom';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';

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
            "flex items-start gap-3 rounded-md p-3 text-left transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            isActive && "text-primary",
            className
          )
        }
        onClick={(e) => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          if (props.onClick) props.onClick(e);
        }}
        {...props}
      >
        {IconComponent ? (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <IconComponent className="h-5 w-5" />
          </div>
        ) : (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-red-500 text-white">
            ?
          </div>
        )}
        <div className="flex flex-col justify-center min-h-[2.5rem]">
          <p className="text-base sm:text-lg font-semibold leading-snug">{title}</p>
          <p className="line-clamp-2 text-sm sm:text-[15px] leading-snug text-muted-foreground mt-0.5">
            {description || '\u00A0'}
          </p>
        </div>
      </NavLink>
    </DropdownMenuItem>
  );
});
CourseDropdownMenuItem.displayName = "CourseDropdownMenuItem";

export default CourseDropdownMenuItem;