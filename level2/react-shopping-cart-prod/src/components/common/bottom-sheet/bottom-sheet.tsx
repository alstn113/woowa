import { createPortal } from 'react-dom';
import { useMemo } from 'react';

import usePortal from '../../../hooks/usePortal';
import BottomSheetHeader from './bottom-sheet-header';
import { BottomSheetConfig, BottomSheetProvider } from './bottom-sheet-context';
import BottomSheetContent from './bottom-sheet-content';

interface BottomSheetProps {
  children: React.ReactNode;
}

const BottomSheet = ({ children }: BottomSheetProps) => {
  const portal = usePortal('bottom-sheet');

  const bottomSheetConfig: BottomSheetConfig = useMemo(
    () => ({
      close: () => {
        console.log('close');
      },
    }),
    [],
  );

  if (!portal) return null;

  return createPortal(
    <BottomSheetProvider value={bottomSheetConfig}>
      {children}
    </BottomSheetProvider>,
    portal,
  );
};

BottomSheet.Header = BottomSheetHeader;
BottomSheet.Content = BottomSheetContent;

export default BottomSheet;
