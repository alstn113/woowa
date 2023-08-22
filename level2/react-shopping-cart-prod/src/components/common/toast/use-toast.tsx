import { ToastOptions } from './toast-types';
import useToastStore from './toast-store';

type UseToastOptions = Partial<
  Pick<ToastOptions, 'duration' | 'status' | 'title' | 'description'>
>;

const useToast = () => {
  const { notify } = useToastStore();

  const toast = (options?: UseToastOptions) => {
    return notify(options);
  };

  return toast;
};

export default useToast;
