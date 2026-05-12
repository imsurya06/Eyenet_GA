"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { initialGalleryImages, GalleryImage } from '@/data/galleryImages';
import { googleClient } from '@/lib/googleClient';
import { toast } from 'sonner';

interface GalleryImageContextType {
  galleryImages: GalleryImage[];
  addGalleryImage: (image: GalleryImage) => void;
  deleteGalleryImage: (id: string) => void;
  updateGalleryImage: (updatedImage: GalleryImage) => void;
  loading: boolean; // Added loading state
}

const GalleryImageContext = createContext<GalleryImageContextType | undefined>(undefined);

export const GalleryImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch images from Supabase on mount
  const fetchImages = async () => {
    setLoading(true);
    try {
      const { data, error } = await googleClient
        .from('gallery_images')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      // Combine initial static images with dynamic ones from database
      const dbImages = data as GalleryImage[] || [];
      // Filter out any db images that might be duplicates of initial images (if any)
      const initialIds = new Set(initialGalleryImages.map(img => img.id));
      const filteredDbImages = dbImages.filter(img => !initialIds.has(img.id));
      
      setGalleryImages([...initialGalleryImages, ...filteredDbImages]);
    } catch (error) {
      console.error('Error fetching gallery images:', error);
      setGalleryImages(initialGalleryImages); // Fallback to initial images
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const addGalleryImage = async (image: GalleryImage) => {
    try {
      const { id, ...imageWithoutId } = image;
      const galleryImageToInsert = { 
        ...imageWithoutId, 
        id: id || `gallery-${Date.now()}` // Ensure ID is present for Google Sheet mock
      };

      const { data, error } = await googleClient
        .from('gallery_images')
        .insert([galleryImageToInsert])
        .select();

      if (error) throw error;

      toast.success('Image added to gallery!');
      // Force reload to sync with Google Sheet and clear any local mapping state
      setTimeout(() => window.location.reload(), 1000);
    } catch (error) {
      console.error('Error adding gallery image:', error);
      toast.error('Failed to add image. Please check console.');
    }
  };

  const deleteGalleryImage = async (id: string) => {
    try {
      const { error } = await googleClient
        .from('gallery_images')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast.success('Image deleted successfully!');
      setTimeout(() => window.location.reload(), 1000);
    } catch (error) {
      console.error('Error deleting gallery image:', error);
      toast.error('Failed to delete image.');
    }
  };

  const updateGalleryImage = async (updatedImage: GalleryImage) => {
    try {
      const { error } = await googleClient
        .from('gallery_images')
        .update({
          src: updatedImage.src,
          alt: updatedImage.alt,
          category: updatedImage.category,
          ticker_row: updatedImage.ticker_row
        })
        .eq('id', updatedImage.id);

      if (error) throw error;

      toast.success('Gallery image updated!');
      setTimeout(() => window.location.reload(), 1000);
    } catch (error) {
      console.error('Error updating gallery image:', error);
      toast.error('Failed to update image.');
    }
  };

  return (
    <GalleryImageContext.Provider value={{ galleryImages, addGalleryImage, deleteGalleryImage, updateGalleryImage, loading }}>
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