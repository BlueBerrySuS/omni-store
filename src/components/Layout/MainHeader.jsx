import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className="flex flex-col items-center text-zinc-500 bg-white">
      <div className="flex flex-wrap gap-10 justify-around items-center px-72 py-3 w-full text-xs bg-white shadow-sm ">
        <div className="gap-2 self-stretch my-auto min-w-[240px]">
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </div>
        <div className="flex gap-5 items-center self-stretch my-auto">
          <button className="gap-1.5 self-stretch my-auto text-center whitespace-nowrap">
            Eng
          </button>
          <button className="gap-1.5 self-stretch my-auto text-center whitespace-nowrap">
            USD
          </button>
          <div className="shrink-0 self-stretch my-auto w-0 border border-solid bg-neutral-200 border-neutral-200 h-[15px]" />
          <div className="flex gap-1 items-start self-stretch my-auto">
            <Link to="/signin">Sign In</Link>
            <span>/</span>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-16 py-6 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-center w-full max-w-[1320px] max-md:max-w-full">
          <Link to="/" className="flex gap-2 items-center self-stretch my-auto text-3xl font-medium tracking-tighter leading-none whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/08300cd77a27e76898b93ceb927690fe4f09c059330f29bb6a0cbea4337a16c7?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
              className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
              alt="Omni-store logo"
            />
            <span className="self-stretch my-auto text-black">Omni-store</span>
          </Link>
          <form className="flex flex-wrap items-center self-stretch text-black whitespace-nowrap rounded-md border border-solid border-neutral-200 max-md:max-w-full">
            <label htmlFor="search-input" className="sr-only">Search</label>
            <input
              type="text"
              id="search-input"
              className="flex gap-2 items-center self-stretch py-3 pl-4 my-auto text-base leading-snug min-w-[240px] w-[400px]"
              placeholder="Search"
              aria-label="Search"
            />
            <button type="submit" className="gap-3 self-stretch px-6 py-3.5 my-auto text-sm font-semibold leading-tight bg-red-500 rounded-none max-md:px-5">
              Search
            </button>
          </form>
          <div className="flex gap-4 items-center self-stretch my-auto">
            <button aria-label="Notifications" className="p-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/39e3844ad644b75be139b107fcbd9f50ae4df274f5934600a38e3ad32e705e79?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
                className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
                alt=""
              />
            </button>
            <div className="shrink-0 self-stretch my-auto w-0 h-6 border border-solid bg-stone-300 border-stone-300" />
            <div className="flex gap-3 items-center self-stretch my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/df23ff0a404c693a3f68731572c2b024ee46c81ce5be935052062fe1a0299799?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[34px]"
                alt="Shopping cart icon"
              />
              <div className="flex flex-col self-stretch my-auto">
                <div className="text-xs leading-tight text-black">Shopping cart:</div>
                <div className="mt-2 text-sm font-medium leading-none text-black">
                  $57.00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="flex flex-wrap gap-10 justify-between items-center px-72 py-4 w-full text-sm font-medium text-black bg-zinc-800 max-md:px-5 max-md:max-w-full">
      <ul className="flex items-center space-x-8 self-stretch my-auto text-white min-w-[240px] max-md:max-w-full">
  <li>
    <Link to="/" className="flex items-center whitespace-nowrap">
      <span>Home</span>
    </Link>
  </li>
  <li>
    <Link to="/shop" className="flex items-center whitespace-nowrap">
      <span>Shop</span>
    </Link>
  </li>
  <li>
    <Link to="/pages" className="flex items-center whitespace-nowrap">
      <span>Pages</span>
    </Link>
  </li>
  <li>
    <Link to="/blog" className="flex items-center whitespace-nowrap">
      <span>Blog</span>
    </Link>
  </li>
  <li>
    <Link to="/about" className="flex items-center whitespace-nowrap">
      About Us
    </Link>
  </li>
  <li>
    <Link to="/contact" className="flex items-center whitespace-nowrap">
      Contact Us
    </Link>
  </li>
</ul>
        <div className="flex gap-2 items-center self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdfe8a9574c1fec0614987c99810138cde15926f65483ecb32551f33a0fccb84?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
            className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
            alt="Phone icon"
          />
          <a href="tel:+12195550114" className="self-stretch my-auto text-white">(219) 555-0114</a>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;