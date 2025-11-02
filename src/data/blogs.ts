export interface Blog {
  id: string;
  title: string;
  author: string;
  date: string; // Stored as a string (e.g., "YYYY-MM-DD")
  content: string;
  image?: string; // Optional image URL
  category: 'fashion' | 'computer' | 'student-life' | 'industry-insights'; // Added category
  readTime: string; // Added read time
}

export const initialBlogs: Blog[] = [
  {
    id: 'blog-1',
    title: 'The Art of Fashion Illustration',
    author: 'Eyenet Faculty',
    date: '2024-07-01',
    content: 'Fashion illustration is a crucial skill for any aspiring designer. It allows you to quickly convey your ideas and concepts before moving to fabric. Learn about different techniques and styles in our comprehensive course.',
    image: '/images/fashion-illustration.png',
    category: 'fashion',
    readTime: '5 min read',
  },
  {
    id: 'blog-2',
    title: 'Mastering Photoshop for Designers',
    author: 'Tech Team',
    date: '2024-06-25',
    content: 'Adobe Photoshop is an indispensable tool for graphic and fashion designers alike. From photo manipulation to creating digital patterns, its capabilities are vast. This blog explores essential tips for beginners.',
    image: '/images/photoshop-mastery.png',
    category: 'computer',
    readTime: '7 min read',
  },
  {
    id: 'blog-3',
    title: 'Sustainable Fashion: A New Era',
    author: 'Guest Blogger',
    date: '2024-07-10',
    content: 'The fashion industry is rapidly evolving towards sustainability. Discover how designers are incorporating eco-friendly practices, materials, and ethical production methods to create a better future.',
    image: '/images/img6.png',
    category: 'fashion',
    readTime: '6 min read',
  },
  {
    id: 'blog-4',
    title: 'Introduction to Web Designing',
    author: 'Eyenet Faculty',
    date: '2024-07-05',
    content: 'Web design is more than just coding; it\'s about creating intuitive and visually appealing user experiences. This post covers the basics of HTML, CSS, and responsive design principles.',
    image: '/images/web-designing.png',
    category: 'computer',
    readTime: '8 min read',
  },
  {
    id: 'blog-5',
    title: 'Student Life at Eyenet',
    author: 'Student Council',
    date: '2024-06-20',
    content: 'Get a glimpse into the vibrant student life at Eyenet. From workshops to cultural events, there\'s always something exciting happening on campus!',
    image: '/public/placeholder.svg',
    category: 'student-life',
    readTime: '4 min read',
  },
  {
    id: 'blog-6',
    title: 'Emerging Trends in Design Industry',
    author: 'Industry Expert',
    date: '2024-07-12',
    content: 'Stay ahead with the latest trends shaping the design industry. This article covers AI in design, immersive experiences, and sustainable practices.',
    image: '/public/placeholder.svg',
    category: 'industry-insights',
    readTime: '9 min read',
  },
];