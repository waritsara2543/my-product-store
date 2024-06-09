import { IProduct } from "@/interfaces/products";

export interface IUseProductStore {
  search: string;
  setSearch: (search: string) => void;
  category: string;
  setCategory: (category: string) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  pricing: string;
  setPricing: (pricing: string) => void;
  color: string;
  setColor: (color: string) => void;
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
  resetFilters: () => void;
}
