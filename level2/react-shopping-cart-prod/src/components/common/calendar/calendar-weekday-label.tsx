import styled from '@emotion/styled';

const CalendarWeekdayLabel = () => {
  const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const defaultWeekDayFormatter = (day: string) => day.charAt(0).toUpperCase();
  return (
    <CalendarWeekdayLabelContainer>
      {WEEK_DAYS.map((day, idx) => (
        <WeekdayLabel key={idx}>{defaultWeekDayFormatter(day)}</WeekdayLabel>
      ))}
    </CalendarWeekdayLabelContainer>
  );
};

const CalendarWeekdayLabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeekdayLabel = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 40px;
  margin: 0px 2px;
  color: rgba(0, 0, 0, 0.6);
  background-color: rgba(0, 0, 0, 0.2);
`;

export default CalendarWeekdayLabel;
