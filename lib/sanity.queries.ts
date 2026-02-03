import { client } from "./sanity.client";

// Fetch all portfolio items with fallback to JSON
export async function getPortfolioItems() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

  if (!projectId || projectId === "your_project_id_here") {
    console.warn("Sanity Project ID not set, falling back to local JSON data");
    const portfolioData = await import("./portfolio-data.json");
    return portfolioData.showcaseProjects.map((p: any) => ({
      _id: p.id,
      title: p.title,
      slug: { current: p.id },
      category: p.category,
      description: p.description,
      client: p.client,
      year: p.year,
      featured: true,
      // Map local images for compatibility
      mainImage: p.images?.[0]
        ? { _type: "image", asset: { _ref: p.images[0] }, isLocal: true }
        : null,
      images: p.images?.map((img: string) => ({
        _type: "image",
        asset: { _ref: img },
        isLocal: true,
      })),
      videoUrl: p.videoUrl,
    }));
  }

  return client.fetch(
    `*[_type == "portfolio"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      category,
      mainImage,
      gallery,
      video,
      videoUrl,
      description,
      content,
      tags,
      client,
      year,
      featured
    }`,
  );
}

// Fetch only featured portfolio items
export async function getFeaturedPortfolio() {
  return client.fetch(
    `*[_type == "portfolio" && featured == true] | order(_createdAt desc) {
      _id,
      title,
      slug,
      category,
      mainImage,
      description,
      client,
      year
    }`,
  );
}

// Fetch portfolio items by category
export async function getPortfolioByCategory(category: string) {
  return client.fetch(
    `*[_type == "portfolio" && category == $category] | order(_createdAt desc) {
      _id,
      title,
      slug,
      category,
      mainImage,
      description,
      client,
      year
    }`,
    { category },
  );
}

// Fetch a single portfolio item by slug
export async function getPortfolioBySlug(slug: string) {
  return client.fetch(
    `*[_type == "portfolio" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      category,
      mainImage,
      gallery,
      video,
      videoUrl,
      description,
      content,
      client,
      year,
      featured
    }`,
    { slug },
  );
}

// Fetch site settings
export async function getSiteSettings() {
  return client.fetch(
    `*[_type == "siteSettings"][0] {
      portfolioSectionTitle,
      portfolioSectionHeading,
      portfolioSectionDescription
    }`,
  );
}
