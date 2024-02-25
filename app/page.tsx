'use client';
import { signIn, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function LandingPage() {
  const session = useSession();

  useEffect(() => {
    if (session.status === 'authenticated') redirect('/home');
  }, [session.status]);

  return (
    <main>
      <div>
        <p className="absolute left-1/2 top-[calc(50%-0.75rem)] flex flex-col text-center">
          Landing Page
          <button
            onClick={() => signIn('github')}
            className="block underline text-blue-600"
          >
            Log In
          </button>
        </p>
      </div>
    </main>
  );
}
