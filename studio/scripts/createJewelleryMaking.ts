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
  const imageUrl = 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1200';
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  console.log('Uploading cover image asset to Sanity...');
  const asset = await client.assets.upload('image', buffer, {
    filename: 'jewellery-making.jpg',
  });
  console.log(`Image uploaded: ${asset._id}`);

  const courseDoc = {
    _id: 'jewellery-making',
    _type: 'course',
    title: 'Jewellery Making',
    slug: {
      _type: 'slug',
      current: 'jewellery-making',
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
    description: `The Jewellery Making course is designed for students who want to learn creative and professional jewelry making techniques. It is suitable for beginners, hobbyists, and anyone interested in designing handmade jewelry for personal use or a career in the fashion and accessories industry.\n\nThis course provides practical training in different types of costume and handmade jewelry using materials such as beads, clay, paper, ribbon, thread, and terracotta. Students learn how to create unique jewelry pieces that match modern fashion trends and traditional designs.`,
    learningOutcomes: [
      'Understand the basics of jewelry making',
      'Work with different jewelry materials and tools',
      'Create handmade fashion accessories',
      'Design necklaces, earrings, bracelets, and other ornaments',
      'Apply decorative techniques for professional finishing',
      'Develop creative jewelry designs for different occasions',
      'Improve craftsmanship and presentation skills',
      'Create unique jewelry pieces for fashion and boutique use',
    ],
    modules: [
      {
        _key: 'mod-1',
        title: 'Module 1: Traditional Jewelry Making',
        description: 'Learn how to create traditional jewelry designs, including Kundan Jewelry and Terracotta Jewelry using professional crafting techniques.',
      },
      {
        _key: 'mod-2',
        title: 'Module 2: Handmade Fashion Jewelry',
        description: 'Learn Beaded Jewelry, Ribbon Jewelry, Threaded Ornaments, and other handmade jewelry styles suitable for fashion accessories and boutique collections.',
      },
      {
        _key: 'mod-3',
        title: 'Module 3: Creative Craft Jewelry',
        description: 'Learn Paper Jewelry, Paper Quilling, and Clay Jewelry (Shilpakar) techniques to create unique and decorative jewelry pieces with different materials and textures.',
      },
    ],
    careerProspects: [
      'Jewellery Designer',
      'Costume Jewellery Maker',
      'Handmade Jewellery Artist',
      'Fashion Accessories Designer',
      'Boutique Jewellery Assistant',
      'Craft Jewelry Specialist',
      'Freelance Jewellery Maker',
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
