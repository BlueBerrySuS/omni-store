import React from 'react';

const InstagramFeed = () => {
  const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d74fd3e2b8aad75ab3bcccc5b0960482d7b3585e0b7fdbc8be213cdafe5565f2?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", alt: "Instagram post 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1989a34f86960fc53f2d293688e05b8e67ba84de00e7bc78cced441fd11732df?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", alt: "Instagram post 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d74fd3e2b8aad75ab3bcccc5b0960482d7b3585e0b7fdbc8be213cdafe5565f2?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", alt: "Instagram post 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d74fd3e2b8aad75ab3bcccc5b0960482d7b3585e0b7fdbc8be213cdafe5565f2?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", alt: "Instagram post 4" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d74fd3e2b8aad75ab3bcccc5b0960482d7b3585e0b7fdbc8be213cdafe5565f2?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", alt: "Instagram post 5" },
  ];

  return (
    <section className="mt-16 w-full max-w-[1320px] max-md:mt-10 max-md:max-w-full">
      <h2 className="text-3xl font-semibold leading-tight text-center text-black">Follow us on Instagram</h2>
      <div className="flex flex-wrap gap-5 justify-between mt-8 w-full max-md:max-w-full">
        {images.map((image, index) => (
          <img
            key={index}
            loading="lazy"
            src={image.src}
            className="object-contain shrink-0 max-w-full rounded-xl aspect-square w-[200px]"
            alt={image.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;