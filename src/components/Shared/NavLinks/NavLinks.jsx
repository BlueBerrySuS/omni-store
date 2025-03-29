const NavLinks = () => {
    return (
      <nav className="flex flex-wrap gap-10 justify-between items-center px-72 py-4 w-full text-sm font-medium max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-8 items-center self-stretch my-auto min-w-60 text-stone-500 max-md:max-w-full">
          <a
            href="/"
            className="flex gap-1 items-center self-stretch my-auto text-red-500 whitespace-nowrap"
          >
            <span>Home</span>
            <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rotate-[3.141592653589793rad]" />
          </a>
          <a
            href="/shop"
            className="flex gap-1 items-center self-stretch my-auto whitespace-nowrap"
          >
            <span>Shop</span>
            <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rotate-[3.141592653589793rad]" />
          </a>
          <a
            href="/pages"
            className="flex gap-1 items-center self-stretch my-auto whitespace-nowrap"
          >
            <span>Pages</span>
            <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rotate-[3.141592653589793rad]" />
          </a>
          <a
            href="/blog"
            className="flex gap-1 items-center self-stretch my-auto whitespace-nowrap"
          >
            <span>Blog</span>
            <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rotate-[3.141592653589793rad]" />
          </a>
          <a href="/about" className="gap-1 self-stretch my-auto">
            About Us
          </a>
          <a href="/contact" className="gap-1 self-stretch my-auto">
            Contact Us
          </a>
        </div>
        <a
          href="tel:(219)555-0114"
          className="flex gap-2 items-center self-stretch my-auto text-zinc-900"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3603d8a2a5bd19740c86e0d98926531528f390d7?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
            alt="Phone icon"
            className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
          />
          <span>(219) 555-0114</span>
        </a>
      </nav>
    );
  };
  
  export default NavLinks;
  