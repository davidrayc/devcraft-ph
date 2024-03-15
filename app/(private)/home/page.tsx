import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <p className="absolute left-1/2 top-[calc(50%-0.75rem)]">
          Home Page Test
          <Link href="/anotherpage" className="block underline text-blue-600">
            Go to anotherpage
          </Link>
        </p>
      </div>
    </main>
  );
}
