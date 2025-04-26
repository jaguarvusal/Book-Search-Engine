import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './config/connection.js';
import { typeDefs, resolvers } from './schema/index.js';
import { authenticateToken } from './services/auth.js';

const app = express();
const PORT = process.env.PORT || 3001;

// ES module-compatible __dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Apollo Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

(async () => {
  await server.start();

  app.use(
    '/graphql',
    cors(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        const authHeader = req.headers.authorization || '';
        let user = null;

        if (authHeader) {
          try {
            user = authenticateToken(authHeader);
          } catch (err) {
            if (err instanceof Error) {
              console.error(err.message);
            } else {
              console.error('An unknown error occurred');
            }
          }
        }

        return { user };
      },
    })
  );

  // Middleware for parsing form data
  app.use(express.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Serve static assets in production
  if (process.env.NODE_ENV === 'production') {
    const clientDistPath = path.resolve(__dirname, '../client/dist');

    app.use(express.static(clientDistPath));

    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(clientDistPath, 'index.html'));
    });
  }

  // Connect to the database and start the server
  db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  });
})();
