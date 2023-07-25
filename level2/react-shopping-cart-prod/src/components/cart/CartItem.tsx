import styled from '@emotion/styled';

import TrashSVG from '../vectors/TrashSVG';
import NumberInputStepper from '../common/NumberInputStepper';
import Checkbox from '../common/Checkbox';
import { CartItemState } from '../../recoil/atoms/cartItemsState';

interface CartItemProps {
  cartItem: CartItemState;
  onCheckCartItem: (checked: boolean) => void;
  onRemoveCartItem: () => void;
  onUpdateCartItemQuantity: (quantity: number) => void;
}

const CartItem = ({
  cartItem,
  onCheckCartItem,
  onRemoveCartItem,
  onUpdateCartItemQuantity,
}: CartItemProps) => {
  const totalPrice = cartItem.product.price * cartItem.quantity;
  const isMobile = window.innerWidth <= 500;

  return (
    <CartItemContainer>
      <Checkbox checked={cartItem.checked} onChange={onCheckCartItem} />
      <CartItemThumbnail
        src={cartItem.product.imageUrl}
        alt={cartItem.product.name}
      />
      <CartItemName>{cartItem.product.name}</CartItemName>
      <CartItemControlWrapper>
        <RemoveIconButton onClick={onRemoveCartItem}>
          <TrashSVG />
        </RemoveIconButton>
        <NumberInputStepper
          size={isMobile ? 'sm' : 'lg'}
          min={1}
          value={cartItem.quantity}
          onChange={onUpdateCartItemQuantity}
        />
        <CartItemPrice>{totalPrice.toLocaleString()}원</CartItemPrice>
      </CartItemControlWrapper>
    </CartItemContainer>
  );
};

const CartItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: flex-start;
  padding: 20px 0;
`;

const CartItemThumbnail = styled.img`
  width: 144px;
  height: 100%;

  @media screen and (max-width: 500px) {
    width: 72px;
  }
`;

const CartItemName = styled.div`
  flex: 1;
  font-size: 20px;
  font-weight: 400;

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const CartItemControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
`;

const RemoveIconButton = styled.button`
  width: 24px;
  height: 24px;
  color: #ddd;
`;

const CartItemPrice = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
`;

export default CartItem;
