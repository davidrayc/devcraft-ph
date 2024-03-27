import { db } from '@/db/drizzle/db';
import { item } from '@/db/drizzle/schema/item';
import { format } from 'date-fns';
import { eq } from 'drizzle-orm';
import type { ItemProps } from '../definitions';

export const dynamic = 'force-dynamic';

//FETCH ITEM FROM DB BY ID
export async function GET(
  request: Request,
  { params }: { params: { id: number } },
) {
  const id = params.id;

  const result = await db.query.item.findFirst({
    where: (item, { eq }) => eq(item.id, id),
    with: {
      auditHistories: {
        with: {
          user: true,
          item: true,
        },
      },
    },
  });

  if (result) return Response.json(result);
  return new Response(null, { status: 404 });
}

//UPDATE ITEM FROM DB BY ID
export async function PUT(
  request: Request,
  { params }: { params: { id: number } },
) {
  const id = params.id;
  const requestItem: ItemProps = await request.json();

  const updateItem = async (itemDetails: ItemProps) => {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'yyyy-MM-dd');

    return db
      .update(item)
      .set({
        name: itemDetails.name,
        code: itemDetails.code,
        quantity: itemDetails.quantity,
        ageing: formattedDate,
        description: itemDetails.description,
        img_path: itemDetails.img_path,
      })
      .where(eq(item.id, id))
      .returning();
  };

  const result = await updateItem(requestItem);

  if (result) return Response.json(result);
  return new Response(null, { status: 404 });
}

//DELETE ITEM FROM DB BY ID
export async function DELETE(
  request: Request,
  { params }: { params: { id: number } },
) {
  const id = params.id;

  const result = await db.delete(item).where(eq(item.id, id));

  if (result) return Response.json(result);
  return new Response(null, { status: 404 });
}
