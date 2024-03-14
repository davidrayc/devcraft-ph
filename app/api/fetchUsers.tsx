import { db } from '@/db/drizzle/db';
import { users } from '@/db/drizzle/schema/users';

export default async function fetchUsers() {
  const result = await db.select().from(users);
  return result;
}
