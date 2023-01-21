import app, { logger } from './app';
const port = 3000;
const host = 'localhost';
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
