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
  const imageUrl = 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200';
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  console.log('Uploading cover image asset to Sanity...');
  const asset = await client.assets.upload('image', buffer, {
    filename: 'digital-slr-course.jpg',
  });
  console.log(`Image uploaded: ${asset._id}`);

  const courseDoc = {
    _id: 'digital-slr-course',
    _type: 'course',
    title: 'Digital SLR Course',
    slug: {
      _type: 'slug',
      current: 'digital-slr-course',
    },
    tag: 'Professional Certificate',
    category: 'photography',
    duration: 'As per course schedule',
    eligibility: 'Open to All',
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    },
    description: `The Digital SLR Course is designed for students, photography enthusiasts, and beginners who want to learn professional DSLR photography. The course covers camera operation, exposure control, lenses, lighting, composition, and photo editing techniques used in modern photography.\n\nStudents receive practical training in using DSLR cameras, understanding different shooting modes, working with natural and artificial light, and editing RAW images using Adobe Lightroom and Adobe Camera Raw. The course helps students develop the technical and creative skills required for professional photography.`,
    learningOutcomes: [
      'Understand DSLR camera settings and functions',
      'Use different image file formats such as RAW, TIFF, and JPEG',
      'Control exposure using shutter speed, aperture, and ISO',
      'Choose the right lens for different photography situations',
      'Focus accurately and create sharp images',
      'Work with natural light and flash creatively',
      'Compose visually attractive photographs',
      'Tell stories through photography',
      'Edit and enhance images using Lightroom and Adobe Camera Raw',
      'Prepare images for print and web use',
    ],
    modules: [
      {
        _key: 'mod-1',
        title: 'Module 1: DSLR Camera Basics',
        description: 'Learn camera menus, camera functions, image file formats, megapixels, resolution, full-frame and crop-frame sensors, and crop factor.',
      },
      {
        _key: 'mod-2',
        title: 'Module 2: Exposure and Camera Control',
        description: 'Understand the relationship between shutter speed, aperture, and ISO, along with depth of field, motion control, exposure modes, exposure compensation, bracketing, histograms, and color balance.',
      },
      {
        _key: 'mod-3',
        title: 'Module 3: Lenses and Focusing',
        description: 'Learn about zoom and prime lenses, autofocus and manual focus, image stabilization, AF point selection, perspective control, and techniques for creating sharp photographs.',
      },
      {
        _key: 'mod-4',
        title: 'Module 4: Lighting Techniques',
        description: 'Understand hard and soft light, direction of light, natural lighting, built-in flash usage, fill flash techniques, and flash bracketing for creative photography.',
      },
      {
        _key: 'mod-5',
        title: 'Module 5: Composition and Visual Storytelling',
        description: 'Develop observation and visualization skills, learn visual elements such as shape, form, texture, and color, and understand image composition for creating meaningful photographs.',
      },
      {
        _key: 'mod-6',
        title: 'Module 6: Photo Editing and Output',
        description: 'Learn RAW image conversion using Adobe Lightroom and Adobe Camera Raw, image enhancement, sharpening techniques, and preparing high-quality images for printing and web applications.',
      },
    ],
    careerProspects: [
      'Professional Photographer',
      'Wedding Photographer',
      'Portrait Photographer',
      'Fashion Photographer',
      'Product Photographer',
      'Photo Editor',
      'Studio Assistant',
      'Freelance Photographer',
      'Content Creator',
      'Photography Instructor',
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
