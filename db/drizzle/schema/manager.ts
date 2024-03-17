import { relations } from 'drizzle-orm';
import { pgTable, integer, serial } from 'drizzle-orm/pg-core';
import { employee } from './employee';
import { user } from './user';

export const manager = pgTable('manager', {
  id: serial('id').primaryKey().notNull(),
  userId: integer('userId').references(() => manager.id).notNull(),
});

//RELATIONS
export const managerRelations = relations(manager, ({ one, many }) => ({
  employees: many(employee),
  user: one(user, { fields: [manager.userId], references: [user.id] }),
}));
