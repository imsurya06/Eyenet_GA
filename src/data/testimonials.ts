export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  quote: string;
  approved?: boolean;
  role?: string;
  course?: string;
  created_at: string;
}

export const fallbackTestimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Priyanka R.',
    rating: 5,
    role: 'Fashion Designing Graduate',
    course: 'Diploma in Fashion Designing',
    quote: 'The Diploma in Fashion Designing at Eye-Net Academy transformed my career completely. The practical pattern making and runway training gave me the confidence to launch my own boutique.',
    approved: true,
    created_at: '2024-01-15T10:00:00.000Z',
  },
  {
    id: 't-2',
    name: 'Karthik S.',
    rating: 5,
    role: 'Multimedia & Graphic Design Alumnus',
    course: 'Graphic Design & Video Editing',
    quote: 'Exceptional hands-on training in Graphic Design and Visual Media. The faculty are industry professionals who guide you with live projects and professional portfolio building.',
    approved: true,
    created_at: '2024-02-10T10:00:00.000Z',
  },
  {
    id: 't-3',
    name: 'Ananya M.',
    rating: 5,
    role: 'Aari & Embroidery Specialist',
    course: 'Aari Work Embroidery & Garment Making',
    quote: 'Learning Aari embroidery and bridal garment construction here was the best decision. The flexible batch timings and personal attention from teachers are unmatched.',
    approved: true,
    created_at: '2024-03-05T10:00:00.000Z',
  },
  {
    id: 't-4',
    name: 'Suresh Kumar',
    rating: 5,
    role: 'Computer Applications Student',
    course: 'Advanced Computer & Spoken English',
    quote: 'Great computer courses and Spoken English guidance. I improved my technical and communication skills significantly within 3 months.',
    approved: true,
    created_at: '2024-04-01T10:00:00.000Z',
  }
];
