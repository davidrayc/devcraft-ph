import { relations } from 'drizzle-orm';
import { pgTable, date, serial, text, varchar } from 'drizzle-orm/pg-core';
import { auditHistories } from './audit-histories';

export const items = pgTable('items', {
  id: serial('id').primaryKey().notNull(),
  code: varchar('code', { length: 10 }).notNull(),
  name: varchar('name', { length: 256 }).notNull(),
  ageing: date('date'),
  description: text('description'),
  imagePath: varchar('image_path', { length: 256 }),
});

//RELATIONS
export const itemRelations = relations(items, ({ many }) => ({
  auditHistories: many(auditHistories),
}));
