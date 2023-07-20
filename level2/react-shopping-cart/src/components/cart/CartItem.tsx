import styled from '@emotion/styled';

import { Product } from '../../types';
import Checkbox from '../common/Checkbox';
import NumberInputStepper from '../common/NumberInputStepper';
import TrashSVG from '../vectors/TrashSVG';

interface CartItemProps {
  cartItem: {
    cartItemId: number;
    quantity: number;
    product: Product;
  };
}

const CartItem = ({ cartItem }: CartItemProps) => {
  return (
    <CartItemContainer>
      <Checkbox />
      <CartItemThumbnail src={cartItem.product.imageUrl} />
      <CartItemName>{cartItem.product.name}</CartItemName>
      <CartItemControlWrapper>
        <RemoveIconButton>
          <TrashSVG />
        </RemoveIconButton>
        <NumberInputStepper size="lg" />
        <CartItemPrice>
          {cartItem.product.price.toLocaleString()}원
        </CartItemPrice>
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
`;

const CartItemName = styled.div`
  flex: 1;
  font-size: 20px;
  font-weight: 400;
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
