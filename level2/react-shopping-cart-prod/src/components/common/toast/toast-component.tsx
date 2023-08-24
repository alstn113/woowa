import { useState } from 'react';

import { motion, useIsPresent, Variants } from 'framer-motion';
import styled from '@emotion/styled';

import useTimeout from '../hooks/use-timeout';
import useDidUpdateEffect from '../hooks/use-did-update-effect';
import { ToastOptions } from './toast-types';
import { getToastAlign, ToastPosition } from './toast-position';
import Toast from './toast';

interface ToastComponentProps extends ToastOptions {}

const motionVariants: Variants = {
  initial: (props) => {
    const { position } = props;

    const isVertical = ['top-center', 'bottom-center'].includes(position);
    const isRightAligned = ['top-right', 'bottom-right'].includes(position);

    const dir = isVertical ? 'y' : 'x';
    const factor = isRightAligned || position === 'bottom-center' ? 1 : -1;

    return {
      opacity: 0,
      scale: 0.85,
      [dir]: factor * 24,
    };
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
    <ToastMotionWrapper
      layout
      variants={motionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onHoverStart={onMouseEnter}
      onHoverEnd={onMouseLeave}
      custom={{ position }}
      position={position}
    >
      <Toast
        title={title}
        description={description}
        status={status}
        onClose={close}
      />
    </ToastMotionWrapper>
  );
};

const ToastMotionWrapper = styled(motion.div)<{ position: ToastPosition }>`
  ${({ position }) => getToastAlign(position)}
`;

export default ToastComponent;
