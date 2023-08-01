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
  margin-top: 16px;
  margin-bottom: 8px;
  padding-left: 24px;
  padding-right: 12px;
  max-height: 30px;
  min-height: 30px;
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
