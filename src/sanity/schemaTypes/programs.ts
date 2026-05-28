import { defineField, defineType } from "sanity";

export const programType = defineType({
  name: "program",
  title: "Programs",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),

    defineField({
      name: "shortText",
      title: "Short Description",
      type: "text",
    }),

    defineField({
      name: "paragraphs",
      title: "Paragraphs",
      type: "array",
      of: [{ type: "text" }],
    }),

    defineField({
      name: "lists",
      title: "Bullet Points",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "conclusion",
      title: "Conclusion",
      type: "text",
    }),

    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "gallery",
      title: "Image Gallery",
      type: "array",
      of: [{ type: "image" }],
    }),
  ],
});
