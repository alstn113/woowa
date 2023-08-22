import { create } from 'zustand';

import { ToastOptions, ToastState } from './toast-types';

interface ToastStore {
  toasts: ToastState;
  notify: (options?: CreateToastOptions) => ToastOptions['id'];
  close: (id: ToastOptions['id']) => void;
  removeToast: (id: ToastOptions['id']) => void;
}

const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  notify: (options) => {
    const toast = createToast(options);
    set((state) => ({ toasts: [...state.toasts, toast] }));
    return toast.id;
  },
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
  close: (id) =>
    set((state) => ({
      toasts: state.toasts.map((toast) => {
        if (toast.id === id) {
          return { ...toast, requestClose: true };
        }
        return toast;
      }),
    })),
}));

let counter = 0;

type CreateToastOptions = Partial<
  Pick<ToastOptions, 'duration' | 'status' | 'title' | 'description'>
>;

const createToast = (options: CreateToastOptions = {}) => {
  counter += 1;

  const id = counter;
  const duration =
    typeof options.duration === 'undefined' ? 5000 : options.duration;
  const status = options.status || 'info';
  const handleRequestClose = () => useToastStore.getState().removeToast(id);

  return {
    id,
    title: options.title,
    description: options.description,
    duration,
    status,
    onRequestClose: handleRequestClose,
    requestClose: false,
  };
};

export default useToastStore;
