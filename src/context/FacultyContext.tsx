"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Faculty } from '@/data/faculty';
import { fetchSanityWithCache, getInitialCachedData, urlFor } from '@/lib/sanityClient';

interface FacultyContextType {
  faculty: Faculty[];
  loading: boolean;
}

const FacultyContext = createContext<FacultyContextType | undefined>(undefined);

export const FacultyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [faculty, setFaculty] = useState<Faculty[]>(() => getInitialCachedData<Faculty[]>('faculty', []));
  const [loading, setLoading] = useState<boolean>(() => getInitialCachedData<Faculty[]>('faculty', []).length === 0);

  useEffect(() => {
    const query = '*[_type == "faculty"] | order(_createdAt asc)';

    const fetchFaculty = async () => {
      try {
        const data = await fetchSanityWithCache<any[]>('faculty_raw', query);
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

          const mappedFaculty: Faculty[] = data.map((doc: any) => ({
            ...doc,
            id: doc._id || doc.id,
            image: getImageUrl(doc),
            created_at: doc._createdAt,
          }));

          setFaculty(mappedFaculty);
          if (typeof window !== 'undefined') {
            try {
              localStorage.setItem('eyenet_cache_faculty', JSON.stringify(mappedFaculty));
            } catch {}
          }
        }
      } catch (error) {
        console.warn('Error fetching faculty from Sanity:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, []);

  return (
    <FacultyContext.Provider value={{ faculty, loading }}>
      {children}
    </FacultyContext.Provider>
  );
};

export const useFaculty = () => {
  const context = useContext(FacultyContext);
  if (context === undefined) {
    throw new Error('useFaculty must be used within a FacultyProvider');
  }
  return context;
};