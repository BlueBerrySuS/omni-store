"use client";
import React from "react";
import Rating from "../Rating/Rating";

const FilterSidebar = () => {
  return (
    <aside className="flex flex-col gap-6">
      <section aria-labelledby="categories-header">
        <div className="flex justify-between items-center pb-5 text-xl font-medium text-zinc-900">
          <h2 id="categories-header">All Categories</h2>
          <button aria-label="Toggle categories">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1c4295e6878632514c814b40ef2ecdaf4bf8c7fa082d0ae642f25dba12f0ece?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
              className="w-3 aspect-[2] stroke-[2px] stroke-zinc-900"
              alt=""
            />
          </button>
        </div>

        {[
          { name: "Fresh Fruit", count: 134 },
          { name: "Vegetables", count: 150, selected: true },
          { name: "Cooking", count: 54 },
          { name: "Snacks", count: 47 },
          { name: "Beverages", count: 43 },
          { name: "Beauty & Health", count: 38 },
          { name: "Bread & Bakery", count: 15 },
        ].map((category, index) => (
          <div key={index} className="flex gap-2 items-center py-2.5">
            <div
              className={`w-5 h-5 rounded-full border ${
                category.selected
                  ? "border-red-500 flex items-center justify-center"
                  : "border-[#CCC]"
              }`}
            >
              {category.selected && (
                <div className="w-3 h-3 bg-red-500 rounded-full" />
              )}
            </div>
            <label className="flex text-sm">
              <span className="text-zinc-900">{category.name}</span>
              <span className="text-zinc-500"> ({category.count})</span>
            </label>
          </div>
        ))}
      </section>

      <hr className="border-neutral-200" />

      <section aria-labelledby="price-header" className="pb-6">
        <div className="flex justify-between items-center py-5 text-xl font-medium text-zinc-900">
          <h2 id="price-header">Price</h2>
          <button aria-label="Toggle price filter">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1c4295e6878632514c814b40ef2ecdaf4bf8c7fa082d0ae642f25dba12f0ece?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
              className="w-3 aspect-[2] stroke-[2px] stroke-zinc-900"
              alt=""
            />
          </button>
        </div>

        <div className="pr-16 mt-4 w-full rounded-none max-md:pr-5">
          <input type="range" className="w-full bg-pink-500"></input>
        </div>

        <p className="mt-4 text-sm">
          <span className="text-[#4D4D4D]">Price:</span>
          <span className="font-medium"> 50 — 1,500</span>
        </p>
      </section>

      <hr className="border-neutral-200" />

      <section aria-labelledby="rating-header" className="pb-6">
        <div className="flex justify-between items-center py-5 text-xl font-medium text-zinc-900">
          <h2 id="rating-header">Rating</h2>
          <button aria-label="Toggle rating filter">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1c4295e6878632514c814b40ef2ecdaf4bf8c7fa082d0ae642f25dba12f0ece?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
              className="w-3 aspect-[2] stroke-[2px] stroke-zinc-900"
              alt=""
            />
          </button>
        </div>

        {[5, 4, 3, 2, 1].map((stars) => (
          <div key={stars} className="flex gap-2 items-center py-2.5">
            <input
              type="checkbox"
              id={`rating-${stars}`}
              className="w-5 h-5 rounded border-[#CCC]"
            />
            <label
              htmlFor={`rating-${stars}`}
              className="flex items-center text-sm text-zinc-900"
            >
              <Rating value={stars} />
              <span className="ml-2">
                {stars}.0{stars === 4 && " & up"}
              </span>
            </label>
          </div>
        ))}
      </section>

      <section aria-labelledby="tags-header" className="pb-7">
        <div className="flex justify-between items-center py-5 text-xl font-medium text-zinc-900">
          <h2 id="tags-header">Popular Tag</h2>
          <button aria-label="Toggle popular tags">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1c4295e6878632514c814b40ef2ecdaf4bf8c7fa082d0ae642f25dba12f0ece?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
              className="w-3 aspect-[2] stroke-[2px] stroke-zinc-900"
              alt=""
            />
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            "Healthy",
            "Low fat",
            "Vegetarian",
            "Kid foods",
            "Vitamins",
            "Bread",
            "Meat",
            "Snacks",
            "Tiffin",
            "Launch",
            "Dinner",
            "Breakfast",
          ].map((tag, index) => (
            <button
              key={index}
              className={`px-4 py-1.5 rounded-[30px] ${
                tag === "Low fat"
                  ? "text-white bg-red-500"
                  : "bg-zinc-100 text-zinc-900"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      <div className="relative rounded-xl aspect-[1.058] max-w-[312px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/159d1ae1911b9590f429d0294134c5f49de39b3592693c183a2ff1ed20d20239?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Promotional banner"
        />
        <div className="relative flex flex-col items-center pt-5 text-center text-zinc-900">
          <h3 className="text-3xl">
            <span className="text-red-500">79%</span>
            <span className="font-normal text-2xl"> Discount</span>
          </h3>
          <p>on your first order</p>
          <button className="mt-3 font-semibold text-red-500">Shop Now</button>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
