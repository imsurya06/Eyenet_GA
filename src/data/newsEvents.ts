export interface NewsEvent {
  id: string;
  title: string;
  description: string;
  date: string; // Stored as a string (e.g., "YYYY-MM-DD")
  category: 'news' | 'event';
  image?: string; // Optional image URL
}

export const initialNewsEvents: NewsEvent[] = [
  {
    id: 'news-1',
    title: 'Annual Fashion Show Success',
    description: 'Our annual fashion show was a grand success, showcasing the incredible talent of our students. Many industry experts attended and praised the innovative designs.',
    date: '2024-07-20',
    category: 'event',
    image: '/images/img1.png',
  },
  {
    id: 'news-2',
    title: 'New Computer Course on AI Basics Launched',
    description: 'We are excited to announce the launch of our new computer course focusing on Artificial Intelligence basics. Enroll now to stay ahead in the tech world!',
    date: '2024-07-15',
    category: 'news',
    image: '/images/computer-application-programming.png',
  },
  {
    id: 'news-3',
    title: 'Guest Lecture by Renowned Designer',
    description: 'Join us for an inspiring guest lecture by acclaimed fashion designer Ms. Priya Sharma, who will share her journey and insights into the fashion industry.',
    date: '2024-08-01',
    category: 'event',
    image: '/images/fashion-design.png',
  },
  {
    id: 'news-4',
    title: 'Summer Workshop on Photoshop Mastery',
    description: 'Enroll in our intensive summer workshop to master Adobe Photoshop. Learn advanced techniques for photo editing, graphic design, and digital art.',
    date: '2024-07-25',
    category: 'event',
    image: '/images/photoshop-mastery.png',
  },
  {
    id: 'news-5',
    title: 'Student Achievements in National Design Competition',
    description: 'Our students secured top positions in the National Design Competition, demonstrating their creativity and technical skills. Congratulations to all participants!',
    date: '2024-07-10',
    category: 'news',
    image: '/images/img5.png',
  },
];