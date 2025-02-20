import React from 'react';

const Newsletter = () => {
  return (
    <section className="flex flex-col w-full rounded-none max-md:max-w-full">
      <div className="flex flex-col justify-center items-center px-16 py-10 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center w-full max-w-[1320px] max-md:max-w-full">
          <div className="flex flex-col self-stretch max-md:max-w-full">
            <h2 className="text-2xl font-semibold text-black">
              Subscribe our Newsletter
            </h2>
            <p className="mt-1 text-sm leading-5 text-black max-md:max-w-full">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <form className="flex self-stretch my-auto text-base text-black max-md:max-w-full">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-auto gap-2.5 px-6 py-3.5 mr-0 bg-white border border-solid border-neutral-200 rounded-[46px] w-[400px] max-md:px-5"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="gap-4 self-stretch px-10 py-4 font-semibold leading-none whitespace-nowrap bg-red-500 rounded-[43px] max-md:px-5"
            >
              Subscribe
            </button>
          </form>
          <div className="flex gap-2 items-start self-stretch my-auto">
            <a href="#" aria-label="Facebook">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/526812fc7c88c1dc9fc49e6735387c593e7f1ab13fc34aee904096db6bf59caf?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
                className="object-contain shrink-0 w-10 aspect-square"
                alt="Facebook icon"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd07521d10f7bbcabe8ec7e4ae78e682a8b7475bccdfc899493a2df8c16f6a83?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
                className="object-contain shrink-0 w-10 aspect-square rounded-[500px]"
                alt="Twitter icon"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/754919186d589911b1d8395f64c75554091fe931a5516ae2bee5a4b456bf6c14?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
                className="object-contain shrink-0 w-10 aspect-square rounded-[500px]"
                alt="Instagram icon"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2daa73585f13ad6be70fc14fe6f86b17c9b77ab8a2f2a6125c89f1a2add0b828?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
                className="object-contain shrink-0 w-10 aspect-square rounded-[500px]"
                alt="LinkedIn icon"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;