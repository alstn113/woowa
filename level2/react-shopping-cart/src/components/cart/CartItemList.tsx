import styled from '@emotion/styled';

import CartItem from './CartItem';
import useCart from '../../hooks/useCart';
import { Product } from '../../types';
import Checkbox from '../common/Checkbox';

interface CartItemListProps {
  cartItems: {
    cartItemId: number;
    quantity: number;
    product: Product;
    checked: boolean;
  }[];
}

const CartItemList = ({ cartItems }: CartItemListProps) => {
  const { checkCartItems, updateCartItemQuantity, removeSeletedCartItems } =
    useCart();
  const isAllChecked = cartItems.every((cartItem) => cartItem.checked);
  const cartItemsCount = cartItems.length;
  const checkedCartItemsCount = cartItems.filter(
    (cartItem) => cartItem.checked,
  ).length;

  const handleCheckCartItem = (cartItemId: number) => (checked: boolean) => {
    checkCartItems([cartItemId], checked);
  };

  const handleCheckAllCartItems = (checked: boolean) => {
    checkCartItems(
      cartItems.map((cartItem) => cartItem.cartItemId),
      checked,
    );
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
          onChange={handleCheckAllCartItems}
        />
        <RemoveSeletedButton onClick={removeSeletedCartItems}>
          선택 삭제
        </RemoveSeletedButton>
      </CartItemListContorlWrapper>
    </CartItemListContainer>
  );
};

const CartItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

const CartItemListContorlWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

const RemoveSeletedButton = styled.button`
  border: 1px solid #bbb;
  font-size: 16px;
  color: #333;
  font-weight: 400;
  padding: 8px 16px;
`;

export default CartItemList;
