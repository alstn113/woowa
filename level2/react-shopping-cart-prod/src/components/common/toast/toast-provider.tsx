import { AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';

import Portal from '../portal';
import useToastStore from './toast-store';
import ToastComponent from './toast-component';

const ToastProvider = () => {
  const { toasts } = useToastStore();

  const stateKeys = Object.keys(toasts) as Array<keyof typeof toasts>;
  const toastList = stateKeys.map((position) => {
    const positionToasts = toasts[position];
    return (
      <ToastContainer key={position}>
        <AnimatePresence initial={false}>
          {positionToasts.map((toast) => (
            <ToastComponent key={toast.id} {...toast} />
          ))}
        </AnimatePresence>
      </ToastContainer>
    );
  });

  return <Portal id="toast">{toastList}</Portal>;
};

const ToastContainer = styled.div`
  position: fixed;
  pointer-events: none;
  bottom: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default ToastProvider;
