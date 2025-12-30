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

## Docker Deployment

### Building the Docker Image

```bash
docker build -t nexus.odell.com:5001/vytalmind-graphql:latest .
```

### Running with Docker Compose

For local development:

```bash
docker-compose up -d
```

To stop:

```bash
docker-compose down
```

### Manual Docker Run

```bash
docker run -d \
  --name vytalmind-graphql \
  -p 4000:4000 \
  --restart unless-stopped \
  nexus.odell.com:5001/vytalmind-graphql:latest
```

### Docker Registry

Images are stored in the private Nexus registry at `nexus.odell.com:5001`.

To push to the registry:

```bash
docker login nexus.odell.com:5001
docker push nexus.odell.com:5001/vytalmind-graphql:latest
```

## CI/CD with GitHub Actions

This project uses self-hosted GitHub Actions runners for continuous deployment.

### Workflow Overview

1. **Build and Test** - Builds Docker image and runs tests in container
2. **Deploy** - Pushes to Nexus registry and deploys to production (main branch only)

### Required GitHub Secrets

Configure these secrets in your GitHub repository settings:

- `NEXUS_USERNAME` - Username for Nexus Docker registry
- `NEXUS_PASSWORD` - Password for Nexus Docker registry

### Self-Hosted Runner Setup

1. Go to your repository Settings → Actions → Runners
2. Click "New self-hosted runner"
3. Follow the instructions to install and configure the runner on your server
4. Ensure Docker is installed and accessible to the runner user

### Deployment Process

When code is pushed to the `main` branch:

1. GitHub Actions builds the Docker image
2. Runs tests inside the container
3. Pushes the image to `nexus.odell.com:5001`
4. Pulls the latest image on the deployment server
5. Stops the existing container
6. Starts a new container with the updated image
7. Performs health checks to verify deployment

For pull requests, only the build and test steps run.

## Technologies

- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - GraphQL server
- [GraphQL](https://graphql.org/) - Query language
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Docker](https://www.docker.com/) - Containerization
- [GitHub Actions](https://github.com/features/actions) - CI/CD
