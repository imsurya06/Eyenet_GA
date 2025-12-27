export interface NewsEvent {
  id: string;
  title: string;
  description: string;
  date: string; // Stored as a string (e.g., "YYYY-MM-DD")
  category: 'news' | 'event';
  image?: string; // Optional image URL
}

// The initialNewsEvents array has been removed.
// News and events will now be fetched exclusively from the Supabase database.
export const initialNewsEvents: NewsEvent[] = [];