import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import * as adminsSchema from './schema/admins';
import * as auditHistoriesSchema from './schema/audit-histories';
import * as employeesSchema from './schema/employees';
import * as itemsSchema from './schema/items';
import * as managersSchema from './schema/managers';
import * as usersSchema from './schema/users';

const pool = new Pool({
  host: process.env.DATABASE_HOST!,
  port: Number(process.env.DATABASE_PORT!),
  user: process.env.DATABASE_USER!,
  password: process.env.DATABASE_PASSWORD!,
  database: process.env.DATABASE_NAME!,
});

// { schema } is used for relational queries
export const db = drizzle(pool, {
  schema: {
    ...adminsSchema,
    ...auditHistoriesSchema,
    ...employeesSchema,
    ...itemsSchema,
    ...managersSchema,
    ...usersSchema,
  }
});
