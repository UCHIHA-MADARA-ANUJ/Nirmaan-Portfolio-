import { create } from 'zustand';

interface LoaderState {
  hasSeenLoader: boolean;
  isLoading: boolean;
  skipLoader: () => void;
  completeLoader: () => void;
  setHasSeenLoader: (val: boolean) => void;
}

export const useLoaderStore = create<LoaderState>((set) => ({
  hasSeenLoader: false,
  isLoading: true,
  skipLoader: () => set({ isLoading: false }),
  completeLoader: () => set({ hasSeenLoader: true, isLoading: false }),
  setHasSeenLoader: (val) => set({ hasSeenLoader: val, isLoading: !val }),
}));
