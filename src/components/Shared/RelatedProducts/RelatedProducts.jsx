import ProductCard from "../ProductCard/ProductCard";

export default function RelatedProducts() {
  const products = [
    {
      name: "Green Apple",
      price: 14.99,
      originalPrice: 20.99,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4979e0d6662a777a7de02d302addf369008acdf8?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7",
      rating:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/134a14410ccdb9973ee007f7372bd72ec3bfb39c?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7",
      saleTag: { text: "Sale", discount: "50%" },
    },
    {
      name: "Chanise Cabbage",
      price: 14.99,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4979e0d6662a777a7de02d302addf369008acdf8?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7",
      rating:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/134a14410ccdb9973ee007f7372bd72ec3bfb39c?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7",
    },
    {
      name: "Green Capsicum",
      price: 14.99,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/33fcb46a3ea290052326aa550db3db75bb9842b3?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7",
      rating:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/134a14410ccdb9973ee007f7372bd72ec3bfb39c?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7",
      highlighted: true,
    },
    {
      name: "Ladies Finger",
      price: 14.99,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4979e0d6662a777a7de02d302addf369008acdf8?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7",
      rating:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/134a14410ccdb9973ee007f7372bd72ec3bfb39c?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7",
    },
  ];

  return (
    <section className="mt-20 max-w-[1320px] mx-auto px-4 max-md:mt-10">
      <h2 className="text-3xl font-semibold leading-tight text-zinc-900">
        Related Products
      </h2>
      <div className="flex flex-wrap gap-6 items-start mt-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
}
