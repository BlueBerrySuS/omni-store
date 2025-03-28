"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignInBox() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="mx-auto w-full max-w-none min-h-screen bg-white max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <main className="flex justify-center items-center px-0 py-12 bg-white">
        <div className="px-6 pt-6 pb-8 bg-white rounded-lg border border-solid border-zinc-100 shadow-[0_0_56px_rgba(0,38,3,0.08)] w-[520px] max-sm:mx-5 max-sm:my-0 max-sm:w-[90%]">
          <h1 className="mb-5 text-3xl font-semibold text-center text-zinc-900">
            Sign In
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="px-4 py-3.5 w-full text-base rounded-md border border-solid border-neutral-200 focus:outline-none focus:border-red-500"
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="px-4 py-3.5 w-full text-base rounded-md border border-solid border-neutral-200 focus:outline-none focus:border-red-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <path
                    d="M1.66663 10.5003C1.66663 10.5003 4.69663 4.66699 9.99996 4.66699C15.3033 4.66699 18.3333 10.5003 18.3333 10.5003C18.3333 10.5003 15.3033 16.3337 9.99996 16.3337C4.69663 16.3337 1.66663 10.5003 1.66663 10.5003Z"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 13C10.663 13 11.2989 12.7366 11.7678 12.2678C12.2366 11.7989 12.5 11.163 12.5 10.5C12.5 9.83696 12.2366 9.20107 11.7678 8.73223C11.2989 8.26339 10.663 8 10 8C9.33696 8 8.70107 8.26339 8.23223 8.73223C7.76339 9.20107 7.5 9.83696 7.5 10.5C7.5 11.163 7.76339 11.7989 8.23223 12.2678C8.70107 12.7366 9.33696 13 10 13Z"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-1.5 items-center text-sm text-stone-500">
                <input
                  type="checkbox"
                  id="remember"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="cursor-pointer"
                />
                <label htmlFor="remember" className="cursor-pointer">
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm no-underline text-stone-500 hover:text-red-500 transition-colors"
              >
                Forget Password
              </a>
            </div>
            <button
              type="submit"
              className="px-8 py-3.5 mt-5 font-semibold text-white bg-red-500 cursor-pointer border-none rounded-[43px] hover:bg-red-600 transition-colors"
            >
              Login
            </button>
            <div className="mt-5 text-sm text-center text-stone-500">
              <span>Don't have account? </span>
              <Link to="/register"
                className="font-medium no-underline text-zinc-900 hover:text-red-500 transition-colors"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
