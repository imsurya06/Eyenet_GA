"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { InfrastructureImage } from '@/data/infrastructureImages';
import { fetchSanityWithCache, getInitialCachedData, urlFor } from '@/lib/sanityClient';

interface InfrastructureImageContextType {
  images: InfrastructureImage[];
  loading: boolean;
}

const InfrastructureImageContext = createContext<InfrastructureImageContextType | undefined>(undefined);

export const InfrastructureImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<InfrastructureImage[]>(() => getInitialCachedData<InfrastructureImage[]>('infrastructure_images', []));
  const [loading, setLoading] = useState<boolean>(() => getInitialCachedData<InfrastructureImage[]>('infrastructure_images', []).length === 0);

  useEffect(() => {
    const query = '*[_type == "infrastructureImage"] | order(_createdAt desc)';

    const fetchImages = async () => {
      try {
        const data = await fetchSanityWithCache<any[]>('infrastructure_raw', query);
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

          const mappedImages: InfrastructureImage[] = data.map((doc: any) => ({
            ...doc,
            id: doc._id || doc.id,
            src: getImageUrl(doc),
          }));

          setImages(mappedImages);
          if (typeof window !== 'undefined') {
            try {
              localStorage.setItem('eyenet_cache_infrastructure_images', JSON.stringify(mappedImages));
            } catch {}
          }
        }
      } catch (error) {
        console.warn('Error fetching infrastructure images from Sanity:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
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