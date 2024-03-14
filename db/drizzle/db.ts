import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import { admins } from './schema/admins';
import { audit_histories } from './schema/audit_histories';
import { employees } from './schema/employees';
import { items } from './schema/items';
import { managers } from './schema/managers';
import { users } from './schema/users';

export const client = new Client({
  host: process.env.DB_HOST!,
  port: Number(process.env.DB_PORT!),
  user: process.env.DB_USERNAME!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
});

// { schema } is used for relational queries
export const db = drizzle(client, {
  schema: {
    ...admins,
    ...audit_histories,
    ...employees,
    ...items,
    ...managers,
    ...users,
  },
});
