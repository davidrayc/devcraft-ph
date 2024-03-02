// 'use client';
// import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  // const session = useSession();

  if (!session) redirect('/');

    return (
        <>
            {/* I ASSUME THIS IS DECLARE BEFORE THE CHILDREN PROP */}
            {/* <Nav/> */}
            {children}
        </>
    );
}
