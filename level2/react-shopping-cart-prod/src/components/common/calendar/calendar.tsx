import styled from '@emotion/styled';

import useCalendar from './use-calendar';
import CalendarWeekdayLabel from './calendar-weekday-label';
import CalendarHeader from './calendar-header';
import CalendarDay from './calendar-day';
import { CalendarProvider } from './calendar-context';

const Calendar = () => {
  const { currentMonth, weeksToDisplay, now } = useCalendar();

  return (
    <CalendarProvider
      value={{
        now,
      }}
    >
      <CalendarContainer>
        <CalendarHeader />
        <CalendarWeekContainer>
          <CalendarWeekdayLabel />
          {weeksToDisplay.map((week, idx) => (
            <CalendarWeek key={idx}>
              {week.map((day, idx) => (
                <CalendarDay key={idx} day={day} currentMonth={currentMonth} />
              ))}
            </CalendarWeek>
          ))}
        </CalendarWeekContainer>
      </CalendarContainer>
    </CalendarProvider>
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
