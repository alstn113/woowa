import { forwardRef } from 'react';

import styled from '@emotion/styled';

import TransitionControl from '../transition-control';
import { useBottomSheetContext } from './bottom-sheet-context';

interface BottomSheetWrapperProps {
  children: React.ReactNode;
}

const BottomSheetWrapper = forwardRef<HTMLDivElement, BottomSheetWrapperProps>(
  function BottomSheetWrapper({ children }: BottomSheetWrapperProps, ref) {
    const { isOpen } = useBottomSheetContext();

    return (
      <TransitionControl visible={isOpen}>
        <StyledBottomSheetWrapper ref={ref}>
          {children}
        </StyledBottomSheetWrapper>
      </TransitionControl>
    );
  },
);

const StyledBottomSheetWrapper = styled.div``;

export default BottomSheetWrapper;
