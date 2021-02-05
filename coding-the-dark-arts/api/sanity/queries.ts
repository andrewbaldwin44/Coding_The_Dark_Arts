import gql from 'graphql-tag';

import ApolloClient from '../../apollo/apollo.config';

const BLOG_POST_GQL = gql`
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

export async function getSingleBlogPost(slug: string) {
  const {
    data: {
      allBlogPost: [firstPost],
    },
  } = await ApolloClient.query({
    query: BLOG_POST_GQL,
    variables: {
      slug,
    },
  });

  return firstPost;
}
