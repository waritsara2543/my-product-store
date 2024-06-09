import { ICategory, IProduct } from "@/interfaces/products";
import { price } from "@/mocks/category";
import useProductStore from "@/stores/product/product.store";
import { use, useCallback, useMemo, useState } from "react";

export default function useFilter() {
  const { products, category, sortBy, gender, pricing, color, search } =
    useProductStore();

  const sortProducts = useCallback(
    (tempProducts: IProduct[]) => {
      if (sortBy === "price-desc") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      } else if (sortBy === "discount") {
        tempProducts = tempProducts.sort(
          (a, b) => b.oldPrice - b.price - (a.oldPrice - a.price)
        );
      } else if (sortBy === "newest") {
        tempProducts = tempProducts.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      } else {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }

      return tempProducts;
    },
    [sortBy]
  );

  const filterdProducts = useMemo(() => {
    let tempProducts = [...products];

    if (category !== "") {
      // filter by category
      tempProducts = tempProducts.filter((p) =>
        p.category.some((c) => c.id === category)
      );
    }

    if (gender !== "all") {
      tempProducts = tempProducts.filter((p) =>
        p.gender.some((c) => c.id === gender)
      );
    }

    if (pricing !== "all") {
      const value = price.find((p) => p.id === pricing);
      if (!value) return tempProducts;
      if (!value.value.includes("-")) {
        tempProducts = tempProducts.filter((p) => p.price >= 200);
      } else {
        const [min, max] = value.value.split("-").map(Number);
        tempProducts = tempProducts.filter(
          (p) => p.price >= min && p.price <= max
        );
      }
    }

    if (color !== "") {
      tempProducts = tempProducts.filter((p) =>
        p.color.some((c) => c.id === color)
      );
    }

    if (search) {
      tempProducts = tempProducts.filter((product: IProduct) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    sortProducts(tempProducts);
    return tempProducts;
  }, [products, category, gender, pricing, color, search, sortProducts]);

  return { filterdProducts };
}
