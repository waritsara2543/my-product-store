"use client";
import { IProduct } from "@/interfaces/products";
import productService from "@/services/product";
import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import useProductStore from "@/stores/product/product.store";
import { Input, Spinner } from "@nextui-org/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import useFilter from "@/hooks/useFilter";

const ProductView = () => {
  const { setProducts, setSearch } = useProductStore();
  const { filterdProducts } = useFilter();
  const [loading, setLoading] = useState<boolean>(false);

  const data = useCallback(async () => {
    try {
      setLoading(true);
      const response = await productService.getProducts();
      setProducts(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [setProducts]);

  useEffect(() => {
    data();
  }, [data]);

  return (
    <div className="w-full text-black">
      <div className="flex justify-between mb-5">
        <h1 className="text-2xl font-bold">Products</h1>
        <Input
          variant="bordered"
          placeholder="Search Product"
          className="w-[250px] items-center"
          startContent={<MagnifyingGlassIcon className="w-4 h-4" />}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {loading && <Spinner />}
      {!loading && filterdProducts?.length === 0 && (
        <div className="text-center text-lg">No products found</div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-5">
        {filterdProducts?.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductView;
