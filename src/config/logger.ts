
enum env {
  development = 'development',
  production = 'production',
  test = 'test',
}
const date = new Date().toString().split("GMT")[0]

const envToLogger = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: date,
        ignore: 'pid,hostname',
      },
    },
  },
  production: true,
  test: false,
};

const environment = (process.env.NODE_ENV as env) || env.development;
export const loggerEnvironment = envToLogger[environment] ?? true;


