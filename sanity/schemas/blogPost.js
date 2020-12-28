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
			name: "postDescription",
			title: "Post Description",
			type: "string",
			description: "Blog Description",
		},
		{
			name: "postContent",
			title: "Post Content",
			type: "string",
			description: "Blog Content",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "postTitle",
				maxLength: 100,
			},
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
