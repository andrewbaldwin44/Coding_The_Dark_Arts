import Head from "next/head";
import Image from "next/image";
import gql from "graphql-tag";
import ApolloClient from "apollo-boost";
import React from "react";
import Wrapper from "../../components/postsStyle/Wrapper";

const client = new ApolloClient({
	uri: `${process.env.NEXT_PUBLIC_URI}`,
});

export default function AllPosts() {
	const [data, setData] = React.useState(null);

	React.useEffect(() => {

		client
			.query({
				query: gql`
					query allBlogPost {
						allBlogPost {
              postTitle
              postDescription
							postContent
						}
					}
				`,
			})
			.then((info) => setData(info.data.allBlogPost))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div>
			<Head>
				<title>All Posts</title>
			</Head>

			{console.log(process.env.NEXT_PUBLIC_URI)}
			<h1>All Posts</h1>
			{data &&
				data.map((dataPiece) => {

					
					return (
						// Link onClick redirect to /posts/[slug]
						<Wrapper key={`post-title-${dataPiece.postTitle}`}>
							<h1>{dataPiece.postTitle}</h1>
							<h2>{dataPiece.postContent}</h2>
						</Wrapper>
					);
				})}
		</div>
	);
}
