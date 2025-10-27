"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, MenuIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Admissions", href: "/admissions" },
  {
    name: "Courses",
    href: "/courses",
    dropdown: [
      { name: "Fashion Designing", href: "/courses/fashion" },
      { name: "Interior Designing", href: "/courses/interior" },
    ],
  },
  {
    name: "Explore",
    href: "/explore",
    dropdown: [
      { name: "Gallery", href: "/explore/gallery" },
      { name: "Events", href: "/explore/events" },
    ],
  },
];

const Navbar = () => {
  const isMobile = useIsMobile();

  const renderNavLinks = () => (
    <nav className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
      {navItems.map((item) =>
        item.dropdown ? (
          <DropdownMenu key={item.name}>
            <DropdownMenuTrigger className="flex items-center gap-1 text-base font-medium text-gray-700 hover:text-eyenet-red focus:outline-none data-[state=open]:text-eyenet-red">
              <span className={item.name === "Courses" ? "text-eyenet-red" : ""}>
                {item.name}
              </span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {item.dropdown.map((dropdownItem) => (
                <DropdownMenuItem key={dropdownItem.name} asChild>
                  <Link to={dropdownItem.href}>{dropdownItem.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            key={item.name}
            to={item.href}
            className="text-base font-medium text-gray-700 hover:text-eyenet-red"
          >
            {item.name}
          </Link>
        ),
      )}
    </nav>
  );

  const renderActionButtons = () => (
    <div className="flex flex-col lg:flex-row gap-3">
      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
        Contact
      </Button>
      <Button className="bg-eyenet-red hover:bg-eyenet-red/90 text-white">
        Apply
      </Button>
    </div>
  );

  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 lg:px-12 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/design-system/eyenet-logo.png"
            alt="Eyenet Educational Academy Logo"
            className="h-12 w-auto"
          />
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] p-6 flex flex-col">
              <div className="flex flex-col gap-6 mt-8">
                {renderNavLinks()}
                <div className="border-t pt-6 mt-6">
                  {renderActionButtons()}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <>
            {/* Desktop Navigation */}
            <div className="flex items-center gap-12">
              {renderNavLinks()}
            </div>
            {/* Desktop Action Buttons */}
            {renderActionButtons()}
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;