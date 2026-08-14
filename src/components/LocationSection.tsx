import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimateOnScroll from './AnimateOnScroll';

const LocationSection = () => {
  const googleMapsUrl = "https://www.google.com/maps/dir//Suguna+store,+Hamdhiya+towers+2nd+floor,+80+feet+road,+Jn,+Anna+Nagar,+Madurai,+Tamil+Nadu+625020/@9.9291093,78.1409982,15.78z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b00c5072a46551f:0x3feb0d2a94af46bb!2m2!1d78.1485275!2d9.9215582?entry=ttu";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1558223405787!2d78.14633887586524!3d9.921563490180477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5072a46551f%3A0x3feb0d2a94af46bb!2sEye-Net%20Educational%20Academy!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <section className="py-14 md:py-20 px-4 md:px-8 lg:px-[80px] bg-gradient-to-b from-[#fdfaf6] via-white to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <AnimateOnScroll delay={100}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground tracking-tight">
              Our <span className="text-primary font-heading italic">Location</span>
            </h2>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Detailed Address & Campus Info Card */}
          <AnimateOnScroll delay={300} className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none"></div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
                  <MapPin className="w-3.5 h-3.5" /> Main Campus & Atelier
                </div>

                <h3 className="text-2xl font-heading font-bold mb-2 text-foreground">
                  Eye-Net Educational Academy
                </h3>
                <p className="text-sm font-body text-gray-500 mb-6">
                  Hamdhiya Towers, 2nd Floor, 80 Feet Road Jn, Anna Nagar, Madurai, Tamil Nadu 625020
                </p>

                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Landmark</p>
                      <p className="text-sm font-body text-gray-700">Near Suguna Store, Anna Nagar 80 Feet Rd</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Working Hours</p>
                      <p className="text-sm font-body text-gray-700">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Contact</p>
                      <div className="text-sm font-body flex flex-wrap items-center gap-1">
                        <a href="tel:+919842173725" className="text-primary font-semibold hover:underline">+91 98421 73725</a>
                        <span className="text-gray-400 font-normal">/</span>
                        <a href="tel:+918300064651" className="text-primary font-semibold hover:underline">+91 83000 64651</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-5 text-sm font-semibold shadow-md">
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Navigation className="w-4 h-4" /> Get Directions
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white rounded-full py-5 text-sm font-semibold">
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right Column: Interactive Map Frame */}
          <AnimateOnScroll delay={400} className="lg:col-span-7">
            <div className="relative w-full h-[400px] lg:h-full min-h-[380px] rounded-3xl overflow-hidden border border-gray-200 shadow-xl group">
              <iframe
                title="Eye Net Educational Academy Madurai Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              ></iframe>

              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200 shadow-md flex items-center gap-2 text-xs font-semibold text-gray-700">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Open in Google Maps</span>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                  <ExternalLink className="w-3.5 h-3.5 inline-block" />
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;