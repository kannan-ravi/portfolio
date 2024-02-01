import React from "react";

const Login = () => {
  return (
    <main className="scroll-smooth">
      <div className="font-sans bg-darkblue text-slate-300 selection:bg-cyan-500 selection:text-black">
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
          <div className="px-8 py-12 rounded bg-slate-300">
            <div className="flex items-end gap-2 mb-6">
              <h2 className="text-3xl font-bold text-darkblue contact-heading">
                Login
              </h2>
              <p className="text-xs text-darkblue">Admin Only</p>
            </div>
            <form className="grid gap-4 contact-form">
              <input
                className="px-4 py-2 bg-transparent border rounded-md text-lightblue border-lightblue placeholder:text-lightblue"
                placeholder="Username"
                type="text"
                required
                autoFocus
              />
              <input
                className="px-4 py-2 bg-transparent border rounded-md text-lightblue border-lightblue placeholder:text-lightblue"
                placeholder="Email"
                type="email"
                required
              />
              <input
                className="px-4 py-2 bg-transparent border rounded-md text-lightblue border-lightblue placeholder:text-lightblue"
                placeholder="Password"
                type="password"
                required
              />

              <button
                className="px-4 py-2 text-white duration-200 rounded-md bg-lightblue hover:opacity-85"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
