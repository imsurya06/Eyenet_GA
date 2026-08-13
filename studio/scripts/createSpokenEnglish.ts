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
  const imageUrl = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200';
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  console.log('Uploading cover image asset to Sanity...');
  const asset = await client.assets.upload('image', buffer, {
    filename: 'spoken-english.jpg',
  });
  console.log(`Image uploaded: ${asset._id}`);

  const courseDoc = {
    _id: 'spoken-english',
    _type: 'course',
    title: 'Spoken English',
    slug: {
      _type: 'slug',
      current: 'spoken-english',
    },
    tag: 'Short Term / Professional',
    category: 'spoken-english',
    duration: 'As per course schedule',
    eligibility: 'Open to All',
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    },
    description: `The Spoken English course is designed for students, job seekers, professionals, and anyone who wants to improve their English communication skills. In today’s global world, English is an important language for education, employment, travel, and social interaction. This course helps students speak English confidently, improve grammar, build vocabulary, and develop better communication skills.\n\nThe course includes grammar, pronunciation, speaking practice, personality development, and practical activities that help students use English in real-life situations.`,
    learningOutcomes: [
      'Speak English confidently in daily conversations',
      'Improve grammar and sentence formation',
      'Ask and answer questions correctly',
      'Build vocabulary and improve pronunciation',
      'Read, listen, and understand English effectively',
      'Speak in public with confidence',
      'Improve communication and interpersonal skills',
      'Perform well in interviews and group discussions',
      'Develop personality and social etiquette',
    ],
    modules: [
      {
        _key: 'mod-1',
        title: 'Module 1: Basic English Grammar',
        description: 'Learn tenses, question making, parts of speech, and active and passive voice.',
      },
      {
        _key: 'mod-2',
        title: 'Module 2: General English',
        description: 'Improve vocabulary, pronunciation, word usage, reading, and listening skills through practical exercises.',
      },
      {
        _key: 'mod-3',
        title: 'Module 3: Higher Grammar',
        description: 'Learn phrasal verbs, phrases, clauses, and direct and indirect speech for better spoken and written English.',
      },
      {
        _key: 'mod-4',
        title: 'Module 4: Personality Development',
        description: 'Develop communication skills, public speaking, negotiation ability, interpersonal relationships, hotel manners, and emotional intelligence.',
      },
      {
        _key: 'mod-5',
        title: 'Module 5: Practical Communication',
        description: 'Practice English through mock interviews, role-plays, mono acting, dumb charades, reading, and writing exercises.',
      },
      {
        _key: 'mod-6',
        title: 'Module 6: Outdoor Learning Activities',
        description: 'Participate in activities such as English-style dining, cultural visits, nature trips, and observation-based learning to improve spoken English in real-life situations.',
      },
    ],
    careerProspects: [
      'Communicate confidently in English',
      'Perform better in job interviews',
      'Improve workplace communication',
      'Prepare for higher education',
      'Work in customer service, sales, hospitality, and office environments',
      'Build confidence for public speaking and professional communication',
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
