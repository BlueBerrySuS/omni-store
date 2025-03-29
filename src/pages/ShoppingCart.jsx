"use client";
import { CartProvider } from "../components/Shared/CartContext/CartContext";
import TopNav from "../components/Shared/TopNav/TopNav";
import CartList from "../components/Shared/CartList/CartList";
import CartSummary from "../components/Shared/CartSummary/CartSummary";
import Newsletter from "../components/Shared/Newsletter/Newsletter";
import Footer from "../components/Layout/Footer";

export default function ShoppingCart() {
  return (
    <CartProvider>
      <div className="flex overflow-hidden flex-col bg-white">


        <section className="flex relative flex-col justify-center items-start px-16 py-12 w-full text-base text-red-500 min-h-[120px] max-md:px-5 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/05a6720d86820dd0bdccb350dd73ba89d91705ac?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
            alt="Background"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative gap-3 items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b28447876c4383af5f044bd991470b54ccea3bf5?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
              alt="Location icon"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/42bee0f35a47fb2f9893595e1117c70c65318798?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
              alt="Divider"
              className="object-contain shrink-0 self-stretch my-auto w-1 aspect-[0.5] stroke-[1px] stroke-zinc-500"
            />
            <span>Shopping cart</span>
          </div>
        </section>

        <main className="flex flex-col self-center mt-10 w-full max-w-[1320px] max-md:max-w-full">
          <h1 className="self-center text-3xl font-semibold leading-tight text-center text-zinc-900">
            My Shopping Cart
          </h1>

          <div className="mt-8 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-[67%] max-md:ml-0 max-md:w-full">
                <CartList />
              </div>
              <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <CartSummary />
              </div>
            </div>
          </div>

          <section className="flex flex-wrap gap-6 items-center self-start p-5 mt-6 bg-white rounded-lg border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] max-md:max-w-full">
            <h2 className="self-stretch my-auto text-xl font-medium text-zinc-900">
              Coupon Code
            </h2>
            <form className="flex self-stretch my-auto text-base rounded-none min-w-60 w-[668px] max-md:max-w-full">
              <input
                type="text"
                placeholder="Enter code"
                className="flex-auto gap-2.5 px-6 py-3.5 mr-0 bg-white border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] rounded-[46px] text-neutral-400 w-[483px] max-md:px-5 max-md:max-w-full"
              />
              <button
                type="submit"
                className="gap-4 self-stretch px-10 py-4 font-semibold leading-none text-white bg-zinc-800 rounded-[43px] max-md:px-5"
              >
                Apply Coupon
              </button>
            </form>
          </section>
        </main>

        <Newsletter />
      </div>
    </CartProvider>
  );
}
