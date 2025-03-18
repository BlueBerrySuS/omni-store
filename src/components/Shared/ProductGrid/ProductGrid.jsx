"use client";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = () => {
  const products = [
    {
      name: "Big Potatos",
      price: "$14.99",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f4b7183881447b8ceee4b3d41b63bbcdae42035072540b7f90d701d07ee9b236?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46",
      rating: 4,
      isSelected: false,
    },
    {
      name: "Chanise Cabbage",
      price: "$14.99",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c9bc5941618b9708acbcb5bd34e43cb4c8f8fa5813bdd57d9e687378d28b72ab?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46",
      rating: 5,
      isSelected: true,
    },
    {
      name: "Ladies Finger",
      price: "$14.99",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f4b7183881447b8ceee4b3d41b63bbcdae42035072540b7f90d701d07ee9b236?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46",
      rating: 3,
      isOutOfStock: true,
    },
    // Add more products...
  ];

  return (
    <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
