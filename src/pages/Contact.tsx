import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const Contact = () => {
  const googleMapsUrl = "https://www.google.com/maps/dir//Suguna+store,+Hamdhiya+towers+2nd+floor,+80+feet+road,+Jn,+Anna+Nagar,+Madurai,+Tamil+Nadu+625020/@9.9291093,78.1409982,15.78z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b00c5072a46551f:0x3feb0d2a94af46bb!2m2!1d78.1485275!2d9.9215582?entry=ttu";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1558223405787!2d78.14633887586524!3d9.921563490180477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5072a46551f%3A0x3feb0d2a94af46bb!2sEye-Net%20Educational%20Academy!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-[80px] bg-gradient-to-b from-[#fdfaf6] via-white to-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <AnimateOnScroll isHero={true} delay={100}>
            <span className="inline-block uppercase tracking-widest text-xs font-semibold text-gray-500 mb-3">
              CONNECT WITH US
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
              Contact <span className="text-primary font-heading">Us</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll isHero={true} delay={200}>
            <p className="text-base md:text-lg font-body text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you. Reach out for course inquiries, campus visits, or counselor support.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Section: Contact Form Card */}
          <AnimateOnScroll isHero={true} delay={300} className="lg:col-span-6 flex">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 w-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-primary/5 rounded-bl-full pointer-events-none"></div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-2 text-foreground">
                  Send Us A Message
                </h2>
                <p className="text-sm font-body text-gray-500 mb-8">
                  Fill out the form below and our counselor will respond within 24 hours.
                </p>

                <form action="https://formspree.io/f/xeqyqjkk" method="POST" className="space-y-5">
                  <input type="hidden" name="_next" value={`${window.location.origin}/`} />
                  <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                  
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold text-foreground mb-1.5 block text-left">
                      Full Name*
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      className="h-12 px-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-foreground mb-1.5 block text-left">
                      Email Address*
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      className="h-12 px-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-foreground mb-1.5 block text-left">
                      Your Message*
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Type your questions or inquiry..."
                      rows={4}
                      className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary resize-none"
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-3 rounded-xl p-3 bg-gray-50 border border-gray-100">
                    <Checkbox id="terms" name="terms" required className="border-primary data-[state=checked]:bg-primary text-white" />
                    <Label htmlFor="terms" className="text-xs font-body text-gray-600">
                      I accept the{' '}
                      <Link to="/terms-of-service" className="underline hover:text-primary font-semibold">
                        Terms & Conditions
                      </Link>
                    </Label>
                  </div>

                  <Button type="submit" className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-white rounded-full shadow-md transition-all duration-300">
                    Send Message Now →
                  </Button>
                </form>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right Section: Location Info & Interactive Live Map */}
          <AnimateOnScroll isHero={true} delay={400} className="lg:col-span-6 flex flex-col justify-between">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 h-full flex flex-col justify-between">
              
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">
                  Academy Campus Details
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary mt-0.5 flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Address</p>
                      <p className="text-sm font-body text-gray-700 leading-relaxed">
                        Hamdhiya Towers, 2nd Floor, 80 Feet Road Jn, Anna Nagar, Madurai, Tamil Nadu 625020
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary mt-0.5 flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone Lines</p>
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
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Inquiry</p>
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
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Working Hours</p>
                      <p className="text-sm font-body text-gray-700">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Interactive Google Map Embed */}
                <div className="relative w-full h-[220px] rounded-2xl overflow-hidden border border-gray-200 shadow-md group">
                  <iframe
                    title="Academy Location Map"
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500">Need instant route navigation?</span>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  Open in Google Maps <ExternalLink className="w-3.5 h-3.5 inline-block" />
                </a>
              </div>

            </div>
          </AnimateOnScroll>
        </div>

      </div>
    </section>
  );
};

export default Contact;