import { relations } from 'drizzle-orm';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { admins } from './admins';
import { audit_histories } from './audit_histories';
import { employees } from './employees';
import { managers } from './managers';

export const users = pgTable('users', {
  id: serial('id').primaryKey().notNull(),
  employee_id: varchar('employee_id', { length: 256 }).notNull(),
  first_name: varchar('first_name', { length: 256 }).notNull(),
  last_name: varchar('last_name', { length: 256 }),
  email: varchar('email', { length: 256 }).notNull(),
  password: varchar('password', { length: 256 }).notNull(),
});

//RELATIONS
export const usersRelations = relations(users, ({ many }) => ({
  admins: many(admins),
  managers: many(managers),
  employees: many(employees),
  audit_histories: many(audit_histories),
}));
