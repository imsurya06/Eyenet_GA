import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'kxgkc60l',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN, // Optional token if required
});

const testimonials = [
  {
    _id: 'testimonial-1',
    _type: 'testimonial',
    name: 'Priya Sundaram',
    rating: 5,
    quote: 'The Diploma in Fashion Designing at Eye-Net gave me hands-on practical skills in pattern making and bridal embroidery. I launched my own boutique right after graduation!',
    approved: true,
  },
  {
    _id: 'testimonial-2',
    _type: 'testimonial',
    name: 'Karthik Raja',
    rating: 5,
    quote: 'Outstanding computer training! The Web Development & Python modules were structured so clearly. The faculty provided personalized career guidance.',
    approved: true,
  },
  {
    _id: 'testimonial-3',
    _type: 'testimonial',
    name: 'Anitha R.',
    rating: 5,
    quote: 'I completed the Diploma in Beautician & Cosmetology. The practical training in skin care, HD bridal makeup, and hair styling gave me total confidence.',
    approved: true,
  },
  {
    _id: 'testimonial-4',
    _type: 'testimonial',
    name: 'Meenakshi V.',
    rating: 5,
    quote: 'The Aari Work & Embroidery course surpassed all my expectations. The instructors are master artisans who guide you step-by-step from basics to intricate zardosi.',
    approved: true,
  },
  {
    _id: 'testimonial-5',
    _type: 'testimonial',
    name: 'Sanjay Kumar',
    rating: 5,
    quote: 'Eye-Net\'s Photoshop and Multimedia program helped me land a graphic designer role. Modern lab facilities and industry-experienced mentors!',
    approved: true,
  },
];

const faculty = [
  {
    _id: 'faculty-1',
    _type: 'faculty',
    name: 'Mrs. S. Lakshmi, M.Des',
    qualification: 'Master of Design (Fashion & Textiles) - 12+ Yrs Experience',
    achievements: 'Senior Fashion Design Specialist & Bridalwear Consultant',
    description: 'Leads fashion design, drafting, pattern making, and advanced couture construction with over a decade of industry mentoring.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
  },
  {
    _id: 'faculty-2',
    _type: 'faculty',
    name: 'Mr. R. Vignesh, M.Tech',
    qualification: 'M.Tech in Computer Science - 10+ Yrs Experience',
    achievements: 'Certified Full-Stack Developer & Corporate IT Trainer',
    description: 'Specializes in Web Development, Python Programming, and Office Automation with hands-on practical project guidance.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
  },
  {
    _id: 'faculty-3',
    _type: 'faculty',
    name: 'Ms. K. Suganthi, B.Sc',
    qualification: 'Certified Master Beautician & International Aesthetician',
    achievements: 'Celebrity Bridal Artist & Cosmetology Instructor',
    description: 'Expert in skin diagnostics, professional herbal facials, HD bridal cosmetics, and spa therapy techniques.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
  },
];

const galleryImages = [
  {
    _id: 'gallery-carousel-1',
    _type: 'galleryImage',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200',
    alt: 'Annual Fashion Runway Exhibition',
    category: 'carousel',
  },
  {
    _id: 'gallery-carousel-2',
    _type: 'galleryImage',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200',
    alt: 'Student Garment & Textile Showcase',
    category: 'carousel',
  },
  {
    _id: 'gallery-carousel-3',
    _type: 'galleryImage',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
    alt: 'Interactive Computer & Design Lab',
    category: 'carousel',
  },
  {
    _id: 'gallery-carousel-4',
    _type: 'galleryImage',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
    alt: 'Student Convocation & Award Ceremony',
    category: 'carousel',
  },
  {
    _id: 'gallery-grid-1',
    _type: 'galleryImage',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1000',
    alt: 'Designer Salwar & Pattern Stitching',
    category: 'fashion',
    ticker_row: '1',
  },
  {
    _id: 'gallery-grid-2',
    _type: 'galleryImage',
    image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=1000',
    alt: 'Aari Work Embroidery Workshop',
    category: 'fashion',
    ticker_row: '1',
  },
  {
    _id: 'gallery-grid-3',
    _type: 'galleryImage',
    image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=1000',
    alt: 'Fashion Illustration & Sketching',
    category: 'fashion',
    ticker_row: '1',
  },
  {
    _id: 'gallery-grid-4',
    _type: 'galleryImage',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1000',
    alt: 'Fabric Painting & Textile Art',
    category: 'general',
    ticker_row: '1',
  },
  {
    _id: 'gallery-grid-5',
    _type: 'galleryImage',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1000',
    alt: 'Graphic Design & Photoshop Studio',
    category: 'event',
    ticker_row: '2',
  },
  {
    _id: 'gallery-grid-6',
    _type: 'galleryImage',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1000',
    alt: 'Photography & Studio Lighting Session',
    category: 'event',
    ticker_row: '2',
  },
  {
    _id: 'gallery-grid-7',
    _type: 'galleryImage',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1000',
    alt: 'Beautician & Bridal Makeup Workshop',
    category: 'general',
    ticker_row: '2',
  },
  {
    _id: 'gallery-grid-8',
    _type: 'galleryImage',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000',
    alt: 'Campus Interactive Learning Classroom',
    category: 'general',
    ticker_row: '2',
  },
];

const infrastructureImages = [
  {
    _id: 'infra-carousel-1',
    _type: 'infrastructureImage',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    alt: 'Modern Academy Reception & Campus',
    category: 'carousel',
  },
  {
    _id: 'infra-carousel-2',
    _type: 'infrastructureImage',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200',
    alt: 'Fashion Design Studio & Pattern Workstations',
    category: 'carousel',
  },
  {
    _id: 'infra-carousel-3',
    _type: 'infrastructureImage',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
    alt: 'High-Performance Computer & Programming Lab',
    category: 'carousel',
  },
  {
    _id: 'infra-carousel-4',
    _type: 'infrastructureImage',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200',
    alt: 'Comprehensive Resource Library & Study Zone',
    category: 'carousel',
  },
  {
    _id: 'infra-grid-1',
    _type: 'infrastructureImage',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000',
    alt: 'Garment Stitching & Sewing Machine Lab',
    category: 'lab',
  },
  {
    _id: 'infra-grid-2',
    _type: 'infrastructureImage',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000',
    alt: 'Advanced IT & Software Development Classroom',
    category: 'lab',
  },
  {
    _id: 'infra-grid-3',
    _type: 'infrastructureImage',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1000',
    alt: 'Spacious Lecture Hall with Digital Displays',
    category: 'classroom',
  },
  {
    _id: 'infra-grid-4',
    _type: 'infrastructureImage',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1000',
    alt: 'Multimedia Editing & Animation Suite',
    category: 'lab',
  },
  {
    _id: 'infra-grid-5',
    _type: 'infrastructureImage',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1000',
    alt: 'Fashion Reference Library & Design Material Hub',
    category: 'library',
  },
  {
    _id: 'infra-grid-6',
    _type: 'infrastructureImage',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000',
    alt: 'Student Collaborative Discussion Area',
    category: 'campus',
  },
  {
    _id: 'infra-grid-7',
    _type: 'infrastructureImage',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1000',
    alt: 'Professional Cosmetology & Salon Practical Lab',
    category: 'lab',
  },
  {
    _id: 'infra-grid-8',
    _type: 'infrastructureImage',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000',
    alt: 'Seminar & Conference Auditorium',
    category: 'other',
  },
];

const blogs = [
  {
    _id: 'blog-1',
    _type: 'blog',
    title: 'The Future of Sustainable Fashion & Digital Pattern Construction',
    author: 'Mrs. S. Lakshmi',
    date: '2026-03-15',
    status: 'approved',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200',
    content: 'The fashion industry is undergoing a digital revolution. From zero-waste pattern making to eco-friendly fabric dyes, modern apparel design combines traditional craftsmanship with cutting-edge software. At Eye-Net Educational Academy, students learn both hands-on tailoring and CAD pattern drafting to prepare for high-growth careers in sustainable fashion design.',
  },
  {
    _id: 'blog-2',
    _type: 'blog',
    title: 'Top Technical Skills Every Web Developer & Graphic Designer Needs in 2026',
    author: 'Mr. R. Vignesh',
    date: '2026-03-10',
    status: 'approved',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200',
    content: 'Building modern websites and digital brand assets requires a blend of aesthetic creativity and technical mastery. Key skills including responsive web layout design, digital vector illustration, and UI/UX prototyping are in high demand. Learn how our hands-on certificate courses bridge the gap between classroom training and real-world project portfolios.',
  },
];

const newsEvents = [
  {
    _id: 'news-event-1',
    _type: 'newsEvent',
    title: 'Annual Fashion Runway & Student Collection Exhibition 2026',
    description: 'Join us for Eye-Net Academy\'s grand annual fashion exhibition featuring breathtaking bridal wear, Aari embroidery, and creative western collections designed by our graduating diploma students.',
    date: '2026-04-20',
    category: 'event',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200',
  },
  {
    _id: 'news-event-2',
    _type: 'newsEvent',
    title: 'Inauguration of New High-Performance CAD & Computer Lab',
    description: 'Eye-Net Academy has expanded its Anna Nagar campus with a state-of-the-art computer lab equipped with the latest Adobe Creative Cloud, Python development suites, and fashion CAD software.',
    date: '2026-03-01',
    category: 'news',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
  },
  {
    _id: 'news-event-3',
    _type: 'newsEvent',
    title: 'Student Excellence Awards & Career Convocation Ceremony',
    description: 'Celebrating the outstanding academic achievements and portfolio excellence of our fashion, computer, and cosmetology graduates with industry guest speakers and placement awards.',
    date: '2026-02-14',
    category: 'event',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
  },
];

async function seedAll() {
  console.log('Seeding all dummy content into Sanity CMS...');

  const allDocs = [
    ...testimonials,
    ...faculty,
    ...galleryImages,
    ...infrastructureImages,
    ...blogs,
    ...newsEvents,
  ];

  let successCount = 0;
  for (const doc of allDocs) {
    try {
      await client.createOrReplace(doc);
      console.log(`✓ Seeded ${doc._type}: ${doc._id}`);
      successCount++;
    } catch (err) {
      console.error(`✗ Error seeding ${doc._id}:`, err);
    }
  }

  console.log(`\nFinished seeding! Successfully published ${successCount}/${allDocs.length} documents.`);
}

seedAll();
