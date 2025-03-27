"use client";
import React from "react";
import TopNav from "../components/Shared/TopNav/TopNav.jsx";
import ProductGallery from "../components/Shared/ProductGallery/ProductGallery.jsx";
import ProductInfo from "../components/Shared/ProductInfo/ProductInfo.jsx";
import ProductDescription from "../components/Shared/ProductDescription/ProductDescription.jsx";
import RelatedProducts from "../components/Shared/RelatedProducts/RelatedProducts.jsx";
import Newsletter from "../components/Shared/Newsletter/Newsletter.jsx";

export default function ProductDetailsPage() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <header>
        <TopNav />
      </header>

      <main>
        <section className="flex relative flex-col justify-center items-start px-16 py-12 w-full text-base min-h-[120px] text-neutral-400 max-md:px-5 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/05a6720d86820dd0bdccb350dd73ba89d91705ac?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
            className="object-cover absolute inset-0 size-full"
            alt="Background"
          />
          <nav className="flex relative gap-3 items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/81b3c31dc7dfeee147b1a62bfafa50c073b360eb?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              alt="Home icon"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/70be8f2cf53087f1d1685d757d42035f9be5c6db?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
              className="object-contain shrink-0 self-stretch my-auto w-1 aspect-[0.5] stroke-[1px] stroke-neutral-400"
              alt="Separator"
            />
            <span>Category</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0b7357a1f70befd67c4cf67e98f9642e76c8209?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
              className="object-contain shrink-0 self-stretch my-auto w-1 aspect-[0.5] stroke-[1px] stroke-neutral-400"
              alt="Separator"
            />
            <span>Vegetables</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/29c6127de49b6d7056f466979766d6d4afe2954a?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
              className="object-contain shrink-0 self-stretch my-auto w-1 aspect-[0.5] stroke-[1px] stroke-neutral-400"
              alt="Separator"
            />
            <span className="text-red-500">Chinese Cabbage</span>
          </nav>
        </section>

        <section className="flex flex-col items-center mt-8 w-full max-md:max-w-full">
          <div className="overflow-hidden max-w-full w-[1320px]">
            <div className="flex gap-5 max-md:flex-col">
              <ProductGallery />
              <ProductInfo />
            </div>
          </div>
        </section>

        <ProductDescription />
        <RelatedProducts />
        <Newsletter />
      </main>

    </div>
  );
}
