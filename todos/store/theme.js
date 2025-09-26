// store.js (client component)
'use client';

import { create } from 'zustand';

export const useStoreTheme = create((set,get) => ({
  bears: 0,
  isDark:true,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  getValue: (ac)=>{
    set({bears:get().bears+ac})
  },
  setIsDark:(isDark)=>set({isDark:isDark})
}));