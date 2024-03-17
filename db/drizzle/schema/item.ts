import { relations } from 'drizzle-orm';
import { pgTable, date, serial, text, varchar } from 'drizzle-orm/pg-core';
import { auditHistory } from './audit-history';

export const item = pgTable('item', {
  id: serial('id').primaryKey().notNull(),
  code: varchar('code', { length: 10 }).notNull(),
  name: varchar('name', { length: 256 }).notNull(),
  ageing: date('date'),
  description: text('description'),
  imagePath: varchar('imagePath', { length: 256 }),
});

//RELATIONS
export const itemRelations = relations(item, ({ many }) => ({
  auditHistory: many(auditHistory),
}));
