import { groq } from 'next-sanity';
import type { PortableTextBlock } from '@portabletext/types';

/**
 * GROQ Queries for Sanity CMS
 * Centralized query definitions for data fetching across the application.
 * Part of the Legal Traceability chain - all content is sourced from Sanity CMS.
 */

/**
 * Fetches a paginated list of kegiatan (activities/news) items.
 * Returns only essential fields for list display to optimize performance.
 * 
 * @param start - Starting index for pagination (0-based)
 * @param end - Ending index for pagination (exclusive)
 * @returns Array of kegiatan items with title, slug, publishedAt, mainImage
 */
export const kegiatanListQuery = groq`
*[_type == "kegiatan"] | order(publishedAt desc) [$start...$end] {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  excerpt
}
`;

/**
 * Fetches the total count of kegiatan items.
 * Used for pagination calculations.
 */
export const kegiatanCountQuery = groq`
count(*[_type == "kegiatan"])
`;

/**
 * Fetches a single kegiatan item by its slug.
 * Returns all fields including the full body content.
 * 
 * @param slug - The URL-friendly slug of the kegiatan
 */
export const kegiatanBySlugQuery = groq`
*[_type == "kegiatan" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  excerpt,
  body
}
`;

// Type definitions for kegiatan data
export interface KegiatanListItem {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  excerpt?: string;
}

export interface KegiatanDetail extends KegiatanListItem {
  body: PortableTextBlock[]; // Portable Text blocks
}
