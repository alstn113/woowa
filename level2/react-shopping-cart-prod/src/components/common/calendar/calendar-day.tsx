import { useMemo } from 'react';

import { isSameDay } from 'date-fns';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { useCalendarContext } from './calendar-context';

interface CalendarDayProps {
  day: Date;
  currentMonth: number;
}

const CalendarDay = ({ day, currentMonth }: CalendarDayProps) => {
  const { now } = useCalendarContext();

  const isOutsideCurrentMonth = useMemo(() => {
    return day.getMonth() !== currentMonth;
  }, [day, currentMonth]);

  const isToday = isSameDay(day, now);
  if (isOutsideCurrentMonth) return <CalendarDayWrapper />;

  return (
    <CalendarDayWrapper isToday={isToday}>{day.getDate()}</CalendarDayWrapper>
  );
};

const CalendarDayWrapper = styled.span<{
  isToday?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;
  margin: 0px 2px;
  color: rgba(0, 0, 0, 0.6);

  ${({ isToday }) =>
    isToday &&
    css`
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.1);
    `}
`;

export default CalendarDay;
