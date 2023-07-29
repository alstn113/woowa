/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';

import { type Keyframes } from '@emotion/react';

import { StyledDiv } from './transition-control.styles';
import { fadeIn, fadeOut } from './animations';

interface TransitionControlProps {
  children: React.ReactNode;
  visible: boolean;
  enterAnimation?: Keyframes;
  exitAnimation?: Keyframes;
  enterDuration?: number;
  exitDuration?: number;
  onExit?: () => void;
}

const TransitionControl = ({
  children,
  visible,
  enterAnimation = fadeIn,
  exitAnimation = fadeOut,
  enterDuration = 1000,
  exitDuration = 1000,
  onExit,
}: TransitionControlProps) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [closed, setClosed] = useState<boolean>(visible);

  useEffect(() => {
    if (visible) {
      setClosed(false);
    } else {
      timeoutRef.current = setTimeout(() => {
        setClosed(true);
        onExit?.();
      }, exitDuration);
    }

    return () => {
      if (!timeoutRef.current) return;
      clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  if (!visible && closed) return null;

  return (
    <StyledDiv
      visible={visible}
      enterAnimation={enterAnimation}
      exitAnimation={exitAnimation}
      enterDuration={enterDuration}
      exitDuration={exitDuration}
    >
      {children}
    </StyledDiv>
  );
};

export default TransitionControl;
