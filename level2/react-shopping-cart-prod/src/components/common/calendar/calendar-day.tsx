import { useMemo } from 'react';

import { isSameDay } from 'date-fns';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface CalendarDayProps {
  day: Date;
  currentMonth: Date;
}

const CalendarDay = ({ day, currentMonth }: CalendarDayProps) => {
  const now = new Date();
  const isOutsideCurrentMonth = useMemo(() => {
    return day.getMonth() !== currentMonth.getMonth();
  }, [day, currentMonth]);

  const isToday = isSameDay(day, now);
  if (isOutsideCurrentMonth) return <CalendarDayWrapper />;

  return (
    <CalendarDayWrapper isToday={isToday}>{day.getDate()}</CalendarDayWrapper>
  );
};

const CalendarDayWrapper = styled.button<{
  isToday?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;
  margin: 0px 2px;
  color: rgba(0, 0, 0, 0.6);
  user-select: none;

  ${({ isToday }) =>
    isToday &&
    css`
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.1);
    `}
`;

export default CalendarDay;
