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

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spacing = styled.div<{ x?: number; y?: number }>`
  ${(props) =>
    props.x &&
    css`
      width: ${props.x}rem;
    `}
  ${(props) =>
    props.y &&
    css`
      height: ${props.y}rem;
    `}
`;
