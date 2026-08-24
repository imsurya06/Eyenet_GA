"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import PrivacyPolicyDialog from './PrivacyPolicyDialog';
import TermsAndConditionsDialog from './TermsAndConditionsDialog';
import CookieSettingsDialog from './CookieSettingsDialog';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Academy', href: '/about' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'All Courses', href: '/courses' },
  ];

  const exploreLinks = [
    { name: 'Infrastructure', href: '/explore/infrastructure' },
    { name: 'Student Gallery', href: '/explore/gallery' },
    { name: 'News & Events', href: '/explore/news-events' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/kubendrarajan1402/', name: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/eye_net_fashion/', name: 'Instagram' },
    { icon: WhatsAppIcon, href: 'https://wa.me/919842173725', name: 'WhatsApp' },
    { icon: Youtube, href: 'https://www.youtube.com/@Eye-Net-Fashion', name: 'YouTube' },
  ];

  // State for dialogs
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsAndConditionsOpen, setIsTermsAndConditionsOpen] = useState(false);
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-slate-300 pt-16 md:pt-20 border-t border-slate-800 relative overflow-hidden">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-[80px] relative z-10">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16">
          
          {/* Column 1: Brand & Bio (4 Cols) - NO QR CODE */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <Link to="/" className="mb-6 block group">
              <div className="bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 shadow-md group-hover:scale-105 transition-transform duration-300 inline-block">
                <img src="/design-system/eyenet png.png" alt="Eye-Net Educational Academy" className="h-12 w-auto object-contain" />
              </div>
            </Link>
            
            <p className="text-sm font-body text-slate-400 leading-relaxed mb-6">
              Where Creativity Creates Career. Master Fashion Design, Computer Technologies, Beautician Courses & Multimedia Arts with 25+ years of practical excellence.
            </p>

            <div className="flex flex-col gap-2.5 w-full text-xs font-body text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <a href="tel:+919842173725" className="hover:text-primary transition-colors">+91 98421 73725</a>
                  <span className="text-slate-500">/</span>
                  <a href="tel:+918300064651" className="hover:text-primary transition-colors">+91 83000 64651</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>eyenetfashion@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Madurai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-lg font-heading font-normal text-white mb-5 tracking-wide flex items-center gap-2">
              <span>Quick Navigation</span>
            </h4>
            <ul className="space-y-3 text-sm font-body text-slate-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-primary flex items-center gap-2 transition-all duration-300 hover:translate-x-1"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-primary/70" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore Campus (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-lg font-heading font-normal text-white mb-5 tracking-wide">
              Explore
            </h4>
            <ul className="space-y-3 text-sm font-body text-slate-400">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-primary flex items-center gap-2 transition-all duration-300 hover:translate-x-1"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-primary/70" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Community & Hours (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-lg font-heading font-normal text-white mb-5 tracking-wide">
              Connect With Us
            </h4>

            <p className="text-xs font-body text-slate-400 mb-4">
              Follow our student creations, runway showcases, and campus events across social platforms.
            </p>

            {/* Social Grid Icons */}
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary border border-white/10 hover:border-primary flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 w-full flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary shrink-0" />
              <div className="text-left text-xs">
                <p className="font-semibold text-white">Academy Working Hours</p>
                <p className="text-slate-400">Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="py-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs font-body text-slate-500 gap-4">
          <p className="flex items-center gap-2 flex-wrap">
            <span>© {currentYear} Eye-Net Educational Academy. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="text-slate-400 font-medium">Powered by Eye-Net</span>
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button
              variant="link"
              onClick={() => setIsPrivacyPolicyOpen(true)}
              className="text-xs text-slate-400 hover:text-primary p-0 h-auto font-body"
            >
              Privacy Policy
            </Button>
            <Button
              variant="link"
              onClick={() => setIsTermsAndConditionsOpen(true)}
              className="text-xs text-slate-400 hover:text-primary p-0 h-auto font-body"
            >
              Terms of Service
            </Button>
            <Button
              variant="link"
              onClick={() => setIsCookieSettingsOpen(true)}
              className="text-xs text-slate-400 hover:text-primary p-0 h-auto font-body"
            >
              Cookies Settings
            </Button>
          </div>
        </div>

      </div>

      {/* Dialog Components */}
      <PrivacyPolicyDialog open={isPrivacyPolicyOpen} onOpenChange={setIsPrivacyPolicyOpen} />
      <TermsAndConditionsDialog open={isTermsAndConditionsOpen} onOpenChange={setIsTermsAndConditionsOpen} />
      <CookieSettingsDialog open={isCookieSettingsOpen} onOpenChange={setIsCookieSettingsOpen} />
    </footer>
  );
};

export default Footer;