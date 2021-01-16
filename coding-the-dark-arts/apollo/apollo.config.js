import ApolloClient from 'apollo-boost';

export default new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_URI}`,
});
