import { relations } from 'drizzle-orm';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { admin } from './admin';
import { auditHistory } from './audit-history';
import { employee } from './employee';
import { manager } from './manager';

export const user = pgTable('user', {
  id: serial('id').primaryKey().notNull(),
  employeeId: varchar('employeeId', { length: 256 }).notNull(),
  firstName: varchar('firstName', { length: 256 }).notNull(),
  lastName: varchar('lastName', { length: 256 }),
  email: varchar('email', { length: 256 }).notNull(),
  password: varchar('password', { length: 256 }).notNull(),
});

//RELATIONS
export const userRelations = relations(user, ({ many }) => ({
  admins: many(admin),
  managers: many(manager),
  employees: many(employee),
  auditHistories: many(auditHistory),
}));
