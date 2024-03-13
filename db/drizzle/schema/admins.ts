import { relations } from 'drizzle-orm';
import { integer, pgTable, serial } from 'drizzle-orm/pg-core';
import { users } from './users';

export const admins = pgTable('admins', {
  id: serial('id').primaryKey(),
  user_id: integer('user_id').references(() => users.id),
});

export const adminRelations = relations(admins, ({ one }) => ({
  users: one(users, { fields: [admins.user_id], references: [users.id] }),
}));
