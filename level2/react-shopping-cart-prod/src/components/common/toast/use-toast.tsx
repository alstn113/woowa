import { ToastOptions } from './toast-types';
import useToastStore from './toast-store';

type UseToastOptions = Partial<
  Pick<
    ToastOptions,
    'duration' | 'status' | 'title' | 'description' | 'position'
  >
>;

const useToast = (defaultOptions?: UseToastOptions) => {
  const { notify } = useToastStore();

  const toast = (options?: UseToastOptions) => {
    return notify({
      ...defaultOptions,
      ...options,
    });
  };

  return toast;
};

export default useToast;
