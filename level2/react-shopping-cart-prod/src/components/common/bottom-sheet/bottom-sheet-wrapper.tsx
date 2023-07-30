import { useEffect, useRef } from 'react';

import { motion } from 'framer-motion';
import styled from '@emotion/styled';

import { useBottomSheetContext } from './bottom-sheet-context';

interface BottomSheetWrapperProps {
  children: React.ReactNode;
}

const BottomSheetWrapper = ({ children }: BottomSheetWrapperProps) => {
  interface Metrics {
    isDragging: boolean;
    startY: number;
    startHeight: number;
  }

  const metricsRef = useRef<Metrics>({
    isDragging: false,
    startY: 0,
    startHeight: 0,
  });

  const sheetRef = useRef<HTMLDivElement>(null);

  const { onClose } = useBottomSheetContext();

  useEffect(() => {
    const dragStart = (e: MouseEvent | TouchEvent) => {
      console.log('dragStart');

      const metrics = metricsRef.current;
      metrics.isDragging = true;
      metrics.startY = e instanceof MouseEvent ? e.pageY : e.touches[0].pageY;
      if (sheetRef.current) {
        metrics.startHeight = parseInt(sheetRef.current!.style.height, 10);
        sheetRef.current.style.transition = 'none';
      }
    };

    const dragging = (e: MouseEvent | TouchEvent) => {
      const metrics = metricsRef.current;
      if (!metrics.isDragging) return;

      const delta =
        e instanceof MouseEvent
          ? metrics.startY - e.pageY
          : metrics.startY - e.touches[0].pageY;

      const newHeight =
        metrics.startHeight + (delta / window.innerHeight) * 100;

      console.log('dragging', `${metrics.startHeight} -> ${newHeight}`);
      updateSheetHeight(newHeight);
    };

    const dragStop = () => {
      const metrics = metricsRef.current;
      if (!metrics.isDragging) return;
      metrics.isDragging = false;

      console.log('dragStop');
      if (sheetRef.current) {
        sheetRef.current.style.transition = 'height 0.3s ease';
      }
      const sheetHeight = parseInt(sheetRef.current!.style.height, 10);
      if (sheetHeight < 25) onClose();
      else if (sheetHeight > 75) updateSheetHeight(100);
      else updateSheetHeight(50);
    };

    const updateSheetHeight = (height: number) => {
      if (sheetRef.current) sheetRef.current.style.height = `${height}vh`;
    };

    updateSheetHeight(50);

    sheetRef.current?.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', dragging);
    document.addEventListener('mouseup', dragStop);

    return () => {
      sheetRef.current?.removeEventListener('mousedown', dragStart);
      document.removeEventListener('mousemove', dragging);
      document.removeEventListener('mouseup', dragStop);
    };
  }, []);

  return (
    <StyledBottomSheetWrapper
      ref={sheetRef}
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.3, bounce: 0 }}
    >
      {children}
    </StyledBottomSheetWrapper>
  );
};

const StyledBottomSheetWrapper = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 50vh;
  max-height: 100vh;
  padding: 25px 30px;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.03);
  background: #fff;
  transition: height 0.3s ease-in-out;
`;

export default BottomSheetWrapper;
