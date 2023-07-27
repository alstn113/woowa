import { Suspense, useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';

import cartItemsState from '../recoil/atoms/cartItemsState';
import { QUERY_KEYS } from '../constants';
import Sticky from '../components/common/Sticky';
import PaymentSummary from '../components/cart/PaymentSummary';
import CartItemList from '../components/cart/CartItemList';
import CartItemsAPI from '../api/cart-items';

const CartPage = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <CartPageContent />
    </Suspense>
  );
};

const CartPageContent = () => {
  const { data: cartItemListSuspense } = useQuery(
    QUERY_KEYS.getCartItemList,
    CartItemsAPI.getCartItemList,
    {
      suspense: true,
    },
  );
  const cartItemList = cartItemListSuspense!; // suspense

  const [cartItems, setCartItems] = useRecoilState(cartItemsState);

  const data = cartItemList.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    product: item.product,
    checked: true,
  }));

  useEffect(() => {
    setCartItems(data);
  }, [cartItemListSuspense]);

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
          <PaymentSummaryWrapper>
            <Sticky top={120}>
              <PaymentSummary
                totalProductPrice={totalProductPrice}
                totalDeliveryFee={totalDeliveryFee}
                totalPrice={totalPrice}
              />
            </Sticky>
          </PaymentSummaryWrapper>
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

const PaymentSummaryWrapper = styled.div`
  margin-top: 40px;
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
