/* eslint-disable */
import { useEffect, useState } from 'react';
import Head from 'next/head';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';

import Markdown from '../../markdown';

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_URI}`,
});

export default function individualPost({ comments, slug }) {
  // This test function is literally here only for the useEffect
  // callback, it does nothing else
  const mounted = () => {};

  const [data, setData] = useState(null);
  // since slug is initially undefined for half a second, we cannot query based of it
  // but since the useEffect rerenders based off when the "test" function is defined
  // then the slug is available and we can render the data based on it

  const postQuery = gql`
    query BlogPost($slug: String) {
      allBlogPost(where: { slug: { current: { eq: $slug } } }) {
        postTitle
        postContent
        postDescription
        image {
          asset {
            url
          }
        }
      }
    }
  `;

  useEffect(() => {
    client
      .query({
        query: postQuery,
        variables: {
          slug,
        },
      })
      .then(info => setData(info.data.allBlogPost[0]))
      .catch(error => console.error(error));
  }, [mounted]);

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

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <Head>
        <title>{data.postTitle}</title>
      </Head>

      <div className='c-single-post__wrapper'>
        <div>
          <h1>{data.postTitle}</h1>
          <h2>{data.postDescription}</h2>
        </div>
        <div className='single-post-img'>
          <img src={data.image.asset.url} />
        </div>
        <Markdown children={data.postContent} />
      </div>

      <form onSubmit={handleSubmit}>
        <label>Write a comment</label>
        <input type='text' placeholder='Name' />
        <input type='text' placeholder='Comment' />
        <button type='submit'>Post</button>
      </form>

      {comments &&
        comments.map(({ user, comment }, index) => {
          return (
            <div key={`${slug}-post-comment-${index}`}>
              <p>{user}</p>
              <p>{comment}</p>
            </div>
          );
        })}
    </>
  );
}
