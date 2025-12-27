export interface Blog {
  id: string;
  title: string;
  author: string;
  date: string; // Stored as a string (e.g., "YYYY-MM-DD")
  content: string;
  image?: string; // Optional image URL
}

// The initialBlogs array has been removed.
// Blogs will now be fetched exclusively from the Supabase database.
export const initialBlogs: Blog[] = [];