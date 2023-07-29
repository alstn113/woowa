import { createPortal } from 'react-dom';
import { useMemo } from 'react';

import useBottomSheet from './use-bottom-sheet';
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

  const { sheetRef } = useBottomSheet({
    onClose,
  });

  if (!portal) return null;

  return createPortal(
    <BottomSheetProvider value={bottomSheetConfig}>
      <BottomSheetOverlay />
      <BottomSheetWrapper ref={sheetRef}>{children}</BottomSheetWrapper>
    </BottomSheetProvider>,
    portal,
  );
};

type BottomSheetComponent = typeof BottomSheet & {
  Header: typeof BottomSheetHeader;
  Content: typeof BottomSheetContent;
};

export default BottomSheet as BottomSheetComponent;
