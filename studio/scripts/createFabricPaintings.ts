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
    filename: 'fabric-paintings.jpg',
  });
  console.log(`Image uploaded: ${asset._id}`);

  const courseDoc = {
    _id: 'fabric-paintings',
    _type: 'course',
    title: 'Fabric Paintings',
    slug: {
      _type: 'slug',
      current: 'fabric-paintings',
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
    description: `The Fabric Paintings course is designed for students who want to learn creative painting techniques on fabrics and textiles. Fabric painting is widely used to decorate garments, home furnishings, bags, cushions, and other fabric products with unique colors and designs.\n\nThis course provides practical training in fabric painting methods, color combinations, design development, and surface decoration techniques. Students learn how to create attractive hand-painted designs on different types of fabrics using professional fabric painting materials.`,
    learningOutcomes: [
      'Understand the basics of fabric painting',
      'Develop creative fabric designs',
      'Use different painting strokes and shading techniques',
      'Apply colors evenly on fabric surfaces',
      'Transfer designs onto fabric using different methods',
      'Work with various fabric painting mediums',
      'Decorate garments and fabric products professionally',
      'Create attractive textile and fashion embellishments',
    ],
    modules: [
      {
        _key: 'mod-1',
        title: 'Module 1: Design and Painting Techniques',
        description: 'Learn color theory, design development, basic strokes, plain filling, shading techniques, dry shading, tapping methods, inward and outward strokes, and stencil painting.',
      },
      {
        _key: 'mod-2',
        title: 'Module 2: Design Transfer Methods',
        description: 'Learn how to transfer designs onto fabric using direct drawing, carbon tracing, and chalk powder tracing methods.',
      },
      {
        _key: 'mod-3',
        title: 'Module 3: Fabric Painting Mediums',
        description: 'Learn how to use different fabric painting materials, including Classic Colours, Pearl Colours, Silk Colours, and Fabric Out Liners for professional fabric decoration.',
      },
    ],
    careerProspects: [
      'Fabric Painting Artist',
      'Textile Craft Designer',
      'Garment Decoration Artist',
      'Boutique Fabric Designer',
      'Fashion Embellishment Artist',
      'Hand-Painted Apparel Designer',
      'Freelance Fabric Painting Professional',
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
