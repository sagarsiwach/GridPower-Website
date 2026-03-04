import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project / Case Study",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Project Title", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["Upcoming", "In Progress", "Completed"] },
    }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "scope", title: "Scope", type: "string" }),
    defineField({ name: "investment", title: "Investment", type: "string" }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
