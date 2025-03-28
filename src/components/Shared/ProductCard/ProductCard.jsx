import { Link } from 'react-router-dom';

import React from 'react';

const ProductCard = ({
  product = {},
  name = product.name,
  price = product.price,
  originalPrice = product.originalPrice,
  image = product.image,
  rating = product.rating,
  saleTag = product.saleTag,
  highlighted = product.isSelected,
  isOutOfStock = product.isOutOfStock,
  salePercentage = product.salePercentage,
}) => {
  return (
    <Link to="/product"> <article
      className={`flex flex-col pt-4 bg-white rounded-lg border border-solid ${
        highlighted ? "border-[#A63533] shadow-sm" : "border-[#E6E6E6]"
      } min-w-60 w-[312px]`}
    >
      {(isOutOfStock || saleTag || salePercentage) && (
        <div
          className={`z-10 px-2 py-1 ml-4 text-sm text-right ${
            isOutOfStock
              ? "bg-zinc-900 text-white"
              : saleTag
              ? "bg-red-500 text-white"
              : "bg-red-500 text-white"
          } rounded`}
        >
          {isOutOfStock
            ? "Out of Stock"
            : saleTag
            ? `${saleTag.text} ${saleTag.discount}`
            : `Sale ${salePercentage}%`}
        </div>

      )}

<div className="flex flex-col justify-center p-1.5 mt-0">
        <img
          src={image}
          className="object-contain max-w-full aspect-square w-[302px]"
          alt={name}
        />
      </div>


      <div className="flex z-10 flex-col justify-center p-4 w-full">
        <div className="flex flex-col w-full max-w-[280px]">
          <h3
            className={`text-sm ${
              highlighted ? "text-orange-800" : "text-neutral-600"
            }`}
          >
            {name}
          </h3>
          <div className="flex gap-0.5 items-start self-start text-base whitespace-nowrap">
            <span className="font-medium text-zinc-900">${price}</span>
            {originalPrice && (
              <span className="line-through text-neutral-400">
                ${originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
    </Link>
  );
};

export default ProductCard;