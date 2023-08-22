import { ToastOptions } from './toast-types';
import useToastStore from './toast-store';

interface UseToastOptions {
  duration?: ToastOptions['duration'];
  status?: ToastOptions['status'];
}

const useToast = () => {
  const { notify } = useToastStore();

  const toast = (options?: UseToastOptions) => {
    const message = <div>토스트 메시지</div>;
    return notify(message, options);
  };

  return toast;
};

export default useToast;
