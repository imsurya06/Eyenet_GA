import { createClient } from '@sanity/client';

async function main() {
  const client = createClient({
    projectId: 'kxgkc60l',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_AUTH_TOKEN,
  });

  console.log('Downloading course cover image...');
  const imageUrl = 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=1200';
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  console.log('Uploading cover image asset to Sanity...');
  const asset = await client.assets.upload('image', buffer, {
    filename: 'diploma-in-beauty-and-aroma-therapy.jpg',
  });
  console.log(`Image uploaded: ${asset._id}`);

  const courseDoc = {
    _id: 'diploma-in-beauty-and-aroma-therapy',
    _type: 'course',
    title: 'Diploma in Beauty & Aroma Therapy',
    slug: {
      _type: 'slug',
      current: 'diploma-in-beauty-and-aroma-therapy',
    },
    tag: 'Diploma',
    category: 'beautician',
    duration: 'As per course schedule',
    eligibility: 'Open to All',
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    },
    description: `The Beautician Courses are designed for students who want to build a professional career in beauty, skincare, hair care, makeup, and salon services. The course provides practical training in beauty treatments, bridal makeup, hair styling, skincare therapies, and the use of professional beauty equipment.\n\nStudents learn both the practical and theoretical aspects of beauty therapy, helping them develop the skills needed to work in salons, spas, wellness centers, and beauty clinics. The course is suitable for beginners as well as those who want to improve their beauty and cosmetology skills.`,
    learningOutcomes: [
      'Perform professional beauty and skincare treatments',
      'Shape eyebrows and perform facial grooming',
      'Apply different types of facials and skin treatments',
      'Provide waxing, manicure, and pedicure services',
      'Perform basic hair cutting, coloring, and styling',
      'Apply henna and mehndi designs',
      'Perform normal and bridal makeup',
      'Understand skin structure and skin types',
      'Use professional beauty therapy machines safely',
      'Provide basic aromatherapy and wellness treatments',
    ],
    modules: [
      {
        _key: 'mod-1',
        title: 'Module 1: Beauty Therapy Basics',
        description: 'Learn threading, bleaching, facials, fruit facial, waxing, manicure, pedicure, oil massage, hair cutting, henna application, hair styling, hair coloring, mehndi, nail art, saree draping, normal makeup, and bridal makeup.',
      },
      {
        _key: 'mod-2',
        title: 'Module 2: Beauty Therapy Theory',
        description: 'Understand skin histology, different skin types, treatment objectives, facial massage strokes, and lymphatic drainage massage techniques used for acne and other skin conditions.',
      },
      {
        _key: 'mod-3',
        title: 'Module 3: Skin and Hair Treatments',
        description: 'Learn professional treatments such as anti-wrinkle treatment, acne treatment, under-eye treatment, skin lightening facial, gold facial, pearl facial, dandruff treatment, laser hair removal basics, and body massage techniques.',
      },
      {
        _key: 'mod-4',
        title: 'Module 4: Beauty Equipment and Practical Training',
        description: 'Gain hands-on training in using professional beauty equipment, including galvanic machines, high-frequency machines, and ultrasonic machines.',
      },
      {
        _key: 'mod-5',
        title: 'Module 5: Aroma Therapy',
        description: 'Learn the basics of aroma therapy, skin care treatments, facial therapies, massage techniques, and the use of essential oils and professional treatment methods for wellness and beauty care.',
      },
    ],
    careerProspects: [
      'Beautician',
      'Beauty Therapist',
      'Bridal Makeup Artist',
      'Hair Stylist',
      'Skin Care Specialist',
      'Spa Therapist',
      'Salon Professional',
      'Beauty Consultant',
      'Freelance Makeup Artist',
      'Wellness and Beauty Assistant',
    ],
  };

  console.log('Creating course document in Sanity...');
  const createdDoc = await client.createOrReplace(courseDoc);
  console.log(`✓ Course created successfully! ID: ${createdDoc._id}`);
}

main().catch((err) => {
  console.error('Error creating course:', err);
  process.exit(1);
});
