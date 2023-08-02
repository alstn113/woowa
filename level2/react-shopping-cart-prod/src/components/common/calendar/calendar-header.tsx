import { addMonths, format } from 'date-fns';
import styled from '@emotion/styled';

import ArrowRightSVG from './vectors/arrow-right-svg';
import ArrowLeftSVG from './vectors/arrow-left-svg';

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
        <CalendarHeaderMonthSwitcherButton
          type="button"
          onClick={handlePreviousMonth}
        >
          <ArrowLeftSVG />
        </CalendarHeaderMonthSwitcherButton>
        <div />
        <CalendarHeaderMonthSwitcherButton
          type="button"
          onClick={handleNextMonth}
        >
          <ArrowRightSVG />
        </CalendarHeaderMonthSwitcherButton>
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
  width: 60px;
`;

const CalendarHeaderMonthSwitcherButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  svg {
    width: 15px;
    height: 15px;
  }
`;

export default CalendarHeader;
