import styled from '@emotion/styled';

import CartItem from './CartItem';
import useCart from '../../hooks/useCart';
import { Product } from '../../types';
import Checkbox from '../common/Checkbox';

const CartItemList = () => {
  const {
    cartItems,
    checkAllCartItems,
    checkCartItem,
    updateCartItemQuantity,
  } = useCart();
  const isAllChecked = cartItems.every((cartItem) => cartItem.checked);
  const cartItemsCount = cartItems.length;
  const checkedCartItemsCount = cartItems.filter(
    (cartItem) => cartItem.checked,
  ).length;

  const handleCheckCartItem = (cartItemId: number) => (checked: boolean) => {
    checkCartItem(cartItemId, checked);
  };

  const handleRemoveCartItem = (product: Product) => () => {
    updateCartItemQuantity(product, 0);
  };

  const handleUpdateCartItemQuantity =
    (product: Product) => (quantity: number) => {
      updateCartItemQuantity(product, quantity);
    };

  return (
    <CartItemListContainer>
      <CartItemCount>배송 상품 ({cartItemsCount}개)</CartItemCount>
      <CartItemWrapper>
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.cartItemId}
            cartItem={cartItem}
            onCheckCartItem={handleCheckCartItem(cartItem.cartItemId)}
            onRemoveCartItem={handleRemoveCartItem(cartItem.product)}
            onUpdateCartItemQuantity={handleUpdateCartItemQuantity(
              cartItem.product,
            )}
          />
        ))}
      </CartItemWrapper>
      <CartItemListContorlWrapper>
        <Checkbox
          label={`전체 선택 (${checkedCartItemsCount}/${cartItemsCount})`}
          checked={isAllChecked}
          onChange={checkAllCartItems}
        />
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
