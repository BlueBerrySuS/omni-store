import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center px-72 pt-16 w-full bg-zinc-900 text-zinc-500 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between items-start max-w-full text-black w-[1248px]">
        <div className="flex flex-col items-start self-stretch text-sm font-medium">
          <div className="flex gap-2 items-center text-3xl tracking-tighter leading-none whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/984ad289e2b3b44f4da8a38001b545216c319c4660456b410e3281981606b126?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
              className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
              alt="Omni-store logo"
            />
            <div className="self-stretch my-auto text-white">
              Omni-store
            </div>
          </div>
          <p className="self-stretch mt-4 leading-5 text-zinc-500">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
          </p>
          <div className="flex gap-4 items-center mt-4">
            <div className="gap-2.5 self-stretch py-1.5 my-auto text-white shadow-sm bg-zinc-900">
              (219) 555-0114
            </div>
            <div className="self-stretch my-auto text-base">
              <span className="text-zinc-500">or</span>
            </div>
            <div className="gap-2.5 self-stretch py-1.5 my-auto whitespace-nowrap shadow-sm bg-zinc-900">
              <span className="text-white">Proxy@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-zinc-500">
          <h3 className="text-base font-medium text-zinc-500">
            My Account
          </h3>
          <ul className="flex flex-col mt-5 text-sm">
            <li>My Account</li>
            <li className="mt-3">Order History</li>
            <li className="mt-3">Shopping Cart</li>
            <li className="mt-3">Wishlist</li>
          </ul>
        </div>
        <div className="flex flex-col text-zinc-500">
          <h3 className="text-base font-medium text-zinc-500">Helps</h3>
          <ul className="flex flex-col mt-5 text-sm">
            <li className="text-zinc-500">Contact</li>
            <li className="mt-3">FAQs</li>
            <li className="mt-3">Terms & Condition</li>
            <li className="mt-3">Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col text-zinc-500">
          <h3 className="text-base font-medium">Proxy</h3>
          <ul className="flex flex-col mt-5 text-sm">
            <li>About</li>
            <li className="mt-3">Shop</li>
            <li className="mt-3">Product</li>
            <li className="mt-3">Track Order</li>
          </ul>
        </div>
        <div className="flex flex-col text-zinc-500">
          <h3 className="text-base font-medium">Categories</h3>
          <ul className="flex flex-col mt-5 text-sm">
            <li>Fruit & Vegetables</li>
            <li className="mt-3">Meat & Fish</li>
            <li className="mt-3">Bread & Bakery</li>
            <li className="mt-3">Beauty & Health</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-between items-center py-6 mt-16 w-full shadow-sm bg-zinc-900 max-w-[1320px] max-md:mt-10 max-md:max-w-full">
        <div className="self-stretch my-auto text-sm text-zinc-500">
          Ecobazar eCommerce © 2021. All Rights Reserved
        </div>
        <div className="flex gap-2 items-start self-stretch my-auto min-w-[240px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a91f2560c3703c5f77d35490d05d45a8c957ad47e748fda4d02b08c13e7ea158?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
            className="object-contain shrink-0 aspect-[1.41] w-[45px]"
            alt="Payment method 1"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c983c2142cb80ea1262a504a8b01b87ac4c68eaaea272dc869cfa58a33d3333f?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
            className="object-contain shrink-0 aspect-[1.41] w-[45px]"
            alt="Payment method 2"
          />
          <div className="flex flex-col w-[45px]">
            <div className="flex shrink-0 h-8 rounded-md border border-solid bg-zinc-900 border-zinc-800" />
          </div>
          <div className="flex flex-col w-[45px]">
            <div className="flex shrink-0 h-8 rounded-md border border-solid bg-zinc-900 border-zinc-800" />
          </div>
          <div className="flex flex-col leading-none text-black whitespace-nowrap rounded-none w-[65px]">
            <div className="flex flex-col px-1.5 py-1 w-full rounded-md border border-solid bg-zinc-900 border-zinc-800">
              <div className="flex gap-0.5 text-xs max-md:mr-1">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cc231779151833a6add0b7e265b7748db8491155638d4b66eda13109d06da7e?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
                  className="object-contain shrink-0 aspect-square fill-zinc-900 w-[11px]"
                  alt="Secure icon"
                />
                <div>Secure</div>
              </div>
              <div className="text-xs font-semibold text-center">
                Payment
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;