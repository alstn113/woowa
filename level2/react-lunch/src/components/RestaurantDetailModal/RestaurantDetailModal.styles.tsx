import styled from '@emotion/styled';

import { palette } from '../../styles/theme';

export const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-height: 90vh;
  overflow: scroll;

  padding: 32px 16px;

  border-radius: 8px 8px 0px 0px;
  background: ${palette.grey[100]};
`;
