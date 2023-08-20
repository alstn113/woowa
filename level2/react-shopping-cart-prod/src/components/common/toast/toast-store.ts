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
  removeToast: (id: ToastOptions['id']) => void;
}

const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  nofity: (message, options) => {
    const toast = createToast(message, options);
    set((state) => ({ toasts: [...state.toasts, toast] }));
    return toast.id;
  },
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
  close: () =>
    set((state) => ({
      toasts: state.toasts.map((toast) => ({
        ...toast,
        requestClose: true,
      })),
    })),
}));

let counter = 0;

const createToast = (message: React.ReactNode, options: ToastOptions) => {
  const { removeToast } = useToastStore();

  counter += 1;
  const id = options.id ?? counter;

  return {
    id,
    message,
    duration: options.duration,
    onRequestClose: () => removeToast(id),
    requestClose: false,
  };
};

export default useToastStore;
