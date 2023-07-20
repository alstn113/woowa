import styled from '@emotion/styled';

import CartItem from './CartItem';
import useCart from '../../hooks/useCart';
import Checkbox from '../common/Checkbox';

const CartItemList = () => {
  const { cartItems } = useCart();
  return (
    <CartItemListContainer>
      <CartItemCount>배송 상품 ({3}개)</CartItemCount>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.cartItemId} />
      ))}
      <CartItemContorlWrapper>
        <Checkbox />
      </CartItemContorlWrapper>
    </CartItemListContainer>
  );
};

const CartItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 736px;
`;

const CartItemCount = styled.p`
  font-size: 20px;
  font-weight: 400;
  border-bottom: 4px solid #aaa;
  padding-bottom: 16px;
`;

const CartItemContorlWrapper = styled.div``;

export default CartItemList;
