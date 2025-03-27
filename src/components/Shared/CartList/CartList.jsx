import React from "react";
import { useCart } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";

export default function CartList() {
  const { cartItems } = useCart();

  return (
    <section className="py-4 mx-auto w-full bg-white rounded-lg border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] max-md:mt-6 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between ml-5 max-w-full text-sm font-medium tracking-wide leading-none uppercase whitespace-nowrap text-zinc-500 w-[756px]">
        <h2>Product</h2>
        <div className="flex gap-10">
          <span>price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>
      </div>
      <hr className="shrink-0 mt-4 h-px border border-solid bg-neutral-200 border-neutral-200 max-md:max-w-full" />

      {cartItems.map((item) => (
        <React.Fragment key={item.id}>
          <CartItem item={item} />
          <hr className="shrink-0 mx-5 mt-3 max-w-full h-px border border-solid bg-neutral-200 border-neutral-200 w-[832px] max-md:mr-2.5" />
        </React.Fragment>
      ))}

      <div className="flex flex-wrap gap-10 justify-between items-center mx-5 mt-4 text-sm font-semibold leading-tight rounded-xl text-neutral-600 max-md:mr-2.5 max-md:max-w-full">
        <button className="gap-3 self-stretch px-8 py-3.5 my-auto bg-zinc-100 rounded-[43px] max-md:px-5">
          Return to shop
        </button>
        <button className="gap-3 self-stretch px-8 py-3.5 my-auto bg-zinc-100 rounded-[43px] max-md:px-5">
          Update Cart
        </button>
      </div>
    </section>
  );
}
