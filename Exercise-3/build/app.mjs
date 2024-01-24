var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { playerTypeDefs, playerResolvers } from './graphql/index.mjs';
dotenv.config();
const app = express();
const apolloStart = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const server = new ApolloServer({
      typeDefs: [playerTypeDefs],
      resolvers: [playerResolvers],
      introspection: true
    });
    yield server.start();
    app.use(cors());
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    //Routes
    app.use('/graphql', expressMiddleware(server));
    app.get('/', (_req, res) => res.send('Go to /graphql'));
  });
apolloStart();
export default app;
