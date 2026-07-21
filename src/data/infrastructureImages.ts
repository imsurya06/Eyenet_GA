export interface InfrastructureImage {
  id: string;
  src: string;
  alt: string;
  category: 'carousel' | 'carousal' | 'lab' | 'classroom' | 'library' | 'campus' | 'other';
}

export const initialInfrastructureImages: InfrastructureImage[] = [];