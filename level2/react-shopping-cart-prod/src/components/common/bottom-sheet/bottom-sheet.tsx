import { createPortal } from 'react-dom';
import { useEffect, useMemo, useRef } from 'react';

import TransitionControl from '../transition-control';
import usePortal from './hooks/use-portal';
import BottomSheetWrapper from './bottom-sheet-wrapper';
import BottomSheetOverlay from './bottom-sheet-overlay';
import BottomSheetHeader from './bottom-sheet-header';
import { BottomSheetConfig, BottomSheetProvider } from './bottom-sheet-context';
import BottomSheetContent from './bottom-sheet-content';

interface BottomSheetProps extends BottomSheetConfig {
  children: React.ReactNode;
}

const BottomSheet = ({ children, isOpen, onClose }: BottomSheetProps) => {
  const portal = usePortal('bottom-sheet');

  const bottomSheetConfig: BottomSheetConfig = useMemo(
    () => ({
      isOpen,
      onClose,
    }),
    [isOpen, onClose],
  );

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

  interface BottomSheetMetrics {
    isDragging: boolean;
    startY?: number;
    startHeight?: number;
  }

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

  if (!portal) return null;

  return createPortal(
    <TransitionControl visible={isOpen}>
      <BottomSheetProvider value={bottomSheetConfig}>
        <BottomSheetWrapper ref={sheetRef}>
          <BottomSheetOverlay />
          {children}
        </BottomSheetWrapper>
      </BottomSheetProvider>
    </TransitionControl>,
    portal,
  );
};

type BottomSheetComponent = typeof BottomSheet & {
  Header: typeof BottomSheetHeader;
  Content: typeof BottomSheetContent;
};

export default BottomSheet as BottomSheetComponent;
