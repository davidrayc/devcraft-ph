import { relations } from 'drizzle-orm';
import { date, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';
import { audit_history } from './audit_history';

export const item = pgTable('item', {
  id: serial('id').primaryKey().notNull(),
  code: varchar('code', { length: 10 }).notNull(),
  name: varchar('name', { length: 256 }).notNull(),
  quantity: varchar('quantity', { length: 10 }).notNull(),
  ageing: date('date'),
  description: text('description'),
  img_path: varchar('image_path', { length: 256 }),
});

//RELATIONS
export const itemRelations = relations(item, ({ many }) => ({
  audit_history: many(audit_history),
}));
