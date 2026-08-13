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
  const imageUrl = 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=1200';
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  console.log('Uploading cover image asset to Sanity...');
  const asset = await client.assets.upload('image', buffer, {
    filename: 'diploma-dress-making-kids.jpg',
  });
  console.log(`Image uploaded: ${asset._id}`);

  const courseDoc = {
    _id: 'diploma-in-dress-making-kids',
    _type: 'course',
    title: 'Diploma in Dress Making (Kids)',
    slug: {
      _type: 'slug',
      current: 'diploma-in-dress-making-kids',
    },
    tag: 'Diploma',
    category: 'fashion',
    duration: '6 Months',
    eligibility: '10th Pass',
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    },
    description: `The Diploma in Dress Making (Kids) is designed for students who want to learn professional dress making and garment construction for children’s wear. This course is suitable for beginners as well as those who want to improve their stitching and design skills. It focuses on practical training, pattern making, garment construction, and finishing techniques for kids’ clothing.\n\nStudents learn how to create comfortable, attractive, and well-fitted garments for children using modern dress making methods. The course helps develop creativity, accuracy, and confidence in designing and producing children’s wear.`,
    learningOutcomes: [
      'Understand the basics of children’s garment design',
      'Take body measurements accurately for kids',
      'Create patterns for children’s garments',
      'Design different garment styles and silhouettes',
      'Cut, stitch, and finish garments professionally',
      'Use decorative stitching techniques',
      'Plan fabric layout and estimate fabric requirements',
      'Drape patterns on a dress form',
      'Prepare garments suitable for boutique and garment industry standards',
    ],
    modules: [
      {
        _key: 'mod-1',
        title: 'Module 1: Design Ideas for Kids Wear',
        description: 'Learn different design elements used in children’s garments, including necklines, sleeves, collars, waistlines, skirts, tops, silhouettes, cuffs, and other creative garment designs for kids.',
      },
      {
        _key: 'mod-2',
        title: 'Module 2: Drafting and Pattern Making',
        description: 'Learn body measurement techniques for children, pattern construction for kids wear, fabric layout planning, fabric consumption calculation, dart manipulation, dart blending, and pattern draping on a dress form.',
      },
      {
        _key: 'mod-3',
        title: 'Module 3: Garment Construction',
        description: 'Gain practical training in basic hand stitches, machine stitching, seam construction, fullness techniques, decorative stitches, garment manufacturing methods, finishing, and quality checking for children’s garments.',
      },
    ],
    careerProspects: [
      'Kids Wear Dress Maker',
      'Tailor',
      'Boutique Assistant',
      'Garment Production Assistant',
      'Sampling Assistant',
      'Children’s Wear Designer',
      'Freelance Dress Maker',
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
