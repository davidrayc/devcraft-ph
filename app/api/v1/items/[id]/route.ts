import { db } from '@/db/drizzle/db';

// Uncomment if using `select` for querying
// import { items } from '@/db/drizzle/schema/items';
// import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export async function GET(request: Request, { params }: { params: { id: number } }) {
  const id = parseInt(params.id);

  // TODO: consider moving queries into a library

  // Query using select
  // const result = await db.select().from(items).where(eq(items.id, id));

  // Query using findFirst
  const result = await db.query.items.findFirst({
    where: (items, { eq }) => eq(items.id, id),
    with: {
      // Include relation
      // with: {
      //   auditHistories: true,
      // }

      // Include nested relations
      auditHistories: {
        with: {
          // Select all
          // user: true,

          // Exclude column
          user: {
            columns: {
              password: false,
            }
          },
        },
      },
    },
  });

  if (result)
    return Response.json(result);

  return new Response(null, { status: 404 })
}
