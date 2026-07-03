"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { GalleryImage } from '@/data/galleryImages';
import { sanityClient, urlFor } from '@/lib/sanityClient';
import { toast } from 'sonner';

interface GalleryImageContextType {
  images: GalleryImage[];
  loading: boolean;
}

const GalleryImageContext = createContext<GalleryImageContextType | undefined>(undefined);

export const GalleryImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const query = '*[_type == "galleryImage"] | order(_createdAt desc)';
        const data = await sanityClient.fetch(query);
        
        const mappedImages: GalleryImage[] = data.map((doc: any) => ({
          ...doc,
          id: doc._id,
          src: doc.image ? urlFor(doc.image).url() : '',
        }));

        setImages(mappedImages);
      } catch (error) {
        console.error('Error fetching gallery images from Sanity:', error);
        toast.error('Failed to load gallery images.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <GalleryImageContext.Provider value={{ images, loading }}>
      {children}
    </GalleryImageContext.Provider>
  );
};

export const useGalleryImages = () => {
  const context = useContext(GalleryImageContext);
  if (context === undefined) {
    throw new Error('useGalleryImages must be used within a GalleryImageProvider');
  }
  return context;
};