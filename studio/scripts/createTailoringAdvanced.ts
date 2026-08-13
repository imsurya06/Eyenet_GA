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
    filename: 'diploma-tailoring-advanced.jpg',
  });
  console.log(`Image uploaded: ${asset._id}`);

  const courseDoc = {
    _id: 'diploma-in-tailoring-advanced',
    _type: 'course',
    title: 'Diploma in Tailoring (Advanced)',
    slug: {
      _type: 'slug',
      current: 'diploma-in-tailoring-advanced',
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
    description: `The Diploma in Tailoring (Advanced) is designed for students who want to learn professional tailoring and garment construction in a complete and practical way. This course covers sewing techniques, pattern making, drafting, and garment construction for both women’s and children’s wear.\n\nStudents learn how to create garments using standard measurements as well as custom body measurements. The course helps develop the skills needed to design, stitch, and finish garments professionally, making it suitable for those who want to work in the garment industry or build a career in tailoring.`,
    learningOutcomes: [
      'Understand the basics of tailoring and sewing',
      'Operate and maintain a sewing machine',
      'Identify different types of fabrics and their uses',
      'Perform basic hand and machine stitches',
      'Take body measurements accurately',
      'Create garment patterns and drafts',
      'Cut, stitch, and finish garments professionally',
      'Construct women’s and children’s garments',
      'Develop practical tailoring skills for professional work',
    ],
    modules: [
      {
        _key: 'mod-1',
        title: 'Module 1: Sewing Fundamentals',
        description: 'Learn the basics of sewing, sewing machine operation, fabric knowledge, and essential hand and machine stitching techniques.',
      },
      {
        _key: 'mod-2',
        title: 'Module 2: Design, Measurement, and Drafting',
        description: 'Understand basic design ideas, body measurement techniques, garment drafting, and pattern making for different garment styles.',
      },
      {
        _key: 'mod-3',
        title: 'Module 3: Garment Construction',
        description: 'Gain practical training in cutting, stitching, assembling, and finishing women’s and children’s garments using professional tailoring methods.',
      },
    ],
    careerProspects: [
      'Professional Tailor',
      'Garment Stitching Assistant',
      'Boutique Assistant',
      'Pattern Making Assistant',
      'Garment Production Assistant',
      'Freelance Tailor',
      'Women’s and Kids Wear Tailor',
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
