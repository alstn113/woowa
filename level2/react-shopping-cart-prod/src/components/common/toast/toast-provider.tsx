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
            <ToastComponent key={toast.id} {...toast} />
          ))}
        </AnimatePresence>
      </div>
    );
  };

  return <Portal id="toast">{toastList()}</Portal>;
};

export default ToastProvider;
