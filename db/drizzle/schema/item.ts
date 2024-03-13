import { date, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const item = pgTable('item', {
  id: serial('id').primaryKey(),
  item_code: varchar('item_code', { length: 10 }),
  item_name: varchar('item_name', { length: 256 }),
  ageing: date('date'),
  description: text('description'),
  img_path: varchar('img_path', { length: 256 }),
});
