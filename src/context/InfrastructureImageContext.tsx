"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { initialInfrastructureImages, InfrastructureImage } from '@/data/infrastructureImages';

interface InfrastructureImageContextType {
  infrastructureImages: InfrastructureImage[];
  addInfrastructureImage: (image: InfrastructureImage) => void;
  deleteInfrastructureImage: (id: string) => void;
}

const InfrastructureImageContext = createContext<InfrastructureImageContextType | undefined>(undefined);

export const InfrastructureImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [infrastructureImages, setInfrastructureImages] = useState<InfrastructureImage[]>(initialInfrastructureImages);

  const addInfrastructureImage = (image: InfrastructureImage) => {
    setInfrastructureImages(prevImages => [...prevImages, image]);
  };

  const deleteInfrastructureImage = (id: string) => {
    setInfrastructureImages(prevImages => prevImages.filter(image => image.id !== id));
  };

  return (
    <InfrastructureImageContext.Provider value={{ infrastructureImages, addInfrastructureImage, deleteInfrastructureImage }}>
      {children}
    </InfrastructureImageContext.Provider>
  );
};

export const useInfrastructureImages = () => {
  const context = useContext(InfrastructureImageContext);
  if (context === undefined) {
    throw new Error('useInfrastructureImages must be used within an InfrastructureImageProvider');
  }
  return context;
};