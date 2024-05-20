import { useState } from "react";
import { produce } from "immer";
import { IProduct } from "@/entities/product";
import { api } from "@/libs/axios";

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  async function getProductsFromHome() {
    setLoading(true);
    const response = await api.get<IProduct[]>("/products?_start=0&_end=2");
    setLoading(false);
    setProducts(response.data);
    return response.data;
  }

  async function getProducts() {
    setLoading(true);
    const response = await api.get<IProduct[]>("/products");
    setLoading(false);
    setProducts(response.data);
    return response.data;
  }

  function updateProduct(productId: number, product: Partial<IProduct>) {
    setProducts(
      produce((draft) => {
        let currentProduct = draft.find((p) => p.id === productId);

        if (currentProduct) {
          Object.assign(currentProduct, product);
        }
      })
    );
  }

  return { products, loading, getProductsFromHome, getProducts, updateProduct };
}
