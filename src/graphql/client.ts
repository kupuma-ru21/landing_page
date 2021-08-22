import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('https://starpi-api.herokuapp.com/graphql');
export default client;
