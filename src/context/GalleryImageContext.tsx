"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { GalleryImage } from '@/data/galleryImages';
import { fetchSanityWithCache, getInitialCachedData, urlFor } from '@/lib/sanityClient';

interface GalleryImageContextType {
  images: GalleryImage[];
  loading: boolean;
}

const GalleryImageContext = createContext<GalleryImageContextType | undefined>(undefined);

export const GalleryImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<GalleryImage[]>(() => getInitialCachedData<GalleryImage[]>('gallery_images', []));
  const [loading, setLoading] = useState<boolean>(() => getInitialCachedData<GalleryImage[]>('gallery_images', []).length === 0);

  useEffect(() => {
    const query = '*[_type == "galleryImage"] | order(_createdAt desc)';

    const fetchImages = async () => {
      try {
        const data = await fetchSanityWithCache<any[]>('gallery_images_raw', query);
        if (data && Array.isArray(data) && data.length > 0) {
          const getImageUrl = (doc: any): string => {
            if (!doc) return '';
            if (typeof doc.image === 'string' && doc.image) return doc.image;
            if (doc.imageUrl && typeof doc.imageUrl === 'string') return doc.imageUrl;
            if (typeof doc.src === 'string' && doc.src) return doc.src;
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
            id: doc._id || doc.id,
            src: getImageUrl(doc),
            alt: doc.alt || doc.title || 'Eye-Net Creative Work',
            category: doc.category || 'fashion',
          })).filter((img: GalleryImage) => Boolean(img.src));

          setImages(mappedImages);
          if (typeof window !== 'undefined') {
            try {
              localStorage.setItem('eyenet_cache_gallery_images', JSON.stringify(mappedImages));
            } catch {}
          }
        }
      } catch (error) {
        console.warn('Error fetching gallery images from Sanity:', error);
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