"use client";
import { useCart } from "../CartContext/CartContext";

export default function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <article className="mx-5 mt-3 rounded-xl max-md:mr-2.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[36%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-3 items-center text-base text-zinc-900 max-md:mt-10">
            <img
              src={item.image}
              alt={item.name}
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[100px]"
            />
            <h3 className="self-stretch my-auto">{item.name}</h3>
          </div>
        </div>
        <div className="ml-5 w-[64%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-5 justify-between items-center self-stretch my-auto w-full text-base whitespace-nowrap text-zinc-900 max-md:mt-10 max-md:max-w-full">
            <p className="gap-1 self-stretch my-auto">
              ${item.price.toFixed(2)}
            </p>
            <div className="flex justify-center items-center self-stretch p-2 text-center bg-white border border-solid border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] rounded-[170px]">
              <button
                onClick={() =>
                  updateQuantity(item.id, Math.max(0, item.quantity - 1))
                }
                className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-square w-[34px]"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/205b8e1513d8b1b1d8277a9457c3f5c237048da3?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
                  alt="Decrease quantity"
                />
              </button>
              <span className="self-stretch my-auto w-10">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-square w-[34px]"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/93cbf8f48df470835ca55244cc5195a6a39998a0?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
                  alt="Increase quantity"
                />
              </button>
            </div>
            <p className="gap-1 self-stretch my-auto font-medium">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            <button
              onClick={() => removeItem(item.id)}
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f17a8238c8f1f5c19cfd00479d8feaf55158c8dd?placeholderIfAbsent=true&apiKey=8c853ec7083148c9a23f1b1dbee98df7"
                alt="Remove item"
              />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
