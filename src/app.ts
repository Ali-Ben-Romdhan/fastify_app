import Fastify from 'fastify';
import { loggerEnvironment } from './config/logger';

export const app:fastify. = Fastify({
  logger: loggerEnvironment,
});
export const { log: logger } = app;


export default app;
