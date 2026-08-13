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
  const imageUrl = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200';
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  console.log('Uploading cover image asset to Sanity...');
  const asset = await client.assets.upload('image', buffer, {
    filename: 'computer-basics-and-applications.jpg',
  });
  console.log(`Image uploaded: ${asset._id}`);

  const courseDoc = {
    _id: 'computer-basics-and-applications',
    _type: 'course',
    title: 'Computer Basics & Applications',
    slug: {
      _type: 'slug',
      current: 'computer-basics-and-applications',
    },
    tag: 'Certificate / Diploma',
    category: 'computer',
    duration: '1 to 6 Months',
    eligibility: 'Open to All',
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    },
    description: `The Computer Basics & Applications course is designed for students who want to build strong computer skills for education, office work, business, and entry-level IT careers. The course covers computer fundamentals, Microsoft Office, internet applications, programming, databases, networking, and client-server application development.\n\nStudents receive practical training in operating a computer, creating documents and presentations, using spreadsheets, browsing the internet, writing programs, and working with databases. The course is suitable for beginners as well as students who want to improve their technical and programming skills.`,
    learningOutcomes: [
      'Understand computer concepts and Windows operating system',
      'Improve typing and keyboard skills',
      'Create documents using MS Word',
      'Prepare spreadsheets using MS Excel',
      'Design presentations using MS PowerPoint',
      'Use the internet for communication and information',
      'Scan, convert, and print documents',
      'Understand networking basics',
      'Write programs in C and C++',
      'Develop applications using Visual Basic',
      'Work with SQL, Oracle, and MS Access databases',
      'Understand client-server programming concepts',
    ],
    modules: [
      {
        _key: 'mod-1',
        title: 'Module 1: Computer Basics',
        description: 'Learn Windows operating system, keyboard and fingering practice, basic computer operations, MS Word, MS PowerPoint, and internet browsing.',
      },
      {
        _key: 'mod-2',
        title: 'Module 2: Computer Applications',
        description: 'Learn MS Word, MS Excel, MS PowerPoint, internet applications, file scanning, file conversion, and printing techniques used in offices and businesses.',
      },
      {
        _key: 'mod-3',
        title: 'Module 3: Computer Programming',
        description: 'Learn programming fundamentals using C and C++, including logical thinking, problem-solving, variables, loops, functions, and basic program development.',
      },
      {
        _key: 'mod-4',
        title: 'Module 4: Computer Application & Programming',
        description: 'Learn computer concepts, Windows, networking principles, Microsoft Office, C and C++ programming, Visual Basic, SQL, Oracle, and internet applications for professional and technical work.',
      },
      {
        _key: 'mod-5',
        title: 'Module 5: Client-Server Programming',
        description: 'Learn application development using Visual Basic and database management with MS Access, Oracle, and SQL, along with client-server database connectivity.',
      },
    ],
    careerProspects: [
      'Computer Operator',
      'Office Executive',
      'Data Entry Operator',
      'Administrative Assistant',
      'Technical Support Assistant',
      'Programming Assistant',
      'Junior Software Trainee',
      'Database Assistant',
      'Application Support Executive',
      'Visual Basic Programmer',
      'SQL Support Assistant',
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
