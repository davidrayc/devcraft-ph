import { relations } from 'drizzle-orm';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { admins } from './admins';
import { auditHistories } from './audit-histories';
import { employees } from './employees';
import { managers } from './managers';

export const users = pgTable('users', {
  id: serial('id').primaryKey().notNull(),
  employeeId: varchar('employee_id', { length: 256 }).notNull(),
  firstName: varchar('first_name', { length: 256 }).notNull(),
  lastName: varchar('last_name', { length: 256 }),
  email: varchar('email', { length: 256 }).notNull(),
  password: varchar('password', { length: 256 }).notNull(),
});

//RELATIONS
export const userRelations = relations(users, ({ many }) => ({
  admins: many(admins),
  managers: many(managers),
  employees: many(employees),
  auditHistories: many(auditHistories),
}));
