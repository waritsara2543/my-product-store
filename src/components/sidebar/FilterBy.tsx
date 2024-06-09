"use client";
import { category } from "@/mocks/category";
import useProductStore from "@/stores/product/product.store";
import { Button } from "@nextui-org/react";
import React from "react";

const FilterBy = () => {
  const { category: categorySelected, setCategory } = useProductStore();
  return (
    <div className="grid">
      <p>Filter by Category</p>
      <div className="pl-5 grid gap-1">
        {category.map((item, index) => (
          <div key={index} className="flex">
            <Button
              size="sm"
              className={`w-full justify-start hover:text-black ${
                categorySelected === item.id ? "bg-primary text-white" : ""
              }`}
              variant="light"
              startContent={item.icon}
              onClick={() => setCategory(item.id)}
            >
              {item.value}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBy;
