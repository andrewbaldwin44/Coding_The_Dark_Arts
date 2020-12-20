export default {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "postTitle",
      title: "Post Title",
      type: "string",
      description: "Post Title",
    },
    {
      name: "postContent",
      title: "Post Content",
      type: "string",
      description: "Blog Content",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: { title: "postTitle", media: "image" },
  },
};
