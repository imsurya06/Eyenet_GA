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
    filename: 'fashion-design-diploma.jpg',
  });
  console.log(`Image uploaded: ${asset._id}`);

  const courseDoc = {
    _id: 'diploma-in-fashion-designing',
    _type: 'course',
    title: 'Diploma in Fashion Designing',
    slug: {
      _type: 'slug',
      current: 'diploma-in-fashion-designing',
    },
    tag: 'Diploma',
    category: 'fashion',
    duration: '1 Year',
    eligibility: '10th Pass',
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    },
    description: `The Diploma in Fashion Designing is a complete one-year program for students who want to build a professional career in the fashion and garment industry. The course combines creativity, textile knowledge, garment construction, pattern making, fashion illustration, and computer-aided design (CAD) to help students become skilled fashion professionals.\n\nStudents receive practical training in designing, drafting, stitching, and developing garments for children and women. The course also introduces fashion business concepts, market trends, and professional development, making it suitable for both employment and entrepreneurship.`,
    learningOutcomes: [
      'Understand fashion design principles and garment styling',
      'Create fashion sketches and illustrations',
      'Identify different fibers, yarns, fabrics, and textile techniques',
      'Draft patterns for children’s and women’s garments',
      'Construct garments using professional stitching methods',
      'Calculate fabric consumption and prepare layouts',
      'Apply decorative and surface design techniques',
      'Understand fashion trends, merchandising, and market forecasting',
      'Build confidence for interviews, business, and career opportunities',
      'Use basic computer-aided fashion design (CAD) concepts',
    ],
    modules: [
      {
        _key: 'mod-1',
        title: 'Module 1: Fashion Design Ideas',
        description: 'Learn different design elements used in children’s and women’s garments, including necklines, sleeves, collars, waistlines, skirts, tops, silhouettes, cuffs, frocks, and other creative garment styles.',
      },
      {
        _key: 'mod-2',
        title: 'Module 2: Basic Design Principles',
        description: 'Understand the elements of design such as lines, shapes, colors, textures, print concepts, color schemes, embroidery patterns, and techniques for enlargement and reduction of designs.',
      },
      {
        _key: 'mod-3',
        title: 'Module 3: Fashion Illustration',
        description: 'Learn basic human body anatomy, fashion figure drawing, different poses and views, facial features, hands, feet, draping concepts, rendering techniques, and stylized croquis.',
      },
      {
        _key: 'mod-4',
        title: 'Module 4: Textile Science',
        description: 'Study natural and synthetic fibers, yarn formation, fabric identification, weaving techniques, fabric painting, block printing, tie and dye, screen printing, and other textile decoration methods.',
      },
      {
        _key: 'mod-5',
        title: 'Module 5: Drafting Techniques',
        description: 'Learn body measurement methods and pattern drafting for children’s wear and women’s garments such as frocks, skirts, tops, nightwear, salwar suits, blouses, trousers, and aprons.',
      },
      {
        _key: 'mod-6',
        title: 'Module 6: Pattern Making',
        description: 'Develop construction patterns, fabric layout plans, fabric consumption calculations, and dart manipulation techniques for professional garment development.',
      },
      {
        _key: 'mod-7',
        title: 'Module 7: Garment Construction',
        description: 'Gain practical training in machine stitching, seams, pleats, tucks, necklines, decorative stitches, and garment manufacturing techniques for children’s and women’s wear.',
      },
      {
        _key: 'mod-8',
        title: 'Module 8: Fashion Management',
        description: 'Learn fashion industry terminology, personality development, interview preparation, market survey methods, fashion marketing, fashion forecasting, and trend prediction.',
      },
    ],
    careerProspects: [
      'Fashion Designer',
      'Apparel Merchandiser',
      'Fashion Coordinator',
      'Designer Stylist',
      'Pattern Maker',
      'Sampling Manager',
      'Fashion Illustrator',
      'CAD Designer',
      'Boutique Designer',
      'Garment Production Assistant',
      'Freelance Fashion Designer',
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
