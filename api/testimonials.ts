import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'kxgkc60l', // project ID
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // Secure server-side token
});

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const data = req.body;
    
    const doc = {
      _type: 'testimonial',
      name: data.name,
      rating: data.rating,
      quote: data.quote,
      approved: false, // Explicitly set to false so the admin has to approve it
    };

    const result = await client.create(doc);
    return res.status(200).json({ message: 'Testimonial submitted successfully', result });
  } catch (error: any) {
    console.error("Sanity Submission Error:", error);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
