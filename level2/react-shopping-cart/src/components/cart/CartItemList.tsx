import styled from '@emotion/styled';

import CartItem from './CartItem';
import useCart from '../../hooks/useCart';
import Checkbox from '../common/Checkbox';

const CartItemList = () => {
  const { cartItems } = useCart();
  return (
    <CartItemListContainer>
      <CartItemCount>배송 상품 ({3}개)</CartItemCount>
      <CartItemWrapper>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.cartItemId} cartItem={cartItem} />
        ))}
      </CartItemWrapper>
      <CartItemListContorlWrapper>
        <Checkbox label={`전체 선택 (${2}/${3})`} />
      </CartItemListContorlWrapper>
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

const CartItemWrapper = styled.ul`
  li + li {
    border-top: 1px solid #aaa;
  }
`;

const CartItemListContorlWrapper = styled.div``;

export default CartItemList;
