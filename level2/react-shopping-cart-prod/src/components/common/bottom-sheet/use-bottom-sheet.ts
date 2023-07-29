import { useEffect, useRef } from 'react';

interface BottomSheetMetrics {
  isDragging: boolean;
  startY?: number;
  startHeight?: number;
}

interface UseBottomSheetProps {
  onClose: () => void;
}

const useBottomSheet = ({ onClose }: UseBottomSheetProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const sheetRef = useRef<HTMLDivElement>(null);

  const metricsRef = useRef<BottomSheetMetrics>({
    isDragging: false,
    startHeight: undefined,
    startY: undefined,
  });

  useEffect(() => {
    const dragStart = (e: MouseEvent) => {
      metricsRef.current.isDragging = true;
      metricsRef.current.startY = e.pageY;
      metricsRef.current.startHeight = parseInt(
        sheetRef.current?.style.height || '0',
        10,
      );
    };

    const dragging = (e: MouseEvent) => {
      if (!metricsRef.current.isDragging) return;
      if (!metricsRef.current.startY || !metricsRef.current.startHeight) return;

      const delta = metricsRef.current.startY - e.pageY;
      const newHeight =
        metricsRef.current.startHeight + (delta / window.innerHeight) * 100;
      updateSheetHeight(newHeight);
    };

    const dragEnd = () => {
      metricsRef.current.isDragging = false;
      const sheetHeight = parseInt(sheetRef.current?.style.height || '0', 10);
      if (sheetHeight < 25) return hideBottomSheet();
      if (sheetHeight > 75) return updateSheetHeight(100);
      return updateSheetHeight(50);
    };

    const updateSheetHeight = (height: number) => {
      if (!metricsRef.current.isDragging) return;
      metricsRef.current.isDragging = false;
      sheetRef.current!.style.height = `${height}vh`;
    };

    const hideBottomSheet = () => {
      if (!metricsRef.current.isDragging) return;
      metricsRef.current.isDragging = false;
      onClose();
    };

    sheetRef.current?.addEventListener('mousedown', dragStart);
    sheetRef.current?.addEventListener('mousemove', dragging);
    sheetRef.current?.addEventListener('mouseup', dragEnd);

    return () => {
      sheetRef.current?.removeEventListener('mousedown', dragStart);
      sheetRef.current?.removeEventListener('mousemove', dragging);
      sheetRef.current?.removeEventListener('mouseup', dragEnd);
    };
  }, [sheetRef, onClose]);

  return {
    sheetRef,
  };
};

export default useBottomSheet;
