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
  const imageUrl = 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200';
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  console.log('Uploading cover image asset to Sanity...');
  const asset = await client.assets.upload('image', buffer, {
    filename: 'animation-and-graphics.jpg',
  });
  console.log(`Image uploaded: ${asset._id}`);

  const courseDoc = {
    _id: 'animation-and-graphics',
    _type: 'course',
    title: 'Animation & Graphics',
    slug: {
      _type: 'slug',
      current: 'animation-and-graphics',
    },
    tag: 'Certificate / Diploma',
    category: 'multimedia',
    duration: '1 to 2 Months',
    eligibility: 'Open to All',
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    },
    description: `The Animation & Graphics course is designed for students who want to learn graphic design, image editing, video editing, animation, and creative digital artwork. The course provides practical training in industry-standard software used for designing logos, banners, brochures, videos, animations, and other visual content.\n\nStudents learn how to create professional graphics, edit images, produce videos, and develop 2D animations for advertising, social media, websites, and multimedia projects.`,
    learningOutcomes: [
      'Edit and enhance images professionally',
      'Create logos, banners, brochures, and other graphic designs',
      'Draw and design using vector graphics tools',
      'Produce and edit videos with sound and visual effects',
      'Create GIF and Flash animations',
      'Develop 2D character and text animations',
      'Use animation timelines, keyframes, and basic scripting',
      'Create creative design projects for print and digital media',
    ],
    modules: [
      {
        _key: 'mod-1',
        title: 'Module 1: Image Editing & 2D Drawing',
        description: 'Learn Adobe Photoshop, Adobe ImageReady, CorelDRAW, and GIF animation techniques for image editing, graphic design, and digital artwork.',
      },
      {
        _key: 'mod-2',
        title: 'Module 2: Video Production',
        description: 'Learn Adobe Premiere Pro, Sound Forge, Morphing, and Combustion for video editing, audio editing, and visual effects.',
      },
      {
        _key: 'mod-3',
        title: 'Module 3: Flash Animation',
        description: 'Learn 2D drawing, timeline effects, keyframe animation, basic ActionScript, and movie clip creation using Flash.',
      },
      {
        _key: 'mod-4',
        title: 'Module 4: 2D Animation',
        description: 'Learn Flash and Swish Max to create 2D character animation, text animation, special effects, and animation using scripting techniques.',
      },
      {
        _key: 'mod-5',
        title: 'Module 5: Adobe Photoshop Projects',
        description: 'Learn advanced image editing, animation, filters, special effects, and color manipulation. Create projects such as photo manipulation, image blending, banner design, ID cards, greeting cards, visiting cards, and other creative works.',
      },
      {
        _key: 'mod-6',
        title: 'Module 6: CorelDRAW Projects',
        description: 'Learn 2D design, line drawing, logo creation, emblem design, filters, and special effects. Create greeting cards, visiting cards, ID cards, brochures, pamphlets, letterheads, and other professional design projects.',
      },
    ],
    careerProspects: [
      'Graphic Designer',
      'Image Editing Specialist',
      'Video Editor',
      '2D Animator',
      'Flash Animator',
      'Multimedia Designer',
      'Visual Effects Assistant',
      'Creative Designer',
      'Advertising Design Assistant',
      'Freelance Graphic and Animation Professional',
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
