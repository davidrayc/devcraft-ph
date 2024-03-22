import { relations } from 'drizzle-orm';
import { pgTable, integer, serial } from 'drizzle-orm/pg-core';
import { manager } from './manager';
import { user } from './user';

export const employee = pgTable('employee', {
  id: serial('id').primaryKey().notNull(),
  userId: integer('userId').references(() => user.id).notNull(),
  managerId: integer('managerId').references(() => manager.id),
});

//RELATIONS
export const employeeRelations = relations(employee, ({ one }) => ({
  manager: one(manager, {
    fields: [employee.managerId],
    references: [manager.id],
  }),
  user: one(user, { fields: [employee.userId], references: [user.id] }),
}));
