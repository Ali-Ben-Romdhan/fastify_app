import { fastify, FastifyInstance, FastifyLoggerInstance } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'http';
import swagger from '@fastify/swagger';
import { withRefResolver } from 'fastify-zod';
import userRoutes from './modules/user/user.route';
import { userSchemas } from './modules/user/user.schema';
import { version } from '../package.json';

export const app: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify({logger:true});
export const { log: logger } = app;

for (const schema of [...userSchemas]) {
  app.addSchema(schema);
}

app.register(
  swagger,
  withRefResolver({
    routePrefix: '/docs',
    exposeRoute: true,
    staticCSP: true,
    openapi: {
      info: {
        title: 'Fastify API',
        description: 'API for some products',
        version,
      },
    },
  })
);

app.register(userRoutes, { prefix: 'api/users' });

export default app;
