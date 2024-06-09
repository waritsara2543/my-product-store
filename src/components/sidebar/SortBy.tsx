"use client";
import { sortBy } from "@/mocks/category";
import useProductStore from "@/stores/product/product.store";
import { Button } from "@nextui-org/react";
import React from "react";

const SortBy = () => {
  const { sortBy: sortBySelected, setSortBy } = useProductStore();
  return (
    <div className="grid">
      <p>Sort By</p>
      <div className="pl-5 grid gap-1">
        {sortBy.map((item, index) => (
          <div key={index} className="flex">
            <Button
              size="sm"
              className={`w-full justify-start hover:text-black ${
                item.id === sortBySelected ? "bg-primary text-white" : ""
              }`}
              variant="light"
              startContent={item.icon}
              onClick={() => setSortBy(item.id)}
            >
              {item.title}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortBy;
