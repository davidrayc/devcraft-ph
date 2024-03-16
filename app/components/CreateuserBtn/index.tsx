import Link from 'next/link';

export default function CreateuserBtn() {
  return (
    <>
      <Link href="?createuser=true">
        <button className="rounded-full bg-blue-500 px-4 py-2 font-bold capitalize text-white hover:bg-blue-700">
          Create User
        </button>
      </Link>
    </>
  );
}
