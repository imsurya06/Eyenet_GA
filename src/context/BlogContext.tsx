"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Blog } from '@/data/blogs';
import { fetchSanityWithCache, getInitialCachedData, urlFor } from '@/lib/sanityClient';

interface BlogContextType {
  blogs: Blog[];
  loading: boolean;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [blogs, setBlogs] = useState<Blog[]>(() => getInitialCachedData<Blog[]>('blogs', []));
  const [loading, setLoading] = useState<boolean>(() => getInitialCachedData<Blog[]>('blogs', []).length === 0);

  useEffect(() => {
    const query = '*[_type == "blog"] | order(date desc)';

    const fetchBlogs = async () => {
      try {
        const data = await fetchSanityWithCache<any[]>('blogs_raw', query);
        if (data && Array.isArray(data) && data.length > 0) {
          const getImageUrl = (doc: any): string => {
            if (!doc) return '';
            if (typeof doc.image === 'string' && doc.image) return doc.image;
            if (doc.imageUrl && typeof doc.imageUrl === 'string') return doc.imageUrl;
            if (doc.image && typeof doc.image === 'object' && doc.image.asset) {
              try {
                return urlFor(doc.image).url();
              } catch {
                return '';
              }
            }
            return '';
          };

          const mappedBlogs: Blog[] = data.map((doc: any) => ({
            ...doc,
            id: doc._id || doc.id,
            image: getImageUrl(doc),
          }));

          setBlogs(mappedBlogs);
          if (typeof window !== 'undefined') {
            try {
              localStorage.setItem('eyenet_cache_blogs', JSON.stringify(mappedBlogs));
            } catch {}
          }
        }
      } catch (error) {
        console.warn('Error fetching blogs from Sanity:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
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