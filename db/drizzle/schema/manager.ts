import { relations } from 'drizzle-orm';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { employee } from './employee';
import { users } from './users';

export const manager = pgTable('manager', {
  id: serial('id').primaryKey(),
  user_id: varchar('user_id', { length: 256 }),
});

//ONE-TO-MANY RELATIONS
export const managerRelations = relations(manager, ({ one, many }) => ({
  employee: many(employee),
  users: one(users, {
    fields: [manager.id],
    references: [users.id],
  }),
}));
