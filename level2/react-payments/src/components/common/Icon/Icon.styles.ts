import styled from '@emotion/styled';

export const Icon = styled.img<{ w: number; h: number }>`
  width: ${({ w }) => w}px;
  height: ${({ h }) => h}px;
`;
