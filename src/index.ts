import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Type definitions (schema)
const typeDefs = `#graphql
  type Query {
    hello: String
    books: [Book]
  }

  type Book {
    title: String
    author: String
  }
`;

// Sample data
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

// Resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello from Apollo GraphQL!',
    books: () => books,
  },
};

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server
const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at: ${url}`);
};

startServer();
