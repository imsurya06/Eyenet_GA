"use client";

import React from 'react';
import { useBlogs } from '@/context/BlogContext';
import AnimateOnScroll from './AnimateOnScroll';
import { BookOpen, User2, CalendarDays } from 'lucide-react';
import { cn } from "@/lib/utils";

const BlogsDisplaySection = () => {
  const { blogs } = useBlogs();

  // Filter approved blogs and sort by date, newest first
  const sortedBlogs = [...blogs]
    .filter(blog => blog.status === 'approved')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Function to determine aspect ratio based on index to create "puzzle" look
  const getAspectRatio = (index: number) => {
    const pattern = index % 4;
    switch (pattern) {
      case 0: return 'aspect-[3/4]'; // Tall
      case 1: return 'aspect-[1/1]'; // Square
      case 2: return 'aspect-[4/3]'; // Wide
      case 3: return 'aspect-[3/2]'; // Standard
      default: return 'aspect-[4/3]';
    }
  };

  return (
    <section className="pb-16 px-4 lg:px-[80px] bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        {sortedBlogs.length > 0 ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {sortedBlogs.map((blog, index) => {
              const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              });

              return (
                <div key={blog.id} className="break-inside-avoid">
                  <AnimateOnScroll delay={100 + (index % 3) * 100}>
                    <article className="group bg-card border border-border/50 overflow-hidden rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      {blog.image && (
                        <div className={cn("w-full overflow-hidden", getAspectRatio(index))}>
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs font-medium uppercase text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <CalendarDays className="w-3.5 h-3.5" />
                            <span>{formattedDate}</span>
                          </div>
                          <div className="flex items-center gap-1 text-primary">
                            <User2 className="w-3.5 h-3.5" />
                            <span>{blog.author}</span>
                          </div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                          {blog.title}
                        </h3>

                        <p className="text-text-regular font-body text-muted-foreground line-clamp-3">
                          {blog.content}
                        </p>
                      </div>
                    </article>
                  </AnimateOnScroll>
                </div>
              );
            })}
          </div>
        ) : (
          <AnimateOnScroll delay={300}>
            <div className="text-center py-20 bg-muted/30 rounded-3xl border border-dashed border-border/50">
              <BookOpen className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-text-medium font-body text-muted-foreground">
                No articles published yet. Check back soon!
              </p>
            </div>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
};

export default BlogsDisplaySection;