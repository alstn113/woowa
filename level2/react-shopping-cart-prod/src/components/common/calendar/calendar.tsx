import { useState } from 'react';

import { isSameDay, startOfMonth } from 'date-fns';
import styled from '@emotion/styled';

import useControlled from '../hooks/use-controlled';
import { getWeekArray } from './utils/getWeekArray';
import CalendarWeekdayLabel from './calendar-weekday-label';
import CalendarHeader from './calendar-header';
import CalendarDay from './calendar-day';

interface CalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

const Calendar = ({ value, onChange }: CalendarProps) => {
  const now = new Date();

  const [calendarState, setCalendarState] = useControlled({
    controlledValue: value,
    defaultValue: now,
  });

  const [currentMonth, setCurrentMonth] = useState(startOfMonth(calendarState));

  const weeksToDisplay = getWeekArray(calendarState);

  const handleSelectedDateChange = (date: Date) => {
    setCalendarState(date);
    onChange?.(date);
    console.log(calendarState);
  };

  const isSelected = (date: Date) => {
    return isSameDay(date, calendarState);
  };

  return (
    <CalendarContainer>
      <CalendarHeader
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
      />
      <CalendarWeekContainer>
        <CalendarWeekdayLabel />
        {weeksToDisplay.map((week, idx) => (
          <CalendarWeek key={idx}>
            {week.map((day, idx) => (
              <CalendarDay
                key={idx}
                day={day}
                currentMonth={currentMonth}
                isSelected={isSelected(day)}
                onClick={() => handleSelectedDateChange(day)}
              />
            ))}
          </CalendarWeek>
        ))}
      </CalendarWeekContainer>
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const CalendarWeekContainer = styled.div`
  padding: 8px 0;
`;

const CalendarWeek = styled.div`
  margin: 2px 0;
  display: flex;
  justify-content: center;
`;

export default Calendar;
