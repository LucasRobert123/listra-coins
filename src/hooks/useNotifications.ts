import { INotification } from "@/entities/notification";
import { api } from "@/libs/axios";

export function useNotifications() {
  async function fetchNotificationByProductId(productId: number) {
    const response = await api.get<INotification[]>(
      `/notifications?productId=${productId}`
    );
    return response.data[0];
  }

  return { fetchNotificationByProductId };
}
