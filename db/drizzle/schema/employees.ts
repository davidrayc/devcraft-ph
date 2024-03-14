import { relations } from 'drizzle-orm';
import { integer, pgTable, serial } from 'drizzle-orm/pg-core';
import { managers } from './managers';
import { users } from './users';

export const employees = pgTable('employees', {
  id: serial('id').primaryKey().notNull(),
  user_id: integer('user_id')
    .references(() => users.id)
    .notNull(),
  manager_id: integer('manager_id').references(() => managers.id),
});

//RELATIONS
export const employeeRelations = relations(employees, ({ one }) => ({
  managers: one(managers, {
    fields: [employees.manager_id],
    references: [managers.id],
  }),
  users: one(users, { fields: [employees.user_id], references: [users.id] }),
}));
