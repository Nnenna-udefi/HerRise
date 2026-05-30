// import { defineField, defineType } from "sanity";

// export const programType = defineType({
//   name: "program",
//   title: "Programs",
//   type: "document",

//   fields: [
//     defineField({
//       name: "title",
//       title: "Title",
//       type: "string",
//     }),

//     defineField({
//       name: "slug",
//       title: "Slug",
//       type: "slug",
//       options: {
//         source: "title",
//         maxLength: 96,
//       },
//     }),

//     defineField({
//       name: "shortText",
//       title: "Short Description",
//       type: "text",
//     }),

//     defineField({
//       name: "paragraphs",
//       title: "Paragraphs",
//       type: "array",
//       of: [{ type: "text" }],
//     }),

//     defineField({
//       name: "lists",
//       title: "Bullet Points",
//       type: "array",
//       of: [{ type: "string" }],
//     }),

//     defineField({
//       name: "conclusion",
//       title: "Conclusion",
//       type: "text",
//     }),

//     defineField({
//       name: "mainImage",
//       title: "Main Image",
//       type: "image",
//       options: {
//         hotspot: true,
//       },
//     }),

//     defineField({
//       name: "gallery",
//       title: "Image Gallery",
//       type: "array",
//       of: [{ type: "image" }],
//     }),
//   ],
// });

import { defineField, defineType } from "sanity";

export const programType = defineType({
  name: "program",
  title: "Programs",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Program Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "img",
      type: "image",
      title: "Main Cover Image",
      options: { hotspot: true },
    }),
    defineField({
      name: "shortText",
      type: "text",
      title: "Short Excerpt Description",
    }),

    // Replacing your custom structured object with portable content or simple fields
    defineField({
      name: "fullTextParagraphs",
      type: "array",
      title: "Full Text Paragraphs",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "lists",
      type: "array",
      title: "Bullet Points List",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "conclusion",
      type: "text",
      title: "Concluding Remarks",
    }),
    defineField({
      name: "imgGallery",
      type: "array",
      title: "Image Gallery",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
  ],
});
