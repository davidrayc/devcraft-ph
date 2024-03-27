import { db } from '@/db/drizzle/db';
export const dynamic = 'force-dynamic';

//FETCH ALL ITEMS FROM DB
export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '1');
  const pageLimit = 10;

  const result = await db.query.item.findMany({
    orderBy: (item, { asc }) => asc(item.id),
    limit: pageLimit,
    offset: (page - 1) * pageLimit,
  });

  if (result) return Response.json(result);
  return new Response(null, { status: 404 });
}
