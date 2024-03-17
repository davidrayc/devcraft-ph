import { relations } from 'drizzle-orm';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { item } from './item';
import { user } from './user';

export const audit_history = pgTable('audit_history', {
  id: serial('id').primaryKey().notNull(),
  user_id: varchar('user_id', { length: 256 }).notNull(),
  item_id: varchar('item_id', { length: 256 }).notNull(),
});

//RELATIONS
export const auditHistoryRelations = relations(audit_history, ({ one }) => ({
  user: one(user, {
    fields: [audit_history.user_id],
    references: [user.id],
  }),
  item: one(item, {
    fields: [audit_history.item_id],
    references: [item.id],
  }),
}));
