import styled from '@emotion/styled';
import { Keyframes, css } from '@emotion/react';

export const StyledDiv = styled.div<{
  visible: boolean;
  enterAnimation: Keyframes;
  exitAnimation: Keyframes;
  enterDuration: number;
  exitDuration: number;
}>`
  ${({
    visible,
    enterAnimation,
    enterDuration,
    exitAnimation,
    exitDuration,
  }) =>
    visible
      ? css`
          animation: ${enterAnimation} ${enterDuration}ms ease-in-out forwards;
        `
      : css`
          animation: ${exitAnimation} ${exitDuration}ms ease-in-out forwards;
        `}
`;
