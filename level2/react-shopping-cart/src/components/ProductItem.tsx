import styled from '@emotion/styled';

import NumberInputStepper from './common/NumberInputStepper';
import CartSVG from './vectors/CartSVG';
import useCart from '../hooks/useCart';
import { Product } from '../types';

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { id, imageUrl, name, price } = product;
  const {
    isProductInCart,
    updateCartItemQuantity,
    addToCart,
    productCartQuantity,
  } = useCart();

  const handleQuantityChange = (quantity: number) => {
    updateCartItemQuantity(id, quantity);
  };

  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <ProductListContainer>
      <ProductImage src={imageUrl} alt={name} />
      <ProductInfoContainer>
        <ProductInfo>
          <ProductName>{name}</ProductName>
          <ProductPrice>{price.toLocaleString()} 원</ProductPrice>
        </ProductInfo>
        {isProductInCart(id) ? (
          <NumberInputStepper
            value={productCartQuantity(id)}
            onChange={handleQuantityChange}
          />
        ) : (
          <CartButton onClick={handleAddToCart}>
            <CartSVG />
          </CartButton>
        )}
      </ProductInfoContainer>
    </ProductListContainer>
  );
};

const ProductListContainer = styled.li`
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
`;

export default ProductItem;
