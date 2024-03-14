const UserModal = () => {
  return (
    <div className="modal mx-auto mt-36 flex h-1/2 w-1/4 flex-col items-center space-y-2">
      <div className="flex w-full justify-between">
        <label htmlFor="Email" className="py-2 pr-4">
          Email
        </label>
        <input type="email" id="Email" className="border p-2" />
      </div>
      <div className="flex w-full justify-between">
        <label htmlFor="First-Name" className="py-2 pr-4">
          First Name
        </label>
        <input type="text" id="First-Name" className="border p-2" />
      </div>
      <div className="flex w-full justify-between">
        <label htmlFor="Last-Name">Last Name</label>
        <input type="text" id="Last-Name" className="border p-2" />
      </div>
      <div className="flex w-full justify-between">
        <label htmlFor="Password">Password</label>
        <input type="password" id="Password" className="border p-2" />
      </div>
      <div className="flex w-full justify-between">
        <label htmlFor="Confirm-Password">Confirm Password</label>
        <input type="password" id="Confirm-Password" className="border p-2" />
      </div>
      <div className="mt-2 flex w-full justify-center">
        <button className="mr-8 w-40 rounded bg-blue-500 p-2 text-white">
          Save
        </button>
        <button className="ml-8 w-40 rounded bg-red-500 p-2 text-white">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UserModal;
