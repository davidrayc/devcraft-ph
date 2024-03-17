import { relations } from 'drizzle-orm';
import { pgTable, integer, serial } from 'drizzle-orm/pg-core';
import { users } from './users';

export const admins = pgTable('admins', {
  id: serial('id').primaryKey().notNull(),
  userId: integer('user_id')
    .references(() => users.id)
    .notNull(),
});

//RELATIONS
export const adminRelations = relations(admins, ({ one }) => ({
  user: one(users, { fields: [admins.userId], references: [users.id] }),
}));
