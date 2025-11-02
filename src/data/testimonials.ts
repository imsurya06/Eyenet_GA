export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number; // 1-5 stars
  approved: boolean;
  date: string; // YYYY-MM-DD
  avatar?: string; // Optional URL for avatar image
}

export const initialTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Priya Sharma',
    quote: 'Eyenet transformed my passion for fashion into a thriving career. The hands-on training and industry insights were invaluable!',
    rating: 5,
    approved: true,
    date: '2023-10-26',
    avatar: 'https://api.dicebear.com/8.x/adventurer/svg?seed=Priya',
  },
  {
    id: 'test-2',
    name: 'Rahul Kumar',
    quote: 'The computer courses here are top-notch. I learned so much about graphic design and web development. Highly recommend!',
    rating: 4,
    approved: true,
    date: '2023-11-15',
    avatar: 'https://api.dicebear.com/8.x/adventurer/svg?seed=Rahul',
  },
  {
    id: 'test-3',
    name: 'Anjali Singh',
    quote: 'A truly inspiring environment. The faculty are supportive, and the curriculum is very practical. I feel ready for the industry.',
    rating: 5,
    approved: true,
    date: '2024-01-01',
    avatar: 'https://api.dicebear.com/8.x/adventurer/svg?seed=Anjali',
  },
  {
    id: 'test-4',
    name: 'Vikram Reddy',
    quote: 'I submitted this testimonial and am waiting for it to be approved by the admin. The process was easy!',
    rating: 3,
    approved: false,
    date: '2024-07-20',
    avatar: 'https://api.dicebear.com/8.x/adventurer/svg?seed=Vikram',
  },
];