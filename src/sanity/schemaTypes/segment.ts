import { defineField, defineType } from "sanity";

export const segment = defineType({
  name: "segment",
  title: "Segment Page",
  type: "document",
  fields: [
    defineField({
      name: "vertical",
      title: "Vertical",
      type: "string",
      options: { list: ["GridEnergy", "GridCharge", "GridDrive"] },
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "subline", title: "Subline", type: "text" }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "products",
      title: "Products in this segment",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    }),
  ],
});
