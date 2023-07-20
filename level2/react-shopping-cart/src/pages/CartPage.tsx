import styled from '@emotion/styled';

import CartItemList from '../components/cart/CartItemList';
import PaymentSummary from '../components/cart/PaymentSummary';

const CartPage = () => {
  return (
    <CartContainer>
      <CartTitle>장바구니</CartTitle>
      <ContentWrapper>
        <CartItemList />
        <PaymentSummary />
      </ContentWrapper>
    </CartContainer>
  );
};

const CartContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const CartTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  padding: 20px 0;
  border-bottom: 4px solid #333;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export default CartPage;
