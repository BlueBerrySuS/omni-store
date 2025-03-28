// eslint-disable-next-line react/prop-types
const TestimonialItem = ({ quote, name, role, avatar, rating }) => (
  <div className="flex m-2 flex-col p-6 bg-white rounded-lg shadow-lg min-w-[240px] w-[424px] max-md:px-5 max-md:max-w-full">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8b276a7b4d833a02becc32bfdca2b311164a0c7baa47979ea72e2b14ae8d8e1?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
      className="object-contain w-8 aspect-[1.23] fill-red-500"
      alt="Quote icon"
    />
    <p className="mt-4 text-sm leading-5 text-black">{quote}</p>
    <div className="flex justify-between items-center pt-2 mt-4 w-full">
      <div className="flex gap-3 items-center self-stretch my-auto text-left">
        <img
          loading="lazy"
          src={avatar}
          className="object-contain shrink-0 self-stretch my-auto w-14 rounded-full aspect-square"
          alt={name}
        />
        <div className="flex flex-col items-start self-stretch my-auto">
          <div className="text-base font-medium text-black">{name}</div>
          <div className="text-sm text-black">{role}</div>
        </div>
      </div>
      <div className="flex gap-2px items-start self-stretch my-auto">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            loading="lazy"
            src={i < rating ? "https://cdn.builder.io/api/v1/image/assets/TEMP/d7fac4efc8f3686676e6a71e35993c211b603fa0c40a1880ba5b57180017dbb5?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46" : "https://cdn.builder.io/api/v1/image/assets/TEMP/b8b2086e07b83107f4f8ee1eff1b83dca8400cb5d69c2f822dd575128125b0d1?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"}
            className="object-contain shrink-0 w-5 aspect-square"
            alt={i < rating ? "Filled star" : "Empty star"}
          />
        ))}
      </div>
    </div>
  </div>
);

const ClientTestimonials = () => {
  const testimonials = [
    {
      quote: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "Robert Fox",
      role: "Customer",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/318031cb1057a2854be1ea22aac9552dcc2cc9d34d75b2fd84d0522985217a6a?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46",
      rating: 5
    },
    {
      quote: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "Dianne Russell",
      role: "Customer",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/8610880ae7a6d29c049cfca74e161d409c3da3400be3aba7a3c6ae83beca05cd?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46",
      rating: 5
    },
    {
      quote: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "Eleanor Pena",
      role: "Customer",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/65887736fb80bfc189473a56ab25feb9a0f0e65394b38188b92d46f2894e16af?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46",
      rating: 5
    }
  ];

  return (
    <section className="flex flex-col justify-center items-center self-stretch py-16 mt-16 bg-zinc-100 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-row justify-between items-center gap-250">
        <h2 className="text-3xl font-semibold leading-tight text-black">
          Client Testimonials
        </h2>
        <div className="flex gap-1 items-center">
          <button aria-label="Previous testimonial" className="flex flex-col rotate-[3.141592653589793rad] w-[35px]">
            <div className="flex shrink-0 bg-white rounded-full border border-solid border-neutral-200 h-[35px] stroke-[1px] w-[35px]" />
          </button>
          <button aria-label="Next testimonial" className="flex flex-col w-[35px]">
            <div className="flex shrink-0 bg-red-500 rounded-full h-[35px] w-[35px]" />
          </button>
        </div>
      </div>
      <div className="flex flex-row  items-center mt-8 max-md:flex-col max-md:max-w-full">
        {testimonials.map((testimonial, index) => (
          <TestimonialItem key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonials;