"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Faculty } from '@/data/faculty';
import { sanityClient, urlFor } from '@/lib/sanityClient';
import { toast } from 'sonner';

interface FacultyContextType {
  faculty: Faculty[];
  loading: boolean;
}

const FacultyContext = createContext<FacultyContextType | undefined>(undefined);

export const FacultyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "faculty"] | order(_createdAt asc)';

    const fetchFaculty = async (showLoading = true) => {
      if (showLoading) setLoading(true);
      try {
        const data = await sanityClient.fetch(query);
        
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
          id: doc._id,
          image: getImageUrl(doc),
          created_at: doc._createdAt,
        }));

        setFaculty(mappedFaculty);
      } catch (error) {
        console.error('Error fetching faculty from Sanity:', error);
        toast.error('Failed to load faculty.');
      } finally {
        if (showLoading) setLoading(false);
      }
    };

    fetchFaculty();

    const subscription = sanityClient.listen(query).subscribe({
      next: () => fetchFaculty(false),
      error: (err) => console.warn('Sanity faculty subscription error:', err),
    });

    return () => subscription.unsubscribe();
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