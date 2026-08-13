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
    filename: 'blouse-making.jpg',
  });
  console.log(`Image uploaded: ${asset._id}`);

  const courseDoc = {
    _id: 'blouse-making',
    _type: 'course',
    title: 'Blouse Making',
    slug: {
      _type: 'slug',
      current: 'blouse-making',
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
    description: `The Blouse Making course is designed for students who want to learn how to make well-fitted and stylish blouses professionally. A perfectly fitted blouse enhances the overall appearance of a saree and gives a neat and elegant look. This course focuses on accurate measurements, pattern making, stitching techniques, and proper fitting methods for different blouse styles.\n\nStudents receive practical training in creating a variety of blouse designs, necklines, and sleeve patterns using professional tailoring techniques.`,
    learningOutcomes: [
      'Take accurate body measurements for blouses',
      'Draft and stitch different blouse styles',
      'Create perfect fitting patterns',
      'Design attractive necklines and sleeves',
      'Cut, stitch, and finish blouses professionally',
      'Adjust blouses for different body shapes',
      'Apply professional tailoring techniques for women’s wear',
    ],
    modules: [
      {
        _key: 'mod-1',
        title: 'Module 1: Blouse Designs',
        description: 'Learn to draft and stitch different blouse styles, including Basic, Four Dart, Four Dart with Belt, Princess, Katori, High Neck, High Neck with Collar, and Asymmetrical Cutting styles.',
      },
      {
        _key: 'mod-2',
        title: 'Module 2: Sleeve Designs',
        description: 'Learn to create different sleeve styles, including Basic Sleeves, Puff Sleeves, Bell Sleeves, and Petal Sleeves.',
      },
      {
        _key: 'mod-3',
        title: 'Module 3: Neckline Designs',
        description: 'Learn how to draft and stitch basic necklines and stylish neckline variations for different blouse designs.',
      },
    ],
    careerProspects: [
      'Blouse Tailor',
      'Boutique Assistant',
      'Women’s Wear Tailor',
      'Custom Blouse Stitching Specialist',
      'Freelance Tailor',
      'Garment Stitching Professional',
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
