import { create } from "zustand";

export interface UserInfo {
  currency: number;
  ownsDolphin: boolean;
  ownsSail: boolean;
  ownsEngine: boolean;
    setCurrency: (currency: number) => void;
    setOwnsDolphin: (ownsDolphin: boolean) => void;
    setOwnsSail: (ownsSail: boolean) => void;
    setOwnsEngine: (ownsEngine: boolean) => void;
}

export const useUser = create<UserInfo>()((set) => ({
  currency: 400,
  ownsDolphin: false,
  ownsSail: false,
  ownsEngine: false,

  setCurrency: (currency: number) => set({ currency }),
  setOwnsDolphin: (ownsDolphin: boolean) => set({ ownsDolphin }),
  setOwnsSail: (ownsSail: boolean) => set({ ownsSail }),
  setOwnsEngine: (ownsEngine: boolean) => set({ ownsEngine }),
}));
