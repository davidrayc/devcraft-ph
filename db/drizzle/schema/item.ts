import { relations } from 'drizzle-orm';
import { date, integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { auditHistory } from './audit-history';

export const item = pgTable('item', {
  id: serial('id').primaryKey().notNull(),
  code: varchar('code', { length: 10 }).notNull(),
  name: varchar('name', { length: 256 }).notNull(),
  quantity: integer('quantity').notNull(),
  ageing: date('date'),
  description: varchar('description', { length: 256 }),
  img_path: varchar('imagePath', { length: 256 }),
});

//RELATIONS
export const itemRelations = relations(item, ({ many }) => ({
  auditHistories: many(auditHistory),
}));
