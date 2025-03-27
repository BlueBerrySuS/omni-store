"use client";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";

export default function CartSummary() {
  const { getSubtotal } = useCart();
  const subtotal = getSubtotal();

  return (
    <section className="flex flex-col p-6 mx-auto w-full text-sm bg-white rounded-lg border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] max-md:px-5 max-md:mt-6 max-md:max-w-full">
      <h2 className="self-start text-xl font-medium text-zinc-900">
        Cart Total
      </h2>
      <div className="flex gap-10 justify-between items-center py-3 mt-2 whitespace-nowrap bg-white shadow-sm">
        <p className="self-stretch my-auto text-neutral-600">Subtotal:</p>
        <p className="self-stretch my-auto font-medium text-zinc-900">
          ${subtotal.toFixed(2)}
        </p>
      </div>
      <div className="flex gap-10 justify-between items-center py-3 whitespace-nowrap bg-white shadow-sm">
        <p className="self-stretch my-auto text-neutral-600">Shipping:</p>
        <p className="self-stretch my-auto font-medium text-zinc-900">Free</p>
      </div>
      <div className="flex gap-10 justify-between items-center py-3 text-base whitespace-nowrap bg-white">
        <p className="self-stretch my-auto text-neutral-600">Total:</p>
        <p className="self-stretch my-auto font-semibold leading-tight text-zinc-900">
          ${subtotal.toFixed(2)}
        </p>
      </div>
      <Link to="/checkout" className="gap-4 text-center self-stretch px-10 py-4 mt-5 text-base font-semibold leading-tight text-white bg-red-500 rounded-[43px] max-md:px-5">
        Proceed to checkout
      </Link>
    </section>
  );
}
