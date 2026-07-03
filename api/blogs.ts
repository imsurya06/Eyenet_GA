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
    
    let imageRef = undefined;
    
    // If an image was uploaded, it will be sent as a base64 string
    if (data.imageBase64) {
      // Extract the raw base64 data
      const base64Data = data.imageBase64.split(';base64,').pop();
      const buffer = Buffer.from(base64Data, 'base64');
      
      // Upload the buffer to Sanity
      const imageAsset = await client.assets.upload('image', buffer, { 
        filename: data.imageName || 'blog-upload.jpg' 
      });
      
      imageRef = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageAsset._id
        }
      };
    }

    const doc = {
      _type: 'blog',
      title: data.title,
      author: data.author,
      date: data.date,
      content: data.content,
      ...(imageRef && { image: imageRef }),
      status: 'pending',
    };

    const result = await client.create(doc);
    return res.status(200).json({ message: 'Blog submitted successfully', result });
  } catch (error: any) {
    console.error("Sanity Submission Error:", error);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
