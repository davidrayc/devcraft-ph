import { relations } from 'drizzle-orm';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { managers } from './managers';
import { users } from './users';

export const audit_histories = pgTable('audit_histories', {
  id: serial('id').primaryKey(),
  user_id: varchar('user_id', { length: 256 }),
  item_id: varchar('manager_id', { length: 256 }),
});

// export const employeeRelations = relations(employee, ({ one }) => ({
//   manager: one(manager, {
//     fields: [employee.manager_id],
//     references: [manager.id],
//   }),
//   users: one(users, {
//     fields: [employee.id],
//     references: [users.id],
//   }),
// }));
