import { IUser } from "@/entities/user";
import { create } from "zustand";

const initialState = {} as IUser;

export type UserStore = IUser & {
  setUser: (user: IUser) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  ...initialState,
  setUser: (user: IUser) => {
    set((state) => ({ ...state, ...user }));
  },
}));
