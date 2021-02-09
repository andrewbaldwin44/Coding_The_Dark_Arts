import gql from 'graphql-tag';

export const BLOG_POST = {
  ALL: gql`
    query allBlogPost {
      allBlogPost {
        postTitle
        postContent
        postDescription
        postTags {
          tagName
        }
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
  DETAILS: gql`
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
  `,
  TAGS: gql`
    query {
      allBlogPost {
        postTags {
          tagName
        }
      }
    }
  `,
};
