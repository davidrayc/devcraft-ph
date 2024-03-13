import { relations } from 'drizzle-orm';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { employees } from './employees';
import { users } from './users';

export const manager = pgTable('managers', {
  id: serial('id').primaryKey(),
  user_id: varchar('user_id', { length: 256 }),
});

//ONE-TO-MANY RELATIONS
export const managerRelations = relations(managers, ({ one, many }) => ({
  employees: many(employees),
  users: one(users, {
    fields: [managers.id],
    references: [users.id],
  }),
}));
