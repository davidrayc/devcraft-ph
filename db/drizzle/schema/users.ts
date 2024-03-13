import { relations } from 'drizzle-orm';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { admin } from './admin';
import { employee } from './employee';
import { manager } from './manager';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  employee_id: varchar('employee_id', { length: 256 }),
  first_name: varchar('first_name', { length: 256 }),
  last_name: varchar('last_name', { length: 256 }),
  email: varchar('email', { length: 256 }),
  password: varchar('password', { length: 256 }),
});

//ONE-TO-MANY RELATIONS
export const usersRelations = relations(users, ({ many }) => ({
  admin: many(admin),
  manager: many(manager),
  employee: many(employee),
}));
