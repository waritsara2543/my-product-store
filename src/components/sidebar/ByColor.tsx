"use client";
import { color } from "@/mocks/category";
import useProductStore from "@/stores/product/product.store";
import { CheckIcon } from "@heroicons/react/24/outline";
import React from "react";

const ByColor = () => {
  const { color: colorSelected, setColor } = useProductStore();
  return (
    <div className="grid w-full">
      <p>By Color</p>
      <div className="flex flex-wrap gap-1 p-1">
        {color.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.value }}
            className={`rounded-full w-6 h-6 transition duration-300 ease-in-out hover:scale-110 cursor-pointer`}
            onClick={() => setColor(item.id)}
          >
            {colorSelected === item.id && (
              <div
                className="rounded-full w-6 h-6 p-[1px] bg-opacity-20"
                style={{ backgroundColor: item.value }}
              >
                <CheckIcon className="text-white w-5 h-5 p-[1px]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ByColor;
