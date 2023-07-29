import React, { useEffect, useRef, useState } from 'react';

import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

type EffectType = 'fade' | 'slide' | 'zoom' | 'flip' | 'none';

interface TransitionControlProps {
  children: React.ReactNode;
  visible: boolean;
  enterEffect?: EffectType;
  leaveEffect?: EffectType;
  enterTime?: number;
  leaveTime?: number;
  onEnter?: () => void;
  onLeave?: () => void;
}

const TransitionControl = ({
  children,
  visible,
  enterEffect = 'fade',
  leaveEffect = 'fade',
  enterTime = 1000,
  leaveTime = 1000,
  onEnter,
  onLeave,
}: TransitionControlProps) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(visible);

  useEffect(() => {
    if (visible) {
      setIsAnimating(false);
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(true);
        onEnter?.();
      }, enterTime);
    } else if (isAnimating) {
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        onLeave?.();
      }, leaveTime);
    }

    return () => {
      if (!timeoutRef.current) return;
      clearTimeout(timeoutRef.current);
    };
  }, [visible, enterTime, leaveTime, isAnimating, onEnter, onLeave]);

  if (!visible && !isAnimating) return null;

  return (
    <Div visible={visible} duration={1000}>
      {children}
    </Div>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Div = styled.div<{ visible: boolean; duration: number }>`
  ${(props) =>
    props.visible
      ? css`
          animation: ${fadeIn} ${props.duration}ms ease-in-out forwards;
        `
      : css`
          animation: ${fadeOut} ${props.duration}ms ease-in-out forwards;
        `}
`;

export default TransitionControl;
