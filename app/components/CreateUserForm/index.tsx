import { useForm } from 'react-hook-form';
import type { Inputs } from './definition';

export default function CreateUserForm() {
  const form = useForm<Inputs>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  function onSubmit(data: Inputs) {
    console.log(data);
    reset();
  }

  return (
    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Create user
      </h3>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  id="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('password', {
                    required: true,
                  })}
                />
                {errors.password && (
                  <span className="text-red-600">Password is required</span>
                )}
              </div>
            </div>
            <div className="col-span-full bg-gray-50  py-3 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                className="block w-full  rounded-full bg-blue-500 px-4 py-2 font-bold capitalize text-white hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
