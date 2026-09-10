import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'kxgkc60l', // project ID
  dataset: 'production', // dataset
  useCdn: true, // `true` serves cached live data from Sanity global edge CDN with high reliability and zero rate limits
  apiVersion: '2024-01-01', // date of setup
});

const builder = imageUrlBuilder(sanityClient);

// Helper function to build image URLs from Sanity image objects safely
export function urlFor(source: any) {
  if (!source) {
    return {
      url: () => '',
    } as any;
  }
  return builder.image(source);
}
