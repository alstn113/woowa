import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
`;

export const IconButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const IconLabel = styled.span`
  font-size: 12px;
  color: #333;
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
`;
