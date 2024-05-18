import { IUser, UserAuth } from "@/entities/user";
import { api } from "@/libs/axios";
import { useUserStore } from "@/store/user";

export function useAuth() {
  const setUser = useUserStore((state) => state.setUser);

  async function login(user: UserAuth) {
    const response = await api.get<IUser[]>(
      `/users?email=${user.email}&password=${user.password}`
    );

    if (response.data.length === 0) throw new Error("User not found");

    setUser(response.data[0]);
  }

  return { login };
}
