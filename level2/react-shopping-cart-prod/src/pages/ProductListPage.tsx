import { Suspense } from 'react';

import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';

import { QUERY_KEYS } from '../constants';
import ProductItemSkeleton from '../components/product-list/ProductItemSkeleton';
import ProductItem from '../components/product-list/ProductItem';
import ProductsAPI from '../api/products';

const ProductListPage = () => {
  return (
    <Suspense
      fallback={
        <ProductListContainer>
          {Array.from({ length: 12 }).map((_, index) => (
            <ProductItemSkeleton key={index} />
          ))}
        </ProductListContainer>
      }
    >
      <ProductListPageContent />
    </Suspense>
  );
};

const ProductListPageContent = () => {
  const { data: productListSuspense } = useQuery(
    QUERY_KEYS.getProductList,
    ProductsAPI.getProductList,
    {
      suspense: true,
    },
  );
  const productList = productListSuspense!; // suspense

  return (
    <ProductListContainer>
      {productList.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCart={}
          onUpdateCartItemQuantity={}
          isProductInCart={}
          productCartQuantity={}
        />
      ))}
    </ProductListContainer>
  );
};

const ProductListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 48px;
  row-gap: 40px;
`;

export default ProductListPage;
