import React from 'react';

import { create } from 'zustand';

import { ToastState } from './toast-types';

interface ToastStore {
  toasts: ToastState;
  nofity: (message: React.ReactNode) => void;
  close: () => void;
}

const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  nofity: (message) =>
    set((state) => {
      const toast = createToast(message);
      return {
        toasts: [...state.toasts, toast],
      };
    }),
  close: () =>
    set((state) => ({
      toasts: state.toasts.slice(1),
    })),
}));

let counter = 0;

const createToast = (message: React.ReactNode) => {
  counter += 1;
  const id = counter;

  return {
    id,
    message,
  };
};

export default useToastStore;
