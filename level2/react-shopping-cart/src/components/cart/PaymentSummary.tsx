import styled from '@emotion/styled';

interface PaymentSummaryProps {
  totalProductPrice: number;
  totalDeliveryFee: number;
  totalPrice: number;
}

const PaymentSummary = ({
  totalProductPrice,
  totalDeliveryFee,
  totalPrice,
}: PaymentSummaryProps) => {
  return (
    <PaymentSummaryContainer>
      <PaymentSummaryTitle>결제 예상 금액</PaymentSummaryTitle>
      <ContentWrapper>
        <TotalProductPrice>
          <span>총 상품가격</span>
          <span>{totalProductPrice.toLocaleString()}원</span>
        </TotalProductPrice>
        <TotalDeliveryFee>
          <span>총 배송비</span>
          <span>{totalDeliveryFee.toLocaleString()}원</span>
        </TotalDeliveryFee>
        <TotalPrice>
          <span>총 주문금액</span>
          <span>{totalPrice.toLocaleString()}원</span>
        </TotalPrice>
        <OrderButton>주문하기</OrderButton>
      </ContentWrapper>
    </PaymentSummaryContainer>
  );
};

const PaymentSummaryContainer = styled.div`
  min-width: 448px;
  margin-top: 40px;
  border: 1px solid #ddd;
  height: fit-content;

  @media screen and (max-width: 1024px) {
    min-width: 100%;
  }
`;

const PaymentSummaryTitle = styled.h2`
  padding: 20px 30px;
  font-size: 24px;
  font-weight: 400;
  border-bottom: 3px solid #ddd;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 30px;
`;

const TotalProductPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: #333;
  font-weight: 700;
`;

const TotalDeliveryFee = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: #333;
  font-weight: 700;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: #333;
  margin-top: 20px;
  font-weight: 700;
`;

const OrderButton = styled.button`
  background-color: #333;
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  padding: 20px 0;
  width: 100%;
  margin-top: 20px;
`;

export default PaymentSummary;
