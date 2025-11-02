"use client";

import React from 'react';
import { useBlogs } from '@/context/BlogContext';
import AnimateOnScroll from './AnimateOnScroll';
import { User2 } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { cn } from '@/lib/utils';

const BlogsDisplaySection = () => {
  const { blogs } = useBlogs();
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');

  // Filter and sort blogs
  const filteredAndSortedBlogs = React.useMemo(() => {
    let filtered = [...blogs];
    if (categoryFilter && categoryFilter !== 'all') {
      filtered = filtered.filter(blog => blog.category === categoryFilter);
    }
    return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [blogs, categoryFilter]);

  return (
    <section className="py-12 md:py-16 lg:py-20 px-3 md:px-8 lg:px-[80px] bg-background text-foreground">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {filteredAndSortedBlogs.length > 0 ? (
          filteredAndSortedBlogs.map((blog, index) => {
            const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });

            return (
              <AnimateOnScroll key={blog.id} delay={100 + index * 75}>
                <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md drop-shadow-lg overflow-hidden border border-gray-200">
                  {/* Image Section */}
                  <div className="w-full sm:w-48 md:w-64 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                    <img
                      src={blog.image || '/public/placeholder.svg'} // Use placeholder if no image
                      alt={blog.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-text-small font-body text-gray-600 mb-2 uppercase">
                      {blog.category.replace(/-/g, ' ')}
                    </p>
                    <h3 className="text-h5-mobile md:text-h5-desktop font-heading mb-3 text-foreground">
                      {blog.title}
                    </h3>
                    <p className="text-text-regular font-body text-gray-600 mb-4 flex-grow line-clamp-3">
                      {blog.content}
                    </p>
                    <div className="flex items-center gap-3 text-text-small font-body text-gray-600 mt-auto">
                      <div className="flex items-center gap-2">
                        <User2 className="h-4 w-4 text-gray-500" />
                        <span>{blog.author}</span>
                      </div>
                      <span className="h-1 w-1 rounded-full bg-gray-400"></span>
                      <span>{formattedDate}</span>
                      <span className="h-1 w-1 rounded-full bg-gray-400"></span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })
        ) : (
          <AnimateOnScroll delay={100}>
            <p className="text-text-medium font-body text-gray-600 text-center">
              No blog posts to display for this category.
            </p>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
};

export default BlogsDisplaySection;