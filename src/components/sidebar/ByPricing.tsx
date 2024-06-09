"use client";
import { price } from "@/mocks/category";
import useProductStore from "@/stores/product/product.store";
import { Radio, RadioGroup } from "@nextui-org/react";
import React from "react";

const ByPricing = () => {
  const { pricing, setPricing } = useProductStore();
  return (
    <div className="grid">
      <p>By Pricing</p>
      <RadioGroup
        size="sm"
        className="pl-8 grid gap-1"
        value={pricing}
        onValueChange={(value) => {
          setPricing(value);
        }}
      >
        {/* add all  */}
        <Radio value="all" className="py-2">
          All
        </Radio>
        {price.map((item, index) => (
          <Radio value={item.id} className="py-2" key={index}>
            {item.value}
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
};

export default ByPricing;
