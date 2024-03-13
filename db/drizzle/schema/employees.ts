import { relations } from 'drizzle-orm';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { managers } from './managers';
import { users } from './users';

export const employees = pgTable('employees', {
  id: serial('id').primaryKey(),
  user_id: varchar('user_id', { length: 256 }),
  manager_id: varchar('manager_id', { length: 256 }),
});

export const employeeRelations = relations(employees, ({ one }) => ({
  managers: one(managers, {
    fields: [employees.manager_id],
    references: [managers.id],
  }),
  users: one(users, {
    fields: [employees.id],
    references: [users.id],
  }),
}));
