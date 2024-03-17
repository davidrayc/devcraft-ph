import { relations } from 'drizzle-orm';
import { pgTable, integer, serial } from 'drizzle-orm/pg-core';
import { employees } from './employees';
import { users } from './users';

export const managers = pgTable('managers', {
  id: serial('id').primaryKey().notNull(),
  userId: integer('user_id').references(() => managers.id).notNull(),
});

//RELATIONS
export const managerRelations = relations(managers, ({ one, many }) => ({
  employees: many(employees),
  user: one(users, { fields: [managers.userId], references: [users.id] }),
}));
