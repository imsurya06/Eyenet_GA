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
  const imageUrl = 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200';
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  console.log('Uploading cover image asset to Sanity...');
  const asset = await client.assets.upload('image', buffer, {
    filename: 'certificate-courses-in-beautician-and-styling.jpg',
  });
  console.log(`Image uploaded: ${asset._id}`);

  const courseDoc = {
    _id: 'certificate-courses-in-beautician-and-styling',
    _type: 'course',
    title: 'Certificate Courses in Beautician & Styling',
    slug: {
      _type: 'slug',
      current: 'certificate-courses-in-beautician-and-styling',
    },
    tag: 'Certificate',
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
    description: `The Certificate Courses in Beautician & Styling are designed for students who want to learn professional beauty, hair, and makeup skills in a short period of time. These courses provide practical training in beauty treatments, hair care, hair styling, bridal makeup, and personal grooming techniques.\n\nStudents learn salon and beauty services through hands-on practice, helping them develop the confidence and skills needed to work in beauty salons, bridal studios, spas, and wellness centers.`,
    learningOutcomes: [
      'Perform professional beauty treatments',
      'Shape eyebrows and provide facial grooming',
      'Apply facials, waxing, manicure, and pedicure services',
      'Cut, style, and care for different hair types',
      'Perform bridal and party makeup',
      'Create bridal and fashion hairstyles',
      'Apply henna and mehndi designs',
      'Drape sarees professionally',
      'Provide basic hair and scalp treatments',
      'Deliver salon-quality beauty services',
    ],
    modules: [
      {
        _key: 'mod-1',
        title: 'Module 1: Certificate Course in Beautician',
        description: 'Learn threading, bleaching, facials, fruit facial, waxing, manicure, pedicure, oil massage, basic hair cutting, henna application, basic mehndi, hair styling, normal makeup, and saree draping techniques.',
      },
      {
        _key: 'mod-2',
        title: 'Module 2: Certificate in Hair Care',
        description: 'Learn dandruff treatment, hair fall treatment, spa treatment, deep conditioning, oil massage, laser hair removal basics, unwanted hair removal methods, and lice treatment.',
      },
      {
        _key: 'mod-3',
        title: 'Module 3: Certificate in Hair Styling',
        description: 'Learn professional hair styling techniques, including curls, blow dry styling, Nayanthara style, Christiani style, hair attachment methods, and bridal hairstyles.',
      },
      {
        _key: 'mod-4',
        title: 'Module 4: Certificate in Makeup Styling',
        description: 'Learn stage makeup, different types of bridal makeup, metallic makeup, reception makeup, Nayanthara makeup, face-cut makeup, smoky eyes, party makeup, and advanced saree draping styles.',
      },
      {
        _key: 'mod-5',
        title: 'Module 5: Certificate in Beauty Styling',
        description: 'Learn bridal and reception makeup, metallic and smoky makeup, face-cut makeup, normal makeup styles, machine-assisted hairstyles, bridal hairstyles, Dutch braid styles, saree draping techniques, and traditional and Arabic mehndi designs.',
      },
    ],
    careerProspects: [
      'Beautician',
      'Hair Stylist',
      'Bridal Makeup Artist',
      'Makeup Stylist',
      'Beauty Stylist',
      'Salon Professional',
      'Spa Assistant',
      'Mehndi Artist',
      'Freelance Makeup and Hair Artist',
      'Bridal Beauty Assistant',
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
