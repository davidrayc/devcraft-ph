import { relations } from 'drizzle-orm';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { admin } from './admin';
import { audit_history } from './audit_history';
import { employee } from './employee';
import { manager } from './manager';

export const user = pgTable('user', {
  id: serial('id').primaryKey().notNull(),
  employee_id: varchar('employee_id', { length: 256 }).notNull(),
  first_name: varchar('first_name', { length: 256 }).notNull(),
  last_name: varchar('last_name', { length: 256 }),
  email: varchar('email', { length: 256 }).notNull(),
  password: varchar('password', { length: 256 }).notNull(),
});

//RELATIONS
export const userRelations = relations(user, ({ many }) => ({
  admin: many(admin),
  manager: many(manager),
  employee: many(employee),
  audit_history: many(audit_history),
}));
