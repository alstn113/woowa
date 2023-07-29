import styled from '@emotion/styled';

import TransitionControl from '../transition-control';
import { useBottomSheetContext } from './bottom-sheet-context';

const BottomSheetOverlay = () => {
  const { isOpen, onClose } = useBottomSheetContext();

  return (
    <TransitionControl enterDuration={500} exitDuration={500} visible={isOpen}>
      <StyledBottomSheetOverlay onClick={onClose} />
    </TransitionControl>
  );
};

const StyledBottomSheetOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export default BottomSheetOverlay;
