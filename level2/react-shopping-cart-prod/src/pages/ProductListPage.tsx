import { Suspense, useEffect } from 'react';

import { useSetRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';

import cartItemsState from '../recoil/atoms/cartItemsState';
import useCart from '../hooks/useCart';
import { QUERY_KEYS } from '../constants';
import ProductItemSkeleton from '../components/product-list/ProductItemSkeleton';
import ProductItem from '../components/product-list/ProductItem';
import ProductsAPI from '../api/products';
import CartItemsAPI from '../api/cart-items';

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
  const { data: cartItemListSuspense } = useQuery(
    QUERY_KEYS.getCartItemList,
    CartItemsAPI.getCartItemList,
    {
      suspense: true,
    },
  );
  const productList = productListSuspense!; // suspense
  const cartItemList = cartItemListSuspense!; // suspense

  const setCartItems = useSetRecoilState(cartItemsState);

  const data = cartItemList.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    product: item.product,
    checked: true,
  }));

  useEffect(() => {
    setCartItems(data);
  }, []);

  const {
    addToCart,
    updateCartItemQuantity,
    isProductInCart,
    productQuantityInCart,
  } = useCart();

  return (
    <ProductListContainer>
      {productList.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCart={() => addToCart(product)}
          onUpdateCartItemQuantity={(quantity) =>
            updateCartItemQuantity(product, quantity)
          }
          isProductInCart={isProductInCart(product.id)}
          productQuantityInCart={productQuantityInCart(product.id)}
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
