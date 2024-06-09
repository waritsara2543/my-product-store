import { ICategory } from "@/interfaces/products";
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  BookOpenIcon,
  ClockIcon,
  CurrencyDollarIcon,
  HandRaisedIcon,
  LightBulbIcon,
  ShoppingBagIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

export const category: ICategory[] = [
  {
    id: "1",
    value: "AI",
    icon: <HandRaisedIcon className="w-4 h-4" />,
  },
  {
    id: "2",
    value: "Fashion",
    icon: <ShoppingBagIcon className="w-4 h-4" />,
  },
  {
    id: "3",
    value: "Books",
    icon: <BookOpenIcon className="w-4 h-4" />,
  },
  {
    id: "4",
    value: "Toys",
    icon: <TruckIcon className="w-4 h-4" />,
  },
  {
    id: "5",
    value: "Electronics",
    icon: <LightBulbIcon className="w-4 h-4" />,
  },
];

export const gender: ICategory[] = [
  {
    id: "1",
    value: "Men",
  },
  {
    id: "2",
    value: "Women",
  },
  {
    id: "3",
    value: "Kids",
  },
  {
    id: "4",
    value: "Unisex",
  },
];

export const color: ICategory[] = [
  {
    id: "1",
    value: "#0000FF",
  },
  {
    id: "2",
    value: "#008000",
  },
  {
    id: "3",
    value: "#FF0000",
  },

  {
    id: "4",
    value: "#FFA500",
  },
  {
    id: "5",
    value: "#16a34a",
  },
  {
    id: "6",
    value: "#000000",
  },

  {
    id: "7",
    value: "#FFC0CB",
  },
];

export const sortBy: ICategory[] = [
  {
    id: "1",
    title: "Newest",
    value: "newest",
    icon: <ClockIcon className="w-4 h-4" />,
  },
  {
    id: "2",
    title: "Price: Low to High",
    value: "pricedasc",
    icon: <BarsArrowUpIcon className="w-4 h-4" />,
  },
  {
    id: "3",
    title: "Price: High to Low",
    value: "pricedesc",
    icon: <BarsArrowDownIcon className="w-4 h-4" />,
  },

  {
    id: "4",
    title: "Discount",
    value: "discount",
    icon: <CurrencyDollarIcon className="w-4 h-4" />,
  },
];

export const price: ICategory[] = [
  {
    id: "1",
    value: "0-50",
  },
  {
    id: "2",
    value: "50-100",
  },
  {
    id: "3",
    value: "100-200",
  },
  {
    id: "4",
    value: "Over 200",
  },
];
