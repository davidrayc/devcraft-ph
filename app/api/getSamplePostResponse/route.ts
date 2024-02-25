import { type NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  return Response.json({ message: JSON.stringify(await request.json()) });
}
