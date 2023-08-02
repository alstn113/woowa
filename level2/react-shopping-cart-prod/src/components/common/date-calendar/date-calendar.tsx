import { useState } from 'react';

import { isSameDay, startOfMonth } from 'date-fns';
import styled from '@emotion/styled';

import useControlled from '../hooks/use-controlled';
import { getWeekArray } from './utils/getWeekArray';
import DateCalendarWeekdayLabel from './date-calendar-weekday-label';
import DateCalendarHeader from './date-calendar-header';
import DateCalendarDay from './date-calendar-day';

interface DateCalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

const DateCalendar = ({ value, onChange }: DateCalendarProps) => {
  const now = new Date();

  const [DatecalendarState, setDateCalendarState] = useControlled({
    controlledValue: value,
    defaultValue: now,
  });

  const [currentMonth, setCurrentMonth] = useState(
    startOfMonth(DatecalendarState),
  );

  const weeksToDisplay = getWeekArray(currentMonth);

  const handleSelectedDateChange = (date: Date) => {
    setDateCalendarState(date);
    onChange?.(date);
  };

  const isSelected = (date: Date) => {
    return isSameDay(date, DatecalendarState);
  };

  return (
    <DateCalendarContainer>
      <DateCalendarHeader
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
      />
      <DateCalendarWeekContainer>
        <DateCalendarWeekdayLabel />
        {weeksToDisplay.map((week) => (
          <DateCalendarWeek key={`week-${week[0]}`}>
            {week.map((day) => (
              <DateCalendarDay
                key={day.toString()}
                day={day}
                currentMonth={currentMonth}
                isSelected={isSelected(day)}
                onClick={() => handleSelectedDateChange(day)}
              />
            ))}
          </DateCalendarWeek>
        ))}
      </DateCalendarWeekContainer>
    </DateCalendarContainer>
  );
};

const DateCalendarContainer = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const DateCalendarWeekContainer = styled.div`
  padding: 8px 0;
`;

const DateCalendarWeek = styled.div`
  margin: 2px 0;
  display: flex;
  justify-content: center;
`;

export default DateCalendar;
