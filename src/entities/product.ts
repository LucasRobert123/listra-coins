import { StateProductCard } from "@/components/ProductCard";

export type IProduct = {
  id: number;
  image: string;
  name: string;
  quantity: number;
  price: number;
  state: StateProductCard;
};
