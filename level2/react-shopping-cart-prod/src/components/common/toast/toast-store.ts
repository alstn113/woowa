import React from 'react';

import { create } from 'zustand';

import { ToastOptions, ToastState } from './toast-types';

interface ToastStore {
  toasts: ToastState;
  notify: (
    message: ToastOptions['message'],
    options?: CreateToastOptions,
  ) => ToastOptions['id'];
  close: () => void;
  removeToast: (id: ToastOptions['id']) => void;
}

const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  notify: (message, options) => {
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

type CreateToastOptions = Partial<Pick<ToastOptions, 'duration'>>;

const createToast = (
  message: React.ReactNode,
  options: CreateToastOptions = {},
) => {
  counter += 1;

  const id = counter;
  const duration = options.duration ?? 5000;
  const handleRequestClose = () => useToastStore.getState().removeToast(id);

  return {
    id,
    message,
    duration,
    onRequestClose: handleRequestClose,
    requestClose: false,
  };
};

export default useToastStore;
