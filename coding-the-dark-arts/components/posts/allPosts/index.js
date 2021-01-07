import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import React from 'react';
import Wrapper from '../../postsStyle/Wrapper';
import SearchWidget from '../../searchWidget';

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
              postContent
              postDescription
              image {
                asset {
                  url
                }
              }
              slug {
                current
              }
            }
          }
        `,
      })
      .then(info => setData(info.data.allBlogPost))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <Head>
        <title>All Posts</title>
      </Head>

      <div className='all-post-wrapper'>
        <h1>All Posts</h1>
        <div className='search-component'>
          <SearchWidget />
        </div>
        <div className='all-posts-cont'>
          {data &&
            data.map((dataPiece, index) => {
              return (
                // redirects based on which post is clicked
                <div key={`allposts-post-${index}`} className='c-post__wrapper'>
                  <Link href={`/posts/${dataPiece.slug.current}`}>
                    <a>
                      <Wrapper key={`post-title-${dataPiece.postTitle}`}>
                        <h1>{dataPiece.postTitle}</h1>
                        <h2>{dataPiece.postDescription}</h2>
                        <img className='dataPiece-sml' src={dataPiece.image.asset.url} />
                      </Wrapper>
                    </a>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
