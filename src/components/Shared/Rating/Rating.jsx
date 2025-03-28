const Rating = ({ value, maxStars = 5 }) => {
    return (
      <div
        className="flex items-center"
        role="img"
        aria-label={`Rating: ${value} out of ${maxStars} stars`}
      >
        {[...Array(maxStars)].map((_, index) => (
          <img
            key={index}
            src={
              index < value
                ? "https://cdn.builder.io/api/v1/image/assets/TEMP/716c2a58844b4b53e48817c1069c9379c232816099dcfb29b5da942cb66e81fe?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
                : "https://cdn.builder.io/api/v1/image/assets/TEMP/d683155fc207d4c468c2ece484ae142dd3f0d952eb8fe2148d0ce9671d7e8e46?placeholderIfAbsent=true&apiKey=f50474a5b21d437fb9b7a7b7c8e64b46"
            }
            className="object-contain aspect-square w-[18px]"
            alt=""
          />
        ))}
      </div>
    );
  };
  
  export default Rating;
  