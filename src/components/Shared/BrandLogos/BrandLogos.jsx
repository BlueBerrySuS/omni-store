import React from 'react';

const BrandLogos = () => {
  const logos = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba8eec9488ee27f1ccad3051040ee31d13ada4be75cd6becd47d4e8fa5b89472?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", alt: "Brand logo 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b4d45fd3ebc99aaab3df46838c99c8ac2ab02eca91a2de8252ea6839de771bfe?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", alt: "Brand logo 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/35e333808c6865f27d5b30999ef5c45eec35f04ca3cdd401635557a6b6df06c1?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46", alt: "Brand logo 3" }
  ];

  return (
    <section className="flex gap-10 justify-evenly items-center py-16 w-full max-w-[1320px] max-md:max-w-full">
      {logos.map((logo, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <div className="shrink-0 self-stretch my-auto w-0 h-8 border border-solid bg-neutral-200 border-neutral-200" />
          )}
          <img
            loading="lazy"
            src={logo.src}
            className="object-contain shrink-0 self-stretch my-auto aspect-[2.56] fill-red-500 w-[82px]"
            alt={logo.alt}
          />
        </React.Fragment>
      ))}
    </section>
  );
};

export default BrandLogos;