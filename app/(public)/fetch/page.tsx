import fetchUsers from '../../api/fetchUsers';

export default async function FetchPage() {
  const data = await fetchUsers();

  return (
    <main>
      <div>
        <p className="sflex-col absolute left-1/2 top-[calc(50%-0.75rem)] flex text-center">
          {JSON.stringify(data)}
        </p>
      </div>
    </main>
  );
}
