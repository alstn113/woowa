import usePortal from '../../../hooks/usePortal';
import BottomSheetHeader from './bottom-sheet-header';
import { BottomSheetContext } from './bottom-sheet-context';
import BottomSheetContent from './bottom-sheet-content';
import { createPortal } from 'react-dom';

interface BottomSheetProps {
  children: React.ReactNode;
}

const BottomSheet = ({ children }: BottomSheetProps) => {
  const portal = usePortal('bottom-sheet');

  if (!portal) return null;

  return createPortal(
    <BottomSheetContext.Provider value={{ portal }}>
      {children}
    </BottomSheetContext.Provider>,
    portal,
  );
};

BottomSheet.Header = BottomSheetHeader;
BottomSheet.Content = BottomSheetContent;

export default BottomSheet;
