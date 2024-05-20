import { act, renderHook, waitFor } from "@testing-library/react-native";
import { api } from "@/libs/axios";
import { useProducts } from "./useProducts";
import { IProduct } from "@/entities/product";

describe("Hooks:useProducts", () => {
  it("should be return products from home", async () => {
    const {
      result: {
        current: { getProductsFromHome },
      },
    } = renderHook(() => useProducts());

    const mockResponse = [
      {
        id: 0,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
        name: "Tênis Nike",
        quantity: 30,
        price: 1500.0,
        state: "add-cart",
      },
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        name: "Smartphone",
        quantity: 20,
        price: 2800.0,
        state: "add-cart",
      },
    ] as IProduct[];

    jest.spyOn(api, "get").mockResolvedValue({ data: mockResponse });
    const response = await waitFor(() => act(() => getProductsFromHome()));

    expect(response.length).toBe(2);
  });

  it("should be return products", async () => {
    const {
      result: {
        current: { getProducts },
      },
    } = renderHook(() => useProducts());

    const mockResponse = [
      {
        id: 0,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
        name: "Tênis Nike",
        quantity: 30,
        price: 1500.0,
        state: "add-cart",
      },
    ] as IProduct[];

    jest.spyOn(api, "get").mockResolvedValue({ data: mockResponse });
    const response = await waitFor(() => act(() => getProducts()));

    expect(response.length).toBeGreaterThan(0);
  });
});
