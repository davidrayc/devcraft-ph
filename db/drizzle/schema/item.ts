import { relations } from 'drizzle-orm';
import { date, integer, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';
import { audit_history } from './audit_history';

export const item = pgTable('item', {
  id: serial('id').primaryKey().notNull(),
  item_code: varchar('code', { length: 10 }).notNull(),
  item_name: varchar('name', { length: 256 }).notNull(),
  quantity: integer('quantity'),
  ageing: date('date'),
  description: text('description'),
  img_path: varchar('image_path', { length: 256 }),
});

//RELATIONS
export const itemRelations = relations(item, ({ many }) => ({
  audit_history: many(audit_history),
}));
