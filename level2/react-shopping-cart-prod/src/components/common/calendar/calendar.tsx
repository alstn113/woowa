import { ko } from 'date-fns/locale';
import {
  addDays,
  endOfMonth,
  endOfWeek,
  isBefore,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import styled from '@emotion/styled';

import CalendarWeekdayLabel from './calendar-weekday-label';
import CalendarHeader from './calendar-header';
import CalendarDay from './calendar-day';

const calendar = () => {
  const now = new Date();

  const locale = ko;

  const currentMonth = now.getMonth();
  const getWeekArray = (value: Date) => {
    const start = startOfWeek(startOfMonth(value), { locale });
    const end = endOfWeek(endOfMonth(value), { locale });

    let count = 0;
    let current = start;
    const nestedWeeks: Date[][] = [];

    while (isBefore(current, end)) {
      const weekNumber = Math.floor(count / 7);
      nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
      nestedWeeks[weekNumber].push(current);

      current = addDays(current, 1);
      count += 1;
    }

    return nestedWeeks;
  };

  const weeksToDisplay = getWeekArray(now);
  console.log(weeksToDisplay);

  return (
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

export default calendar;
