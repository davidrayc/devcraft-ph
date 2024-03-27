import { db } from '@/db/drizzle/db';
import { item } from '@/db/drizzle/schema/item';
import { format } from 'date-fns';
import type { ItemProps } from './definitions';

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

//INSERT ITEM TO DB
export async function POST(request: Request) {
  const requestItem: ItemProps = await request.json();

  const insertItem = async (itemDetails: ItemProps) => {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'yyyy-MM-dd');

    return db
      .insert(item)
      .values({
        name: itemDetails.name,
        code: itemDetails.code,
        quantity: itemDetails.quantity,
        ageing: formattedDate,
        description: itemDetails.description,
        img_path: itemDetails.img_path,
      })
      .returning();
  };

  const result = await insertItem(requestItem);

  if (result) return Response.json(result);
  return new Response(null, { status: 404 });
}
