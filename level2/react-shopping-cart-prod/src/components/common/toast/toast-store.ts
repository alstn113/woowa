import React from 'react';

import { create } from 'zustand';

import { ToastState } from './toast-types';

interface ToastStore {
  toasts: ToastState;
  nofity: (message: React.ReactNode) => number;
  close: () => void;
}

const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  nofity: (message) => {
    const toast = createToast(message);
    set((state) => ({ toasts: [...state.toasts, toast] }));
    return toast.id;
  },
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
