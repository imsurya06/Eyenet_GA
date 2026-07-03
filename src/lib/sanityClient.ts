import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'kxgkc60l', // project ID
  dataset: 'production', // dataset
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2024-01-01', // date of setup
});

const builder = createImageUrlBuilder(sanityClient);

// Helper function to build image URLs from Sanity image objects
export function urlFor(source: any) {
  return builder.image(source);
}
