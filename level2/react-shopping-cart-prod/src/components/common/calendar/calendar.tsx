import styled from '@emotion/styled';

import CalendarHeader from './calendar-header';

const calendar = () => {
  return (
    <CalendarContainer>
      <CalendarHeader />
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default calendar;
