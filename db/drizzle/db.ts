import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.DATABASE_HOST!,
  port: Number(process.env.DATABASE_PORT!),
  user: process.env.DATABASE_USER!,
  password: process.env.DATABASE_PASSWORD!,
  database: process.env.DATABASE_NAME!,
});

// { schema } is used for relational queries
export const db = drizzle(pool);
