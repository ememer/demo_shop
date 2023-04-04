import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/react-hooks';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `${import.meta.env.VITE_APP_BACKEND_URL}/graphql`,
});
const client = new ApolloClient({
  link,
  cache: cache,
});

export default client;
