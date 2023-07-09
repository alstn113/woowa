import styled from '@emotion/styled';

import { palette, typography } from '../../styles/theme';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  background-color: ${palette.primary};
`;

export const HeaderTitle = styled.h1`
  ${typography.title};
  color: #fcfcfd;
`;
