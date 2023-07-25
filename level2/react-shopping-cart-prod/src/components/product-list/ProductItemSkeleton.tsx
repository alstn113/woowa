import styled from '@emotion/styled';

import { skeletonAnimation } from '../../styles/animation';

const ProductItemSkeleton = () => {
  return (
    <ProductItemContainer>
      <ProductImage />
      <ProductInfoContainer>
        <ProductInfo>
          <ProductName />
          <ProductPrice />
        </ProductInfo>
        <CartButton />
      </ProductInfoContainer>
    </ProductItemContainer>
  );
};

const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 283px;
  height: 358px;
  gap: 16px;
`;

const ProductImage = styled.div`
  height: 282px;
  width: 100%;
  ${skeletonAnimation}
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

const ProductName = styled.div`
  height: 20px;
  width: 150px;
  ${skeletonAnimation}
`;

const ProductPrice = styled.div`
  height: 20px;
  width: 100px;
  ${skeletonAnimation}
`;

const CartButton = styled.div`
  height: 28px;
  width: 28px;
  ${skeletonAnimation}
`;

export default ProductItemSkeleton;
