import styled from '@emotion/styled';

interface CalendarDayProps {
  day: Date;
}

const CalendarDay = ({ day }: CalendarDayProps) => {
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
