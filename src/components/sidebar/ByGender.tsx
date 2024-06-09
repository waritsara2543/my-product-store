"use client";
import { gender } from "@/mocks/category";
import useProductStore from "@/stores/product/product.store";
import { Radio, RadioGroup } from "@nextui-org/react";
import React from "react";

const ByGender = () => {
  const { gender: genderSelected, setGender } = useProductStore();
  return (
    <div className="grid">
      <p>By Gender</p>
      <RadioGroup
        size="sm"
        className="pl-8 grid gap-1"
        value={genderSelected}
        onValueChange={(value) => {
          setGender(value);
        }}
      >
        <Radio value="all" className="py-2">
          All
        </Radio>
        {gender.map((item, index) => (
          <Radio value={item.id} className="py-2" key={index}>
            {item.value}
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
};

export default ByGender;
