"use client";
import React from "react";

function CheckoutForm() {
  return (
    <form className="grow max-md:mt-6 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className=" max-md:ml-0 max-md:w-full">
          <div className="z-10 grow mr-0 max-md:max-w-full">
            <div className="flex flex-col w-full max-w-[872px] max-md:max-w-full">
              <h2 className="self-start text-2xl font-medium text-zinc-900">
                Billing Information
              </h2>

              <div className="flex gap-4 mt-5">
                <div className="flex-1">
                  <label className="text-sm text-zinc-900" htmlFor="firstName">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Your first name"
                    className="px-4 py-3.5 mt-2 max-w-full text-base leading-tight bg-white rounded-md border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] text-neutral-400 w-[280px] max-md:pr-5"
                  />
                </div>

                <div className="flex-1">
                  <label className="text-sm text-zinc-900" htmlFor="lastName">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Your last name"
                    className="px-4 py-3.5 mt-2 max-w-full text-base leading-tight bg-white rounded-md border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] text-neutral-400 w-[280px] max-md:pr-5"
                  />
                </div>

                <div className="flex-1">
                  <label
                    className="text-sm text-zinc-900"
                    htmlFor="companyName"
                  >
                    Company Name{" "}
                    <span className="text-gray-500">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    placeholder="Company name"
                    className="px-4 py-3.5 mt-2 max-w-full text-base leading-tight bg-white rounded-md border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] text-neutral-400 w-[280px] max-md:pr-5"
                  />
                </div>
              </div>

              <div className="mt-4 max-md:max-w-full">
                <label
                  className="text-sm text-zinc-900"
                  htmlFor="streetAddress"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  placeholder="Street address"
                  className="px-4 py-3.5 mt-2 w-full text-base leading-tight whitespace-nowrap bg-white rounded-md border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] text-neutral-400 max-md:pr-5"
                />
              </div>

              <div className="flex flex-wrap gap-4 self-start mt-4">
                <div className="grow shrink-0 w-fit">
                  <label className="text-sm text-zinc-900" htmlFor="country">
                    Country / Region
                  </label>
                  <select
                    id="country"
                    className="flex gap-2.5 items-center px-4 py-3.5 mt-2 text-base leading-tight whitespace-nowrap bg-white rounded-md border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] text-neutral-400"
                  >
                    <option value="">Select</option>
                  </select>
                </div>

                <div className="grow shrink-0 whitespace-nowrap basis-0 w-fit">
                  <label className="text-sm text-zinc-900" htmlFor="state">
                    States
                  </label>
                  <select
                    id="state"
                    className="flex gap-2.5 items-center px-4 py-3.5 mt-2 text-base leading-tight bg-white rounded-md border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] text-neutral-400"
                  >
                    <option value="">Select</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col w-full max-md:mt-4 max-md:max-w-full">
                      <div className="max-md:max-w-full">
                        <label
                          className="text-sm text-zinc-900"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Email Address"
                          className="px-4 py-3.5 mt-2 max-w-full text-base leading-tight bg-white rounded-md border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] text-neutral-400 w-[428px] max-md:pr-5"
                        />
                      </div>

                      <label className="flex gap-1.5 items-center self-start mt-5">
                        <input
                          type="checkbox"
                          className="w-5 h-5 bg-white rounded border border-solid border-[color:var(--Gray-Scale-Gray-200,#CCC)]"
                        />
                        <span className="self-stretch my-auto text-sm text-neutral-600">
                          Ship to a different address
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="max-md:mt-4 max-md:max-w-full">
                      <label className="text-sm text-zinc-900" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Phone number"
                        className="px-4 py-3.5 mt-2 max-w-full text-base leading-tight bg-white rounded-md border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] text-neutral-400 w-[428px] max-md:pr-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="mt-8 max-w-full min-h-0 border border-solid bg-neutral-200 border-neutral-200 w-[872px]" />

            <div className="mt-8 max-w-full w-[872px]">
              <h2 className="text-2xl font-medium text-zinc-900">
                Additional Info
              </h2>
              <div className="mt-5 w-full">
                <label className="text-sm text-zinc-900" htmlFor="orderNotes">
                  Order Notes (Optional)
                </label>
                <textarea
                  id="orderNotes"
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  className="px-4 pt-3.5 pb-16 mt-2 w-full text-base leading-tight bg-white rounded-md border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] text-neutral-400 max-md:pr-5 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </form>
  );
}

export default CheckoutForm;
