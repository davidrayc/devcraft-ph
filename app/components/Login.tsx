const Login = () => {
 
  return (
    <div className="flex flex-col space-y-4 items-center justify-center h-screen bg-gray-200">  
      <h1 className="text-xl font-bold text-center">Logo</h1>
      <form className="flex flex-col">
        <div className="flex justify-between mt-4">
          <label htmlFor="email" className="pr-4 py-2">Email Address</label>
          <input 
            type="text" 
            id="email"
            name="email"
            className="p-2 rounded-md"
            />
        </div>
        <div className="flex justify-between mt-4">
          <label htmlFor="password" className="pr-4 py-2">Password</label>
          <input
            type="text" 
            id="password"
            name="password"
            className="p-2 rounded-md"
            />
        </div>
        <button type="submit" className="mt-10 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md self-center">  
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
