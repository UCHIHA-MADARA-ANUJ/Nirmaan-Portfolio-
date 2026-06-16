import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LoaderState {
  hasSeenLoader: boolean;
  isLoading: boolean;
  skipLoader: () => void;
  completeLoader: () => void;
}

export const useLoaderStore = create<LoaderState>()(
  persist(
    (set) => ({
      hasSeenLoader: false,
      isLoading: true,
      skipLoader: () => set({ isLoading: false }),
      completeLoader: () => set({ hasSeenLoader: true, isLoading: false }),
    }),
    { name: 'nirman_intro_seen' }
  )
);
