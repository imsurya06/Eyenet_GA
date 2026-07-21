import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'kxgkc60l',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN, // or logged in session token
});

const coursesData = [
  // Fashion Courses
  {
    _type: 'course',
    _id: 'diploma-in-fashion-designing',
    title: 'Diploma in Fashion Designing',
    slug: { _type: 'slug', current: 'diploma-in-fashion-designing' },
    tag: 'Diploma',
    category: 'fashion',
    duration: '1 Year',
    eligibility: '10th / 12th Pass',
    description: 'A comprehensive program designed to equip students with creative design skills, pattern drafting, garment construction, and commercial fashion knowledge.',
    imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200',
    learningOutcomes: [
      'Master flat pattern drafting and garment construction',
      'Understand textile science, fabric types, and care',
      'Develop fashion illustration and croquis sketching techniques',
      'Learn boutique management and commercial fashion production'
    ],
    careerProspects: [
      'Fashion Designer',
      'Garment Stylist',
      'Boutique Owner',
      'Pattern Master'
    ],
    modules: [
      { title: 'Module 1: Introduction to Fashion & Textiles', description: 'Study of fibers, fabrics, color theory, and historical fashion movements.' },
      { title: 'Module 2: Pattern Drafting & Garment Construction', description: 'Hands-on practice in measuring, body drafting, seam finishes, and stitching.' },
      { title: 'Module 3: Fashion Illustration & Design', description: 'Sketching croquis, garment draping, texture rendering, and collection planning.' },
      { title: 'Module 4: Portfolio & Boutique Management', description: 'Creating a professional design portfolio, pricing, costing, and client management.' }
    ]
  },
  {
    _type: 'course',
    _id: 'diploma-in-dress-making-female',
    title: 'Diploma in Dress Making (Female)',
    slug: { _type: 'slug', current: 'diploma-in-dress-making-female' },
    tag: 'Diploma',
    category: 'fashion',
    duration: '6 Months',
    eligibility: '10th Pass / Open to All',
    description: 'Specialized 6-month intensive training program focusing on precise custom tailoring, ethnic wear, fusion gowns, and designer female attire.',
    imageUrl: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=1200',
    learningOutcomes: [
      'Accurate female body measurement techniques',
      'Stitching designer kurtis, salwars, and Western tops',
      'Custom fitting and alterations for all body types',
      'Professional zip, lining, and neck piping attachments'
    ],
    careerProspects: [
      'Female Apparel Designer',
      'Custom Tailor',
      'Fashion Studio Assistant',
      'Independent Dressmaker'
    ],
    modules: [
      { title: 'Module 1: Measurements & Fabric Selection', description: 'Understanding body proportions, fabric grainlines, and cutting preparation.' },
      { title: 'Module 2: Ethnic & Fusion Wear Stitching', description: 'Drafting and stitching various styles of kurtis, palazzos, and salwar suits.' },
      { title: 'Module 3: Designer Gowns & Western Wear', description: 'Creating evening gowns, maxis, and contemporary women garments.' },
      { title: 'Module 4: Quality Checks & Custom Fitting', description: 'Troubleshooting fit issues, seam reinforcement, and press finishing.' }
    ]
  },
  {
    _type: 'course',
    _id: 'diploma-in-dress-making-child',
    title: 'Diploma in Dress Making (Child)',
    slug: { _type: 'slug', current: 'diploma-in-dress-making-child' },
    tag: 'Certificate',
    category: 'fashion',
    duration: '6 Months',
    eligibility: 'Open to All',
    description: 'Focused training in kids wear creation, covering comfortable infant outfits, birthday frocks, party dresses, and traditional children wear.',
    imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=1200',
    learningOutcomes: [
      'Child body measurement standards across age groups',
      'Stitching flared frocks, party gowns, and rompers',
      'Selection of skin-friendly, soft cotton fabrics',
      'Adding elastication, frills, and decorative trims'
    ],
    careerProspects: [
      'Kids Apparel Designer',
      'Children Wear Specialist',
      'Boutique Entrepreneur'
    ],
    modules: [
      { title: 'Module 1: Infant & Toddler Sizing', description: 'Standard age charts, pattern adaptations, and soft seam construction.' },
      { title: 'Module 2: Frocks, Skirts & Casuals', description: 'Designing A-line frocks, pleated skirts, shorts, and casual tops.' },
      { title: 'Module 3: Party & Festive Children Wear', description: 'Heavy party dresses, organza frocks, and traditional kids wear.' },
      { title: 'Module 4: Safety & Comfort Standards', description: 'Soft lining attachment, secure buttoning, and gentle elastication.' }
    ]
  },
  {
    _type: 'course',
    _id: 'chudithar-and-salwar-making',
    title: 'Chudithar & Salwar Making',
    slug: { _type: 'slug', current: 'chudithar-and-salwar-making' },
    tag: 'Certificate',
    category: 'fashion',
    duration: '3 Months',
    eligibility: 'Open to All',
    description: 'A hands-on short course teaching various salwar suits, Patiyala pants, Anarkalis, and trendy necklines.',
    imageUrl: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1200',
    learningOutcomes: [
      'Cutting and stitching straight cut, Anarkali & Patiyala salwars',
      'Creative neck patterns with canvas, lace, and piping',
      'Proper sleeve attachments and armhole fitting'
    ],
    careerProspects: [
      'Chudithar Specialist',
      'Home Enterprise Owner',
      'Boutique Tailor'
    ],
    modules: [
      { title: 'Module 1: Neck Pattern Design & Canvas Cutting', description: 'Creating boat necks, round, square, and designer collar shapes.' },
      { title: 'Module 2: Kameez & Kurti Tailoring', description: 'Drafting side slits, darts, and lining attachment for kameez.' },
      { title: 'Module 3: Bottom Variations', description: 'Stitching normal salwar, Patiyala, palazzo, and cigarette pants.' }
    ]
  },
  {
    _type: 'course',
    _id: 'designer-blouse-making',
    title: 'Designer Blouse Making',
    slug: { _type: 'slug', current: 'designer-blouse-making' },
    tag: 'Certificate',
    category: 'fashion',
    duration: '3 Months',
    eligibility: 'Open to All',
    description: 'Master the art of creating perfectly fitting saree blouses including Princess cut, Katori, padded bridal blouses, and deep neck styles.',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200',
    learningOutcomes: [
      'Princess cut, Katori cut, and Sabyasachi blouse drafting',
      'Padded blouse fabrication and lining placement',
      'Deep back styles, dori, latkan, and hook plate stitching'
    ],
    careerProspects: [
      'Bridal Blouse Specialist',
      'Boutique Artisan',
      'Custom Fitting Expert'
    ],
    modules: [
      { title: 'Module 1: Classic & Princess Cut Drafting', description: 'Pattern cutting techniques for different cup sizes and shoulder widths.' },
      { title: 'Module 2: High-Neck & Deep-Back Variations', description: 'Creating illusion necklines, halter necks, and backless designs.' },
      { title: 'Module 3: Padding & Finishing', description: 'Inserting push-up pads, concealed zippers, and handcrafted dori.' }
    ]
  },
  {
    _type: 'course',
    _id: 'drafting-and-pattern-making',
    title: 'Drafting & Pattern Making',
    slug: { _type: 'slug', current: 'drafting-and-pattern-making' },
    tag: 'Certificate',
    category: 'fashion',
    duration: '3 Months',
    eligibility: '10th Pass',
    description: 'Learn fundamental flat pattern making, dart manipulation, and size grading techniques essential for professional garment production.',
    imageUrl: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=1200',
    learningOutcomes: [
      'Construct standard slopers for bodices, skirts, and sleeves',
      'Master dart manipulation and slash-and-spread method',
      'Grading patterns across S, M, L, XL size specifications'
    ],
    careerProspects: [
      'Master Pattern Maker',
      'Production Controller',
      'Garment Factory Cutter'
    ],
    modules: [
      { title: 'Module 1: Basic Sloper Creation', description: 'Drafting basic bodice, sleeve, and skirt blocks.' },
      { title: 'Module 2: Dart Manipulation & Style Lines', description: 'Transforming basic darts into style lines, gathers, and pleats.' },
      { title: 'Module 3: Size Grading & Production Sheets', description: 'Increasing and decreasing size dimensions systematically.' }
    ]
  },
  {
    _type: 'course',
    _id: 'aari-work-and-embroidery',
    title: 'Aari Work & Embroidery Course',
    slug: { _type: 'slug', current: 'aari-work-and-embroidery' },
    tag: 'Certificate',
    category: 'fashion',
    duration: '3 Months',
    eligibility: 'Open to All',
    description: 'Learn traditional hand embroidery using Aari needles, Zardosi threads, stone work, bead work, and intricate bridal blouse motifs.',
    imageUrl: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=1200',
    learningOutcomes: [
      'Handling Aari needles and frame setup',
      'Stitching chain stitch, Zardosi, chamki, and bead work',
      'Tracing bridal blouse motifs and execution'
    ],
    careerProspects: [
      'Aari Work Artisan',
      'Bridal Embroidery Specialist',
      'Independent Studio Owner'
    ],
    modules: [
      { title: 'Module 1: Needle Mechanics & Basic Stitches', description: 'Chain stitch, double chain, and thread filling techniques.' },
      { title: 'Module 2: Bead, Stone & Zardosi Application', description: 'Working with cut beads, Kundan stones, and Zardosi metal coils.' },
      { title: 'Module 3: Bridal Motifs & Project Work', description: 'Tracing intricate peacock, floral, and wedding blouse designs.' }
    ]
  },
  {
    _type: 'course',
    _id: 'fashion-illustration-and-sketching',
    title: 'Fashion Illustration & Sketching',
    slug: { _type: 'slug', current: 'fashion-illustration-and-sketching' },
    tag: 'Certificate',
    category: 'fashion',
    duration: '3 Months',
    eligibility: 'Open to All',
    description: 'Develop technical drawing skills for fashion croquis, fabric texture rendering, and visual portfolio presentation.',
    imageUrl: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=1200',
    learningOutcomes: [
      'Draw 10-head fashion croquis in dynamic poses',
      'Render silk, denim, lace, and sheer fabric textures',
      'Develop creative theme-based fashion collections'
    ],
    careerProspects: [
      'Fashion Illustrator',
      'Concept Designer',
      'Stylist Assistant'
    ],
    modules: [
      { title: 'Module 1: Figure Proportions & Croquis', description: 'Understanding 10-head proportion rules and pose sketching.' },
      { title: 'Module 2: Garment Draping & Shading', description: 'Draping clothes naturally over figures with light and shadow.' },
      { title: 'Module 3: Fabric Texture Rendering', description: 'Using watercolors and markers to represent different fabric finishes.' }
    ]
  },
  {
    _type: 'course',
    _id: 'fabric-painting-and-textile-art',
    title: 'Fabric Painting & Textile Art',
    slug: { _type: 'slug', current: 'fabric-painting-and-textile-art' },
    tag: 'Certificate',
    category: 'fashion',
    duration: '2 Months',
    eligibility: 'Open to All',
    description: 'A creative art course teaching fabric painting techniques, stenciling, freehand shading, metallic painting, and color fixation.',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=1200',
    learningOutcomes: [
      'Freehand floral, geometric, and abstract painting on cotton/silk',
      'Stencil painting, block printing, and marble effects',
      'Proper washing, ironing, and color permanent fixation'
    ],
    careerProspects: [
      'Fabric Painting Artist',
      'Textile Designer',
      'Craft Instructor'
    ],
    modules: [
      { title: 'Module 1: Mediums & Brush Selection', description: 'Understanding acrylic fabric paints, medium 85, and round/flat brushes.' },
      { title: 'Module 2: Shading & Stenciling Techniques', description: 'Double shading, wet-on-wet blend, and stencil applications.' },
      { title: 'Module 3: Saree & Dupatta Enhancement', description: 'Designing complete saree borders and designer dupatta motifs.' }
    ]
  },

  // Computer Courses
  {
    _type: 'course',
    _id: 'computer-basics-and-office-automation',
    title: 'Computer Basics & Office Automation',
    slug: { _type: 'slug', current: 'computer-basics-and-office-automation' },
    tag: 'Certificate',
    category: 'computer',
    duration: '3 Months',
    eligibility: 'Open to All',
    description: 'Essential computer training covering Windows navigation, Microsoft Word, Excel formulas, PowerPoint, and Internet utilities.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
    learningOutcomes: [
      'Master MS Word for professional report & letter formatting',
      'Use MS Excel for spreadsheet calculations, VLOOKUP, and charts',
      'Create engaging PowerPoint slide presentations',
      'Navigate internet search, email communication, and digital safety'
    ],
    careerProspects: [
      'Office Executive',
      'Data Entry Operator',
      'Administrative Assistant'
    ],
    modules: [
      { title: 'Module 1: Operating System & Fundamentals', description: 'Windows file organization, keyboard shortcuts, and control panel settings.' },
      { title: 'Module 2: MS Word & Document Processing', description: 'Typography, tables, mail merge, and official formatting.' },
      { title: 'Module 3: MS Excel & Data Analysis', description: 'Formulas, functions (SUM, AVERAGE, IF, VLOOKUP), and charts.' },
      { title: 'Module 4: MS PowerPoint & Internet Utilities', description: 'Slide animations, templates, email etiquette, and cloud storage.' }
    ]
  },
  {
    _type: 'course',
    _id: 'web-designing-and-development',
    title: 'Web Designing & Development',
    slug: { _type: 'slug', current: 'web-designing-and-development' },
    tag: 'Diploma',
    category: 'computer',
    duration: '6 Months',
    eligibility: '10th / 12th Pass',
    description: 'Learn to build modern, interactive, and responsive websites using HTML5, CSS3, JavaScript, Flexbox, and CSS Grid.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200',
    learningOutcomes: [
      'Build semantic HTML5 webpage structures',
      'Style web interfaces with responsive CSS3, Flexbox & Grid',
      'Add interactive logic using vanilla JavaScript DOM manipulation',
      'Deploy websites live to hosting servers'
    ],
    careerProspects: [
      'Front-End Web Designer',
      'UI/UX Web Developer',
      'Freelance Web Creator'
    ],
    modules: [
      { title: 'Module 1: HTML5 Markup & Structure', description: 'Elements, forms, media embeds, and semantic layout tags.' },
      { title: 'Module 2: CSS3 Styling & Responsive Design', description: 'Selectors, box model, Flexbox, Grid, and media queries.' },
      { title: 'Module 3: JavaScript Programming Basics', description: 'Variables, loops, functions, events, and DOM manipulation.' },
      { title: 'Module 4: Web Project & Live Deployment', description: 'Building a complete portfolio site and publishing online.' }
    ]
  },
  {
    _type: 'course',
    _id: 'photoshop-and-graphic-design-mastery',
    title: 'Photoshop & Graphic Design Mastery',
    slug: { _type: 'slug', current: 'photoshop-and-graphic-design-mastery' },
    tag: 'Certificate',
    category: 'computer',
    duration: '3 Months',
    eligibility: 'Open to All',
    description: 'Comprehensive Adobe Photoshop training covering image editing, photo manipulation, social media poster design, and digital art.',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200',
    learningOutcomes: [
      'Master Photoshop layers, masks, and adjustment tools',
      'Retouch portraits and restore damaged vintage photographs',
      'Design marketing flyers, posters, and YouTube thumbnails',
      'Prepare print-ready CMYK files and web RGB graphics'
    ],
    careerProspects: [
      'Graphic Designer',
      'Social Media Post Designer',
      'Photo Editor'
    ],
    modules: [
      { title: 'Module 1: Photoshop Interface & Selections', description: 'Tools overview, selection masks, and layer management.' },
      { title: 'Module 2: Photo Retouching & Color Grading', description: 'Skin smoothing, healing brush, curve adjustments, and color lookup.' },
      { title: 'Module 3: Graphic Design Projects', description: 'Designing brochures, banners, logos, and social media posts.' }
    ]
  },
  {
    _type: 'course',
    _id: 'computer-applications-and-programming',
    title: 'Computer Applications & C/C++ Programming',
    slug: { _type: 'slug', current: 'computer-applications-and-programming' },
    tag: 'Diploma',
    category: 'computer',
    duration: '6 Months',
    eligibility: '10th / 12th Pass',
    description: 'Develop strong programming logic and problem-solving skills using C and C++ Object-Oriented Programming (OOP) concepts.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    learningOutcomes: [
      'Understand algorithm development and flowcharting',
      'Write C programs using control structures, arrays, and pointers',
      'Master Object-Oriented Programming (Classes, Inheritance, Polymorphism) in C++',
      'Manage files and basic memory allocation'
    ],
    careerProspects: [
      'Junior Software Developer',
      'Programming Logic Tester',
      'Technical Support Specialist'
    ],
    modules: [
      { title: 'Module 1: Problem Solving & C Basics', description: 'Data types, loops, decision-making, and function definitions.' },
      { title: 'Module 2: Pointers, Structures & Memory', description: 'Pointers, dynamic memory, arrays, and structure data types.' },
      { title: 'Module 3: OOP with C++', description: 'Classes, objects, constructors, inheritance, and method overriding.' }
    ]
  },

  // Other Courses
  {
    _type: 'course',
    _id: 'diploma-in-multimedia-and-animation',
    title: 'Diploma in Multimedia & Animation',
    slug: { _type: 'slug', current: 'diploma-in-multimedia-and-animation' },
    tag: 'Diploma',
    category: 'multimedia',
    duration: '1 Year',
    eligibility: '10th / 12th Pass',
    description: 'A 1-year hands-on program in video editing, motion graphics, audio post-production, and 2D digital animation.',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200',
    learningOutcomes: [
      'Edit digital video footage with professional cuts & transitions',
      'Create animated motion graphic titles & visual intros',
      'Animate 2D vector characters and storyboards',
      'Mix multi-track audio and apply sound FX'
    ],
    careerProspects: [
      'Video Editor',
      'Motion Graphic Artist',
      'Content Creator',
      '2D Animator'
    ],
    modules: [
      { title: 'Module 1: Video Editing Principles', description: 'Timeline trimming, color correction, keyframing, and audio sync.' },
      { title: 'Module 2: Motion Graphics & Compositing', description: 'Title animation, green screen chroma keying, and lower thirds.' },
      { title: 'Module 3: 2D Character Animation', description: 'Character rigging, walk cycles, and scene composition.' }
    ]
  },
  {
    _type: 'course',
    _id: 'professional-photography-and-studio-lighting',
    title: 'Professional Photography & Studio Lighting',
    slug: { _type: 'slug', current: 'professional-photography-and-studio-lighting' },
    tag: 'Certificate',
    category: 'photography',
    duration: '3 Months',
    eligibility: 'Open to All',
    description: 'Learn DSLR/Mirrorless camera controls, studio strobe lighting, indoor & outdoor portraiture, and photo color grading.',
    imageUrl: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200',
    learningOutcomes: [
      'Master exposure triangle (ISO, Aperture, Shutter Speed)',
      'Set up studio softboxes, diffusers, and rim lights',
      'Conduct commercial product & fashion model shoots',
      'Process RAW images in Adobe Lightroom'
    ],
    careerProspects: [
      'Commercial Photographer',
      'Fashion Photographer',
      'Event & Wedding Photographer'
    ],
    modules: [
      { title: 'Module 1: Camera Mechanics & Exposure', description: 'Understanding lenses, focal length, manual focus, and depth of field.' },
      { title: 'Module 2: Studio Lighting & Setup', description: 'Key light, fill light, backlight, and softbox positioning.' },
      { title: 'Module 3: Lightroom Color Grading', description: 'RAW processing, color tuning, vignetting, and client delivery.' }
    ]
  },
  {
    _type: 'course',
    _id: 'diploma-in-beautician-and-cosmetology',
    title: 'Diploma in Beautician & Cosmetology',
    slug: { _type: 'slug', current: 'diploma-in-beautician-and-cosmetology' },
    tag: 'Diploma',
    category: 'beautician',
    duration: '6 Months',
    eligibility: 'Open to All',
    description: 'Complete beauty therapy program covering facials, hair care, salon hygiene, threading, waxing, and professional bridal makeup.',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1200',
    learningOutcomes: [
      'Skin diagnosis and customized herbal/fruit facials',
      'Hair cuts, blow-drying, hair coloring, and spa treatments',
      'Threading, waxing, and pedicure/manicure procedures',
      'HD bridal makeup, saree draping, and hair styling'
    ],
    careerProspects: [
      'Professional Beautician',
      'Bridal Makeup Artist',
      'Salon Owner'
    ],
    modules: [
      { title: 'Module 1: Skin Care & Facials', description: 'Skin types, cleanup, herbal facials, and gold facials.' },
      { title: 'Module 2: Hair Care & Styling', description: 'Hair cuts, spa, coloring, straightening, and updos.' },
      { title: 'Module 3: Bridal & Event Makeup', description: 'HD makeup techniques, saree draping, and hair accessories.' }
    ]
  },
  {
    _type: 'course',
    _id: 'spoken-english-and-professional-communication',
    title: 'Spoken English & Professional Communication',
    slug: { _type: 'slug', current: 'spoken-english-and-professional-communication' },
    tag: 'Certificate',
    category: 'spoken-english',
    duration: '3 Months',
    eligibility: 'Open to All',
    description: 'Improve English fluency, pronunciation, practical grammar, public speaking confidence, and interview performance.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200',
    learningOutcomes: [
      'Speak fluent English with confidence in daily conversations',
      'Overcome hesitation and fear of public speaking',
      'Understand practical sentence construction & vocabulary',
      'Prepare for job interviews and professional presentations'
    ],
    careerProspects: [
      'Customer Service Executive',
      'Front Desk Coordinator',
      'Global Communicator'
    ],
    modules: [
      { title: 'Module 1: Conversational Fluency', description: 'Daily dialogue practice, vocabulary building, and expression.' },
      { title: 'Module 2: Applied Grammar & Accent', description: 'Tenses, prepositions, pronunciation, and clarity.' },
      { title: 'Module 3: Public Speaking & Interviews', description: 'Group discussions, mock interviews, and body language.' }
    ]
  }
];

async function seed() {
  console.log(`Seeding ${coursesData.length} courses to Sanity...`);
  
  for (const course of coursesData) {
    const { imageUrl, ...doc } = course;
    
    // We will save document with image url or create document
    try {
      await client.createOrReplace({
        ...doc,
        // Store image reference or url if image object
      });
      console.log(`✓ Seeded: ${doc.title}`);
    } catch (err) {
      console.error(`Error seeding ${doc.title}:`, err);
    }
  }
  console.log('Seeding complete!');
}

seed();
