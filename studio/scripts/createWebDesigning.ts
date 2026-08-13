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
  const imageUrl = 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200';
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  console.log('Uploading cover image asset to Sanity...');
  const asset = await client.assets.upload('image', buffer, {
    filename: 'web-designing.jpg',
  });
  console.log(`Image uploaded: ${asset._id}`);

  const courseDoc = {
    _id: 'web-designing',
    _type: 'course',
    title: 'Web Designing',
    slug: {
      _type: 'slug',
      current: 'web-designing',
    },
    tag: 'Certificate / Diploma',
    category: 'computer',
    duration: '1.5 to 4 Months',
    eligibility: 'Open to All',
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    },
    description: `The Web Designing course is designed for students who want to learn how to create and develop websites from the basic level to advanced web programming. The course covers web design tools, website development, animation, programming languages, and database connectivity.\n\nStudents receive practical training in designing web pages, creating interactive websites, using graphics and animation, and developing dynamic web applications using PHP, ASP, JSP, and databases such as MySQL, SQL, Oracle, PostgreSQL, and MS Access.`,
    learningOutcomes: [
      'Understand the basics of web designing',
      'Create web pages using HTML and CSS',
      'Design websites using Dreamweaver and FrontPage',
      'Edit graphics using Photoshop',
      'Create GIF animations and Flash animations',
      'Build interactive websites using JavaScript',
      'Develop dynamic websites using PHP, ASP, and JSP',
      'Connect websites with databases',
      'Create and process web forms',
      'Publish and manage websites professionally',
    ],
    modules: [
      {
        _key: 'mod-1',
        title: 'Module 1: Web Designing Basics',
        description: 'Learn computer basics, MS FrontPage, Dreamweaver, HTML, GIF animation, Photoshop, and form submission using PHP.',
      },
      {
        _key: 'mod-2',
        title: 'Module 2: Web Animation with Flash',
        description: 'Learn how to create interactive animations and multimedia content using Flash for websites and presentations.',
      },
      {
        _key: 'mod-3',
        title: 'Module 3: Front-End Web Programming',
        description: 'Learn HTML, CSS, and JavaScript to design responsive and interactive web pages.',
      },
      {
        _key: 'mod-4',
        title: 'Module 4: ASP Web Development',
        description: 'Learn server-side web development using ASP with MySQL, SQL, and MS Access databases.',
      },
      {
        _key: 'mod-5',
        title: 'Module 5: PHP Web Development',
        description: 'Learn dynamic website development using PHP with MySQL and MS Access databases.',
      },
      {
        _key: 'mod-6',
        title: 'Module 6: JSP Web Development',
        description: 'Learn Java-based web programming using JSP with MySQL, Oracle, and PostgreSQL databases.',
      },
    ],
    careerProspects: [
      'Web Designer',
      'Front-End Developer',
      'Web Developer',
      'UI Design Assistant',
      'PHP Developer',
      'ASP Developer',
      'JSP Developer',
      'Website Maintenance Executive',
      'Freelance Web Designer',
      'Junior Full-Stack Developer',
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
