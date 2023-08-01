import { format } from 'date-fns';
import styled from '@emotion/styled';

import { useCalendarContext } from './calendar-context';

const CalendarHeader = () => {
  const { now } = useCalendarContext();

  const currentMonthYear = format(now, 'LLLL yyyy');

  return (
    <CalendarHeaderContainer>
      <CalendarHeaderLabel>{currentMonthYear}</CalendarHeaderLabel>
      <CalendarHeaderMonthSwitcherContainer>
        <div>{'<'}</div>
        <div>{'>'}</div>
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
