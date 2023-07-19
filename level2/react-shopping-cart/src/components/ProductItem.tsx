import styled from '@emotion/styled';

import NumberInputStepper from './common/NumberInputStepper';
import { Product } from '../types';

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <ProductListContainer>
      <ProductImage src={product.imageUrl} alt={product.name} />
      <ProductInfoContainer>
        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.price.toLocaleString()} 원</ProductPrice>
        </ProductInfo>
        <NumberInputStepper />
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

export default ProductItem;
