export default {
  name: "portfolio",
  title: "Portfolio Items",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "tags",
      title: "Partnered on (Tags)",
      type: "array",
      of: [{ type: "string" }],
      description: "Click '+ Add item' to add multiple services or skills.",
      options: {
        layout: "grid", // This shows the Add Item button clearly
      },
    },
    {
      name: "category",
      title: "Main Category",
      type: "string",
      description: "Enter the primary category (e.g., Web Design)",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      name: "gallery",
      title: "Image Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "video",
      title: "Video File",
      type: "file",
      options: {
        accept: "video/*",
      },
    },
    {
      name: "videoUrl",
      title: "External Video URL (YouTube/Vimeo)",
      type: "url",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "client",
      title: "Client Name",
      type: "string",
    },
    {
      name: "year",
      title: "Year",
      type: "number",
    },
    {
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      subtitle: "category",
    },
  },
};
