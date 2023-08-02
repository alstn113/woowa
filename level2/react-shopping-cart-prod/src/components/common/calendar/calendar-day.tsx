import { useMemo } from 'react';

import { isSameDay } from 'date-fns';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface CalendarDayProps {
  day: Date;
  currentMonth: Date;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isSelected?: boolean;
}

const CalendarDay = ({
  day,
  currentMonth,
  onClick,
  isSelected,
}: CalendarDayProps) => {
  const now = new Date();
  const isOutsideCurrentMonth = useMemo(() => {
    return day.getMonth() !== currentMonth.getMonth();
  }, [day, currentMonth]);

  const isToday = isSameDay(day, now);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isOutsideCurrentMonth) return;
    onClick?.(event);
  };

  if (isOutsideCurrentMonth) return <CalendarDayFilter />;

  return (
    <CalendarDayWrapper
      isToday={isToday}
      onClick={handleClick}
      isSelected={isSelected}
    >
      {day.getDate()}
    </CalendarDayWrapper>
  );
};

const CalendarDayFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;
  margin: 0px 2px;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  user-select: none;
`;

const CalendarDayWrapper = styled.button<{
  isToday?: boolean;
  isSelected?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;
  margin: 0px 2px;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  user-select: none;

  &:hover {
    border: 1px dashed rgba(0, 0, 0, 0.1);
  }

  ${({ isToday }) =>
    isToday &&
    css`
      background-color: rgba(0, 0, 0, 0.1);
    `}

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: #1976d2;
      color: #fff;
    `}
`;

export default CalendarDay;
