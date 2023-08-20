// Root Provider에 추가할 Provider
// useToas를 통해서 사용하기 위함.

import { AnimatePresence } from 'framer-motion';

import Portal from '../portal';
import useToastStore from './toast-store';
import ToastComponent from './toast-component';

const ToastProvider = () => {
  const { toasts } = useToastStore();

  const toastList = () => {
    return (
      <div>
        <AnimatePresence initial={false}>
          {toasts.map((toast) => (
            <ToastComponent key={toast.id} />
          ))}
        </AnimatePresence>
      </div>
    );
  };

  return <Portal id="toast">{toastList()}</Portal>;
};

export default ToastProvider;
