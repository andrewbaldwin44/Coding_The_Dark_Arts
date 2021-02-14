const { Markdown } = require("@keystonejs/fields-markdown");
const { Relationship, Text } = require("@keystonejs/fields");

module.exports = {
  fields: {
    title: {
      type: Text,
      isRequired: true,
    },
    description: {
      type: Text,
      isRequired: true,
    },
    slug: {
      type: Text,
      isRequired: true,
    },
    tags: {
      type: Relationship,
      ref: "Tag",
      isRequired: true,
      many: true,
    },
    content: {
      type: Markdown,
      isRequired: true,
    },
    // image: {
    //   type: Image,
    //   isRequired: true,
    // },
  },
};
