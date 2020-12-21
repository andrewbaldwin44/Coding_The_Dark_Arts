import Head from "next/head";
import Image from "next/image";
import gql from "graphql-tag";
import ApolloClient from "apollo-boost";
import React from "react";

const client = new ApolloClient({
  uri: "PUT URI HERE",
});

export default function Home() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    client
      .query({
        query: gql`
          query allBlogPost {
            allBlogPost {
              postTitle
              postContent
            }
          }
        `,
      })
      .then((info) => setData(info.data.allBlogPost))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Head>
        <title>Coding The Dark Arts</title>
      </Head>
      <div className="c-container">
        <h1>Coding The Dark Arts</h1>
        <h2>With the level 14 JS Wizards</h2>
        <ul>
          <li>Andrew</li>
          <li>Kolby</li>
        </ul>
        <Image height="175" width="175" src="/wizard.png" />
      </div>
      {data &&
        data.map((dataPiece) => {
          return (
            <>
              <h1>{dataPiece.postTitle}</h1>
              <h2>{dataPiece.postContent}</h2>
            </>
          );
        })}
    </>
  );
}
