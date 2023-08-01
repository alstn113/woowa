import styled from '@emotion/styled';

const CalendarHeader = () => {
  return (
    <CalendarHeaderContainer>
      <CalendarHeaderLabel>August 2023</CalendarHeaderLabel>
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
  background-color: rgba(0, 0, 0, 0.2);
`;

const CalendarHeaderLabel = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  margin-right: auto;
  cursor: pointer;
`;

const CalendarHeaderMonthSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40px;
  cursor: pointer;
`;

export default CalendarHeader;
