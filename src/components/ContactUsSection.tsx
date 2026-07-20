import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const ContactUsSection = () => {
  return (
    <section className="py-14 md:py-20 px-4 md:px-8 lg:px-[80px] bg-gradient-to-b from-white to-[#fdfaf6] text-foreground">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Section: Contact Information Card */}
        <AnimateOnScroll delay={100} className="lg:col-span-5 flex flex-col justify-between">
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl h-full flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none"></div>

            <div>
              <span className="inline-block uppercase tracking-widest text-xs font-semibold text-gray-500 mb-3">
                ✦ Reach Out
              </span>
              <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">
                Get In <span className="text-primary font-heading">Touch</span>
              </h2>
              <p className="text-sm font-body text-gray-600 mb-8 leading-relaxed">
                Have questions about our courses, admissions, or campus visits? Our team is always here to assist you.
              </p>

              <div className="space-y-5 pt-4 border-t border-gray-100">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary mt-0.5 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Main Campus</p>
                    <p className="text-sm font-body text-gray-700 leading-relaxed">
                      Hamdhiya Towers, 2nd Floor, 80 Feet Road Jn, Anna Nagar, Madurai, TN 625020
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary mt-0.5 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone</p>
                    <a href="tel:+919842173725" className="text-sm font-body text-primary font-semibold hover:underline">
                      +91 98421 73725 / +91 98421 73726
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary mt-0.5 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</p>
                    <a href="mailto:eyenetfashion@gmail.com" className="text-sm font-body text-primary font-semibold hover:underline">
                      eyenetfashion@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary mt-0.5 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Hours</p>
                    <p className="text-sm font-body text-gray-700">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 text-xs text-gray-400 text-center">
              ✦ Eye-Net Educational Academy • Madurai
            </div>
          </div>
        </AnimateOnScroll>

        {/* Right Section: Modern Form Card */}
        <AnimateOnScroll delay={200} className="lg:col-span-7 flex">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl w-full">
            <h3 className="text-2xl font-heading font-bold mb-2 text-foreground">
              Send A Message
            </h3>
            <p className="text-sm font-body text-gray-500 mb-6">
              Drop us a message and we'll get back to you promptly.
            </p>

            <form action="https://formspree.io/f/xeqyqjkk" method="POST" className="space-y-5">
              <div>
                <Label htmlFor="contact-name" className="text-sm font-semibold text-foreground mb-1.5 block text-left">
                  Full Name*
                </Label>
                <Input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="h-12 px-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <Label htmlFor="contact-email" className="text-sm font-semibold text-foreground mb-1.5 block text-left">
                  Email Address*
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="h-12 px-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <Label htmlFor="contact-message" className="text-sm font-semibold text-foreground mb-1.5 block text-left">
                  Your Message*
                </Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Type your message here..."
                  rows={4}
                  className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary resize-none"
                  required
                />
              </div>

              <div className="flex items-center space-x-3 rounded-xl p-3 bg-gray-50 border border-gray-100">
                <Checkbox id="contact-terms" name="terms" required className="border-primary data-[state=checked]:bg-primary text-white" />
                <Label htmlFor="contact-terms" className="text-xs font-body text-gray-600">
                  I accept the{' '}
                  <Link to="/terms-of-service" className="underline hover:text-primary font-semibold">
                    Terms & Conditions
                  </Link>
                </Label>
              </div>

              <Button type="submit" className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-white rounded-full shadow-md transition-all duration-300">
                Send Message <Send className="w-4 h-4 ml-2 inline-block" />
              </Button>
            </form>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
};

export default ContactUsSection;