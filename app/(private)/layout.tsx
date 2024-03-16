// 'use client';
// import { getServerSession } from 'next-auth';
// import { redirect } from 'next/navigation';

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getServerSession();
  // const session = useSession();

  // if (!session) redirect('/');

  return <>{children}</>;
}
