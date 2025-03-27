"use client";
import React, { useState } from "react";

export default function ProductInfo() {
  const [quantity, setQuantity] = useState(5);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:mt-6 max-md:max-w-full">
        <div className="flex flex-col items-start w-full max-w-[647px] max-md:max-w-full">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <h1 className="self-stretch my-auto text-4xl font-semibold leading-tight text-zinc-900">
                Chinese Cabbage
              </h1>
              <span className="gap-2.5 self-stretch px-2 py-1 my-auto text-sm text-orange-800 rounded bg-green-600 bg-opacity-20">
                In Stock
              </span>
            </div>

            <div className="flex gap-3 items-start self-start mt-3 text-sm">
              <div className="flex items-center text-stone-500">
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    src={
                      index === 0
                        ? "https://cdn.builder.io/api/v1/image/assets/TEMP/de389ca68f971737b7b25725d111670b4fcf1153?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
                        : "https://cdn.builder.io/api/v1/image/assets/TEMP/eaf97d715663942b8e479b3fb43f6a0246f47068?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
                    }
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                    alt={`Star ${index + 1}`}
                  />
                ))}
                <span> 4 Review</span>
              </div>
              <span className="font-medium text-zinc-400">•</span>
              <div className="flex gap-1 items-start whitespace-nowrap">
                <span className="font-medium text-zinc-800">SKU:</span>
                <span className="text-stone-500">2,51,594</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 items-center mt-5">
            <div className="flex gap-1 items-center self-stretch my-auto whitespace-nowrap">
              <span className="self-stretch my-auto text-xl line-through text-zinc-400">
                $48.00
              </span>
              <span className="self-stretch my-auto text-2xl font-medium text-orange-800">
                $17.28
              </span>
            </div>
            <span className="gap-1.5 self-stretch px-2.5 py-1 my-auto text-sm font-medium text-red-500 bg-red-500 bg-opacity-10 rounded-[30px]">
              64% Off
            </span>
          </div>

          <hr className="self-stretch mt-5 w-full border border-solid bg-neutral-200 border-neutral-200 min-h-px" />

          <div className="flex flex-wrap gap-10 justify-between items-center w-full mt-6">
            <div className="flex gap-2 items-center self-stretch my-auto text-sm whitespace-nowrap text-zinc-900">
              <span>Brand:</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c16444afd1481e75383fae021734bf8cafd5df6?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
                className="object-contain shrink-0 self-stretch my-auto w-14 aspect-square"
                alt="Brand logo"
              />
            </div>

            <div className="flex gap-2.5 items-center self-stretch my-auto min-w-60">
              <span className="self-stretch my-auto text-sm text-zinc-900">
                Share item:
              </span>
              <div className="flex gap-1.5 items-start self-stretch my-auto">
                {[
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/7f6631775016489b9b750c835b76cb9ba669b034?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7",
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/43e4e09cbf561dbe638418af01bfcdaae8ff0acd?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7",
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/2ff3be0573cad7a57b3e47acf6e7edb23c80d4d6?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7",
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/50954868f3166691f1e627334bbcf374618bce8d?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7",
                ].map((url, index) => (
                  <button key={index}>
                    <img
                      src={url}
                      className="object-contain shrink-0 w-10 aspect-square rounded-[500px]"
                      alt={`Social share ${index + 1}`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-5 text-zinc-500 max-md:max-w-full">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
            ultrices et ipsum. Nulla varius magna a consequat pulvinar.
          </p>

          <div className="flex flex-wrap gap-3 justify-center items-center py-5 mt-6 bg-white border border-solid shadow-sm border-[color:var(--Gray-Scale-White,#FFF)] max-md:max-w-full">
            <div className="flex justify-center items-center self-stretch p-2 my-auto text-base text-center whitespace-nowrap bg-white border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] rounded-[170px] text-zinc-900">
              <button onClick={handleDecrement}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/05e11e111749276eb22021284b7c016631ba7a62?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
                  className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-square w-[34px]"
                  alt="Decrease quantity"
                />
              </button>
              <span className="self-stretch my-auto w-10">{quantity}</span>
              <button onClick={handleIncrement}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/922ca9b72073f87cfed351813c5f363712324d39?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
                  className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-square w-[34px]"
                  alt="Increase quantity"
                />
              </button>
            </div>

            <button className="flex gap-4 justify-center items-center self-stretch px-10 py-4 my-auto text-base font-semibold leading-tight text-white bg-red-500 min-w-60 rounded-[43px] w-[447px] max-md:px-5 max-md:max-w-full">
              <span>Add to Cart</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/50fa2d23cba8acf9aa6c7f450be337c893f1ba47?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
                className="object-contain shrink-0 self-stretch my-auto aspect-square stroke-[1.3px] stroke-white w-[15px]"
                alt="Cart icon"
              />
            </button>

            <button className="flex gap-2.5 items-center self-stretch p-4 my-auto bg-green-600 bg-opacity-10 h-[52px] rounded-[43px] w-[52px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/56b51dbd365859ac4d6c05538e12be235ea05d8f?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
                className="object-contain w-5 aspect-square"
                alt="Wishlist"
              />
            </button>
          </div>

          <div className="flex flex-col self-start mt-6 text-sm max-md:max-w-full">
            <div className="flex gap-1.5 items-start self-start whitespace-nowrap">
              <span className="font-medium text-zinc-900">Category:</span>
              <span className="text-zinc-500">Vegetables</span>
            </div>
            <div className="flex gap-1.5 items-start mt-3 text-zinc-500 max-md:max-w-full">
              <span className="font-medium text-zinc-900">Tag:</span>
              <span>Vegetables</span>
              <span>Healthy</span>
              <span className="underline decoration-auto decoration-solid text-zinc-900">
                Chinese
              </span>
              <span>Cabbage</span>
              <span>Green Cabbage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
