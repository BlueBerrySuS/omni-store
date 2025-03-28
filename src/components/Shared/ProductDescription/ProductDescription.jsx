export default function ProductDescription() {
    return (
      <div className="flex flex-col w-full rounded-none max-md:max-w-full">
        <nav className="flex flex-wrap items-start text-base font-medium bg-white shadow-sm px-[689px] text-zinc-500 max-md:px-5 max-md:max-w-full">
          <button className="p-4 whitespace-nowrap bg-white shadow-sm text-zinc-900">
            Descriptions
          </button>
          <button className="p-4 bg-white">Additional Information</button>
          <button className="p-4 bg-white">Customer Feedback</button>
        </nav>
  
        <div className="self-center mt-8 w-full max-w-[1320px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[55%] max-md:ml-0 max-md:w-full">
              <article className="grow text-sm leading-5 text-zinc-500 max-md:mt-10 max-md:max-w-full">
                <p className="max-md:max-w-full">
                  Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet
                  at posuere ac, viverra at mauris. Maecenas tincidunt ligula a
                  sem vestibulum pharetra. Maecenas auctor tortor lacus, nec
                  laoreet nisi porttitor vel. Etiam tincidunt metus vel dui
                  interdum sollicitudin. Mauris sem ante, vestibulum nec orci
                  vitae, aliquam mollis lacus. Sed et condimentum arcu, id
                  molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a
                  convallis. Morbi urna ipsum, placerat quis commodo quis, egestas
                  elementum leo. Donec convallis mollis enim. Aliquam id mi quam.
                  Phasellus nec fringilla elit.
                </p>
                <p className="mt-5">
                  Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui.
                  Sed iaculis, metus faucibus elementum tincidunt, turpis mi
                  viverra velit, pellentesque tristique neque mi eget nulla. Proin
                  luctus elementum neque et pharetra.
                </p>
  
                <ul className="mt-5 space-y-3.5">
                  {[
                    "100 g of fresh leaves provides.",
                    "Aliquam ac est at augue volutpat elementum.",
                    "Quisque nec enim eget sapien molestie.",
                    "Proin convallis odio volutpat finibus posuere.",
                  ].map((text, index) => (
                    <li key={index} className="flex gap-2 items-start">
                      <img
                        src={`URL_${113 + index}`}
                        className="object-contain shrink-0 w-5 aspect-square"
                        alt="Checkmark"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
  
                <p className="mt-5">
                  Cras et diam maximus, accumsan sapien et, sollicitudin velit.
                  Nulla blandit eros non turpis lobortis iaculis at ut massa.
                </p>
              </article>
            </div>
  
            <div className="ml-5 w-[45%] max-md:ml-0 max-md:w-full">
              <div className="w-full max-md:mt-10 max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b71a4916946e25eb33851b85029ec9070698045?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
                  className="object-contain w-full rounded-md aspect-[1.79] max-md:max-w-full"
                  alt="Product feature"
                />
  
                <div className="flex flex-wrap gap-6 justify-between items-center px-5 py-6 mt-5 w-full bg-white rounded-md border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] max-md:max-w-full">
                  <div className="flex gap-3 justify-center items-center self-stretch my-auto min-w-60">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0babdb4b03dc702e85d3809b8f1a40753eb1827?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
                      alt="Discount icon"
                    />
                    <div className="flex flex-col justify-center self-stretch my-auto w-[198px]">
                      <h3 className="text-sm font-medium text-zinc-900">
                        64% Discount
                      </h3>
                      <p className="mt-1.5 text-sm text-zinc-500">
                        Save your 64% money with us
                      </p>
                    </div>
                  </div>
  
                  <div className="flex gap-3 justify-center items-center self-stretch my-auto">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/93775d5a9ed5d9c4a73acbfac08a44c22bb1111c?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
                      alt="Organic icon"
                    />
                    <div className="flex flex-col justify-center self-stretch my-auto w-[189px]">
                      <h3 className="text-sm font-medium text-zinc-900">
                        100% Organic
                      </h3>
                      <p className="mt-1.5 text-sm text-zinc-500">
                        100% Organic Vegetables
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  