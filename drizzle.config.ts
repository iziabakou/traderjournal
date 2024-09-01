import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  schema: './src/db/schema.js',
  out: './drizzle',
  dialect: 'postgresql', // '' | 'mysql' | 'sqlite'
  dbCredentials: {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
  },
});