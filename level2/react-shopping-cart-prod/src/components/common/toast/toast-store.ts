import React from 'react';

import { create } from 'zustand';

import { ToastState } from './toast-types';

interface ToastStore {
  bottom: ToastState['bottom'];
  nofity: (message: React.ReactNode) => void;
  close: () => void;
}

const useToastStore = create<ToastStore>((set) => ({
  bottom: [],
  nofity: (message) =>
    set((state) => ({
      bottom: [
        ...state.bottom,
        {
          id: Math.random(),
          duration: 3000,
          message,
        },
      ],
    })),
  close: () => set((state) => ({ bottom: state.bottom.slice(1) })),
}));

export default useToastStore;
