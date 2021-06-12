import ApolloClient from '../../../apollo/apollo.config';
import { TAGS } from './tags.gql';

export async function getAllTags() {
  const {
    data: { allTag },
  } = await ApolloClient.query({
    query: TAGS.ALL,
  });

  return allTag;
}
