import { date, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const items = pgTable('items', {
  id: serial('id').primaryKey(),
  item_code: varchar('code', { length: 10 }),
  item_name: varchar('name', { length: 256 }),
  ageing: date('date'),
  description: text('description'),
  img_path: varchar('image_path', { length: 256 }),
});
