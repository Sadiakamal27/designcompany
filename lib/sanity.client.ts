import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  apiVersion: process.env.SANITY_API_VERSION!,
  useCdn: false, // Disabled for development - see changes immediately
  token: process.env.SANITY_API_TOKEN,
});

// Helper function to generate image URLs from Sanity image objects
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  // If the source is already a URL string, we return a mock builder that just returns that URL
  if (typeof source === "string") {
    return {
      url: () => source,
      width: () => ({
        url: () => source,
        height: () => ({ url: () => source }),
      }),
      height: () => ({ url: () => source }),
      fit: () => ({ url: () => source }),
      quality: () => ({ url: () => source }),
    } as any;
  }

  return builder.image(source);
}

// Helper to get video asset URLs
export function getVideoUrl(asset: any) {
  if (!asset) return null;
  const ref = asset._ref || asset;
  if (typeof ref !== "string") return null;

  // Clean up the ref to get the actual URL
  const id = ref
    .replace("file-", "")
    .replace("-mp4", ".mp4")
    .replace("-mov", ".mov")
    .replace("-webm", ".webm");
  return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}`;
}
