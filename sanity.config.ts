import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "default",
  title: "Design Company Studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ag0d5gd5",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  basePath: "/admin",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
