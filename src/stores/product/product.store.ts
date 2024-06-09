import { create, StoreApi } from "zustand";
import { devtools } from "zustand/middleware";
import { debounce } from "lodash";
import { IUseProductStore } from "./product.type";

const initialState = {
  search: "",
  category: "",
  sortBy: "",
  gender: "all",
  pricing: "all",
  color: "",
  products: [],
};

const useProductStore = create(
  devtools((set: StoreApi<IUseProductStore>["setState"]) => ({
    ...initialState,
    setSearch: debounce((search) => {
      set(() => ({ search }));
    }, 500),
    setCategory: (category) => set(() => ({ category })),
    setSortBy: (sortBy) => set(() => ({ sortBy })),
    setGender: (gender) => set(() => ({ gender })),
    setPricing: (pricing) => set(() => ({ pricing })),
    setColor: (color) => set(() => ({ color })),
    setProducts: (products) => set(() => ({ products })),
    resetFilters: () => set(() => ({ ...initialState })),
  }))
);

export default useProductStore;
