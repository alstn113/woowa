import React from 'react';

import { create } from 'zustand';

import { ToastOptions, ToastState } from './toast-types';

interface ToastStore {
  toasts: ToastState;
  nofity: (
    message: ToastOptions['message'],
    options?: CreateToastOptions,
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

type CreateToastOptions = Partial<Pick<ToastOptions, 'id' | 'duration'>>;

const createToast = (
  message: React.ReactNode,
  options: CreateToastOptions = {},
) => {
  const { removeToast } = useToastStore();

  counter += 1;
  const id = options.id ?? counter;
  const duration = options.duration ?? 5000;
  const handleRequestClose = () => removeToast(id);

  return {
    id,
    message,
    duration,
    onRequestClose: handleRequestClose,
    requestClose: false,
  };
};

export default useToastStore;
