export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'fashion' | 'event' | 'general';
  ticker_row?: '1' | '2'; // 1 = Top Ticker, 2 = Bottom Ticker
}

export const initialGalleryImages: GalleryImage[] = [
  { id: 'dummy-1', src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800', alt: 'Fashion Runway Showcase', category: 'event', ticker_row: '1' },
  { id: 'dummy-2', src: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800', alt: 'Design Atelier Sketching', category: 'fashion', ticker_row: '1' },
  { id: 'dummy-3', src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800', alt: 'Haute Couture Studio', category: 'fashion', ticker_row: '1' },
  { id: 'dummy-4', src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800', alt: 'Digital CAD Lab Workstation', category: 'general', ticker_row: '2' },
  { id: 'dummy-5', src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800', alt: 'Studio Photography Session', category: 'general', ticker_row: '2' },
  { id: 'dummy-6', src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800', alt: 'Fashion Exhibition', category: 'event', ticker_row: '2' },
];