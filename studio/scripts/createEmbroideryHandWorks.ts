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
    filename: 'embroidery-and-hand-works.jpg',
  });
  console.log(`Image uploaded: ${asset._id}`);

  const courseDoc = {
    _id: 'embroidery-and-hand-works',
    _type: 'course',
    title: 'Embroidery & Hand Works',
    slug: {
      _type: 'slug',
      current: 'embroidery-and-hand-works',
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
    description: `The Embroidery & Hand Works course is designed for students who want to learn traditional and decorative hand embroidery techniques. Embroidery is a beautiful thread work that adds elegance and value to garments, home furnishings, and fashion accessories. This course provides practical training in a wide range of embroidery stitches, design development, thread work, and decorative handwork techniques.\n\nStudents learn how to create attractive embroidery designs on different types of fabrics using professional embroidery methods and traditional Indian embroidery styles.`,
    learningOutcomes: [
      'Understand the basics of embroidery and handwork',
      'Develop embroidery designs and color combinations',
      'Use different embroidery threads and materials',
      'Create a variety of decorative embroidery stitches',
      'Apply traditional Indian embroidery techniques',
      'Transfer embroidery designs onto fabric',
      'Decorate garments, accessories, and fabric products professionally',
      'Finish embroidery work neatly and accurately',
    ],
    modules: [
      {
        _key: 'mod-1',
        title: 'Module 1: Design and Embroidery Materials',
        description: 'Learn color theory, design development, and the use of different embroidery materials such as silk thread, hand embroidery thread, and ribbon.',
      },
      {
        _key: 'mod-2',
        title: 'Module 2: Basic Embroidery Stitches',
        description: 'Learn straight family stitches, including Running Stitch, Stem Stitch, and Double Stem Stitch, along with round family stitches such as Chikankari, Eyelet, Spider Web, Back Spider Web, Round Buttonhole, and Coin Stitch.',
      },
      {
        _key: 'mod-3',
        title: 'Module 3: Decorative and Filling Stitches',
        description: 'Learn crossed family stitches such as Cross Stitch, Herringbone, Double Herringbone, Chevron, Fly Stitch, Feather Stitch, Vandyke Stitch, and Star Filling. Also learn filling stitches including Satin Stitch, Encroaching Satin, Long and Short Filling, Laid (Darning), Chain Filling, and Blanket Filling.',
      },
      {
        _key: 'mod-4',
        title: 'Module 4: Indian Embroidery Techniques',
        description: 'Learn traditional Indian embroidery methods such as Mirror Work, Shadow Work, Sequence Work, Appliqué Work, Net Appliqué, and Jardhosi & Bead Work.',
      },
      {
        _key: 'mod-5',
        title: 'Module 5: Design Transfer and Advanced Stitch Families',
        description: 'Learn design transfer methods including Direct Method, Carbon Tracing, and Chalk Powder Tracing. Also learn chain family stitches, blanket family stitches, whipping and couching techniques, and knot and decorative stitches such as French Knot, German Knot, Bullion Knot, Lazy-Dazy Stitch, Dot Stitch, Double Lazy-Dazy, and Roumanian Knot.',
      },
    ],
    careerProspects: [
      'Hand Embroidery Artist',
      'Boutique Embroidery Specialist',
      'Garment Embellishment Designer',
      'Textile Craft Designer',
      'Fashion Embroidery Assistant',
      'Decorative Fabric Artist',
      'Freelance Embroidery Professional',
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
