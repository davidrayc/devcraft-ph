import { relations } from 'drizzle-orm';
import { date, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';
import { audit_histories } from './audit_histories';

export const items = pgTable('items', {
  id: serial('id').primaryKey().notNull(),
  item_code: varchar('code', { length: 10 }).notNull(),
  item_name: varchar('name', { length: 256 }).notNull(),
  ageing: date('date'),
  description: text('description'),
  img_path: varchar('image_path', { length: 256 }),
});

//RELATIONS
export const itemsRelations = relations(items, ({ many }) => ({
  audit_histories: many(audit_histories),
}));
