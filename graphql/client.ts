import { ApolloClient, InMemoryCache } from "@apollo/client";

const BASE_URL = "https://swapi-graphql.netlify.app/.netlify/functions/index/";
export const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});
