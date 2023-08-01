import { useMemo } from 'react';

import styled from '@emotion/styled';

interface CalendarDayProps {
  day: Date;
  currentMonth: number;
}

const CalendarDay = ({ day, currentMonth }: CalendarDayProps) => {
  const isOutsideCurrentMonth = useMemo(() => {
    return day.getMonth() !== currentMonth;
  }, [day, currentMonth]);

  if (isOutsideCurrentMonth) return <CalendarDayWrapper />;

  return <CalendarDayWrapper>{day.getDate()}</CalendarDayWrapper>;
};

const CalendarDayWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 40px;
  margin: 0px 2px;
  color: rgba(0, 0, 0, 0.6);
`;

export default CalendarDay;
