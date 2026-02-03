/**
 * Sanity CMS Type Definitions
 * These types match the schemas defined in sanity/schemas/
 */

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  isLocal?: boolean; // For fallback local images
}

export interface SanityFile {
  _type: "file";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface SanitySlug {
  _type: "slug";
  current: string;
}

export interface PortfolioItem {
  _id: string;
  _type: "portfolio";
  _createdAt?: string;
  _updatedAt?: string;

  // Required fields
  title: string;
  slug: SanitySlug;

  // Optional fields
  category?: "branding" | "web-design" | "photography" | "video";
  mainImage?: SanityImage;
  gallery?: SanityImage[];
  video?: SanityFile;
  videoUrl?: string;
  description?: string;
  content?: any[]; // Portable Text blocks
  client?: string;
  year?: number;
  featured: boolean;
}

/**
 * Simplified Portfolio Item (for list views)
 * Only includes essential fields for performance
 */
export interface PortfolioItemPreview {
  _id: string;
  title: string;
  slug: SanitySlug;
  category?: string;
  mainImage?: SanityImage;
  description?: string;
  client?: string;
  year?: number;
  featured: boolean;
}

/**
 * Helper type for Sanity queries with parameters
 */
export interface SanityQueryParams {
  [key: string]: string | number | boolean | string[];
}
