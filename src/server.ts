import { host, port } from '../config';
import app, { logger } from './app';

async function bootstrap() {
  try {
    await app.listen({
       port,
       host,
    });
    logger.info('server starting');
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}
bootstrap();
