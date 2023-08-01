import React from 'react';

import { ko } from 'date-fns/locale';
import {
  startOfMonth,
  endOfMonth,
  format,
  isSameMonth,
  startOfWeek,
  endOfWeek,
  isBefore,
  addDays,
} from 'date-fns';

const Calendar = () => {
  const selectedDate = new Date();
  const locale = ko;
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

  const weeksToDisplay = getWeekArray(selectedDate);
  console.log(weeksToDisplay);

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div>
      <h2>{format(selectedDate, 'MMMM yyyy')}</h2>
      <div className="calendar">
        <div className="weekdays">
          {weekdays.map((weekday) => (
            <div key={weekday} className="weekday">
              {weekday}
            </div>
          ))}
        </div>
        {weeksToDisplay.map((week, weekIndex) => (
          <div key={weekIndex} className="week">
            {week.map((day, dayIndex) => (
              <Day
                key={`${weekIndex}-${dayIndex}`}
                date={day}
                selectedDate={selectedDate}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

interface DayProps {
  date: Date;
  selectedDate: Date;
}

const Day: React.FC<DayProps> = ({ date, selectedDate }) => {
  const isSameMonthAsSelected = isSameMonth(date, selectedDate);

  return (
    <div
      className={`day ${
        isSameMonthAsSelected ? 'current-month' : 'other-month'
      }`}
    >
      {isSameMonthAsSelected && format(date, 'd')}
    </div>
  );
};

export default Calendar;
