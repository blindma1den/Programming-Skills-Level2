import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { playerTypeDefs, playerResolvers } from './graphql/index';

dotenv.config();

const app = express();

const apolloStart = async () => {
  const server = new ApolloServer({
    typeDefs: [playerTypeDefs],
    resolvers: [playerResolvers]
  });
  await server.start();
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  //Routes
  app.use('/graphql', expressMiddleware(server));
  app.get('/', (_req, res) => res.send('Go to /graphql'));
};
apolloStart();

export default app;
