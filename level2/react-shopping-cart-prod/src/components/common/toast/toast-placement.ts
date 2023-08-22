export type ToastPosition =
  | 'top-center'
  | 'top-left'
  | 'top-right'
  | 'bottom-center'
  | 'bottom-left'
  | 'bottom-right';

export const getToastContainerStyle = (
  position: ToastPosition,
): React.CSSProperties => {
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

  return {
    position: 'fixed',
    zIndex: 9999,
    pointerEvents: 'none',
    display: 'flex',
    flexDirection: 'column',
    margin,
    top,
    bottom,
    right,
    left,
  };
};

export function getToastStyle(position: ToastPosition): React.CSSProperties {
  const isRighty = position.includes('right');
  const isLefty = position.includes('left');

  let alignItems = 'center';
  if (isRighty) alignItems = 'flex-end';
  if (isLefty) alignItems = 'flex-start';

  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems,
  };
}
