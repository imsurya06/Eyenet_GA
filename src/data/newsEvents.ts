export interface NewsEvent {
  id: string;
  title: string;
  description: string;
  date: string; // Stored as YYYY-MM-DD
  category: 'Fashion Walks' | 'Seminar & Workshop' | 'Others' | string;
  youtubeUrl?: string;
  youtubeVideoId?: string;
  isFeatured?: boolean;
  image?: string;
  imageDimensions?: {
    aspectRatio?: number;
    width?: number;
    height?: number;
  };
}

export const initialNewsEvents: NewsEvent[] = [];