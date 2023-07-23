import styled from '@emotion/styled';

import CartItemList from '../components/cart/CartItemList';
import PaymentSummary from '../components/cart/PaymentSummary';
import useCart from '../hooks/useCart';

const CartPage = () => {
  const { cartItems } = useCart();
  const checkedItems = cartItems.filter((item) => item.checked);
  const totalProductPrice = checkedItems.reduce(
    (acc, cur) => acc + cur.product.price * cur.quantity,
    0,
  );
  const totalDeliveryFee = 3000;
  const totalPrice = totalProductPrice + totalDeliveryFee;

  return (
    <CartContainer>
      <CartTitle>장바구니</CartTitle>
      {cartItems.length === 0 ? (
        <BlankMessage>장바구니에 담긴 상품이 없습니다.</BlankMessage>
      ) : (
        <ContentWrapper>
          <CartItemList cartItems={cartItems} />
          <PaymentSummary
            totalProductPrice={totalProductPrice}
            totalDeliveryFee={totalDeliveryFee}
            totalPrice={totalPrice}
          />
        </ContentWrapper>
      )}
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
  padding-bottom: 20px;
  border-bottom: 4px solid #333;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  gap: 30px;

  @media screen and (max-width: 1024px) {
    align-items: center;
    flex-direction: column;
    gap: 0;
  }
`;

const BlankMessage = styled.div`
  font-size: 24px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  color: #999;
`;

export default CartPage;
