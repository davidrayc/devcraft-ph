import { relations } from 'drizzle-orm';
import { integer, pgTable, serial } from 'drizzle-orm/pg-core';
import { user } from './user';

export const admin = pgTable('admin', {
  id: serial('id').primaryKey().notNull(),
  user_id: integer('user_id')
    .references(() => user.id)
    .notNull(),
});

//RELATIONS
export const adminRelations = relations(admin, ({ one }) => ({
  user: one(user, { fields: [admin.user_id], references: [user.id] }),
}));
