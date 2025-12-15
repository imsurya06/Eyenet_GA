export interface Faculty {
  id: string;
  name: string;
  image: string; // URL to the faculty member's picture
  qualification: string;
  achievements?: string; // Optional field
  description: string;
  created_at: string; // Timestamp for when it was added
}

export const initialFaculty: Faculty[] = [
  {
    id: 'faculty-1',
    name: 'Dr. Priya Sharma',
    image: '/public/placeholder.svg', // Placeholder image
    qualification: 'Ph.D. in Fashion Technology',
    achievements: 'Awarded "Best Fashion Educator" 2023',
    description: 'Dr. Sharma is a visionary in fashion technology with over 15 years of experience. Her research focuses on sustainable fashion practices and digital garment design.',
    created_at: '2024-01-15T10:00:00Z',
  },
  {
    id: 'faculty-2',
    name: 'Prof. Rajesh Kumar',
    image: '/public/placeholder.svg', // Placeholder image
    qualification: 'M.Sc. Computer Science',
    achievements: 'Developed innovative algorithms for graphic design software',
    description: 'Prof. Kumar specializes in computer graphics and application development. He is passionate about teaching students the latest tools and programming techniques.',
    created_at: '2024-02-20T11:30:00Z',
  },
];