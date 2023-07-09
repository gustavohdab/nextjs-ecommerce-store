"use client";

import Currency from "@/components/ui/currency";
import {
Tooltip,
TooltipContent,
TooltipProvider,
TooltipTrigger,
} from "@/components/ui/tooltip";
import { Product } from "@/types";
import { ShoppingCart } from "lucide-react";
import Button from "@/components/ui/button";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {data.name}
      </h1>
      <div className="mt-3 flex items-end justify-between">
        <span className="text-2xl to-gray-900">
          <Currency value={data.price} />
        </span>
      </div>
      <hr className="my-4" />

      <TooltipProvider>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>{data?.size.value}</div>
            </TooltipTrigger>
            <TooltipContent>{data?.size.name}</TooltipContent>
          </Tooltip>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: data?.color.value }}
              />
            </TooltipTrigger>
            <TooltipContent>{data?.color.name}</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center justify-center w-full py-3 text-base font-medium rounded-md text-white bg-black hover:bg-gray-900">
          <span className="text-white">Add to Cart</span>
          <ShoppingCart size={24} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Info;
