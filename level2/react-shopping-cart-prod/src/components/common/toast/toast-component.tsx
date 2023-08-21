import { useEffect, useState } from 'react';

import { motion, useIsPresent, Variants } from 'framer-motion';
import styled from '@emotion/styled';

import useTimeout from '../hooks/use-timeout';
import useDidUpdateEffect from '../hooks/use-did-update-effect';
import { ToastOptions } from './toast-types';
import Toast from './toast';

interface ToastComponentProps extends ToastOptions {}

const motionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
    x: 50,
    scale: 0.85,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const ToastComponent = (props: ToastComponentProps) => {
  const { duration, onRequestClose, requestClose } = props;
  const [delay, setDelay] = useState<number | null>(duration);
  const isPresent = useIsPresent();

  useDidUpdateEffect(() => {
    setDelay(duration);
  }, [duration]);

  const onMouseEnter = () => setDelay(null);
  const onMouseLeave = () => setDelay(duration);

  const close = () => {
    if (isPresent) onRequestClose();
  };

  // toast가 사라지면 requestClose가 true가 되고, 이때 onRequestClose를 호출한다.
  // onRequestClose는 removeToast를 호출하고, removeToast는 store에서 toast를 filter한다.
  useEffect(() => {
    if (isPresent && requestClose) {
      onRequestClose();
    }
  }, [isPresent, requestClose, onRequestClose]);

  useTimeout(close, delay);

  return (
    <motion.div
      layout
      variants={motionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onHoverStart={onMouseEnter}
      onHoverEnd={onMouseLeave}
    >
      <ToastContainer>
        <Toast />
      </ToastContainer>
    </motion.div>
  );
};

const ToastContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ToastComponent;
