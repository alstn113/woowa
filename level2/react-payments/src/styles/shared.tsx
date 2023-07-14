import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SpaceBetween = styled.div<{ gap?: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap}rem;
    `}
`;
