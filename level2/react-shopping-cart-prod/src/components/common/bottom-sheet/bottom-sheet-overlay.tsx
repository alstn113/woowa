import styled from '@emotion/styled';

import { useBottomSheetContext } from './bottom-sheet-context';

const BottomSheetOverlay = () => {
  const { onClose } = useBottomSheetContext();

  return <StyledBottomSheetOverlay onClick={onClose} />;
};

const StyledBottomSheetOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background: #000;
`;

export default BottomSheetOverlay;
