const TopNav = () => {
    return (
      <nav className="flex flex-wrap gap-10 justify-between items-center px-72 py-3 w-full text-xs leading-tight shadow-sm bg-zinc-800 text-zinc-400 max-md:px-5 max-md:max-w-full">
        <p className="gap-2 self-stretch my-auto min-w-60">
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </p>
        <div className="flex gap-5 items-center self-stretch my-auto">
          <button className="text-center">Eng</button>
          <button className="text-center">USD</button>
          <div className="shrink-0 self-stretch my-auto w-0 border border-solid bg-zinc-400 border-zinc-400 h-[15px] opacity-[0.52]" />
          <div className="flex gap-1 items-start self-stretch my-auto">
            <button>Sign In</button>
            <span>/</span>
            <button>Sign Up</button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default TopNav;
  