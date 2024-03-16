import { relations } from 'drizzle-orm';
import { integer, pgTable, serial } from 'drizzle-orm/pg-core';
import { employee } from './employee';
import { user } from './user';

export const manager = pgTable('manager', {
  id: serial('id').primaryKey().notNull(),
  user_id: integer('user_id')
    .references(() => manager.id)
    .notNull(),
});

//RELATIONS
export const managerRelations = relations(manager, ({ one, many }) => ({
  employee: many(employee),
  user: one(user, { fields: [manager.user_id], references: [user.id] }),
}));
