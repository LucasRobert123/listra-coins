import { IUser } from "@/entities/user";
import { create } from "zustand";

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

export const useUserStore = create<UserStore>((set) => ({
  ...initialState,
  setUser: (user: IUser) => {
    set((state) => ({ ...state, ...user }));
  },
  resetUser: () => {
    set((state) => ({ ...state, ...initialState }));
  },
}));
