import { css } from '@emotion/react';

export type ToastPosition =
  | 'top-center'
  | 'top-left'
  | 'top-right'
  | 'bottom-center'
  | 'bottom-left'
  | 'bottom-right';

export const getToastContainerPosition = (position: ToastPosition) => {
  const isCenter = position.includes('center');
  const margin = isCenter ? '0 auto' : undefined;

  // env(safe-area-inset-*)은 아이폰 노치 디자인을 위한 것으로, 아이폰이 아닌 다른 기기에서는 0px로 적용됩니다.
  const top = position.includes('top')
    ? 'env(safe-area-inset-top, 0px)'
    : undefined;
  const bottom = position.includes('bottom')
    ? 'env(safe-area-inset-bottom, 0px)'
    : undefined;
  const right = !position.includes('left')
    ? 'env(safe-area-inset-right, 0px)'
    : undefined;
  const left = !position.includes('right')
    ? 'env(safe-area-inset-left, 0px)'
    : undefined;

  return css`
    margin: ${margin};
    top: ${top};
    bottom: ${bottom};
    right: ${right};
    left: ${left};
  `;
};

export function getToastAlign(position: ToastPosition) {
  const isRighty = position.includes('right');
  const isLefty = position.includes('left');

  let alignItems = 'center';
  if (isRighty) alignItems = 'flex-end';
  if (isLefty) alignItems = 'flex-start';

  return css`
    display: flex;
    flex-direction: column;
    align-items: ${alignItems};
  `;
}
