import styled from '@emotion/styled';

const PaymentSummary = () => {
  return (
    <PaymentSummaryContainer>
      <PaymentSummaryTitle>결제 예상 금액</PaymentSummaryTitle>
    </PaymentSummaryContainer>
  );
};

const PaymentSummaryContainer = styled.div`
  width: 448px;
  margin-top: 40px;
  border: 1px solid #ddd;
`;

const PaymentSummaryTitle = styled.h2`
  padding: 20px 30px;
  font-size: 24px;
  font-weight: 400;
  border-bottom: 3px solid #ddd;
`;

export default PaymentSummary;
