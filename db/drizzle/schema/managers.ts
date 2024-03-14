import { relations } from 'drizzle-orm';
import { integer, pgTable, serial } from 'drizzle-orm/pg-core';
import { employees } from './employees';
import { users } from './users';

export const managers = pgTable('managers', {
  id: serial('id').primaryKey().notNull(),
  user_id: integer('user_id')
    .references(() => managers.id)
    .notNull(),
});

//RELATIONS
export const managerRelations = relations(managers, ({ one, many }) => ({
  employees: many(employees),
  users: one(users, { fields: [managers.user_id], references: [users.id] }),
}));
