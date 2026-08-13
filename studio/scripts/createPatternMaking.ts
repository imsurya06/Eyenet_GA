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
  const imageUrl = 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200';
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  console.log('Uploading cover image asset to Sanity...');
  const asset = await client.assets.upload('image', buffer, {
    filename: 'pattern-making.jpg',
  });
  console.log(`Image uploaded: ${asset._id}`);

  const courseDoc = {
    _id: 'pattern-making',
    _type: 'course',
    title: 'Pattern Making',
    slug: {
      _type: 'slug',
      current: 'pattern-making',
    },
    tag: 'Short Term Course',
    category: 'fashion',
    duration: 'As per course schedule',
    eligibility: 'Open to All',
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    },
    description: `The Pattern Making course is designed for students who want to learn professional pattern drafting and garment development techniques. It is suitable for beginners as well as those who want to improve their skills in pattern making for the fashion and garment industry.\n\nStudents learn how to create basic body patterns, collars, sleeves, and garment patterns using standard measurements. The course also covers fabric layout planning, pattern grading, and draping techniques. It helps students understand garment fit, balance, and pattern development required for professional garment production.`,
    learningOutcomes: [
      'Understand the basics of pattern making',
      'Take body measurements accurately',
      'Draft garment patterns using standard measurements',
      'Create collars and sleeve patterns',
      'Plan fabric layouts and calculate fabric consumption',
      'Develop production-ready garment patterns',
      'Perform pattern grading and size development',
      'Apply dart manipulation and dart blending techniques',
      'Drape patterns on a dress form',
      'Improve garment fit and pattern balance',
    ],
    modules: [
      {
        _key: 'mod-1',
        title: 'Module 1: Measurement and Drafting',
        description: 'Learn body measurement techniques and the basic methods of garment drafting using standard measurement systems.',
      },
      {
        _key: 'mod-2',
        title: 'Module 2: Pattern Construction and Development',
        description: 'Learn pattern construction, fabric layout planning, fabric consumption calculation, production pattern development, and pattern grading techniques.',
      },
      {
        _key: 'mod-3',
        title: 'Module 3: Advanced Pattern Making Techniques',
        description: 'Gain practical training in dart manipulation, dart blending, pattern draping on a dress form, and developing accurate patterns for garment production.',
      },
    ],
    careerProspects: [
      'Pattern Maker',
      'Pattern Drafting Assistant',
      'Garment Production Assistant',
      'Sampling Assistant',
      'Fashion Design Assistant',
      'Boutique Pattern Specialist',
      'Freelance Pattern Maker',
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
