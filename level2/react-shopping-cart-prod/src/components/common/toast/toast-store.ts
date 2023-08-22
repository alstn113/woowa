import { create } from 'zustand';

import { ToastOptions, ToastState } from './toast-types';
import { ToastPosition } from './toast-placement';

interface ToastStore {
  toasts: ToastState;
  notify: (options?: CreateToastOptions) => void;
  removeToast: (id: ToastOptions['id'], position: ToastPosition) => void;
}

const useToastStore = create<ToastStore>((set) => ({
  toasts: {
    'top-center': [],
    'top-left': [],
    'top-right': [],
    'bottom-center': [],
    'bottom-left': [],
    'bottom-right': [],
  },
  notify: (options) => {
    const toast = createToast(options);
    const { position } = toast;

    set((state) => {
      const isTop = position.includes('top');

      return {
        toasts: {
          ...state.toasts,
          [position]: isTop
            ? [toast, ...state.toasts[position]]
            : [...state.toasts[position], toast],
        },
      };
    });
  },
  removeToast: (id, position) =>
    set((state) => ({
      toasts: {
        ...state.toasts,
        [position]: state.toasts[position].filter((toast) => toast.id !== id),
      },
    })),
}));

let counter = 0;

type CreateToastOptions = Partial<
  Pick<
    ToastOptions,
    'duration' | 'status' | 'title' | 'description' | 'position'
  >
>;

const createToast = (options: CreateToastOptions = {}) => {
  counter += 1;

  const id = counter;
  const duration =
    typeof options.duration === 'undefined' ? 5000 : options.duration;
  const position = options.position || 'bottom-center';
  const status = options.status || 'info';
  const handleRequestClose = () =>
    useToastStore.getState().removeToast(id, position);

  return {
    id,
    title: options.title,
    description: options.description,
    position,
    duration,
    status,
    onRequestClose: handleRequestClose,
  };
};

export default useToastStore;
