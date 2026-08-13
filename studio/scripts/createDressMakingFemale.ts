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
  const imageUrl = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200';
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  console.log('Uploading cover image asset to Sanity...');
  const asset = await client.assets.upload('image', buffer, {
    filename: 'diploma-dress-making-female.jpg',
  });
  console.log(`Image uploaded: ${asset._id}`);

  const courseDoc = {
    _id: 'diploma-in-dress-making-female',
    _type: 'course',
    title: 'Diploma in Dress Making (Female)',
    slug: {
      _type: 'slug',
      current: 'diploma-in-dress-making-female',
    },
    tag: 'Diploma',
    category: 'fashion',
    duration: '6 Months',
    eligibility: 'Open to All',
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    },
    description: `The Diploma in Dress Making is designed for women who want to learn professional dress making and garment construction. The course is suitable for beginners as well as those who want to improve their tailoring and fashion skills. It focuses on practical training, pattern making, stitching techniques, and garment finishing.\n\nStudents learn how to create stylish and well-fitted women’s garments using modern dress making methods. The course also introduces basic computer-aided fashion design (CAD) concepts, which help improve career opportunities in the fashion and garment industry.`,
    learningOutcomes: [
      'Understand the basics of dress making and garment design',
      'Take body measurements accurately',
      'Create patterns for women’s garments',
      'Design different garment styles and silhouettes',
      'Cut, stitch, and finish garments professionally',
      'Use decorative stitching techniques',
      'Plan fabric layout and estimate fabric requirements',
      'Drape patterns on a dress form',
      'Prepare garments suitable for boutique and fashion industry standards',
    ],
    modules: [
      {
        _key: 'mod-1',
        title: 'Module 1: Design Ideas for Women’s Wear',
        description: 'Learn different design elements used in women’s garments, including necklines, sleeves, collars, waistlines, skirts, tops, silhouettes, cuffs, and other stylish garment designs.',
      },
      {
        _key: 'mod-2',
        title: 'Module 2: Drafting and Pattern Making',
        description: 'Learn body measurement techniques, pattern construction for women’s wear, fabric layout planning, fabric consumption calculation, pattern draping, dart manipulation, dart blending, and pattern development for different garment styles.',
      },
      {
        _key: 'mod-3',
        title: 'Module 3: Garment Construction',
        description: 'Gain practical training in basic hand stitches, machine stitching, seam construction, fullness techniques, decorative stitches, garment manufacturing methods, finishing, and quality checking for women’s garments.',
      },
    ],
    careerProspects: [
      'Dress Maker',
      'Tailor',
      'Boutique Assistant',
      'Sampling Assistant',
      'Fashion Coordinator',
      'Apparel Merchandiser',
      'Garment Production Assistant',
      'Freelance Dress Designer',
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
