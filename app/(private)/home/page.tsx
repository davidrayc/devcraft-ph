import CreateUser from '@/app/components/CreateUser';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="container mx-auto p-10">
        <CreateUser
          title="create user"
          uiClass="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 capitalize"
        />
      </div>

      <div>
        <p className="absolute left-1/2 top-[calc(50%-0.75rem)]">
          Home Page
          <Link href="/anotherpage" className="block text-blue-600 underline">
            Go to anotherpage
          </Link>
        </p>
      </div>
    </main>
  );
}
