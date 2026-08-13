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
  const imageUrl = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200';
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  console.log('Uploading cover image asset to Sanity...');
  const asset = await client.assets.upload('image', buffer, {
    filename: 'short-term-computer-courses.jpg',
  });
  console.log(`Image uploaded: ${asset._id}`);

  const courseDoc = {
    _id: 'short-term-computer-courses',
    _type: 'course',
    title: 'Short Term Computer Courses',
    slug: {
      _type: 'slug',
      current: 'short-term-computer-courses',
    },
    tag: 'Short Term Course',
    category: 'computer',
    duration: '10 Days to 1 Month',
    eligibility: 'Open to All',
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    },
    description: `The Short Term Courses are designed for students, job seekers, professionals, and beginners who want to learn useful computer, office, internet, animation, and graphics skills in a short period of time. These courses focus on practical training and help students improve their productivity, communication, and digital media skills.\n\nThe programs are suitable for anyone who wants to gain job-ready computer knowledge, create presentations, use the internet effectively, or learn basic video editing and animation techniques.`,
    learningOutcomes: [
      'Create professional documents, spreadsheets, and presentations',
      'Use the internet for communication and information',
      'Send and receive emails',
      'Upload and download files online',
      'Participate in audio and video communication',
      'Edit videos using Adobe Premiere Pro',
      'Work with audio editing tools',
      'Create basic animation and visual effects',
      'Understand graphics and multimedia editing techniques',
    ],
    modules: [
      {
        _key: 'mod-1',
        title: 'Module 1: Office Automation',
        description: 'Learn MS Word, MS Excel, and MS PowerPoint for everyday office work, documentation, data management, and presentations.',
      },
      {
        _key: 'mod-2',
        title: 'Module 2: Internet Training',
        description: 'Learn how to create an email account, send and receive emails, use audio and video communication, search for information online, and upload or download photos, audio, and video files.',
      },
      {
        _key: 'mod-3',
        title: 'Module 3: Animation & Graphics',
        description: 'Learn the basics of video editing and animation using Adobe Premiere Pro, Sound Forge, Morphing, Combustion, and CrazyTalk Animator.',
      },
    ],
    careerProspects: [
      'Office Assistant',
      'Computer Operator',
      'Data Entry Assistant',
      'Administrative Support Staff',
      'Video Editing Assistant',
      'Graphics and Multimedia Assistant',
      'Animation Assistant',
      'Freelance Video Editor',
      'Digital Content Assistant',
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
