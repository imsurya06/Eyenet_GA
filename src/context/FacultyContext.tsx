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
    const fetchFaculty = async () => {
      setLoading(true);
      try {
        const query = '*[_type == "faculty"] | order(_createdAt asc)';
        const data = await sanityClient.fetch(query);
        
        const mappedFaculty: Faculty[] = data.map((doc: any) => ({
          ...doc,
          id: doc._id,
          image: doc.image ? urlFor(doc.image).url() : '',
          created_at: doc._createdAt,
        }));

        setFaculty(mappedFaculty);
      } catch (error) {
        console.error('Error fetching faculty from Sanity:', error);
        toast.error('Failed to load faculty.');
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