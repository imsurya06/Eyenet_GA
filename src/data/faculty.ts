export interface Faculty {
  id: string;
  name: string;
  image: string; // URL to the faculty member's picture
  qualification: string;
  achievements?: string; // Optional field
  description: string;
  created_at: string; // Timestamp for when it was added
}

// The initialFaculty array has been removed.
// Faculty will now be fetched exclusively from the Supabase database.
export const initialFaculty: Faculty[] = [];