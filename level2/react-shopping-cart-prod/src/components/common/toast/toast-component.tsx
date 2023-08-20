// Framer motion 코드가 들어갈 부분.

import { useState } from 'react';

import { motion, Variants } from 'framer-motion';

import useTimeout from '../hooks/use-timeout';
import useDidUpdateEffect from '../hooks/use-did-update-effect';

interface ToastComponentProps {
  duration: number;
}

const motionVariants: Variants = {
  initial: {},
  animate: {},
  exit: {},
};

const ToastComponent = (props: ToastComponentProps) => {
  const { duration } = props;
  const [delay, setDelay] = useState<number | null>(duration);

  useDidUpdateEffect(() => {
    setDelay(duration);
  }, [duration]);

  const onMouseEnter = () => setDelay(null);
  const onMouseLeave = () => setDelay(duration);

  const close = () => {};

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
