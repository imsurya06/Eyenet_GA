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
  const imageUrl = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200';
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  console.log('Uploading cover image asset to Sanity...');
  const asset = await client.assets.upload('image', buffer, {
    filename: 'multimedia-technology.jpg',
  });
  console.log(`Image uploaded: ${asset._id}`);

  const courseDoc = {
    _id: 'multimedia-technology',
    _type: 'course',
    title: 'Multimedia Technology',
    slug: {
      _type: 'slug',
      current: 'multimedia-technology',
    },
    tag: 'Diploma / Advanced Diploma',
    category: 'multimedia',
    duration: '1 to 3 Months per Level',
    eligibility: 'Open to All',
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    },
    description: `The Multimedia Technology course is designed for students who want to learn graphic design, animation, video editing, visual effects, and 3D multimedia production. The course is divided into four levels, starting from image editing and 2D design and progressing to advanced 3D animation and rendering techniques.\n\nStudents receive practical training in industry-standard software such as Adobe Photoshop, CorelDRAW, Flash, Swish Max, Adobe Premiere Pro, Sound Forge, Combustion, 3D Studio Max, and Maya. The course helps students develop creative and technical skills for careers in multimedia, animation, video production, and digital content creation.`,
    learningOutcomes: [
      'Edit and enhance images professionally',
      'Create 2D drawings and graphic designs',
      'Develop GIF and text animations',
      'Create 2D animations with scripting',
      'Edit videos and audio professionally',
      'Add visual effects and compositing techniques',
      'Perform green and blue screen editing',
      'Create 3D models and character animations',
      'Apply texturing, lighting, and camera techniques',
      'Produce professional multimedia projects',
    ],
    modules: [
      {
        _key: 'mod-1',
        title: 'Module 1: Image Editing and 2D Design',
        description: 'Learn image editing using Adobe Photoshop, 2D drawing using CorelDRAW, and GIF animation techniques for graphic design and digital artwork.',
      },
      {
        _key: 'mod-2',
        title: 'Module 2: 2D Animation',
        description: 'Learn Flash animation with scripting, text animation using Swish Max, and animation techniques using Elastic Reality.',
      },
      {
        _key: 'mod-3',
        title: 'Module 3: Video Editing and Visual Effects',
        description: 'Learn video editing using Adobe Premiere Pro, sound editing with Sound Forge, special effects, rotoscoping, compositing, and green/blue screen editing using Combustion.',
      },
      {
        _key: 'mod-4',
        title: 'Module 4: 3D Animation and Rendering',
        description: 'Learn 3D Studio Max or Maya, 3D modeling, character animation, texturing, lighting, camera projection, walk-through animation, rendering, and project development.',
      },
    ],
    careerProspects: [
      'Multimedia Designer',
      'Graphic Designer',
      '2D Animator',
      '3D Animator',
      'Video Editor',
      'Motion Graphics Artist',
      'Visual Effects (VFX) Assistant',
      '3D Modeling Artist',
      'Rendering Artist',
      'Freelance Multimedia Professional',
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
