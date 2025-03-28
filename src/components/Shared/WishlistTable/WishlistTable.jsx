"use client";
import React from "react";

const WishlistTable = () => {
  return (
    <section className="mx-auto mb-20 bg-white rounded-lg border border-neutral-200 w-[1320px] max-md:px-10 max-md:w-full max-sm:px-5">
      <div className="p-6 border border-neutral-200">
        <div className="flex text-sm font-medium tracking-wide uppercase text-zinc-500">
          <div className="w-[535px]">Product</div>
          <div className="w-[336px]">Price</div>
          <div className="w-[336px]">Stock Status</div>
          <div className="flex-1" />
        </div>
      </div>

      <div className="p-6 border border-neutral-200">
        <div className="flex items-center">
          <div className="flex gap-5 items-center w-[535px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/052b9167794abf9623098babd095c0abb8d7e1bb"
              alt="Green Capsicum"
              className="w-[100px] h-[100px]"
            />
            <span className="text-base text-zinc-900">Green Capsicum</span>
          </div>
          <div className="flex gap-0.5 items-center w-[336px]">
            <span className="text-base text-zinc-900">$14.99</span>
            <span className="text-base line-through text-neutral-400">
              $20.99
            </span>
          </div>
          <div className="w-[336px]">
            <span className="px-2 py-1 text-orange-800 rounded bg-green-600 bg-opacity-20">
              In Stock
            </span>
          </div>
          <div className="flex gap-6 items-center">
            <button className="px-8 py-3.5 font-semibold text-white bg-red-500 rounded-[43px]">
              Add to Cart
            </button>
            <button>
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2021_7148)">
                      <path d="M12 23C18.0748 23 23 18.0748 23 12C23 5.92525 18.0748 1 12 1C5.92525 1 1 5.92525 1 12C1 18.0748 5.92525 23 12 23Z" stroke="#CCCCCC" stroke-miterlimit="10"/>
                      <path d="M16 8L8 16" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M16 16L8 8" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2021_7148">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>`,
                }}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 border border-neutral-200">
        <div className="flex items-center">
          <div className="flex gap-5 items-center w-[535px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8776f60e0afa0f60987e4a711b4b650fa9614c3"
              alt="Chinese Cabbage"
              className="w-[100px] h-[100px]"
            />
            <span className="text-base text-zinc-900">Chinese Cabbage</span>
          </div>
          <div className="text-base text-zinc-900 w-[336px]">$45.00</div>
          <div className="w-[336px]">
            <span className="px-2 py-1 text-orange-800 rounded bg-green-600 bg-opacity-20">
              In Stock
            </span>
          </div>
          <div className="flex gap-6 items-center">
            <button className="px-8 py-3.5 font-semibold text-white bg-red-500 rounded-[43px]">
              Add to Cart
            </button>
            <button>
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2021_12412)">
                      <path d="M12 23C18.0748 23 23 18.0748 23 12C23 5.92525 18.0748 1 12 1C5.92525 1 1 5.92525 1 12C1 18.0748 5.92525 23 12 23Z" stroke="#CCCCCC" stroke-miterlimit="10"/>
                      <path d="M16 8L8 16" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M16 16L8 8" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2021_12412">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>`,
                }}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center">
          <div className="flex gap-5 items-center w-[535px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcc43474fe82d86168364a1b626b7280ff2138a8"
              alt="Fresh Sujapuri Mango"
              className="w-[100px] h-[100px]"
            />
            <span className="text-base text-zinc-900">
              Fresh Sujapuri Mango
            </span>
          </div>
          <div className="text-base text-zinc-900 w-[336px]">$09.00</div>
          <div className="w-[336px]">
            <span className="px-2 py-1 text-red-500 rounded bg-red-500 bg-opacity-20">
              Out of Stock
            </span>
          </div>
          <div className="flex gap-6 items-center">
            <button className="px-8 py-3.5 font-semibold bg-zinc-100 rounded-[43px] text-zinc-400">
              Add to Cart
            </button>
            <button>
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2021_11208)">
                      <path d="M12 23C18.0748 23 23 18.0748 23 12C23 5.92525 18.0748 1 12 1C5.92525 1 1 5.92525 1 12C1 18.0748 5.92525 23 12 23Z" stroke="#CCCCCC" stroke-miterlimit="10"/>
                      <path d="M16 8L8 16" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M16 16L8 8" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2021_11208">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>`,
                }}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 border border-neutral-200">
        <div className="flex gap-2.5 items-center">
          <span className="text-sm text-zinc-900">Share:</span>
          <div className="flex gap-1.5">
            <button>
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20.0004" r="20" fill="#EA4B48"/>
                    <g clip-path="url(#clip0_460_42649)">
                      <path d="M22.9981 13.9891H24.6414V11.1271C24.3579 11.0881 23.3829 11.0004 22.2474 11.0004C19.8781 11.0004 18.2551 12.4906 18.2551 15.2296V17.7504H15.6406V20.9499H18.2551V29.0004H21.4606V20.9506H23.9694L24.3676 17.7511H21.4599V15.5469C21.4606 14.6221 21.7096 13.9891 22.9981 13.9891Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_460_42649">
                        <rect width="18" height="18" fill="white" transform="translate(11 11.0004)"/>
                      </clipPath>
                    </defs>
                  </svg>`,
                }}
              />
            </button>
            <button>
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_460_42650)">
                      <path d="M29 14.4192C28.3306 14.7129 27.6174 14.9075 26.8737 15.002C27.6388 14.5452 28.2226 13.8275 28.4971 12.9624C27.7839 13.3876 26.9964 13.688 26.1571 13.8556C25.4799 13.1345 24.5146 12.6879 23.4616 12.6879C21.4186 12.6879 19.7739 14.3461 19.7739 16.379C19.7739 16.6715 19.7986 16.9527 19.8594 17.2205C16.7915 17.0709 14.0769 15.6005 12.2533 13.3606C11.9349 13.913 11.7481 14.5452 11.7481 15.2259C11.7481 16.5039 12.4062 17.6367 13.3872 18.2926C12.7944 18.2814 12.2127 18.1092 11.72 17.8381C11.72 17.8494 11.72 17.864 11.72 17.8786C11.72 19.6719 12.9991 21.1614 14.6765 21.5045C14.3761 21.5866 14.0487 21.626 13.709 21.626C13.4727 21.626 13.2342 21.6125 13.0104 21.563C13.4885 23.0244 14.8453 24.0987 16.4585 24.1336C15.203 25.1157 13.6089 25.7075 11.8831 25.7075C11.5805 25.7075 11.2902 25.694 11 25.6569C12.6346 26.711 14.5719 27.3129 16.661 27.3129C23.4515 27.3129 27.164 21.6879 27.164 16.8121C27.164 16.649 27.1584 16.4915 27.1505 16.3351C27.8829 15.8154 28.4982 15.1662 29 14.4192Z" fill="#4D4D4D"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_460_42650">
                        <rect width="18" height="18" fill="white" transform="translate(11 11.0004)"/>
                      </clipPath>
                    </defs>
                  </svg>`,
                }}
              />
            </button>
            <button>
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_460_42651)">
                      <path d="M20.2445 11.0004C15.3111 11.0004 12.6875 14.1618 12.6875 17.6089C12.6875 19.2076 13.5808 21.2012 15.0107 21.8335C15.2279 21.9314 15.346 21.8897 15.3944 21.6883C15.4371 21.5353 15.625 20.7984 15.7161 20.4508C15.7443 20.3394 15.7296 20.2427 15.6396 20.138C15.1649 19.589 14.788 18.5888 14.788 17.6505C14.788 15.2463 16.6994 12.9118 19.952 12.9118C22.7646 12.9118 24.7323 14.7389 24.7323 17.3524C24.7323 20.3057 23.1696 22.3488 21.1389 22.3488C20.015 22.3488 19.1779 21.4667 19.4434 20.3754C19.7641 19.076 20.393 17.6787 20.393 16.7415C20.393 15.9011 19.9182 15.2058 18.9484 15.2058C17.8042 15.2058 16.8761 16.3387 16.8761 17.8598C16.8761 18.8262 17.2181 19.4787 17.2181 19.4787C17.2181 19.4787 16.0863 24.051 15.8759 24.9049C15.5204 26.3506 15.9243 28.6918 15.9591 28.8932C15.9805 29.0046 16.1054 29.0394 16.1752 28.9483C16.2865 28.802 17.6546 26.8501 18.0382 25.4393C18.1777 24.9251 18.7504 22.8404 18.7504 22.8404C19.1273 23.5211 20.2152 24.0915 21.374 24.0915C24.8212 24.0915 27.312 21.0617 27.312 17.3018C27.2997 13.6971 24.2148 11.0004 20.2445 11.0004Z" fill="#4D4D4D"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_460_42651">
                        <rect width="18" height="18" fill="white" transform="translate(11 11.0004)"/>
                      </clipPath>
                    </defs>
                  </svg>`,
                }}
              />
            </button>
            <button>
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_460_42652)">
                      <path d="M28.982 16.2924C28.9398 15.336 28.7852 14.6785 28.5636 14.1087C28.335 13.504 27.9834 12.9625 27.5227 12.5124C27.0726 12.0553 26.5276 11.7001 25.9298 11.4751C25.3568 11.2535 24.7027 11.0989 23.7463 11.0567C22.7827 11.0109 22.4768 11.0004 20.033 11.0004C17.5892 11.0004 17.2833 11.0109 16.3233 11.0531C15.3669 11.0953 14.7094 11.2501 14.1397 11.4715C13.5348 11.7001 12.9934 12.0517 12.5433 12.5124C12.0861 12.9625 11.7311 13.5075 11.506 14.1053C11.2844 14.6785 11.1297 15.3324 11.0876 16.2888C11.0418 17.2524 11.0312 17.5583 11.0312 20.0021C11.0312 22.446 11.0418 22.7519 11.084 23.7118C11.1262 24.6682 11.281 25.3258 11.5025 25.8955C11.7311 26.5003 12.0861 27.0418 12.5433 27.4919C12.9934 27.949 13.5384 28.3042 14.1362 28.5292C14.7094 28.7507 15.3633 28.9054 16.3199 28.9476C17.2797 28.9899 17.5857 29.0003 20.0296 29.0003C22.4734 29.0003 22.7793 28.9899 23.7393 28.9476C24.6957 28.9054 25.3532 28.7507 25.9228 28.5292C27.1325 28.0615 28.0889 27.1051 28.5566 25.8955C28.778 25.3223 28.9328 24.6682 28.975 23.7118C29.0172 22.7519 29.0277 22.446 29.0277 20.0021C29.0277 17.5583 29.0242 17.2524 28.982 16.2924ZM27.3611 23.6415C27.3223 24.5206 27.1747 24.9953 27.0516 25.3118C26.7491 26.0959 26.1268 26.7183 25.3426 27.0207C25.0261 27.1438 24.548 27.2915 23.6724 27.3301C22.723 27.3724 22.4382 27.3828 20.0366 27.3828C17.6349 27.3828 17.3466 27.3724 16.4006 27.3301C15.5215 27.2915 15.0468 27.1438 14.7304 27.0207C14.3401 26.8765 13.9849 26.648 13.6966 26.3491C13.3978 26.0572 13.1692 25.7056 13.025 25.3153C12.9019 24.9989 12.7542 24.5206 12.7156 23.6451C12.6733 22.6957 12.6629 22.4108 12.6629 20.0091C12.6629 17.6075 12.6733 17.3192 12.7156 16.3733C12.7542 15.4942 12.9019 15.0195 13.025 14.7031C13.1692 14.3127 13.3978 13.9576 13.7002 13.6692C13.992 13.3703 14.3436 13.1417 14.7339 12.9977C15.0504 12.8746 15.5287 12.7269 16.4042 12.6882C17.3536 12.646 17.6385 12.6355 20.04 12.6355C22.4452 12.6355 22.73 12.646 23.6759 12.6882C24.555 12.7269 25.0297 12.8746 25.3462 12.9977C25.7364 13.1417 26.0916 13.3703 26.3799 13.6692C26.6788 13.9611 26.9074 14.3127 27.0516 14.7031C27.1747 15.0195 27.3223 15.4977 27.3611 16.373C27.4032 17.3224 27.4138 17.6075 27.4138 20.0091C27.4138 22.4108 27.4032 22.6921 27.3611 23.6415Z" fill="#4D4D4D"/>
                      <path d="M20.0341 15.3782C17.4813 15.3782 15.4102 17.4492 15.4102 20.0021C15.4102 22.555 17.4813 24.6261 20.0341 24.6261C22.587 24.6261 24.6581 22.555 24.6581 20.0021C24.6581 17.4492 22.587 15.3782 20.0341 15.3782ZM20.0341 23.0016C18.378 23.0016 17.0347 21.6584 17.0347 20.0021C17.0347 18.3459 18.378 17.0027 20.0341 17.0027C21.6903 17.0027 23.0335 18.3459 23.0335 20.0021C23.0335 21.6584 21.6903 23.0016 20.0341 23.0016Z" fill="#4D4D4D"/>
                      <path d="M25.9189 15.1953C25.9189 15.7915 25.4355 16.2748 24.8393 16.2748C24.2431 16.2748 23.7598 15.7915 23.7598 15.1953C23.7598 14.5991 24.2431 14.1158 24.8393 14.1158C25.4355 14.1158 25.9189 14.5991 25.9189 15.1953Z" fill="#4D4D4D"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_460_42652">
                        <rect width="18" height="18" fill="white" transform="translate(11 11.0004)"/>
                      </clipPath>
                    </defs>
                  </svg>`,
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishlistTable;
