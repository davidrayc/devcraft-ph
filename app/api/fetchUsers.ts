import { db } from '@/db/drizzle/db';
import { user } from '@/db/drizzle/schema/user';

export default async function fetchUsers() {
  const result = await db.select().from(user);
  return result;
}
