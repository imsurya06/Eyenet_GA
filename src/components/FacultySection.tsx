"use client";

import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { useFaculty } from '@/context/FacultyContext';
import { GraduationCap, Award } from 'lucide-react';

const FacultySection = () => {
  const { faculty, loading } = useFaculty();

  return (
    <section id="faculty-section" className="py-12 md:py-20 px-4 sm:px-8 lg:px-[80px] bg-gradient-to-b from-background via-secondary/20 to-background text-foreground text-center">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll delay={100}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-body font-semibold uppercase tracking-widest mb-4">
            Industry Mentors & Leaders
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-normal mb-4 tracking-tight">
            Meet our esteemed faculty
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="text-base sm:text-lg font-body text-muted-foreground mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
            Our dedicated team of veteran educators and creative directors bring real-world industry experience to your classroom.
          </p>
        </AnimateOnScroll>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse bg-card rounded-2xl border border-border/50 overflow-hidden h-[450px]">
                <div className="w-full h-[280px] bg-muted/60"></div>
                <div className="p-6 space-y-3">
                  <div className="h-6 bg-muted/80 rounded w-2/3"></div>
                  <div className="h-4 bg-muted/60 rounded w-1/2"></div>
                  <div className="h-16 bg-muted/40 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : faculty.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {faculty.map((member, index) => {
              return (
                <AnimateOnScroll key={member.id || member._id || index} delay={250 + index * 100}>
                  <div className="group bg-card rounded-2xl border border-border/60 hover:border-primary/40 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full transform hover:-translate-y-1.5 relative">
                    {/* Header Portrait with Gradient Overlay */}
                    <div className="relative w-full aspect-[4/4.5] sm:aspect-[4/4.8] overflow-hidden bg-muted/30">
                      <img
                        src={member.image || '/placeholder.svg'}
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Name & Qualification Overlay at Bottom of Portrait */}
                      <div className="absolute bottom-4 left-4 right-4 z-10 text-left">
                        {member.qualification && (
                          <div className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-white/95 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/25 mb-2">
                            <GraduationCap className="w-3.5 h-3.5 text-white/95" />
                            <span>{member.qualification}</span>
                          </div>
                        )}
                        <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white tracking-wide leading-tight">
                          {member.name}
                        </h3>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow text-left justify-between gap-4 bg-card">
                      {member.achievements && (
                        <div className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-primary font-medium bg-primary/5 p-3 rounded-xl border border-primary/10">
                          <Award className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="leading-snug">{member.achievements}</span>
                        </div>
                      )}

                      {member.description && (
                        <p className="text-sm font-body text-muted-foreground leading-relaxed flex-grow">
                          {member.description}
                        </p>
                      )}
                    </div>

                    {/* Decorative Bottom Accent Line */}
                    <div className="h-1 w-full bg-gradient-to-r from-primary/80 via-primary to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        ) : (
          <AnimateOnScroll delay={300}>
            <p className="text-text-medium font-body text-gray-600 text-center">
              No faculty members to display at the moment.
            </p>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
};

export default FacultySection;