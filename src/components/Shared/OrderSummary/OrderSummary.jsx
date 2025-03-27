"use client";
import React from "react";

function OrderSummary() {
  return (
    <aside className="p-6 mx-auto w-full bg-white rounded-lg border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] max-md:px-5 max-md:mt-6 max-md:max-w-full">
      <div className="max-w-full w-[376px]">
        <h2 className="text-xl font-medium text-zinc-900">Order Summery</h2>

        <div className="mt-3 w-full text-sm max-w-[376px] text-zinc-900">
          <div className="flex gap-10 justify-between items-center w-full">
            <div className="flex gap-1.5 items-center self-stretch my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef6863adebd64a41f93930a39ee605f1fc4d0e4e?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
                alt="Green Capsicum"
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[60px]"
              />
              <span>Green Capsicum</span>
              <span>x5</span>
            </div>
            <span className="self-stretch my-auto font-medium">$70.00</span>
          </div>

          <div className="flex gap-10 justify-between items-center w-full">
            <div className="flex gap-1.5 items-center self-stretch my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ab735ac4a99bc2f56842f33e9e7ac38e353f47d?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
                alt="Red Capsicum"
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[60px]"
              />
              <span>Red Capsicum</span>
              <span>x1</span>
            </div>
            <span className="self-stretch my-auto font-medium">$14.00</span>
          </div>
        </div>

        <div className="mt-3 w-full whitespace-nowrap max-w-[376px]">
          <div className="flex gap-10 justify-between items-center py-3 w-full text-sm bg-white">
            <span className="self-stretch my-auto text-neutral-600">
              Subtotal:
            </span>
            <span className="self-stretch my-auto font-medium text-zinc-900">
              $84.00
            </span>
          </div>
          <hr className="w-full border border-solid bg-neutral-200 border-neutral-200 min-h-px" />

          <div className="flex gap-10 justify-between items-center py-3 w-full text-sm bg-white">
            <span className="self-stretch my-auto text-neutral-600">
              Shipping:
            </span>
            <span className="self-stretch my-auto font-medium text-zinc-900">
              Free
            </span>
          </div>
          <hr className="w-full border border-solid bg-neutral-200 border-neutral-200 min-h-px" />

          <div className="flex gap-10 justify-between items-center pt-3 w-full bg-white">
            <span className="self-stretch my-auto text-base text-neutral-600">
              Total:
            </span>
            <span className="self-stretch my-auto text-lg font-semibold leading-tight text-zinc-900">
              $84.00
            </span>
          </div>
        </div>
      </div>

      <section className="flex flex-col mt-6 max-w-full w-[173px]">
        <h3 className="text-xl font-medium text-zinc-900">Payment Method</h3>
        <div className="flex flex-col items-start self-start mt-4">
          <label className="flex gap-1.5 items-center self-stretch">
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              defaultChecked
              className="w-5 h-5"
            />
            <span className="self-stretch my-auto text-sm text-neutral-600">
              Cash on Delivery
            </span>
          </label>

          <label className="flex gap-1.5 items-center mt-2.5">
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              className="w-5 h-5"
            />
            <span className="self-stretch my-auto text-sm text-neutral-600">
              Paypal
            </span>
          </label>

          <label className="flex gap-1.5 items-center mt-2.5">
            <input
              type="radio"
              name="paymentMethod"
              value="amazon"
              className="w-5 h-5"
            />
            <span className="self-stretch my-auto text-sm text-zinc-900">
              Amazon Pay
            </span>
          </label>
        </div>
      </section>

      <button
        type="submit"
        className="gap-4 self-stretch px-10 py-4 mt-6 max-w-full text-base font-semibold leading-tight text-white bg-red-500 rounded-[43px] w-[376px] max-md:px-5"
      >
        Place Order
      </button>
    </aside>
  );
}

export default OrderSummary;
