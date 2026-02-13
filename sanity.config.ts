import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "tzdld3jk";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "gridpower",
  title: "GridPower CMS",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [],
  },
});
