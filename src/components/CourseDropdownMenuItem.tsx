"use client";

import React from 'react';
import { NavLink } from 'react-router-dom';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';

interface CourseDropdownMenuItemProps extends React.ComponentPropsWithoutRef<typeof NavLink> {
  href: string;
  title: string;
  description?: string;
  icon?: keyof typeof LucideIcons;
}

const CourseDropdownMenuItem = React.forwardRef<
  HTMLAnchorElement,
  CourseDropdownMenuItemProps
>(({ className, title, children, href, description, icon, ...props }, ref) => {
  const IconComponent = icon ? LucideIcons[icon] : null;

  return (
    <DropdownMenuItem asChild>
      <NavLink
        ref={ref}
        to={href}
        className={({ isActive }) =>
          cn(
            "flex items-start gap-3 rounded-md p-3 text-left text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            isActive && "text-primary",
            className
          )
        }
        {...props}
      >
        {IconComponent ? (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <IconComponent className="h-5 w-5" />
          </div>
        ) : (
          // Fallback for when IconComponent is not found
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-red-500 text-white">
            ?
          </div>
        )}
        <div className="flex flex-col justify-center h-[3.5rem]">
          <p className="text-sm font-normal leading-none">{title}</p> {/* Changed font-medium to font-normal */}
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description || '\u00A0'}
          </p>
          {children}
        </div>
      </NavLink>
    </DropdownMenuItem>
  );
});
CourseDropdownMenuItem.displayName = "CourseDropdownMenuItem";

export default CourseDropdownMenuItem;