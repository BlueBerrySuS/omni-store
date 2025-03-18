const ProductCard = ({ product }) => {
    const {
      name,
      price,
      image,
      rating,
      isOutOfStock,
      salePercentage,
      isSelected,
    } = product;
  
    return (
      <article
        className={`w-full bg-white rounded-lg border border-solid ${
          isSelected ? "border-[#A63533]" : "border-[#E6E6E6]"
        }`}
      >
        {(isOutOfStock || salePercentage) && (
          <div
          className={`z-10 px-2 py-1 ml-4 text-sm text-right ${
            isOutOfStock ? " bg-zinc-900 text-white" : "bg-red-500 text-white"
          } rounded`}
          >
            {isOutOfStock ? "Out of Stock" : `Sale ${salePercentage}%`}
          </div>
        )}
  
        <div className="flex flex-col justify-center p-1.5">
          <img
            src={image}
            className="object-contain max-w-full aspect-square w-[302px]"
            alt={name}
          />
        </div>
  
        <div className="flex flex-col justify-center p-4 w-full">
          <div className="flex flex-col w-full max-w-[280px]">
            <h3
              className={`text-sm ${isSelected ? "text-orange-800" : "text-neutral-600"}`}
            >
              {name}
            </h3>
            <p className="gap-0.5 self-start text-base font-medium text-zinc-900">
              {price}
            </p>
          </div>
        </div>
      </article>
    );
  };
  
  export default ProductCard;
  