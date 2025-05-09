import { persist } from "zustand/middleware";
import { create } from "zustand/react";

export type AuthStoreType = {
  username: string | undefined;
  accessToken: string | undefined;
  isAuthenticated: boolean;

  setUsername: (name: string | undefined) => void;
  setAccessToken: (accessToken: string | undefined) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  clear: () => void;
};

export const authStore = create<AuthStoreType>()(
  persist(
    (set) => ({
      username: undefined,
      accessToken: undefined,
      isAuthenticated: false,

      setUsername: (name: string | undefined) => set({ username: name }),
      setAccessToken: (accessToken: string | undefined) =>
        set({ accessToken: accessToken }),
      setIsAuthenticated: (isAuthenticated: boolean) =>
        set({ isAuthenticated }),
      clear: () =>
        set({
          username: undefined,
          accessToken: undefined,
          isAuthenticated: false,
        }),
    }),
    {
      name: "auth-store",
    },
  ),
);
