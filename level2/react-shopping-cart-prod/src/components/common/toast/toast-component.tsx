// Framer motion 코드가 들어갈 부분.

import { useState } from 'react';

import { motion, useIsPresent, Variants } from 'framer-motion';

import useTimeout from '../hooks/use-timeout';
import useDidUpdateEffect from '../hooks/use-did-update-effect';
import { ToastOptions } from './toast-types';

interface ToastComponentProps extends ToastOptions {}

const motionVariants: Variants = {
  initial: {},
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
  const { duration, onRequestClose } = props;
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
      ToastComponent
    </motion.div>
  );
};

export default ToastComponent;
