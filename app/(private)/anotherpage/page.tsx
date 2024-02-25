import Link from 'next/link';

export default function AnotherPage() {
  return (
    <main>
      <div>
        <p className="absolute left-1/2 top-[calc(50%-0.75rem)]">
          Another Page
          <Link href="/home" className="block underline text-blue-600">
            Go to Home
          </Link>
        </p>
      </div>
    </main>
  );
}
