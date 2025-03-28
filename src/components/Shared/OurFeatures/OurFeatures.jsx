import React from 'react';

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex gap-4 justify-center items-center self-stretch my-auto min-w-[240px]">
    <img
      loading="lazy"
      src={icon}
      className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
      alt=""
    />
    <div className="flex flex-col justify-center self-stretch my-auto min-w-[240px] w-[250px]">
      <h3 className="text-base font-semibold leading-tight text-black">{title}</h3>
      <p className="mt-2 text-sm text-black">{description}</p>
    </div>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/192a579b31120417cbf06fc5e77267230504a8d7cd655c3f9b6ba75249db4231?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46",
      title: "Free Shipping",
      description: "Free shipping on all your order"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/be2635d889f4f6417b6752c5af6616ef669c38b23d284c842fe16c8f2c8f2191?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46",
      title: "Customer Support 24/7",
      description: "Instant access to Support"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b3343847b7356aeba3c701113fc599d02d3ab3a48f8abfe3fdaf7393cf2a9f5?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46",
      title: "100% Secure Payment",
      description: "We ensure your money is save"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/88fd5cf44733ee73e658291d35f489b557c49e0f4cc47a7d785d59236c24fd19?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46",
      title: "Money-Back Guarantee",
      description: "30 Days Money-Back Guarantee"
    }
  ];

  return (
    <section className="flex gap-4 justify-between items-center p-10 mt-6 w-full bg-white rounded-lg shadow-2xl max-w-[1320px] overflow-x-auto whitespace-nowrap">
      {features.map((feature, index) => <FeatureItem key={index} {...feature} />)}
    </section>
  );
};

export default Features;