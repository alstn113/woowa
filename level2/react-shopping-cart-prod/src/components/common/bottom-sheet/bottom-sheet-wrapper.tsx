import { forwardRef } from 'react';

import styled from '@emotion/styled';

const MIN_Y = 60; // 바텀시트가 최대로 높이 올라갔을 때의 y 값
const BOTTOM_SHEET_HEIGHT = window.innerHeight - MIN_Y; // 바텀시트의 세로 길이

interface BottomSheetWrapperProps {
  children: React.ReactNode;
}

const BottomSheetWrapper = forwardRef<HTMLDivElement, BottomSheetWrapperProps>(
  function BottomSheetWrapper({ children }: BottomSheetWrapperProps, ref) {
    return (
      <StyledBottomSheetWrapper ref={ref}>{children}</StyledBottomSheetWrapper>
    );
  },
);

const StyledBottomSheetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: ${BOTTOM_SHEET_HEIGHT}px;
`;

export default BottomSheetWrapper;
