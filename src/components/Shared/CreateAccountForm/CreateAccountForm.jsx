"use client";
import { useState } from "react";
import { Link } from "react-router-dom";

const CreateAccountForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="flex justify-center items-center px-6 mt-20 max-md:mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center px-6 pt-6 pb-8 max-w-full bg-white rounded-lg border border-solid shadow-2xl border-[color:var(--Gray-Scale-Gray-50,#F2F2F2)] w-[520px] max-md:px-5"
      >
        <h1 className="text-3xl font-semibold leading-tight text-zinc-900">
          Create Account
        </h1>

        <div className="flex flex-col mt-5 w-full max-w-[472px] max-md:max-w-full">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3.5 w-full text-base leading-tight bg-white rounded-md border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)]"
          />

          <div className="relative mt-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="px-4 py-3.5 w-full text-base leading-tight bg-white rounded-md border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/db70f6e461c91e81cdb4bd80b71502c932b16ccd?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
                alt={showPassword ? "Hide password" : "Show password"}
                className="w-5 h-5"
              />
            </button>
          </div>

          <div className="relative mt-3">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="px-4 py-3.5 w-full text-base leading-tight bg-white rounded-md border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)]"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/db70f6e461c91e81cdb4bd80b71502c932b16ccd?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
                alt={showConfirmPassword ? "Hide password" : "Show password"}
                className="w-5 h-5"
              />
            </button>
          </div>

          <label className="flex gap-1.5 items-start mt-4 cursor-pointer">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="w-5 h-5 rounded border border-solid border-[color:var(--Gray-Scale-Gray-200,#CCC)]"
            />
            <span className="text-sm text-stone-500">
              Accept all terms & Conditions
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full px-8 py-3.5 mt-5 text-sm font-semibold leading-tight text-white bg-red-500 rounded-[43px] max-md:px-5"
        >
          Create Account
        </button>

        <p className="flex items-start pt-1 mt-5 text-sm">
          <span className="text-stone-500">Already have account</span>
          <Link to="/signin" className="font-medium text-zinc-900">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
};

export default CreateAccountForm;
