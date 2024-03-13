import { relations } from 'drizzle-orm';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { admins } from './admins';
import { employees } from './employees';
import { managers } from './managers';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  employee_id: varchar('employee_id', { length: 256 }),
  first_name: varchar('first_name', { length: 256 }),
  last_name: varchar('last_name', { length: 256 }),
  email: varchar('email', { length: 256 }),
  password: varchar('password', { length: 256 }),
});

//RELATIONS
export const usersRelations = relations(users, ({ many }) => ({
  admins: many(admins),
  managers: many(managers),
  employees: many(employees),
}));
