import { AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';

import Portal from '../portal';
import useToastStore from './toast-store';
import ToastComponent from './toast-component';

const ToastProvider = () => {
  const { toasts } = useToastStore();

  const toastList = () => {
    return (
      <ToastContainer>
        <AnimatePresence initial={false}>
          {toasts.map((toast) => (
            <ToastComponent key={toast.id} {...toast} />
          ))}
        </AnimatePresence>
      </ToastContainer>
    );
  };

  return <Portal id="toast">{toastList()}</Portal>;
};

const ToastContainer = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default ToastProvider;
