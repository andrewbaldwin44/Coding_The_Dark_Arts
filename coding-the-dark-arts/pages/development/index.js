import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import React from 'react';
import Wrapper from '../../components/postsStyle/Wrapper';

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_URI}`,
});

export default function Development() {
  React.useEffect(() => {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
      panel.addEventListener('mouseenter', () => {
        removeActiveClasses();
        panel.classList.add('active');
      });
    });
    function removeActiveClasses() {
      panels.forEach(panel => {
        panel.classList.remove('active');
      });
    }
  }, []);

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

      {console.log(process.env.NEXT_PUBLIC_URI)}
      <h1>All Posts</h1>
      <div className='body'>
        <div className='container-1'>
          {data &&
            data.map(dataPiece => {
              return (
                // redirects based on which post is clicked
                <div className='panel'>
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
