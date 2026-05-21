import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set) => ({
      // User Profile & Score
      userName: 'Agent',
      awarenessScore: 0,
      completedModules: [],
      
      // Update Actions
      setUserName: (name) => set({ userName: name }),
      addScore: (points) => set((state) => ({ awarenessScore: state.awarenessScore + points })),
      markModuleComplete: (moduleId) => set((state) => ({
        completedModules: state.completedModules.includes(moduleId) 
          ? state.completedModules 
          : [...state.completedModules, moduleId]
      })),
      
      // Reset
      resetProgress: () => set({ awarenessScore: 0, completedModules: [] })
    }),
    {
      name: 'shadowphish-storage', // name of the item in the storage (must be unique)
    }
  )
);
