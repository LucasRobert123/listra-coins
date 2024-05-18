import { IProduct } from "@/entities/product";
import { api } from "@/libs/axios";
import { useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);

  async function getProductsFromHome() {
    const response = await api.get<IProduct[]>("/products?_start=0&_end=2");
    setProducts(response.data);
  }

  async function getProducts() {
    const response = await api.get<IProduct[]>("/products");
    setProducts(response.data);
  }

  return { products, getProductsFromHome, getProducts };
}
