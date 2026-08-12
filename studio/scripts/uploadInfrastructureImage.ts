import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

// Usage: npx tsx scripts/uploadInfrastructureImage.ts /path/to/image.jpg "Alt Text" "carousel"

async function main() {
  const filePath = process.argv[2];
  const altText = process.argv[3] || 'Infrastructure Image_05';
  const category = process.argv[4] || 'carousel';

  if (!filePath) {
    console.error('Please provide a file path: npx tsx scripts/uploadInfrastructureImage.ts <path-to-image> [altText] [category]');
    process.exit(1);
  }

  const absolutePath = path.resolve(filePath);
  if (!fs.existsSync(absolutePath)) {
    console.error(`File not found: ${absolutePath}`);
    process.exit(1);
  }

  const client = createClient({
    projectId: 'kxgkc60l',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_AUTH_TOKEN, // Uses logged-in session or auth token
  });

  console.log(`Uploading asset ${absolutePath}...`);
  const asset = await client.assets.upload('image', fs.createReadStream(absolutePath), {
    filename: path.basename(absolutePath),
  });

  console.log(`Asset uploaded successfully: ${asset._id}`);

  const doc = await client.create({
    _type: 'infrastructureImage',
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    },
    alt: altText,
    category: category,
  });

  console.log(`✓ Created Infrastructure Image document: ${doc._id}`);
}

main().catch((err) => {
  console.error('Upload failed:', err);
});
