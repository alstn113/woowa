import { ToastOptions } from './toast-types';
import { toastStore } from './toast-store';

type UseToastOptions = Partial<
  Pick<
    ToastOptions,
    'duration' | 'status' | 'title' | 'description' | 'position'
  >
>;

const useToast = (defaultOptions?: UseToastOptions) => {
  const toast = (options?: UseToastOptions) => {
    return toastStore.notify({
      ...defaultOptions,
      ...options,
    });
  };

  return toast;
};

export default useToast;
