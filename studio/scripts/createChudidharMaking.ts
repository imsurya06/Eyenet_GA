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
  const imageUrl = 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1200';
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  console.log('Uploading cover image asset to Sanity...');
  const asset = await client.assets.upload('image', buffer, {
    filename: 'chudidhar-making.jpg',
  });
  console.log(`Image uploaded: ${asset._id}`);

  const courseDoc = {
    _id: 'chudidhar-making',
    _type: 'course',
    title: 'Chudidhar Making',
    slug: {
      _type: 'slug',
      current: 'chudidhar-making',
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
    description: `The Chudidhar Making course is designed for students who want to learn how to design, draft, stitch, and finish different styles of churidhar and salwar suit garments. Churidhars are one of the most popular outfits worn by women of all age groups, and this course focuses on creating well-fitted and stylish garments for different body types.\n\nStudents receive practical training in making various tops, necklines, pants, and sleeves using professional tailoring techniques. The course is suitable for beginners as well as those who want to improve their garment-making skills.`,
    learningOutcomes: [
      'Understand the basics of churidhar and salwar suit construction',
      'Take body measurements accurately',
      'Draft and stitch different styles of tops',
      'Create attractive necklines and sleeve designs',
      'Stitch various styles of churidhar and salwar pants',
      'Fit garments for different body shapes',
      'Finish garments neatly using professional tailoring methods',
    ],
    modules: [
      {
        _key: 'mod-1',
        title: 'Module 1: Chudidhar Top Designs',
        description: 'Learn to draft and stitch different styles of tops, including Basic Chudi, Chudi with Dart, Princess, Style Line, High Neck, High Neck with Collar, Umbrella, Anarkali, Layered, Novelty, Panel, and Magyar styles.',
      },
      {
        _key: 'mod-2',
        title: 'Module 2: Neckline Designs',
        description: 'Learn how to create basic necklines and stylish neckline variations for churidhar and salwar suit garments.',
      },
      {
        _key: 'mod-3',
        title: 'Module 3: Pant Styles',
        description: 'Learn to draft and stitch different pant styles, including Basic Chudi Pant, Gathering Pant, Salwar, Patiala, Dhoti, Parallel, and Palazzo styles.',
      },
      {
        _key: 'mod-4',
        title: 'Module 4: Sleeve Designs',
        description: 'Learn to make different sleeve styles, including Basic Sleeves, Puff Sleeves, Bell Sleeves, and Petal Sleeves.',
      },
    ],
    careerProspects: [
      'Chudidhar Tailor',
      'Salwar Suit Stitching Specialist',
      'Boutique Assistant',
      'Women’s Wear Tailor',
      'Freelance Garment Maker',
      'Custom Dress Stitching Professional',
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
