import { renderHook } from "@testing-library/react-native";
import { useNotifications } from "./useNotifications";
import { api } from "@/libs/axios";
import { INotification } from "@/entities/notification";

describe("Hooks: useNotifications", () => {
  it("should be return notification by productId", async () => {
    const {
      result: {
        current: { fetchNotificationByProductId },
      },
    } = renderHook(() => useNotifications());

    const mockResponse = [
      {
        id: 0,
        userId: 0,
        productId: 0,
        message: "O Tênis Nike está à caminho! 🥳",
      },
    ] as INotification[];

    jest.spyOn(api, "get").mockResolvedValue({ data: mockResponse });

    const response = await fetchNotificationByProductId(mockResponse[0].id);

    expect(response.id).toBe(mockResponse[0].id);
  });
});
