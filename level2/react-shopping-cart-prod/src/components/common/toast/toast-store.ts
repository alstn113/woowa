import React from 'react';

import { create } from 'zustand';

import { ToastOptions, ToastState } from './toast-types';

interface ToastStore {
  toasts: ToastState;
  nofity: (
    message: React.ReactNode,
    options: ToastOptions,
  ) => ToastOptions['id'];
  close: () => void;
}

const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  nofity: (message, options) => {
    const toast = createToast(message, options);
    set((state) => ({ toasts: [...state.toasts, toast] }));
    return toast.id;
  },
  close: () =>
    set((state) => ({
      toasts: state.toasts.slice(1),
    })),
}));

let counter = 0;

const createToast = (message: React.ReactNode, options: ToastOptions) => {
  counter += 1;
  const id = options.id ?? counter;

  return {
    id,
    message,
    duration: options.duration,
  };
};

export default useToastStore;
