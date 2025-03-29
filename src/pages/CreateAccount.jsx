"use client";
import React from "react";
import CreateAccountForm from "../components/Shared/CreateAccountForm/CreateAccountForm";
import Newsletter from "../components/Shared/Newsletter/Newsletter";

const CreateAccount = () => {
  return (
    <main className="flex overflow-hidden flex-col bg-white">

      <section className="flex relative flex-col justify-center items-start px-16 py-12 w-full text-base min-h-[120px] max-md:px-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/05a6720d86820dd0bdccb350dd73ba89d91705ac?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
          alt="Background pattern"
          className="object-cover absolute inset-0 size-full"
        />
        <nav
          className="flex relative gap-3 items-center"
          aria-label="breadcrumb"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8740e3127fa48f81b0fd6105a608ff4bbfcc8918?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/199d9b70808ae1852c60d18aa5b954d6ee0992cf?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-1 aspect-[0.5] stroke-[1px] stroke-neutral-400"
          />
          <span className="self-stretch my-auto text-neutral-400">Account</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/895c38812123f8b4437032f639ed985dbff6e043?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-1 aspect-[0.5] stroke-[1px] stroke-zinc-500"
          />
          <span className="self-stretch my-auto text-red-500">
            Create Account
          </span>
        </nav>
      </section>

      <CreateAccountForm />
      <Newsletter />
    </main>
  );
};

export default CreateAccount;
