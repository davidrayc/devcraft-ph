import { relations } from 'drizzle-orm';
import { integer, pgTable, serial } from 'drizzle-orm/pg-core';
import { item } from './item';
import { user } from './user';

export const auditHistory = pgTable('auditHistory', {
  id: serial('id').primaryKey().notNull(),
  userId: integer('userId').notNull(),
  itemId: integer('itemId').notNull(),
});

//RELATIONS
export const auditHistoryRelations = relations(auditHistory, ({ one }) => ({
  user: one(user, {
    fields: [auditHistory.userId],
    references: [user.id],
  }),
  item: one(item, {
    fields: [auditHistory.itemId],
    references: [item.id],
  }),
}));
