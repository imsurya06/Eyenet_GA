"use client";

import React, { useState } from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Scissors, Laptop, Building2, MessageSquare, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { toast } from "sonner";

const services = [
  {
    id: 'couture-boutique',
    icon: Scissors,
    title: 'Couture Boutique',
    badge: 'Boutique & Tailoring',
    description: 'Custom bridal couture, bespoke designer outfits, specialized Aari embroidery, and tailored fashion consultations crafted by expert fashion artisans at Eyenet Studio.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'web-design-dev',
    icon: Laptop,
    title: 'Web Design & Development',
    badge: 'Digital & Web',
    description: 'Custom responsive website creation, e-commerce platforms, UI/UX design, digital branding, and software solutions tailored for modern businesses and creative portfolios.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'architectural-design',
    icon: Building2,
    title: 'Architectural Design & Planning',
    badge: 'Architecture & CAD',
    description: '2D CAD drafting, 3D interior & exterior elevation rendering, blueprint planning, and spatial design consulting for residential and commercial spaces.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
  },
];

const OurServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Couture Boutique',
    description: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleServiceSelect = (serviceTitle: string) => {
    setFormData((prev) => ({ ...prev, service: serviceTitle }));
    const formElement = document.getElementById('service-inquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error('Please fill in your name and contact number.');
      return;
    }

    toast.success(`Thank you, ${formData.name}! Your inquiry for "${formData.service}" has been received.`);
    setIsSubmitted(true);
  };

  return (
    <>
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-[80px] bg-gradient-to-b from-slate-50/70 via-white to-background text-foreground">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <AnimateOnScroll isHero={true} delay={100}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Professional Services</span>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll isHero={true} delay={200}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal mb-4 text-slate-900 tracking-tight">
                Specialized <span className="text-primary font-heading italic">solutions</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll isHero={true} delay={300}>
              <p className="text-base md:text-lg font-body text-slate-600 leading-relaxed">
                Beyond educational training, Eyenet delivers bespoke studio solutions ranging from custom couture fashion crafting to web engineering and architectural elevation design.
              </p>
            </AnimateOnScroll>
          </div>

          {/* 3 Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-24">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <AnimateOnScroll key={service.id} delay={200 + index * 150} className="h-full">
                  <div className="flex flex-col h-full bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300">
                    
                    {/* Image Box */}
                    <div className="relative w-full h-56 overflow-hidden rounded-2xl mb-6">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-xs font-semibold px-3.5 py-1 rounded-full text-slate-800 shadow-sm border border-slate-100">
                        {service.badge}
                      </div>
                      <div className="absolute bottom-3 right-3 p-3 rounded-2xl bg-primary text-white shadow-md">
                        <IconComponent className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow justify-between text-left">
                      <div>
                        <h2 className="text-xl md:text-2xl font-heading font-normal mb-3 text-slate-900 leading-snug">
                          {service.title}
                        </h2>
                        <p className="text-sm font-body text-slate-600 leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>

                      {/* Direct Contact Button */}
                      <div className="pt-4 border-t border-slate-100 mt-auto">
                        <Button
                          onClick={() => handleServiceSelect(service.title)}
                          className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all duration-300 hover:shadow-md"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Contact for {service.title.split(' ')[0]}</span>
                        </Button>
                      </div>
                    </div>

                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>

          {/* Minimal Inquiry Form at Bottom */}
          <div id="service-inquiry-form" className="scroll-mt-24 max-w-3xl mx-auto">
            <AnimateOnScroll delay={300}>
              <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-lg relative overflow-hidden">
                <div className="text-center mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                    ✦ Service Inquiry
                  </span>
                  <h2 className="text-2xl md:text-3xl font-heading font-normal text-slate-900 mb-2">
                    Request a <span className="text-primary font-heading italic">service quotation</span>
                  </h2>
                  <p className="text-sm font-body text-slate-600">
                    Fill in your details below and our service specialists will reach out promptly.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-10 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-6">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                    <h3 className="text-xl font-heading text-slate-900 mb-2">Inquiry Submitted Successfully</h3>
                    <p className="text-sm font-body text-slate-600 mb-6">
                      Thank you for choosing Eyenet. Our team will contact you regarding your request for <strong>{formData.service}</strong>.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="rounded-full border-slate-300 text-slate-700"
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-xs font-semibold text-slate-700">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          required
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="rounded-xl border-slate-200 bg-white"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <Label htmlFor="phone" className="text-xs font-semibold text-slate-700">
                          Contact Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          placeholder="+91 98421 73725"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="rounded-xl border-slate-200 bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Email */}
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-xs font-semibold text-slate-700">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="rounded-xl border-slate-200 bg-white"
                        />
                      </div>

                      {/* Service Select */}
                      <div className="space-y-1.5">
                        <Label htmlFor="service" className="text-xs font-semibold text-slate-700">
                          Service Required *
                        </Label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full h-10 px-3 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-slate-800 font-body"
                        >
                          {services.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-1.5">
                      <Label htmlFor="description" className="text-xs font-semibold text-slate-700">
                        Requirement Details / Description
                      </Label>
                      <Textarea
                        id="description"
                        rows={4}
                        placeholder="Please describe your specific project requirements, timelines, or specifications..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="rounded-xl border-slate-200 bg-white"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl py-3 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all duration-300"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Service Inquiry</span>
                    </Button>
                  </form>
                )}

              </div>
            </AnimateOnScroll>
          </div>

        </div>
      </section>
    </>
  );
};

export default OurServices;