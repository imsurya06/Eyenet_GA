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
}

export const initialNewsEvents: NewsEvent[] = [];