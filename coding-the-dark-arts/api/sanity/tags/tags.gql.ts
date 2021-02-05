import gql from 'graphql-tag';

export const TAGS = {
  ALL: gql`
    query {
      allTag {
        tagName
      }
    }
  `,
};
