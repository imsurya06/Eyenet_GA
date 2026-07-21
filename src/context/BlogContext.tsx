"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Blog } from '@/data/blogs';
import { sanityClient, urlFor } from '@/lib/sanityClient';
import { toast } from 'sonner';

interface BlogContextType {
  blogs: Blog[];
  loading: boolean;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "blog"] | order(date desc)';

    const fetchBlogs = async (showLoading = true) => {
      if (showLoading) setLoading(true);
      try {
        const data = await sanityClient.fetch(query);
        
        const mappedBlogs: Blog[] = data.map((doc: any) => ({
          ...doc,
          id: doc._id,
          image: doc.image ? urlFor(doc.image).url() : undefined,
        }));

        setBlogs(mappedBlogs);
      } catch (error) {
        console.error('Error fetching blogs from Sanity:', error);
        toast.error('Failed to load blogs.');
      } finally {
        if (showLoading) setLoading(false);
      }
    };

    fetchBlogs();

    // Listen for real-time updates
    const subscription = sanityClient.listen(query).subscribe({
      next: () => fetchBlogs(false),
      error: (err) => console.warn('Sanity blog subscription error:', err),
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, loading }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlogs must be used within a BlogProvider');
  }
  return context;
};