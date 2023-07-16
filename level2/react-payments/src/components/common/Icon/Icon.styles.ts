import styled from '@emotion/styled';

export const Icon = styled.img<{ size: number }>`
  ${({ size }) => `
    width: ${size}px;
    height: ${size}px;
  `}
`;
