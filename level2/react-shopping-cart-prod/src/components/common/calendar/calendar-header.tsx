import { addMonths, format } from 'date-fns';
import styled from '@emotion/styled';

interface CalendarHeaderProps {
  currentMonth: Date;
  setCurrentMonth: (date: Date) => void;
}

const CalendarHeader = ({
  currentMonth,
  setCurrentMonth,
}: CalendarHeaderProps) => {
  const currentMonthYear = format(currentMonth, 'LLLL yyyy');

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(addMonths(currentMonth, -1));
  };

  return (
    <CalendarHeaderContainer>
      <CalendarHeaderLabel>{currentMonthYear}</CalendarHeaderLabel>
      <CalendarHeaderMonthSwitcherContainer>
        <button type="button" onClick={handlePreviousMonth}>
          {'<'}
        </button>
        <button type="button" onClick={handleNextMonth}>
          {'>'}
        </button>
      </CalendarHeaderMonthSwitcherContainer>
    </CalendarHeaderContainer>
  );
};

const CalendarHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  padding: 0 12px;
  max-height: 30px;
  min-height: 30px;
`;

const CalendarHeaderLabel = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  margin-right: auto;
`;

const CalendarHeaderMonthSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40px;
`;

export default CalendarHeader;
