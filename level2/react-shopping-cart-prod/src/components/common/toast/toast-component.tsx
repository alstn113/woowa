import { useState } from 'react';

import { motion, useIsPresent, Variants } from 'framer-motion';
import styled from '@emotion/styled';

import useTimeout from '../hooks/use-timeout';
import useDidUpdateEffect from '../hooks/use-did-update-effect';
import { ToastOptions } from './toast-types';
import { getToastStyle } from './toast-placement';
import Toast from './toast';

interface ToastComponentProps extends ToastOptions {}

const motionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 24,
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
    y: 24,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const ToastComponent = (props: ToastComponentProps) => {
  const {
    duration,
    onRequestClose,
    status,
    title,
    description,
    position = 'bottom-center',
  } = props;
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

  // delay 이후 onRequestClose 호출 -> removeToast 호출 -> toast filter
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
      style={getToastStyle(position)}
    >
      <ToastContainer>
        <Toast
          title={title}
          description={description}
          status={status}
          onClose={close}
        />
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
