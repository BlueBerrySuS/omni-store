import React from "react";

function BreadcrumbNav() {
  return (
    <nav className="flex relative flex-col justify-center items-start px-16 py-12 w-full text-base min-h-[120px] max-md:px-5 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/05a6720d86820dd0bdccb350dd73ba89d91705ac?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
        alt="Background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative gap-3 items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b28447876c4383af5f044bd991470b54ccea3bf5?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
          alt="Home icon"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <span className="self-stretch my-auto text-neutral-400">
          Shopping Cart
        </span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b21d6891e26f7462b94e21c4ef08760c94df3e3?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
          alt="Separator"
          className="object-contain shrink-0 self-stretch my-auto w-1 aspect-[0.5] stroke-[1px] stroke-zinc-500"
        />
        <span className="self-stretch my-auto text-red-500">Checkout</span>
      </div>
    </nav>
  );
}

export default BreadcrumbNav;
