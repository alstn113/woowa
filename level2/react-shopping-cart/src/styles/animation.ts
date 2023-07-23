import { css, keyframes } from '@emotion/react';

export const shine = keyframes`
    0% {
      opacity: 0.8;
    }
    50% {
      opacity: 0.6;
    }
    100% {
      opacity: 0.8;
    }
`;

export const skeletonAnimation = css`
  border-radius: 10px;
  border: none;
  background-color: #e0e0e0;
  animation: ${shine} 1s ease-in-out infinite;
`;
