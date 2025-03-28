import React from 'react';

const ProductItem = ({ image, name, price, discountedPrice, rating }) => (
  <div className="flex flex-col flex-1 pt-4 bg-white border border-solid border-neutral-200">
    {discountedPrice && (
      <div className="flex z-10 gap-1 justify-center items-center self-start px-2 py-1 ml-4 text-sm text-black whitespace-nowrap bg-red-500 rounded max-md:ml-2.5">
        <span className="self-stretch my-auto">Sale</span>
        <span className="self-stretch my-auto font-medium">
          {Math.round((1 - discountedPrice / price) * 100)}%
        </span>
      </div>
    )}
    <div className="flex flex-col justify-center p-1.5 mt-0">
      <img
        loading="lazy"
        src={image}
        className="object-contain max-w-full aspect-[1.1] w-[254px]"
        alt={name}
      />
    </div>
    <div className="flex flex-col justify-center p-3 w-full">
      <div className="flex flex-col w-full max-w-[240px]">
        <div className="text-sm text-black">{name}</div>
        <div className="flex gap-0.5 items-start self-start text-base whitespace-nowrap">
          <div className="font-medium text-black">${discountedPrice || price}</div>
          {discountedPrice && <div className="text-black line-through">${price}</div>}
        </div>
      </div>
    </div>
  </div>
);

const PopularProducts = () => {
  const products = [
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1059b08d2c2d9dce6fd9fd339a529ef1e88a376711cc42e4f64cf6b0f62ee9f1?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", name: "Green Apple", price: 20.99, discountedPrice: 14.99, rating: 4 },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1059b08d2c2d9dce6fd9fd339a529ef1e88a376711cc42e4f64cf6b0f62ee9f1?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", name: "Fresh Indian Malta", price: 20.00, rating: 3 },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1059b08d2c2d9dce6fd9fd339a529ef1e88a376711cc42e4f64cf6b0f62ee9f1?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", name: "Chinese cabbage", price: 12.00, rating: 5 },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1059b08d2c2d9dce6fd9fd339a529ef1e88a376711cc42e4f64cf6b0f62ee9f1?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", name: "Green Lettuce", price: 9.00, rating: 4 },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1059b08d2c2d9dce6fd9fd339a529ef1e88a376711cc42e4f64cf6b0f62ee9f1?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", name: "Eggplant", price: 34.00, rating: 5 }
  ];

  return (
    <section className="mt-12 w-full max-w-[1320px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
        <h2 className="self-stretch my-auto text-3xl font-semibold leading-tight text-black">
          Popular Products
        </h2>
        <a href="/products" className="gap-3 self-stretch my-auto text-base font-medium text-black rounded-[43px]">
          View All
        </a>
      </div>
      <div className="grid grid-cols-6 gap-6 mt-8 w-full max-w-[1321px] max-md:grid-cols-2 max-md:max-w-full ">
        {products.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;