import CreateuserBtn from '@/app/components/CreateuserBtn';
import Modal from '@/app/components/Modal';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="container mx-auto p-10">
        <CreateuserBtn />
        <Modal />
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
