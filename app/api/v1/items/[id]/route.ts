import { db } from '@/db/drizzle/db';

// Uncomment if using `select` for querying
// import { item } from '@/db/drizzle/schema/item';
// import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export async function GET(request: Request, { params }: { params: { id: number } }) {
  const id = parseInt(params.id);

  // TODO: consider moving queries into a library

  // Query using select
  // const result = await db.select().from(item).where(eq(item.id, id));

  // Query using findFirst
  const result = await db.query.item.findFirst({
    where: (item, { eq }) => eq(item.id, id),
    with: {
      // Include relation
      // with: {
      //   auditHistory: true,
      // }

      // Include nested relations
      auditHistory: {
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
