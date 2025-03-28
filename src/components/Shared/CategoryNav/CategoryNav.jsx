const CategoryNav = () => {
    return (
      <nav
        className="flex flex-wrap gap-10 justify-between items-center px-72 py-4 w-full text-sm font-medium max-md:px-5 max-md:max-w-full"
        aria-label="Categories"
      >
        <div className="flex flex-wrap gap-8 items-center self-stretch my-auto min-w-60 text-stone-500 max-md:max-w-full">
          {["Home", "Shop", "Pages", "Blog"].map((item, index) => (
            <button
              key={index}
              className={`flex gap-1 items-center ${index === 0 ? "text-red-500" : ""}`}
            >
              {item}
              <span className="flex w-4 h-4 rotate-180" />
            </button>
          ))}
          <button>About Us</button>
          <button>Contact Us</button>
        </div>
  
        <a
          href="tel:(219)555-0114"
          className="flex gap-2 items-center text-zinc-900"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/902d5572b371b9220834009672af39b58e694bb4b80bd1277138453065466bb8?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
            className="w-7 aspect-square"
            alt=""
          />
          <span>(219) 555-0114</span>
        </a>
      </nav>
    );
  };
  
  export default CategoryNav;
  