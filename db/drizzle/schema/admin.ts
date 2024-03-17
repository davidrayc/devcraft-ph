import { relations } from 'drizzle-orm';
import { pgTable, integer, serial } from 'drizzle-orm/pg-core';
import { user } from './user';

export const admin = pgTable('admin', {
  id: serial('id').primaryKey().notNull(),
  userId: integer('userId')
    .references(() => user.id)
    .notNull(),
});

//RELATIONS
export const adminRelations = relations(admin, ({ one }) => ({
  user: one(user, { fields: [admin.userId], references: [user.id] }),
}));
