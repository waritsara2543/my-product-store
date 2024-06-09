export interface IProduct {
  id: string;
  title: string;
  price: number;
  oldPrice: number;
  description: string;
  category: ICategory[];
  gender: ICategory[];
  color: ICategory[];
  image: string;
  rate: number;
  created_at: string;
}

export interface ICategory {
  id: string;
  value: string;
  icon?: React.ReactNode;
  title?: string;
}
