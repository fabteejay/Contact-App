import dotenv from 'dotenv';

dotenv.config();

export default {
  development: process.env.DATABASE_URL_DEV,
  production: process.env.DATABASE_URL_PROD,
  test: process.env.DATABASE_URL_TEST,
};
