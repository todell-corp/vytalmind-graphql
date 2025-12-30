# VytalMind GraphQL

A GraphQL API service built with Apollo Server and TypeScript.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the server in development mode with hot reload:

```bash
npm run dev
```

The server will start at `http://localhost:4000`

### Production

Build the TypeScript code:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## GraphQL Playground

Once the server is running, you can access Apollo Studio Sandbox at `http://localhost:4000` to test your queries.

### Example Queries

```graphql
query {
  hello
}
```

```graphql
query {
  books {
    title
    author
  }
}
```

## Project Structure

```
vytalmind-graphql/
├── src/
│   └── index.ts          # Main server file with schema and resolvers
├── dist/                 # Compiled JavaScript (generated)
├── node_modules/         # Dependencies
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Technologies

- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - GraphQL server
- [GraphQL](https://graphql.org/) - Query language
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
