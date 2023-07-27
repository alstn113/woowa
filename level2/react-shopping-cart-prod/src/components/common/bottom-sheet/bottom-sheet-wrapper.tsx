import { StyledBottomSheetWrapper } from './bottom-sheet.styles';

interface BottomSheetWrapperProps {
  children: React.ReactNode;
}

const BottomSheetWrapper = ({ children }: BottomSheetWrapperProps) => {
  return <StyledBottomSheetWrapper>{children}</StyledBottomSheetWrapper>;
};

export default BottomSheetWrapper;
