"use client";

import React from 'react';
import { useBlogs } from '@/context/BlogContext';
import AnimateOnScroll from './AnimateOnScroll';
import { BookOpen, User2, CalendarDays } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";

const BlogsDisplaySection = () => {
  const { blogs, loading } = useBlogs();

  // Filter approved blogs and sort by date, newest first
  const sortedBlogs = [...blogs]
    .filter(blog => blog.status === 'approved')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className="pb-16 px-4 lg:px-[80px] bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="break-inside-avoid mb-6">
                <article className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm">
                  <Skeleton className="w-full h-64" />
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-8 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </article>
              </div>
            ))}
          </div>
        ) : sortedBlogs.length > 0 ? (
          /* Bento Grid Layout (Fluid Columns Masonry) */
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {sortedBlogs.map((blog, index) => {
              const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              });

              return (
                <div key={blog.id} className="break-inside-avoid mb-6">
                  <AnimateOnScroll delay={100 + (index % 3) * 75}>
                    <article className="group bg-white border border-slate-200/80 overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      {blog.image && (
                        <div className="w-full overflow-hidden bg-slate-100 flex items-center justify-center">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-auto max-h-[520px] object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs font-semibold uppercase text-slate-500 mb-3">
                          <div className="flex items-center gap-1.5">
                            <CalendarDays className="w-3.5 h-3.5 text-slate-400" />
                            <span>{formattedDate}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-primary font-bold">
                            <User2 className="w-3.5 h-3.5" />
                            <span>{blog.author}</span>
                          </div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                          {blog.title}
                        </h3>

                        {/* Full Description Displayed without Line Clamp Cropping */}
                        <p className="text-sm font-body text-slate-600 leading-relaxed whitespace-pre-line break-words">
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