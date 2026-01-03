"use client";

import React from 'react';
import { useBlogs } from '@/context/BlogContext';
import AnimateOnScroll from './AnimateOnScroll';
import { BookOpen, User2, ArrowRight, CalendarDays } from 'lucide-react';

const BlogsDisplaySection = () => {
  const { blogs } = useBlogs();

  // Filter approved blogs and sort by date, newest first
  const sortedBlogs = [...blogs]
    .filter(blog => blog.status === 'approved')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 lg:px-[80px] bg-background text-foreground">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll delay={100}>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Journal</span>
            <h2 className="text-h2-mobile md:text-h2-desktop font-heading text-foreground mb-4">
              Latest from the Blog
            </h2>
            <p className="text-text-medium font-body text-gray-600 max-w-2xl mx-auto">
              Insights, updates, and stories from our community of designers and creators.
            </p>
          </div>
        </AnimateOnScroll>

        {sortedBlogs.length > 0 ? (
          <div className="space-y-12">
            {sortedBlogs.map((blog, index) => {
              const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              });

              return (
                <AnimateOnScroll key={blog.id} delay={200 + index * 50}>
                  <article className="flex flex-col md:flex-row gap-8 items-start group border-b border-gray-100 pb-12 last:border-0 hover:bg-muted/30 p-4 -mx-4 rounded-xl transition-all duration-300">
                    {blog.image && (
                      <div className="w-full md:w-1/3 aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-lg shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-4 text-xs font-medium uppercase text-gray-500">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="w-4 h-4" />
                          <span>{formattedDate}</span>
                        </div>
                        <div className="flex items-center gap-1 text-primary">
                          <User2 className="w-4 h-4" />
                          <span>{blog.author}</span>
                        </div>
                      </div>

                      <h3 className="text-h4-mobile md:text-h4-desktop font-heading text-foreground group-hover:text-primary transition-colors">
                        {blog.title}
                      </h3>

                      <p className="text-text-regular font-body text-gray-600 line-clamp-3 md:line-clamp-4">
                        {blog.content}
                      </p>

                      {/* <button className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all">
                        Read Article <ArrowRight className="ml-2 w-4 h-4" />
                      </button> */}
                    </div>
                  </article>
                </AnimateOnScroll>
              );
            })}
          </div>
        ) : (
          <AnimateOnScroll delay={300}>
            <div className="text-center py-20 bg-gray-50 rounded-lg border border-dashed border-gray-200">
              <BookOpen className="w-10 h-10 text-gray-300 mx-auto mb-4" />
              <p className="text-text-medium font-body text-gray-500">
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