import { defineField, defineType } from "sanity";

export const segment = defineType({
  name: "segment",
  title: "Segment",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "brand",
      title: "Brand",
      type: "string",
      options: {
        list: [
          { title: "GridEnergy", value: "gridenergy" },
          { title: "GridCharge", value: "gridcharge" },
          { title: "GridDrive", value: "griddrive" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "href",
      title: "Page Path",
      type: "string",
      description: "Route path, e.g. /energy/home",
    }),
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "brand", media: "image" },
  },
});
