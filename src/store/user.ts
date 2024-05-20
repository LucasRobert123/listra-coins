import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { IUser } from "@/entities/user";

const initialState = {
  id: undefined,
  name: undefined,
  email: undefined,
  password: undefined,
  balance: undefined,
} as Partial<IUser>;

export type UserStore = Partial<IUser> & {
  setUser: (user: IUser) => void;
  resetUser: () => void;
};

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      ...initialState,
      setUser: (user: IUser) => {
        set((state) => ({ ...state, ...user }));
      },
      resetUser: () => {
        set((state) => ({ ...state, ...initialState }));
      },
    }),
    { name: "user-storage", storage: createJSONStorage(() => AsyncStorage) }
  )
);
