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
  const imageUrl = 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1200';
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  console.log('Uploading cover image asset to Sanity...');
  const asset = await client.assets.upload('image', buffer, {
    filename: 'aari-embroidery.jpg',
  });
  console.log(`Image uploaded: ${asset._id}`);

  const courseDoc = {
    _id: 'aari-embroidery',
    _type: 'course',
    title: 'Aari Embroidery',
    slug: {
      _type: 'slug',
      current: 'aari-embroidery',
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
    description: `The Aari Embroidery course is designed for students who want to learn traditional and modern Aari embroidery techniques. Aari work is widely used in bridal wear, designer blouses, sarees, kurtis, and other decorative garments. This course provides practical training using a round iron stand and wooden embroidery frame, helping students develop speed, accuracy, and professional embroidery skills.\n\nStudents learn how to create beautiful embroidery designs for kameez necks, bridal blouses, sleeves, and other garment patterns using a variety of stitches and decorative techniques.`,
    learningOutcomes: [
      'Understand the basics of Aari embroidery',
      'Set up and use an Aari embroidery frame',
      'Mark embroidery designs on garments',
      'Create traditional and decorative Aari stitches',
      'Work with beads, stones, mirrors, sequins, and Kundan',
      'Design embroidery patterns for blouses and women’s wear',
      'Finish embroidery work neatly and professionally',
    ],
    modules: [
      {
        _key: 'mod-1',
        title: 'Module 1: Basic Aari Stitches',
        description: 'Learn the foundation stitches used in Aari embroidery, including Running Chain, Zig Zag Chain, Scroll Chain, Magic Chain, Satin Stitch, Stem Stitch, Over Casting, Long and Short Stitch, Leaf Stitch, Salli Stitch, Double Salli, Jigu Jigu Work, and Reverse Chain.',
      },
      {
        _key: 'mod-2',
        title: 'Module 2: Decorative Embroidery Techniques',
        description: 'Learn advanced embroidery techniques such as French Knot, Zardosi, Padded Zardosi Work, Chumki Work, French Knot with Chumki, Load Work, Patch Work, Cut Work, Bead Work, Thambur Stitch, Stone Work, Mirror Work, and Kundan Work.',
      },
      {
        _key: 'mod-3',
        title: 'Module 3: Garment Embroidery Application',
        description: 'Learn how to mark and embroider kameez neck designs, bridal blouse front and back neck designs, sleeve patterns, and other decorative garment embroidery applications.',
      },
    ],
    careerProspects: [
      'Aari Embroidery Artist',
      'Bridal Blouse Embroidery Specialist',
      'Boutique Embroidery Assistant',
      'Fashion Embellishment Designer',
      'Hand Embroidery Professional',
      'Freelance Embroidery Designer',
      'Garment Embroidery Technician',
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
