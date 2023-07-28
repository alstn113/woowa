import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { useBottomSheetContext } from './bottom-sheet-context';

interface BottomSheetContentProps {
  children?: React.ReactNode;
}

const BottomSheetContent = ({ children }: BottomSheetContentProps) => {
  const { isOpen } = useBottomSheetContext();

  return (
    <StyledBottomSheetContent isOpen={isOpen}>
      <div className="body">{children}</div>
    </StyledBottomSheetContent>
  );
};

const StyledBottomSheetContent = styled.div<{ isOpen: boolean }>`
  width: 100%;
  position: relative;
  background: #fff;
  max-height: 100vh;
  height: 50vh;
  max-width: 1150px;
  padding: 25px 30px;
  transform: translateY(100%);
  border-radius: 12px 12px 0 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.03);
  transition: 0.3s ease;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateY(0);
    `}

  .body {
    height: 100%;
    overflow-y: auto;
    padding: 15px 0 40px;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      width: 0;
    }
    h2 {
      font-size: 1.8rem;
    }
    p {
      margin-top: 20px;
      font-size: 1.05rem;
    }
  }
`;
export default BottomSheetContent;
