import React from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CallToActionSection from '@/components/CallToActionSection';
import { Button } from '@/components/ui/button';
import { Camera, Mic, Sparkles, Monitor, Scissors, Laptop, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Fashion Designing',
    description: 'Comprehensive fashion design training including sketching, pattern making, and haute couture garment construction.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800',
    link: '/courses?category=fashion',
    badge: 'Couture & Apparel'
  },
  {
    icon: Laptop,
    title: 'Computer Courses',
    description: 'Professional computer courses covering essential office software, CAD tools, graphic design, and programming.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    link: '/courses?category=computer',
    badge: 'IT & Software'
  },
  {
    icon: Monitor,
    title: 'Multimedia Training',
    description: 'Comprehensive training in professional video editing, motion graphics, 2D/3D animation, and digital production.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800',
    link: '/courses?category=multimedia',
    badge: 'Video & Animation'
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Master studio lighting, portraiture, framing techniques, and commercial digital photography.',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800',
    link: '/courses?category=photography',
    badge: 'Studio & Lighting'
  },
  {
    icon: Mic,
    title: 'Spoken English',
    description: 'Enhance your communication skills, fluency, corporate etiquette, and public speaking confidence.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    link: '/courses?category=spoken-english',
    badge: 'Corporate Etiquette'
  },
  {
    icon: Sparkles,
    title: 'Beautician Course',
    description: 'Learn professional makeup artistry, hair styling, skin therapy, cosmetology, and salon management.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
    link: '/courses?category=beautician',
    badge: 'Cosmetology'
  },
];

const OurServices = () => {
  return (
    <>
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-[80px] bg-gradient-to-b from-[#fdfaf6] via-white to-background text-foreground">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <AnimateOnScroll isHero={true} delay={100}>
              <span className="inline-block uppercase tracking-widest text-xs font-semibold text-gray-500 mb-3">
                ✦ Specialized Programs
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
                Our Specialized <span className="text-primary font-heading">Services</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll isHero={true} delay={200}>
              <p className="text-base md:text-lg font-body text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Beyond our core diploma courses, we offer specialized training and career services tailored to modern industry demands.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <AnimateOnScroll key={index} delay={150 + index * 75}>
                <Link to={service.link} className="block group h-full">
                  <div className="flex flex-col h-full bg-white rounded-3xl p-5 border border-gray-100 shadow-md hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-300">
                    
                    {/* Image Header with Badge & Floating Icon */}
                    <div className="relative w-full h-56 overflow-hidden rounded-2xl mb-5">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-xs font-semibold px-3 py-1 rounded-full text-foreground shadow-sm">
                        {service.badge}
                      </div>
                      <div className="absolute bottom-3 right-3 p-3 rounded-full bg-primary text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="text-xl font-heading font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm font-body text-gray-600 leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                        <span className="text-xs font-semibold text-primary group-hover:underline flex items-center gap-1">
                          Explore Program <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <Button className="bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full px-4 py-1.5 text-xs font-semibold transition-colors">
                          View Details
                        </Button>
                      </div>
                    </div>

                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
      <CallToActionSection />
    </>
  );
};

export default OurServices;