"use client";
import React from "react";
import TopNav from "../components/Shared/TopNav/TopNav";
import CategoryNav from "../components/Shared/CategoryNav/CategoryNav";
import FilterSidebar from "../components/Shared/FilterSidebar/FilterSidebar";
import ProductGrid from "../components/Shared/ProductGrid/ProductGrid";
import Newsletter from "../components/Shared/Newsletter/Newsletter";

const Shop1 = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <header>
      </header>

      <main className="flex flex-col justify-center items-start px-16 py-12 w-full text-base whitespace-nowrap min-h-[120px] max-md:px-5 max-md:max-w-full">

        <nav
          
          className="flex relative gap-3 items-center"
          aria-label="Breadcrumb"
        >
          
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed647e314c8687e937d3094c6db347667e458f79c198853057e168004b89d0d9?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
            className="object-contain w-6 aspect-square"
            alt=""
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/748175254ce4ee9c39eb856ed13f9de1ca4e38f27206b691c0f609171707625c?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
            className="object-contain w-1 aspect-[0.5] stroke-[1px] stroke-neutral-400"
            alt=""
          />
          <span className="text-neutral-400">Categories</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/33c1724c5ce1b784012b7228198a66a970ec525621a0bdfd657025097705f58c?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
            className="object-contain w-1 aspect-[0.5] stroke-[1px] stroke-zinc-500"
            alt=""
          />
          <span className="text-red-500">Vegetables</span>
        </nav>

        <section className="flex flex-wrap gap-5 justify-between self-center mt-8 w-full max-w-[1317px] max-md:max-w-full">
          <div className="flex flex-wrap gap-10 text-sm max-md:max-w-full">
            <button className="px-8 py-3.5 font-semibold text-white bg-red-500 rounded-[43px] max-md:px-5">
              Filter
            </button>
            <div className="flex gap-2 items-center my-auto">
              <label htmlFor="sort" className="text-zinc-500">
                Sort by:
              </label>
              <select
                id="sort"
                className="px-4 py-2.5 rounded border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] text-neutral-600"
              >
                <option>Latest</option>
              </select>
            </div>
          </div>
          <p className="my-auto text-base">
            <span className="font-semibold text-[#1A1A1A]">52</span>
            <span className="text-[#666666]"> Results Found</span>
          </p>
        </section>

        <div className="flex gap-5 self-center mt-6 w-full max-w-[1320px] max-md:flex-col max-md:max-w-full">
          <aside className="w-[24%] max-md:w-full">
            <FilterSidebar />
          </aside>
          <section className="w-[76%] max-md:w-full">
            <ProductGrid />
          </section>
        </div>

        <nav
          className="flex gap-3 items-start self-center mt-10 ml-44"
          aria-label="Pagination"
        >
          <button
            className="flex gap-2.5 items-center p-2 w-9 h-9 bg-zinc-100 rounded-[500px]"
            aria-label="Previous page"
          >
            <span className="flex w-5 min-h-5 rotate-[-1.5707963267948968rad]" />
          </button>
          <div className="flex items-start text-base text-center min-w-60 text-stone-500">
            {[1, 2, 3, 4, 5, "...", 21].map((page, index) => (
              <button
                key={index}
                className={`px-2 w-9 h-9 rounded-[130px] ${page === 1 ? "font-medium text-white bg-red-500" : "bg-white"}`}
                aria-current={page === 1 ? "page" : undefined}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            className="flex gap-2.5 items-center p-2 w-9 h-9 bg-white border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] rounded-[500px]"
            aria-label="Next page"
          >
            <span className="flex w-5 min-h-5 rotate-[-1.5707963267948968rad]" />
          </button>
        </nav>
      </main>

      <Newsletter />
    </div>
  );
};

export default Shop1;
