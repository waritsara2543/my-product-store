"use client";
import React, { use } from "react";
import SortBy from "./SortBy";
import FilterBy from "./FilterBy";
import ByGender from "./ByGender";
import ByPricing from "./ByPricing";
import ByColor from "./ByColor";
import { Button, Divider } from "@nextui-org/react";
import useProductStore from "@/stores/product/product.store";

const Sidebar = () => {
  const { resetFilters } = useProductStore();
  return (
    <div className="text-black w-full grid gap-5 pr-10 text-small">
      <FilterBy />
      <Divider />
      <SortBy />
      <Divider />
      <ByGender />
      <Divider />
      <ByPricing />
      <Divider />
      <ByColor />
      <Divider />
      <Button
        color="primary"
        onClick={() => {
          resetFilters();
        }}
      >
        Reset Filters
      </Button>
    </div>
  );
};

export default Sidebar;
