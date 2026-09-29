import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'kxgkc60l', // project ID
  dataset: 'production', // dataset
  useCdn: false, // `false` bypasses edge CDN caching so newly published Sanity documents reflect instantly on the website
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

/**
 * Resilient fetch with automatic Stale-While-Revalidate localStorage caching,
 * silent exponential backoff retries, and offline fallback.
 */
export async function fetchSanityWithCache<T>(
  cacheKey: string,
  query: string,
  params: Record<string, any> = {},
  retries = 3
): Promise<T | null> {
  const fullKey = `eyenet_cache_${cacheKey}`;

  // 1. Read existing cached data if available
  let cachedData: T | null = null;
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(fullKey);
      if (raw) {
        cachedData = JSON.parse(raw);
      }
    } catch {
      // Ignore parse error
    }
  }

  // 2. Fetch fresh data with retry logic
  let attempt = 0;
  let delay = 350;
  while (attempt < retries) {
    try {
      const freshData = await sanityClient.fetch(query, params);
      if (freshData !== undefined && freshData !== null) {
        // Save to localStorage cache
        if (typeof window !== 'undefined') {
          try {
            localStorage.setItem(fullKey, JSON.stringify(freshData));
          } catch {
            // Ignore quota exceeded
          }
        }
        return freshData as T;
      }
    } catch (err) {
      attempt++;
      if (attempt >= retries) {
        console.warn(`[Sanity Cache] Fetch failed for "${cacheKey}" after ${retries} attempts:`, err);
        if (cachedData !== null) {
          return cachedData;
        }
        return null;
      }
      // Exponential backoff before retry
      await new Promise((resolve) => setTimeout(resolve, delay));
      delay *= 2;
    }
  }

  return cachedData;
}

/**
 * Helper to get initial cached data immediately on component mount (0ms latency).
 */
export function getInitialCachedData<T>(cacheKey: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(`eyenet_cache_${cacheKey}`);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(fallback) && Array.isArray(parsed)) {
        return parsed.length > 0 ? (parsed as T) : fallback;
      }
      if (parsed) return parsed as T;
    }
  } catch {
    // Ignore error
  }
  return fallback;
}
