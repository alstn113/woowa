import styled from '@emotion/styled';

import CalendarWeekdayLabel from './calendar-weekday-label';
import CalendarHeader from './calendar-header';
import CalendarDay from './calendar-day';

const calendar = () => {
  const weeks: number[][] = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
  ];

  return (
    <CalendarContainer>
      <CalendarHeader />
      <CalendarWeekContainer>
        <CalendarWeekdayLabel />
        {weeks.map((week, idx) => (
          <CalendarWeek key={idx}>
            {week.map((day, idx) => (
              <CalendarDay key={idx} />
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
  background-color: rgba(0, 0, 0, 0.1);
`;

const CalendarWeekContainer = styled.div``;

const CalendarWeek = styled.div``;

export default calendar;
