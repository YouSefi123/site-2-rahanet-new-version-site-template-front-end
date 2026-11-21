import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col items-center">
      {/* title */}
      <div className="font-bold text-3xl">
        <h1>Login to your account</h1>
      </div>
      {/* register form */}
      <div className="">
        <form action="#">
          <div className="flex flex-col max-w-max">
            <span>
              <label htmlFor="email">Email address</label>
            </span>
            <span>
              <input
                className="border rounded-sm border-[#59168B]"
                type="email"
                name="email"
              />
            </span>
          </div>

          <div className="">
            <span>
              <label htmlFor="password">Password</label>
            </span>
            <span>
              <a href="#">Forgot password</a>
            </span>
          </div>
          <input type="password" name="password" />
          <button>Sign in</button>
        </form>
        <div className="">
          <p className="flex flex-col">
            <span>Don`t have an account?</span>
            <span>
              <a href="#" className="bg-[#59168B] text-white">
                Sign up
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
