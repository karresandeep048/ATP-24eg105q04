import { create } from "zustand";

export const useCounterStore = create((set) => ({
  newCounter: 0,
  incrementCounter: () => set((state) => ({ newCounter: state.newCounter + 1 })),
  decrementCounter: () => set((state) => ({ newCounter: state.newCounter - 1 })),
  reset: () => set({ newCounter: 0 }),
}));
