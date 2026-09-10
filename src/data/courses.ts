export interface Course {
  id: string;
  image: string;
  tag: string;
  title: string;
  description: string;
  brochureLink?: string;
  enrollLink?: string;
  category: 'fashion' | 'computer' | 'photography' | 'beautician' | 'spoken-english'; // Updated categories
  icon?: React.ElementType; // Optional icon for dropdowns
  duration: string;
  eligibility: string;
  learningOutcomes: string[];
  careerProspects: string[];
  modules: { title: string; description: string; }[];
  gallery?: string[];
  isFeatured?: boolean;
  priority?: number;
  hoursPerDay?: string;
}

/**
 * Calculates a numerical duration weight in days so courses can be sorted
 * from shortest duration to longest duration.
 */
export const getDurationWeight = (duration?: string, tag?: string): number => {
  if (!duration) {
    if (tag && tag.toLowerCase().includes('diploma')) return 180;
    return 45;
  }
  const d = duration.toLowerCase().trim();

  // Match days: e.g., "10 days", "10 days to 1 month"
  const dayMatch = d.match(/(\d+)\s*day/i);
  if (dayMatch) {
    return parseInt(dayMatch[1], 10);
  }

  // Match weeks: e.g., "2 weeks"
  const weekMatch = d.match(/(\d+)\s*week/i);
  if (weekMatch) {
    return parseInt(weekMatch[1], 10) * 7;
  }

  // Match years: e.g., "1 year", "2 years"
  const yearMatch = d.match(/(\d+)\s*year/i);
  if (yearMatch) {
    return parseInt(yearMatch[1], 10) * 365;
  }

  // Match months: e.g., "1 month", "2 months", "6 months"
  const monthMatch = d.match(/(\d+)\s*month/i);
  if (monthMatch) {
    return parseInt(monthMatch[1], 10) * 30;
  }

  // Fallbacks for non-numeric descriptions (e.g., "As per course schedule")
  if (tag && tag.toLowerCase().includes('diploma')) return 180;
  if (tag && tag.toLowerCase().includes('short term')) return 30;
  if (tag && tag.toLowerCase().includes('certificate')) return 45;

  return 50;
};

// The initialCourses array has been removed.
// Courses will now be fetched exclusively from Sanity CMS.
export const initialCourses: Course[] = [];