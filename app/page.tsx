'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import Login from '../app/components/Login';

export default function LandingPage() {
  const session = useSession();

  useEffect(() => {
    if (session.status === 'authenticated') redirect('/home');
  }, [session.status]);

  return (
    <main>
      <div>
        <Login />
      </div>
    </main>
  );
}
