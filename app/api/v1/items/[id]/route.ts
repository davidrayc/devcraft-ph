import { db } from '@/db/drizzle/db';
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
