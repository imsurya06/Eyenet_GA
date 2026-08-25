"use client";

import React, { useMemo } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { useFaculty } from '@/context/FacultyContext';
import { GraduationCap, Award, Code2 } from 'lucide-react';
import { Faculty } from '@/data/faculty';

const FacultyCard: React.FC<{ member: Faculty }> = ({ member }) => (
  <div className="group bg-card rounded-2xl border border-border/60 hover:border-primary/40 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full w-full transform hover:-translate-y-1.5 relative text-left">
    {/* Header Portrait - Proper vertical aspect ratio to preserve full face, hair & shoulders */}
    <div className="relative w-full aspect-[4/4.5] sm:aspect-[4/4.8] overflow-hidden bg-slate-100">
      <img
        src={member.image || '/placeholder.svg'}
        alt={member.name}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
      />

      {/* Qualification Badge at Bottom of Portrait */}
      {member.qualification && (
        <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 z-10 text-left">
          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-body font-medium text-slate-800 bg-white/90 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-slate-200/80 shadow-xs">
            <GraduationCap className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-primary shrink-0" />
            <span className="line-clamp-1">{member.qualification}</span>
          </div>
        </div>
      )}
    </div>

    {/* Card Content - Compact padding on mobile */}
    <div className="p-4 sm:p-6 flex flex-col flex-grow text-left justify-between gap-3 sm:gap-4 bg-card">
      <div>
        {/* Name */}
        <h3 className="text-lg sm:text-2xl font-heading font-normal text-slate-900 tracking-wide leading-tight mb-2 sm:mb-3">
          {member.name}
        </h3>

        {/* Achievements */}
        {member.achievements && (
          <div className="flex items-start gap-2 text-xs sm:text-sm font-body text-primary font-medium bg-primary/5 p-2.5 sm:p-3 rounded-xl border border-primary/10 mb-2.5 sm:mb-3">
            <Award className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-primary shrink-0 mt-0.5" />
            <span className="leading-snug">{member.achievements}</span>
          </div>
        )}

        {/* Description */}
        {member.description && (
          <p className="text-xs sm:text-sm font-body text-muted-foreground leading-relaxed">
            {member.description}
          </p>
        )}
      </div>
    </div>

    {/* Decorative Bottom Accent Line */}
    <div className="h-1 w-full bg-gradient-to-r from-primary/80 via-primary to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
);

const FacultySection = () => {
  const { faculty, loading } = useFaculty();

  // Separate Technical Team members (purple background members) from Faculty
  const { academicFaculty, techTeam } = useMemo(() => {
    const isTechMember = (member: Faculty) => {
      if (member.category === 'Technical Team') return true;
      const name = member.name?.toLowerCase() || '';
      return name.includes('nithin') || name.includes('surya') || name.includes('sambath');
    };

    const getTechOrder = (name: string) => {
      const lower = (name || '').toLowerCase();
      if (lower.includes('nithin')) return 1;
      if (lower.includes('surya')) return 2;
      if (lower.includes('sambath')) return 3;
      return 4;
    };

    const tech = faculty
      .filter(isTechMember)
      .sort((a, b) => getTechOrder(a.name) - getTechOrder(b.name));

    const academic = faculty.filter((m) => !isTechMember(m));

    return { academicFaculty: academic, techTeam: tech };
  }, [faculty]);

  return (
    <section id="faculty-section" className="py-6 md:py-12 px-4 sm:px-8 lg:px-[80px] bg-gradient-to-b from-background via-secondary/20 to-background text-foreground text-center">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20">
        
        {/* 1. ACADEMIC FACULTY & MENTORS */}
        <div>
          <AnimateOnScroll delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-body font-semibold uppercase tracking-widest mb-3">
              Industry Mentors & Leaders
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-normal mb-3 tracking-tight">
              Meet our esteemed <span className="text-primary font-heading italic">faculty</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-sm sm:text-base font-body text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              Our dedicated team of veteran educators and creative directors bring real-world industry experience to your classroom.
            </p>
          </AnimateOnScroll>

          {loading ? (
            <div className="flex flex-wrap justify-center gap-8 sm:gap-10 max-w-7xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse bg-card rounded-2xl border border-border/50 overflow-hidden h-[450px] w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.75rem)] max-w-[400px]">
                  <div className="w-full h-[280px] bg-muted/60"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-6 bg-muted/80 rounded w-2/3"></div>
                    <div className="h-4 bg-muted/60 rounded w-1/2"></div>
                    <div className="h-16 bg-muted/40 rounded w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : academicFaculty.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-8 sm:gap-10 max-w-7xl mx-auto">
              {academicFaculty.map((member, index) => (
                <AnimateOnScroll
                  key={member.id || member._id || index}
                  delay={250 + index * 100}
                  className="w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.75rem)] max-w-[400px] flex shrink-0"
                >
                  <FacultyCard member={member} />
                </AnimateOnScroll>
              ))}
            </div>
          ) : null}
        </div>

        {/* 2. TECHNICAL TEAM SECTION (Centered Row) */}
        {(!loading && techTeam.length > 0) && (
          <div className="pt-12 border-t border-slate-200/80">
            <AnimateOnScroll delay={100}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-body font-semibold uppercase tracking-widest mb-4">
                <Code2 className="w-3.5 h-3.5" />
                <span>Engineering & Innovation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-normal mb-4 tracking-tight text-slate-900">
                Technical <span className="text-primary font-heading italic">Team</span>
              </h2>
              <p className="text-base sm:text-lg font-body text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Our skilled tech pioneers and data science leaders driving digital solutions, web engineering, and AI platforms.
              </p>
            </AnimateOnScroll>

            {/* Centered Row of Members */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-10 max-w-7xl mx-auto">
              {techTeam.map((member, index) => (
                <AnimateOnScroll
                  key={member.id || member._id || index}
                  delay={250 + index * 100}
                  className="w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.75rem)] max-w-[400px] flex shrink-0"
                >
                  <FacultyCard member={member} />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default FacultySection;