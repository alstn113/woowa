import { forwardRef } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { useBottomSheetContext } from './bottom-sheet-context';

interface BottomSheetWrapperProps {
  children: React.ReactNode;
}

const BottomSheetWrapper = forwardRef<HTMLDivElement, BottomSheetWrapperProps>(
  function BottomSheetWrapper({ children }: BottomSheetWrapperProps, ref) {
    const { isOpen } = useBottomSheetContext();

    return (
      <StyledBottomSheetWrapper ref={ref} isOpen={isOpen}>
        {children}
      </StyledBottomSheetWrapper>
    );
  },
);

const StyledBottomSheetWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  opacity: 0;
  pointer-events: none;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  transition: 0.1s linear;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;

export default BottomSheetWrapper;
