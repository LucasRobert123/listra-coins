import { useState } from "react";
import { produce } from "immer";
import { IProduct } from "@/entities/product";
import { api } from "@/libs/axios";

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

  return { products, getProductsFromHome, getProducts, updateProduct };
}
