"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { InfrastructureImage } from '@/data/infrastructureImages';
import { sanityClient, urlFor } from '@/lib/sanityClient';
import { toast } from 'sonner';

interface InfrastructureImageContextType {
  images: InfrastructureImage[];
  loading: boolean;
}

const InfrastructureImageContext = createContext<InfrastructureImageContextType | undefined>(undefined);

export const InfrastructureImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<InfrastructureImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "infrastructureImage"] | order(_createdAt desc)';

    const fetchImages = async (showLoading = true) => {
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

        const mappedImages: InfrastructureImage[] = data.map((doc: any) => ({
          ...doc,
          id: doc._id,
          src: getImageUrl(doc),
        }));

        setImages(mappedImages);
      } catch (error) {
        console.error('Error fetching infrastructure images from Sanity:', error);
        toast.error('Failed to load infrastructure images.');
      } finally {
        if (showLoading) setLoading(false);
      }
    };

    fetchImages();

    const subscription = sanityClient.listen(query).subscribe({
      next: () => fetchImages(false),
      error: (err) => console.warn('Sanity infrastructure images subscription error:', err),
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <InfrastructureImageContext.Provider value={{ images, loading }}>
      {children}
    </InfrastructureImageContext.Provider>
  );
};

export const useInfrastructureImages = () => {
  const context = useContext(InfrastructureImageContext);
  if (context === undefined) {
    throw new Error('useInfrastructureImages must be used within a InfrastructureImageProvider');
  }
  return context;
};