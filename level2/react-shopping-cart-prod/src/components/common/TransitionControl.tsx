/* eslint-disable @typescript-eslint/no-unused-vars */
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
  onLeave?: () => void;
}

const TransitionControl = ({
  children,
  visible,
  enterEffect = 'fade',
  leaveEffect = 'fade',
  enterTime = 1000,
  leaveTime = 1000,
  onLeave,
}: TransitionControlProps) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [closed, setClosed] = useState<boolean>(visible);

  useEffect(() => {
    if (visible) {
      setClosed(false);
    } else {
      timeoutRef.current = setTimeout(() => {
        setClosed(false);
        onLeave?.();
      }, leaveTime);
    }

    return () => {
      if (!timeoutRef.current) return;
      clearTimeout(timeoutRef.current);
    };
  }, [visible, leaveTime, onLeave]);

  if (!visible && closed) return null;

  return (
    <Div visible={visible} enterTime={enterTime} leaveTime={leaveTime}>
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

const Div = styled.div<{
  visible: boolean;
  enterTime: number;
  leaveTime: number;
}>`
  ${(props) =>
    props.visible
      ? css`
          animation: ${fadeIn} ${props.enterTime}ms ease-in-out forwards;
        `
      : css`
          animation: ${fadeOut} ${props.leaveTime}ms ease-in-out forwards;
        `}
`;

export default TransitionControl;
