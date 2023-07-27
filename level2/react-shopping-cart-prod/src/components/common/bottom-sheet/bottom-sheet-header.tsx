import styled from '@emotion/styled';

const BottomSheetHeader = () => {
  return (
    <BottomSheetHeaderWrapper>
      <BottomSheetHandle />
    </BottomSheetHeaderWrapper>
  );
};

const BottomSheetHeaderWrapper = styled.div`
  height: 48px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: relative;
  padding-top: 16px;
  padding-bottom: 4px;
`;

const BottomSheetHandle = styled.div`
  width: 32px;
  height: 4px;
  border-radius: 2px;
  background-color: #d0d0d0;
  margin: auto;
`;

export default BottomSheetHeader;
