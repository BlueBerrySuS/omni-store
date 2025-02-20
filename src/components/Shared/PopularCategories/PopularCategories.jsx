import React from 'react';

const CategoryItem = ({ image, name }) => (
  <div className="flex flex-col flex-1 justify-center items-center pt-4 pb-6 bg-white rounded-md border border-solid border-neutral-200">
  <img
    loading="lazy"
    src={image}
    className="object-contain max-w-full aspect-[1.46] w-[190px]"
    alt={`${name} category`}
  />
  <div className="mt-4 text-lg font-medium text-center text-black">{name}</div>
</div>
);

const PopularCategories = () => {
  const categories = [
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f28ce5c73fae4164bb8d8ebc1223d0744702ec8ecabeca9abebd026abda7a310?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", name: "Gaming Mouse" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f28ce5c73fae4164bb8d8ebc1223d0744702ec8ecabeca9abebd026abda7a310?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", name: "Gaming Headphones" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f28ce5c73fae4164bb8d8ebc1223d0744702ec8ecabeca9abebd026abda7a310?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", name: "Meat & Fish" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f28ce5c73fae4164bb8d8ebc1223d0744702ec8ecabeca9abebd026abda7a310?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", name: "Snacks" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f28ce5c73fae4164bb8d8ebc1223d0744702ec8ecabeca9abebd026abda7a310?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", name: "Beverages" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f28ce5c73fae4164bb8d8ebc1223d0744702ec8ecabeca9abebd026abda7a310?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", name: "Beauty & Health" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f28ce5c73fae4164bb8d8ebc1223d0744702ec8ecabeca9abebd026abda7a310?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", name: "Bread & Bakery" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f28ce5c73fae4164bb8d8ebc1223d0744702ec8ecabeca9abebd026abda7a310?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", name: "Baking Needs" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f28ce5c73fae4164bb8d8ebc1223d0744702ec8ecabeca9abebd026abda7a310?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", name: "Cooking" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f28ce5c73fae4164bb8d8ebc1223d0744702ec8ecabeca9abebd026abda7a310?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", name: "Diabetic Food" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f28ce5c73fae4164bb8d8ebc1223d0744702ec8ecabeca9abebd026abda7a310?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", name: "Dish Detergents" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f28ce5c73fae4164bb8d8ebc1223d0744702ec8ecabeca9abebd026abda7a310?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", name: "Oil" }
  ];

  return (
    <section className="mt-16 w-full max-w-[1320px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
        <h2 className="self-stretch my-auto text-3xl font-semibold leading-tight text-black">
          Popular Categories
        </h2>
        <a href="/categories" className="gap-3 self-stretch my-auto text-base font-medium text-black rounded-[43px]">
          View All
        </a>
      </div>
      <div className="grid grid-cols-6 gap-6 mt-8 w-full text-lg font-medium text-center text-black max-w-[1320px] max-md:grid-cols-2 max-md:max-w-full">
        {categories.map((category, index) => (
          <CategoryItem key={index} {...category} />
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;