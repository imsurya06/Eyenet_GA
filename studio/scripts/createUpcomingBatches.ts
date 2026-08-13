import { createClient } from '@sanity/client';

async function main() {
  const client = createClient({
    projectId: 'kxgkc60l',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_AUTH_TOKEN,
  });

  const batches = [
    {
      _id: 'batch-fashion-designing',
      _type: 'batch',
      title: 'Diploma in Fashion Designing',
      tag: 'Seats filling fast',
      startDate: '1 September 2026',
      timing: '10:00 AM - 1:00 PM',
      duration: '1 Year / 6 Months',
      mode: 'Offline Practical Studio',
      seatsLeft: 8,
      courseTitleToSelect: 'Diploma in Fashion Designing',
    },
    {
      _id: 'batch-aari-embroidery',
      _type: 'batch',
      title: 'Aari Embroidery Masterclass',
      tag: 'New Batch',
      startDate: '10 September 2026',
      timing: '2:00 PM - 5:00 PM',
      duration: '2 Months',
      mode: 'Hands-on Studio Training',
      seatsLeft: 12,
      courseTitleToSelect: 'Aari Embroidery',
    },
    {
      _id: 'batch-beauty-therapy',
      _type: 'batch',
      title: 'Diploma in Beauty & Aroma Therapy',
      tag: 'Most Popular',
      startDate: '15 September 2026',
      timing: '11:00 AM - 2:00 PM',
      duration: '6 Months',
      mode: 'Practical Salon Training',
      seatsLeft: 6,
      courseTitleToSelect: 'Diploma in Beauty & Aroma Therapy',
    },
  ];

  console.log('Creating upcoming batch documents in Sanity CMS...');
  for (const batch of batches) {
    const createdDoc = await client.createOrReplace(batch);
    console.log(`✓ Batch created: ${createdDoc.title} (${createdDoc._id})`);
  }
  console.log('All upcoming batch documents created successfully!');
}

main().catch((err) => {
  console.error('Error creating batch documents:', err);
  process.exit(1);
});
