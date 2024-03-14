import { relations } from 'drizzle-orm';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { items } from './items';
import { users } from './users';

export const audit_histories = pgTable('audit_histories', {
  id: serial('id').primaryKey().notNull(),
  user_id: varchar('user_id', { length: 256 }).notNull(),
  item_id: varchar('item_id', { length: 256 }).notNull(),
});

//RELATIONS
export const auditHistoriesRelations = relations(
  audit_histories,
  ({ one }) => ({
    user: one(users, {
      fields: [audit_histories.user_id],
      references: [users.id],
    }),
    item: one(items, {
      fields: [audit_histories.item_id],
      references: [items.id],
    }),
  }),
);
