"use client";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { Trash2 } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={data.images[0].url}
          alt={data.name}
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 bottom-0">
          <IconButton
            icon={<Trash2 size={16} />}
            onClick={onRemove}
            tooltip="Remove"
            className="text-gray-500 hover:text-black bg-white hover:bg-gray-100"
          />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-Trash2-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm items-center">
            <p className="text-gray-500">{data.size.value}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4 flex items-center">
              {data.color.name}
              <span
                className="ml-1 h-4 w-4 rounded-full inline-block"
                style={{ backgroundColor: data.color.value }}
              />
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
