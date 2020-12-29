import Head from "next/head";
import React from "react";
import gql from "graphql-tag";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
	uri: `${process.env.NEXT_PUBLIC_URI}`,
});

export default function individualPost() {
	const [data, setData] = React.useState(null);
	// TODO: get BlogPost id based off slug from url params
	React.useEffect(() => {
		client
			.query({
				query: gql`
					query BlogPost {
						BlogPost(id: "f13ce4b7-ae28-4406-a955-bb75efa4aaad") {
							postTitle
							postDescription
							postContent
							image {
								asset {
									url
								}
							}
						}
					}
				`,
			})
			.then((info) => setData(info.data.BlogPost))
			.catch((error) => console.error(error));
	}, []);

	if (!data) {
		return (
			<>
				<Head>
					<title>Loading...</title>
				</Head>
				<div>Loading...</div>;
			</>
		);
	}

	return (
		<>
			<Head>
				<title>{data.postTitle}</title>
			</Head>
			<div className="single-post-wrapper">
				<div>
					<h1>{data.postTitle}</h1>
					<h2>{data.postDescription}</h2>
				</div>
				<div className="single-post-img">
					<img src={data.image.asset.url} />
				</div>
				<div>
					<p>{data.postContent}</p>
				</div>
			</div>
		</>
	);
}
