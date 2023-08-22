import { AnimatePresence } from 'framer-motion';

import Portal from '../portal';
import useToastStore from './toast-store';
import { getToastContainerStyle } from './toast-placement';
import ToastComponent from './toast-component';

const ToastProvider = () => {
  const { toasts } = useToastStore();

  const stateKeys = Object.keys(toasts) as Array<keyof typeof toasts>;
  const toastList = stateKeys.map((position) => {
    const positionToasts = toasts[position];
    return (
      <div key={position} style={getToastContainerStyle(position)}>
        <AnimatePresence initial={false}>
          {positionToasts.map((toast) => (
            <ToastComponent key={toast.id} {...toast} />
          ))}
        </AnimatePresence>
      </div>
    );
  });

  return <Portal id="toast">{toastList}</Portal>;
};

export default ToastProvider;
