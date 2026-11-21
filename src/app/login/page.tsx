import React from "react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-between p-12 bg-linear-to-br from-[#59168B] to-[#35105C] text-white">
          <div>
            <h2 className="text-3xl font-bold">Welcome Back!</h2>

            <p className="mt-4 text-purple-200 leading-7">
              Sign in to access your account and continue your journey with us.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-16 h-1 bg-white/70 rounded-full"></div>

            <p className="text-sm text-purple-200">Your journey starts here.</p>
          </div>

          <div className="text-xs text-purple-300">
            © 2026 Your Company. All rights reserved.
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center p-8 sm:p-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Login to your account
            </h1>

            <p className="mt-2 text-gray-500 text-sm">
              Welcome back! Please enter your details.
            </p>
          </div>

          {/* Form */}
          <form action="#" className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="example@email.com"
                autoComplete="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none transition-all focus:border-[#59168B] focus:ring-4 focus:ring-purple-100 placeholder:text-gray-400"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <Link
                  href="#"
                  className="text-sm font-medium text-[#59168B] hover:text-purple-800 transition"
                >
                  Forgot password?
                </Link>
              </div>

              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none transition-all focus:border-[#59168B] focus:ring-4 focus:ring-purple-100 placeholder:text-gray-400"
              />
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 accent-[#59168B] cursor-pointer"
              />

              <label
                htmlFor="remember"
                className="text-sm text-gray-600 cursor-pointer"
              >
                Remember me
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#59168B] hover:bg-[#46116F] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-purple-200 hover:shadow-purple-300"
            >
              Sign in
            </button>
          </form>

          {/* Register */}
          <div className="mt-8 text-center text-sm text-gray-500">
            Don`t have an account?
            <Link
              href="/register"
              className="ml-1 font-semibold text-[#59168B] hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
