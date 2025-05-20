'use client';

const SigninPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 font-roboto">
      <div className="p-6 rounded-2xl bg-white shadow-lg max-w-md w-full">
        <h1 className="text-center mb-6 text-2xl font-bold text-gray-800">
          Welcome Back
        </h1>
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-bold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 rounded-md border border-gray-300 text-base text-black"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-bold text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full p-3 rounded-md border border-gray-300 text-base text-black"
            />
          </div>
          <div className="mb-6 flex items-center">
            <input type="checkbox" name="remember" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-700">
              Remember Me
            </label>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md font-bold text-base hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
