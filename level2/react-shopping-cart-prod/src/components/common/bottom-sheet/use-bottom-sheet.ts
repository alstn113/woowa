import { useEffect, useRef } from 'react';

const MIN_Y = 60; // 바텀시트가 최대로 높이 올라갔을 때의 y 값
const MAX_Y = window.innerHeight - 80; // 바텀시트가 최소로 내려갔을 때의 y 값
type MovingDirection = 'none' | 'down' | 'up';

interface BottomSheetMetrics {
  touchStart: {
    sheetY: number; // touchstart에서 BottomSheet의 최상단 모서리의 Y값
    touchY: number; // touchstart에서 터치 포인트의 Y값
  };
  touchMove: {
    prevTouchY?: number; // 다음 touchmove 이벤트 핸들러에서 필요한 터치 포인트 Y값을 저장
    movingDirection: MovingDirection; // 유저가 터치를 움직이고 있는 방향
  };
}

const useBottomSheet = () => {
  const sheetRef = useRef<HTMLDivElement>(null);

  const metricsRef = useRef<BottomSheetMetrics>({
    touchStart: {
      sheetY: 0,
      touchY: 0,
    },
    touchMove: {
      prevTouchY: undefined,
      movingDirection: 'none',
    },
  });

  useEffect(() => {
    const handleTouchStart = (e: MouseEvent) => {
      const { touchStart } = metricsRef.current;
      const { top } = sheetRef.current?.getBoundingClientRect() || {
        top: 0,
      };

      touchStart.touchY = e.pageY;
      touchStart.sheetY = top;
    };
    const handleTouchMove = (e: MouseEvent) => {
      e.preventDefault();

      const { touchStart, touchMove } = metricsRef.current;
      const currentTouch = e.pageY;

      if (touchMove.prevTouchY === undefined) {
        touchMove.prevTouchY = currentTouch;
      }

      if (currentTouch > touchMove.prevTouchY) {
        touchMove.movingDirection = 'down';
      }

      if (currentTouch < touchMove.prevTouchY) {
        touchMove.movingDirection = 'up';
      }

      // 터치 시작점에서부터 현재 터치 포인트까지의 변화된 y값
      const touchOffset = currentTouch - touchStart.touchY;
      let nextSheetY = touchStart.sheetY + touchOffset;

      // nextSheetY 는 MIN_Y와 MAX_Y 사이의 값으로 clamp 되어야 한다
      if (nextSheetY <= MIN_Y) nextSheetY = MIN_Y;
      if (nextSheetY >= MAX_Y) nextSheetY = MAX_Y;

      sheetRef.current?.style.setProperty(
        'transform',
        `translateY(${nextSheetY - MAX_Y}px)`,
      );
    };
    const handleTouchEnd = () => {
      const { touchMove } = metricsRef.current;

      // Snap Animation
      const currentSheetY = sheetRef.current?.getBoundingClientRect().y;

      if (currentSheetY !== MIN_Y) {
        if (touchMove.movingDirection === 'down') {
          sheetRef.current?.style.setProperty('transform', 'translateY(0)');
        }

        if (touchMove.movingDirection === 'up') {
          sheetRef.current?.style.setProperty(
            'transform',
            `translateY(${MIN_Y - MAX_Y}px)`,
          );
        }
      }

      // metrics 초기화.
      metricsRef.current = {
        touchStart: {
          sheetY: 0,
          touchY: 0,
        },
        touchMove: {
          prevTouchY: 0,
          movingDirection: 'none',
        },
      };
    };

    if (sheetRef && sheetRef.current) {
      sheetRef.current.addEventListener('mousedown', handleTouchStart);
      sheetRef.current.addEventListener('mousemove', handleTouchMove);
      sheetRef.current.addEventListener('mouseup', handleTouchEnd);
    }
    return () => {
      sheetRef.current?.removeEventListener('mousedown', handleTouchStart);
      sheetRef.current?.removeEventListener('mousemove', handleTouchMove);
      sheetRef.current?.removeEventListener('mouseup', handleTouchEnd);
    };
  }, []);

  return { sheetRef };
};

export default useBottomSheet;
