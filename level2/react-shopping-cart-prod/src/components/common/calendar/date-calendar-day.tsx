import { useMemo } from 'react';

import { isSameDay } from 'date-fns';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface DateCalendarDayProps {
  day: Date;
  currentMonth: Date;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isSelected?: boolean;
}

const DateCalendarDay = ({
  day,
  currentMonth,
  onClick,
  isSelected,
}: DateCalendarDayProps) => {
  const now = new Date();
  const isOutsideCurrentMonth = useMemo(() => {
    return day.getMonth() !== currentMonth.getMonth();
  }, [day, currentMonth]);

  const isToday = isSameDay(day, now);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isOutsideCurrentMonth) return;
    onClick?.(event);
  };

  if (isOutsideCurrentMonth) return <DateCalendarDayFilter />;

  return (
    <DateCalendarDayWrapper
      isToday={isToday}
      onClick={handleClick}
      isSelected={isSelected}
    >
      {day.getDate()}
    </DateCalendarDayWrapper>
  );
};

const DateCalendarDayFilter = styled.div`
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

const DateCalendarDayWrapper = styled.button<{
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

export default DateCalendarDay;
