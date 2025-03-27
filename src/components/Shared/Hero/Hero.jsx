import React from 'react';

const Hero = () => {
  return (
    <section className="mt-6 w-full max-w-[1319px] max-md:max-w-full">
      <div className="flex max-md:flex-col ">
        <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
          <div className="flex relative flex-col grow items-start px-11 pt-3  min-h-[600px] max-md:px-5 max-md:mt-6 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4fff979d5bb884f614e11a91728d50fa488de7fc15f2b6e21f295a7e0cf11c5?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
              className="object-cover absolute inset-0 size-full rounded-lg"
              alt=""
            />
            <div className="flex relative text-left flex-col max-w-full text-black min-h-[511px] w-[596px]">
              <h1 className="text-5xl font-semibold text-white leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px] ">
                Fresh & Healthy
                <br />
                Organic Food
              </h1>
              <div className="flex gap-3 items-start self-start mt-7 ">
                <div className="flex shrink-0 w-0.5 bg-red-500 h-[65px] " />
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center text-xl">
                    <p className="self-stretch my-auto font-medium text-white">
                      Sale up to
                    </p>
                    <span className="gap-2.5 self-stretch px-3 py-1 my-auto font-semibold bg-amber-500 rounded-md">
                      30% OFF
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-white opacity-80">
                    Free shipping on all your order.
                  </p>
                </div>
              </div>
            </div>
            <a href="/shop" className="relative z-10 px-10 py-4 mt-0 max-w-full text-base font-semibold leading-tight text-[#EA4B48] bg-white rounded-[53px] w-[191px] max-md:px-5">
              Shop now ⇾
            </a>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-6 max-md:max-w-full">
            <div className="flex relative flex-col items-start py-7 pr-20 pl-8 w-full text-white  min-h-[288px] max-md:px-5 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/03cafb025c4f234d9b4223a2d114460a594e32ff95ff8dfa0814f6b50c31ceeb?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
                className="object-cover absolute inset-0 size-full rounded-lg"
                alt=""
              />
              <div className="flex relative flex-col text-black">
                <div className="flex flex-col">
                  <div className="flex flex-col self-start">
                    <p className="text-sm font-medium tracking-wide leading-none text-white uppercase">
                      Summer Sale
                    </p>
                    <p className="mt-2 text-3xl font-semibold leading-tight text-white">
                      75% OFF
                    </p>
                  </div>
                  <p className="mt-3 text-sm text-white">
                    Only Keyboards & Mice
                  </p>
                </div>
              </div>
              <a href="/shop" className="relative gap-3 self-stretch mt-32 text-left font-semibold leading-tight text-[#EA4B48]">
                Shop Now ⇾
              </a>
            </div>
            <div className="flex relative flex-col justify-center px-10 py-16 mt-6 w-full text-center rounded-xl min-h-[288px] max-md:px-5 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://img.freepik.com/free-vector/gradient-abstract-background_23-2149123397.jpg"
                className="object-cover absolute inset-0 size-full rounded-lg"
                alt=""
              />
              <div className="flex relative flex-col items-center w-full">
                <div className="flex flex-col justify-center items-center max-w-full text-black w-[343px]">
                  <p className="text-sm font-medium tracking-wide leading-none text-white uppercase">
                    Best Deal
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-10 text-white">
                    Special Products Deal of the Month
                  </h2>
                </div>
                <a href="/shop" className="gap-3 self-stretch mt-8 text-base font-semibold leading-tight text-[#EA4B48] rounded-[43px]">
                  Shop Now ⇾
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;