import { relations } from 'drizzle-orm';
import { pgTable, serial, integer } from 'drizzle-orm/pg-core';
import { items } from './items';
import { users } from './users';

export const auditHistories = pgTable('audit_histories', {
  id: serial('id').primaryKey().notNull(),
  user_id: varchar('user_id', { length: 256 }).notNull(),
  item_id: varchar('item_id', { length: 256 }).notNull(),
});

//RELATIONS
export const auditHistoryRelations = relations(auditHistories, ({ one }) => ({
  user: one(users, {
    fields: [auditHistories.userId],
    references: [users.id],
  }),
  item: one(items, {
    fields: [auditHistories.itemId],
    references: [items.id],
  }),
}));
