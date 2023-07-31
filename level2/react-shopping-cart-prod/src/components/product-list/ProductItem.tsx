import styled from '@emotion/styled';

import CartSVG from '../vectors/CartSVG';
import NumberInputStepper from '../common-cart/NumberInputStepper';
import { Product } from '../../types';

interface ProductItemProps {
  product: Product;
  onAddToCart: () => void;
  onUpdateCartItemQuantity: (quantity: number) => void;
  isProductInCart: boolean;
  productQuantityInCart: number;
}

const ProductItem = ({
  product,
  onAddToCart,
  onUpdateCartItemQuantity,
  isProductInCart,
  productQuantityInCart,
}: ProductItemProps) => {
  const { imageUrl, name, price } = product;

  return (
    <ProductItemContainer>
      <ProductImage src={imageUrl} alt={name} />
      <ProductInfoContainer>
        <ProductInfo>
          <ProductName>{name}</ProductName>
          <ProductPrice>{price.toLocaleString()} 원</ProductPrice>
        </ProductInfo>
        {isProductInCart ? (
          <NumberInputStepper
            min={0}
            value={productQuantityInCart}
            onChange={onUpdateCartItemQuantity}
          />
        ) : (
          <CartButton onClick={onAddToCart}>
            <CartSVG />
          </CartButton>
        )}
      </ProductInfoContainer>
    </ProductItemContainer>
  );
};

const ProductItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 283px;
  height: 358px;
  gap: 16px;
`;

const ProductImage = styled.img`
  height: 282px;
  width: 100%;
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 16px;
`;

const ProductName = styled.span`
  font-size: 16px;
`;

const ProductPrice = styled.span`
  font-size: 20px;
`;

const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px; // stepper height
  cursor: pointer;
`;

export default ProductItem;
