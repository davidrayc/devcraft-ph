import { relations } from 'drizzle-orm';
import { integer, pgTable, serial } from 'drizzle-orm/pg-core';
import { manager } from './manager';
import { user } from './user';

export const employee = pgTable('employee', {
  id: serial('id').primaryKey().notNull(),
  user_id: integer('user_id')
    .references(() => user.id)
    .notNull(),
  manager_id: integer('manager_id').references(() => manager.id),
});

//RELATIONS
export const employeeRelations = relations(employee, ({ one }) => ({
  manager: one(manager, {
    fields: [employee.manager_id],
    references: [manager.id],
  }),
  user: one(user, { fields: [employee.user_id], references: [user.id] }),
}));
