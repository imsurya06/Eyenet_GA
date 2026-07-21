export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'carousel' | 'fashion' | 'event' | 'general';
  ticker_row?: '1' | '2'; // 1 = Top Ticker, 2 = Bottom Ticker
}

export const initialGalleryImages: GalleryImage[] = [];