import { useEffect, useMemo } from 'react';

import { AnimatePresence } from 'framer-motion';

import Portal from '../portal/portal';
import BottomSheetWrapper from './bottom-sheet-wrapper';
import BottomSheetOverlay from './bottom-sheet-overlay';
import BottomSheetHeader from './bottom-sheet-header';
import { BottomSheetConfig, BottomSheetProvider } from './bottom-sheet-context';
import BottomSheetContent from './bottom-sheet-content';

interface BottomSheetProps extends BottomSheetConfig {
  children: React.ReactNode;
}

const BottomSheet = ({ children, isOpen, onClose }: BottomSheetProps) => {
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

  return (
    <Portal id="bottom-sheet">
      <BottomSheetProvider value={bottomSheetConfig}>
        <AnimatePresence>
          {isOpen && (
            <>
              <BottomSheetOverlay />
              <BottomSheetWrapper>{children}</BottomSheetWrapper>
            </>
          )}
        </AnimatePresence>
      </BottomSheetProvider>
    </Portal>
  );
};

type BottomSheetComponent = typeof BottomSheet & {
  Header: typeof BottomSheetHeader;
  Content: typeof BottomSheetContent;
};

export default BottomSheet as BottomSheetComponent;
