"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AdminMenuProps {
  className?: string;
}

const AdminMenu: React.FC<AdminMenuProps> = ({ className }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  // Removed closeTimeoutRef and handleOpen/handleClose functions as they were for hover.

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}> {/* Open/close on click */}
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("h-8 w-8", className)}
          // Removed onMouseEnter and onMouseLeave
        >
          <MoreVertical className="h-5 w-5" />
          <span className="sr-only">Admin menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-40 p-1 bg-muted data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 duration-300"
        align="end"
        sideOffset={10} // Moves the dropdown 10px down from the trigger
        alignOffset={-50} // Moves the dropdown 50px to the right from its aligned end position
        // Removed onMouseEnter and onMouseLeave
      >
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link to="/admin-login">Admin?</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AdminMenu;