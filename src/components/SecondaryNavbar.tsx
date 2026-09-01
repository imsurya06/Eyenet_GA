"use client";

import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width="24"
    height="24"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const socialAndContactIcons = [
  { icon: Mail, href: 'mailto:eyenetfashion@gmail.com', name: 'Email' },
  { icon: Facebook, href: 'https://www.facebook.com/kubendrarajan1402/', name: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/eye_net_fashion/', name: 'Instagram' },
  { icon: WhatsAppIcon, href: 'https://wa.me/919842173725', name: 'WhatsApp' },
  { icon: Youtube, href: 'https://www.youtube.com/@Eye-Net-Fashion', name: 'YouTube' },
];

const SecondaryNavbar = () => {
  const location = useLocation();
  const [isFaqInView, setIsFaqInView] = React.useState(false);

  React.useEffect(() => {
    if (location.pathname === '/') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsFaqInView(entry.isIntersecting);
        },
        { threshold: 0.2 }
      );

      const faqSection = document.getElementById('faq-section');
      if (faqSection) {
        observer.observe(faqSection);
      }

      return () => {
        if (faqSection) {
          observer.unobserve(faqSection);
        }
      };
    } else {
      setIsFaqInView(false);
    }
  }, [location.pathname]);

  const secondaryNavLinks = [
    { name: 'Faculty', to: '/faculty' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'FAQ', to: '/#faq-section' },
    { name: '360° View', href: '/virtualtour/' },
    { name: 'Our Services', to: '/our-services' },
  ];

  return (
    <div className="bg-background text-foreground py-2 sm:py-2.5 px-3.5 sm:px-6 md:px-8 lg:px-[80px] flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 font-body border-b border-border">
      {/* Left Section: Navigation Links (Prominent Font Sizes on Mobile) */}
      <div className="flex items-center gap-3.5 sm:gap-6 flex-wrap justify-center sm:justify-start">
        {secondaryNavLinks.map((link) => {
          const isFaqLink = link.name === 'FAQ';

          if (link.name === '360° View') {
            return (
              <a
                key={link.name}
                href="/virtualtour/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13.5px] sm:text-sm md:text-[15px] font-semibold text-slate-800 hover:text-primary transition-colors tracking-tight"
              >
                {link.name}
              </a>
            );
          }

          return (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "text-[13.5px] sm:text-sm md:text-[15px] font-semibold text-slate-800 hover:text-primary transition-colors tracking-tight",
                  ((isActive && !isFaqLink) || (isFaqLink && isFaqInView)) && "text-primary font-bold"
                )
              }
              end={isFaqLink ? true : false}
            >
              {link.name}
            </NavLink>
          );
        })}
      </div>

      {/* Right Section: Contact Info and Social Icons (Prominent Sizing on Mobile) */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-2 sm:gap-x-6 flex-wrap w-full sm:w-auto mt-0.5 sm:mt-0">
        {/* Phone Numbers */}
        <div className="flex items-center gap-1 text-primary font-bold text-[14px] sm:text-sm md:text-[15px]">
          <Phone className="h-4 w-4 sm:h-4.5 sm:w-4.5 flex-shrink-0" />
          <a href="tel:+919842173725" className="hover:underline">+91 9842173725</a>
          <span className="text-slate-400 font-normal">/</span>
          <a href="tel:+918300064651" className="hover:underline">+91 8300064651</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-x-6 sm:gap-x-4 mt-2 sm:mt-0">
          {socialAndContactIcons.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="hover:text-primary transition-all text-primary p-2 sm:p-1.5 hover:scale-110 active:scale-95 flex items-center justify-center rounded-full hover:bg-primary/5"
            >
              <item.icon className="h-5 w-5 sm:h-4.5 sm:w-4.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavbar;