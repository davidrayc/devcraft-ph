import { relations } from 'drizzle-orm';
import { pgTable, integer, serial } from 'drizzle-orm/pg-core';
import { managers } from './managers';
import { users } from './users';

export const employees = pgTable('employees', {
  id: serial('id').primaryKey().notNull(),
  userId: integer('user_id').references(() => users.id).notNull(),
  managerId: integer('manager_id').references(() => managers.id),
});

//RELATIONS
export const employeeRelations = relations(employees, ({ one }) => ({
  manager: one(managers, {
    fields: [employees.managerId],
    references: [managers.id],
  }),
  user: one(users, { fields: [employees.userId], references: [users.id] }),
}));
