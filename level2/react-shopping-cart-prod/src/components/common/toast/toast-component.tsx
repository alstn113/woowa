// Framer motion 코드가 들어갈 부분.

import { useCallback, useEffect, useRef, useState } from 'react';

import { motion, Variants } from 'framer-motion';

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

  const close = useCallback(() => {}, []);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!delay) return;

    timeoutRef.current = setTimeout(() => {
      close();
    }, delay);

    return () => {
      if (!timeoutRef.current) return;
      clearTimeout(timeoutRef.current);
    };
  }, [delay, close]);

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
