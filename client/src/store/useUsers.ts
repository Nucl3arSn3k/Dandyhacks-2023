import { create } from "zustand";

export interface UserInfo {
  currency: number;
  ownsDolphin: boolean;
  ownsSail: boolean;
  ownsParrot: boolean;
    setCurrency: (currency: number) => void;
    setOwnsDolphin: (ownsDolphin: boolean) => void;
    setOwnsSail: (ownsSail: boolean) => void;
    setOwnsParrot: (ownsParrot: boolean) => void;
}

export const useUser = create<UserInfo>()((set) => ({
  currency: 400,
  ownsDolphin: false,
  ownsSail: false,
  ownsParrot: false,

  setCurrency: (currency: number) => set({ currency }),
  setOwnsDolphin: (ownsDolphin: boolean) => set({ ownsDolphin }),
  setOwnsSail: (ownsSail: boolean) => set({ ownsSail }),
  setOwnsParrot: (ownsParrot: boolean) => set({ ownsParrot }),
}));
