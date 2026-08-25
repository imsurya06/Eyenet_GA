export interface Faculty {
  id: string;
  name: string;
  category?: 'Faculty' | 'Technical Team' | string;
  image: string; // URL to the faculty member's picture
  qualification: string;
  achievements?: string; // Optional field
  description: string;
  created_at: string; // Timestamp for when it was added
}

export const initialFaculty: Faculty[] = [];