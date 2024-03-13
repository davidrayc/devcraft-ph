import { relations } from 'drizzle-orm';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { users } from './users';

export const admins = pgTable('admins', {
  id: serial('id').primaryKey(),
  user_id: varchar('user_id', { length: 256 }),
});

export const adminRelations = relations(admins, ({ one }) => ({
  users: one(users, {
    fields: [admins.id],
    references: [users.id],
  }),
}));
