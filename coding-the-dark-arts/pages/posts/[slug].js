import Head from "next/head";
import gql from "graphql-tag";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
	uri: `${process.env.NEXT_PUBLIC_URI}`,
});

export default function individualPost() {
	// const [data, setData] = React.useState(null);

	// React.useEffect(() => {
	// query individual post data based on slug
	// postTitle, postImage, postConent
	// client
	// 	.query({
	// 		query: gql`

	// 		`,
	// 	})
	// .then((info) => setData())
	// .catch((error) => console.error(error));
	// }, []);
	return <div>Individual Post</div>;
}
