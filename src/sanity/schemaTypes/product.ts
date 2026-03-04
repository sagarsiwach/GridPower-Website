import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Product Name", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    }),
    defineField({
      name: "vertical",
      title: "Vertical",
      type: "string",
      options: { list: ["GridEnergy", "GridCharge", "GridDrive"] },
    }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "keySpec",
      title: "Key Spec (headline)",
      type: "string",
    }),
    defineField({
      name: "specTable",
      title: "Full Spec Table",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "key", type: "string", title: "Spec Name" },
            { name: "value", type: "string", title: "Value" },
          ],
        },
      ],
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "certifications",
      title: "Certifications",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "featured", title: "Featured", type: "boolean" }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
  ],
  preview: {
    select: { title: "name", subtitle: "vertical", media: "image" },
  },
});
