import { Button as CreateUserBtn } from '@/app/components/Button';

import Modal from '@/app/components/Modal';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="container mx-auto p-10">
        <CreateUserBtn
          elTag="linkTag"
          title="crate a user"
          btnStyles="rounded-full bg-blue-500 px-4 py-2 font-bold capitalize text-white hover:bg-blue-700"
        />
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
