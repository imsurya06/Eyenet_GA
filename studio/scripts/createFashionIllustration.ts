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
  const imageUrl = 'https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80&w=1200';
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  console.log('Uploading cover image asset to Sanity...');
  const asset = await client.assets.upload('image', buffer, {
    filename: 'fashion-illustration.jpg',
  });
  console.log(`Image uploaded: ${asset._id}`);

  const courseDoc = {
    _id: 'fashion-illustration',
    _type: 'course',
    title: 'Fashion Illustration',
    slug: {
      _type: 'slug',
      current: 'fashion-illustration',
    },
    tag: 'Short Term Course',
    category: 'fashion',
    duration: '2 Months',
    eligibility: 'Open to All',
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    },
    description: `The Fashion Illustration course is designed for students who want to learn the art of drawing fashion figures, garments, accessories, and design concepts. Fashion illustration is an important skill used in the fashion industry to present clothing ideas for advertising, catalogs, magazines, fashion collections, and design presentations.\n\nThis course helps students develop drawing, color, and composition skills while learning how to create professional fashion sketches and illustrations.`,
    learningOutcomes: [
      'Understand the basics of fashion illustration',
      'Draw the human body in fashion proportions',
      'Create fashion figures and stylized croquis',
      'Sketch different poses, turns, and movements',
      'Add shape, volume, and garment details to figures',
      'Use colors and rendering techniques effectively',
      'Illustrate fashion accessories and styling elements',
      'Present fashion ideas in a professional way',
    ],
    modules: [
      {
        _key: 'mod-1',
        title: 'Module 1: Fashion Figure Drawing',
        description: 'Learn body anatomy, block figures, stick figures, and the basics of drawing fashion proportions.',
      },
      {
        _key: 'mod-2',
        title: 'Module 2: Stylized Croquis and Figure Development',
        description: 'Learn how to create stylized female croquis, develop body shapes, and draw different postures, turns, and twists used in fashion illustration.',
      },
      {
        _key: 'mod-3',
        title: 'Module 3: Color and Fashion Presentation',
        description: 'Understand color theory, the use of different color mediums in fashion figures, rendering techniques, and the illustration of fashion accessories.',
      },
    ],
    careerProspects: [
      'Fashion Illustrator',
      'Fashion Sketch Artist',
      'Design Assistant',
      'Fashion Stylist Assistant',
      'Fashion Portfolio Artist',
      'Fashion Magazine Illustrator',
      'Freelance Fashion Illustrator',
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
