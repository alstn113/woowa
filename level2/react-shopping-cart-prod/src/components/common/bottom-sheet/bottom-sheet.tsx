import BottomSheetHeader from './bottom-sheet-header';
import BottomSheetContent from './bottom-sheet-content';
import { BottomSheetContext } from './bottom-sheet-context';

interface BottomSheetProps {
  children: React.ReactNode;
}

const BottomSheet = ({ children }: BottomSheetProps) => {
  return (
    <BottomSheetContext.Provider value={children}>
      <div>BottomSheet</div>
    </BottomSheetContext.Provider>
  );
};

BottomSheet.Header = BottomSheetHeader;
BottomSheet.Content = BottomSheetContent;

export default BottomSheet;
