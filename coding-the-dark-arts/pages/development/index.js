import Head from 'next/head';
import Link from 'next/link';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import React from 'react';
import Wrapper from '../../components/postsStyle/Wrapper';
import SearchWidget from '../../components/searchWidget';

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

      <h1>All Posts</h1>
      <div className='body'>
        <div className='search-component'>
          <SearchWidget />
        </div>
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
