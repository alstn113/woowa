import { AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';

import Portal from '../portal';
import useToastStore from './toast-store';
import { ToastPosition, getToastContainerPosition } from './toast-position';
import ToastComponent from './toast-component';

const ToastProvider = () => {
  const { toasts } = useToastStore();

  const toastPositions = Object.keys(toasts) as ToastPosition[];

  const renderToastList = () => {
    return toastPositions.map((position) => {
      const positionToasts = toasts[position];

      return (
        <ToastContainer key={position} position={position}>
          <AnimatePresence initial={false}>
            {positionToasts.map((toast) => (
              <ToastComponent key={toast.id} {...toast} />
            ))}
          </AnimatePresence>
        </ToastContainer>
      );
    });
  };

  return <Portal id="toast">{renderToastList()}</Portal>;
};

const ToastContainer = styled.div<{ position: ToastPosition }>`
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  ${({ position }) => getToastContainerPosition(position)}
`;

export default ToastProvider;
