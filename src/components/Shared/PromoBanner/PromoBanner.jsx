import React from 'react';

const PromoBanner = () => {
  return (
    <section
    className={`
      flex relative flex-col items-end px-16 py-16 mt-16 w-full text-black rounded-xl
      max-w-[1320px] min-h-[358px] max-md:px-5 max-md:mt-10 max-md:max-w-full
    `}
    >
      <div className="flex w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1f8a00802fb2acb36e4272ff97bc463d65a97c4d591372e5eae79ce8783c4e7?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
          className="object-cover absolute inset-0 size-full"
          alt="Summer sale background"
        />
      </div>

      <div className="flex relative text-left flex-col justify-center max-w-full w-[441px]">
        <div className="flex flex-col self-start ">
          <p className="text-base font-medium tracking-wide leading-none text-white uppercase">
            Summer Sale
          </p>
          <h2 className="mt-3 text-6xl font-semibold leading-tight text-white max-md:text-4xl">
            <span className="text-red-500">37%</span>
            <span className="">OFF</span>
          </h2>
        </div>
        <p className="mt-4 text-base leading-6 text-white max-md:max-w-full">
          Free on all your orders, Free Shipping and 30 days money-back guarantee
        </p>
        <a
        href="/shop"
        className={`
          flex relative gap-4 max-w-[200px]
          px-6 py-4 mt-7 justify-center text-center font-semibold leading-tight
          bg-red-500 rounded-[43px] max-md:px-5 max-md:mr-2.5
        `}
      >
        Shop Now
      </a>
      </div>

    </section>
  );
};

export default PromoBanner;