export default {
  name: "tag",
  title: "Tag",
  type: "document",
  fields: [
    {
      name: "tagName",
      title: "Tag Name",
      type: "string",
      description: "Tag Name?",
    },
  ],
  preview: {
    select: { title: "tagName" },
  },
};
