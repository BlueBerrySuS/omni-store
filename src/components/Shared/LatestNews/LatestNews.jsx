import React from 'react';

const NewsItem = ({ image, date, month, category, author, comments, title }) => (
  <div className="flex flex-col shadow-[0px_20px_50px_rgba(0,0,0,0.08)] max-md:mt-6 max-md:max-w-full">
    <div className="flex flex-col max-w-full font-medium text-center whitespace-nowrap rounded-none w-[424px]">
      <div className="flex relative flex-col items-start px-6 pt-60 pb-6 w-full rounded-lg min-h-[324px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <img
          loading="lazy"
          src={image}
          className="object-cover absolute inset-0 size-full"
          alt=""
        />
        <div className="flex relative flex-col items-center px-3 py-2 bg-white rounded h-[58px] w-[58px]">
          <div className="text-xl text-black">{date}</div>
          <div className="text-xs tracking-wide leading-none text-black uppercase">{month}</div>
        </div>
      </div>
    </div>
    <div className="flex flex-col p-6 w-full bg-white rounded-none max-w-[424px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[376px]">
        <div className="flex gap-4 items-start self-start text-sm text-black">
          <div className="flex gap-1 items-center whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7ce6d8c78547c01814e7385fa3d6050553319a3174378b39348a45fdceffd04?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              alt=""
            />
            <div className="self-stretch my-auto">{category}</div>
          </div>
          <div className="flex gap-1 items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5291266bbbf5274727bfbb59c06de22968c3bfb06bd2855314e60f1724b0e12?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              alt=""
            />
            <div className="self-stretch my-auto">
              <span className="text-zinc-500">By</span> {author}
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bcf0f402a2ce3c7ed81c1e4875c8ac169c1b6ff3f5a8dd0876fe7341b120112?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
              alt=""
            />
            <div className="self-stretch my-auto">{comments} Comments</div>
          </div>
        </div>
        <div className="mt-2 text-lg font-medium text-black">{title}</div>
      </div>
      <a href="/blog" className="gap-3 self-start mt-5 text-base font-semibold leading-tight text-[#EA4B48] rounded-[43px]">
        Read More ⇾
      </a>
    </div>
  </div>
);

const LatestNews = () => {
  const newsItems = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/597c44b2ac9c86d2dd0283a57b3d24867c8cfda6c8b04534e1fe840bbf3cfa26?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46",
      date: "18",
      month: "Nov",
      category: "Website",
      author: "Admin",
      comments: 65,
      title: "The site now exists."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/68e83f1f61c04d53c80a778335b7fa38d47709d26ea8523e255ab23ce7e1faa4?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46",
      date: "29",
      month: "Jan",
      category: "Products",
      author: "Admin",
      comments: 65,
      title: "New supply of monitors"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cbb9b6628d8ff2af91d82d427453999d6f8f32c731117f5107bbec166e95bd2?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46",
      date: "21",
      month: "Feb",
      category: "Products",
      author: "Admin",
      comments: 65,
      title: "Maecenas blandit risus elementum mauris malesuada."
    }
  ];

  return (
    <section className="mt-14 w-full max-w-[1320px] max-md:mt-10 max-md:max-w-full">
      <h2 className="text-3xl font-semibold leading-tight text-center text-black mb-8">
        Latest News 
      </h2>
      <div className="flex gap-5 max-md:flex-col">
        {newsItems.map((item, index) => (
          <div key={index} className="flex text-left flex-col w-[33%] max-md:w-full">
            <NewsItem {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;