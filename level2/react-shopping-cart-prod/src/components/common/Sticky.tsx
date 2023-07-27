import React, { useState, useCallback, useRef, useEffect } from 'react';

import styled from '@emotion/styled';

import getScrollTop from '../utils/getScrollTop';

const Container = styled.div<{ isFixed: boolean }>`
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'static')};
  top: 0;
  left: 0;
`;

const Placeholder = styled.div<{ height: number; width: number }>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

export interface StickyProps {
  top: number;
  className?: string;
  children: React.ReactNode;
}

const Sticky: React.FC<StickyProps> = ({ className, top, children }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const element = useRef<HTMLDivElement | null>(null);
  const [fixed, setFixed] = useState(false);
  const [placeholderHeight, setPlaceholderHeight] = useState(0);
  const [placeholderWidth, setPlaceholderWidth] = useState(0);

  const setup = useCallback(() => {
    if (!element.current) return;
    const pos = element.current.getBoundingClientRect();
    setY(pos.top + getScrollTop());
    setX(pos.left);
  }, []);

  const onScroll = useCallback(() => {
    const scrollTop = getScrollTop();
    const nextFixed = scrollTop + 112 > y;
    if (fixed !== nextFixed) {
      setFixed(nextFixed);
      setPlaceholderHeight(
        nextFixed ? element.current?.getBoundingClientRect().height || 0 : 0,
      );
      setPlaceholderWidth(
        nextFixed ? element.current?.getBoundingClientRect().width || 0 : 0,
      );
    }
  }, [fixed, y]);

  useEffect(() => {
    setup();
  }, [setup]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return (
    <>
      {fixed && (
        <Placeholder height={placeholderHeight} width={placeholderWidth} />
      )}
      <Container
        ref={element}
        className={className}
        isFixed={fixed}
        style={{
          top: fixed ? top : undefined,
          left: fixed ? x : undefined,
        }}
      >
        {children}
      </Container>
    </>
  );
};

export default Sticky;
