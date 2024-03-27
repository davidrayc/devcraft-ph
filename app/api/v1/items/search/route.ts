import { db } from '@/db/drizzle/db';
import { item } from '@/db/drizzle/schema/item';
import { eq, ilike, or } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

// //FETCH ALL ITEMS FROM DB
export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q') || '';
  const qNumber = parseInt(q);
  const isNumber = !isNaN(qNumber);

  const result = await db
    .select()
    .from(item)
    .where(
      isNumber
        ? or(
            eq(item.id, qNumber),
            eq(item.quantity, qNumber),
            ilike(item.name, '%' + q + '%'),
            ilike(item.code, '%' + q + '%'),
            ilike(item.description, '%' + q + '%'),
            ilike(item.img_path, '%' + q + '%'),
          )
        : or(
            ilike(item.name, '%' + q + '%'),
            ilike(item.code, '%' + q + '%'),
            ilike(item.description, '%' + q + '%'),
            ilike(item.img_path, '%' + q + '%'),
          ),
    );

  if (result) return Response.json(result);
  return new Response(null, { status: 404 });
}
