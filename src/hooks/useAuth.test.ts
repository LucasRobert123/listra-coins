import { renderHook } from "@testing-library/react-native";
import { useAuth } from "./useAuth";
import { api } from "@/libs/axios";
import { IUser, UserAuth } from "@/entities/user";

describe("Hooks: useAuth", () => {
  it("should be return user", async () => {
    const {
      result: {
        current: { login },
      },
    } = renderHook(() => useAuth());

    const mockResponse = [
      {
        id: 0,
        name: "Lucas",
        email: "lucas@gmail.com",
        password: "123",
        balance: "100.000",
      },
    ] as IUser[];

    jest.spyOn(api, "get").mockResolvedValue({ data: mockResponse });

    const userAuth = { email: "lucas@gmail.com", password: "123" } as UserAuth;

    const response = await login(userAuth);

    expect(response.length).toBeGreaterThan(0);
  });

  it("should throw an error when the user is not found", async () => {
    const {
      result: {
        current: { login },
      },
    } = renderHook(() => useAuth());

    jest.spyOn(api, "get").mockResolvedValue({ data: [] });

    const userAuth = {
      email: "lucas13@gmail.com",
      password: "123",
    } as UserAuth;

    await expect(login(userAuth)).rejects.toThrow("User not found");
  });
});
