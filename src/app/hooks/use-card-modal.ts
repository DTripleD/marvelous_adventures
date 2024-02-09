import { create } from "zustand";

type CardModalStore = {
  hero?: any;
  isOpen: boolean;
  onOpen: (id: string) => void;
  onClose: () => void;
};

export const useCardModal = create<CardModalStore>((set) => ({
  hero: undefined,
  isOpen: false,
  onOpen: (hero: any) => set({ isOpen: true, hero }),
  onClose: () => set({ isOpen: false, hero: undefined }),
}));
