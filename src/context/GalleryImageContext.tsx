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
    const query = '*[_type == "galleryImage"] | order(_createdAt desc)';

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

        const mappedImages: GalleryImage[] = data.map((doc: any) => ({
          ...doc,
          id: doc._id,
          src: getImageUrl(doc),
        }));

        setImages(mappedImages);
      } catch (error) {
        console.error('Error fetching gallery images from Sanity:', error);
        toast.error('Failed to load gallery images.');
      } finally {
        if (showLoading) setLoading(false);
      }
    };

    fetchImages();

    const subscription = sanityClient.listen(query).subscribe({
      next: () => fetchImages(false),
      error: (err) => console.warn('Sanity gallery images subscription error:', err),
    });

    return () => subscription.unsubscribe();
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