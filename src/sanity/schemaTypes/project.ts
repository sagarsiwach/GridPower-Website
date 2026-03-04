import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
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
    }),
    defineField({
      name: "capacity",
      title: "Capacity",
      type: "string",
      description: "e.g. 10 kWh, 50 kW, 1 MW",
    }),
    defineField({
      name: "completedAt",
      title: "Completed At",
      type: "date",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "client", media: "image" },
  },
});
