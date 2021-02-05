import ApolloClient from '../../../apollo/apollo.config';
import { BLOG_POST } from './blog-post.gql';

export async function getAllBlogPosts() {
  const {
    data: { allBlogPost },
  } = await ApolloClient.query({
    query: BLOG_POST.ALL,
  });

  return allBlogPost;
}

export async function getSingleBlogPost(slug: string) {
  const {
    data: {
      allBlogPost: [firstPost],
    },
  } = await ApolloClient.query({
    query: BLOG_POST.DETAILS,
    variables: {
      slug,
    },
  });

  return firstPost;
}
