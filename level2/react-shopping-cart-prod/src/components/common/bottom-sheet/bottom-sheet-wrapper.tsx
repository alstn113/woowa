import { useEffect, useRef } from 'react';

import { motion } from 'framer-motion';
import styled from '@emotion/styled';

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

  useEffect(() => {
    const dragStart = (e: MouseEvent | TouchEvent) => {
      console.log('dragStart');

      const metrics = metricsRef.current;
      metrics.isDragging = true;
      metrics.startY = e instanceof MouseEvent ? e.pageY : e.touches[0].pageY;
      metrics.startHeight = parseInt(sheetRef.current!.style.height, 10);
      console.log(sheetRef.current?.style.height);
    };

    const dragging = (e: MouseEvent | TouchEvent) => {
      const metrics = metricsRef.current;
      if (!metrics.isDragging) return;
      console.log(
        'dragging',
        metrics.isDragging,
        metrics.startY,
        metrics.startHeight,
      );
    };

    const dragStop = () => {
      if (!metricsRef.current.isDragging) return;
      const metrics = metricsRef.current;
      metrics.isDragging = false;
      console.log(
        'dragStop',
        metrics.isDragging,
        metrics.startY,
        metrics.startHeight,
      );
    };

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
    <StyledBottomSheetWrapper ref={sheetRef}>
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
`;

export default BottomSheetWrapper;
