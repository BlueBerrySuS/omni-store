"use client";
import React from "react";
import TopNav from "../components/Shared/TopNav/TopNav";
import WishlistTable from "../components/Shared/WishlistTable/WishlistTable";
import Newsletter from "../components/Shared/Newsletter/Newsletter";

export const WishlistPage = () => {
  return (
    <div className="flex flex-col bg-white min-h-[screen]">

      <div className="w-full bg-[center] bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/b6c8f412a9fbcc2dfa4545c48c015e1c752c3704')] h-[120px]" />

      <h1 className="my-10 text-3xl font-semibold text-center text-zinc-900">
        My Wishlist
      </h1>

      <WishlistTable />
      <Newsletter />
    </div>
  );
};
