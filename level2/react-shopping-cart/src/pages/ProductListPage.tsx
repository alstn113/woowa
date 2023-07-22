import styled from '@emotion/styled';

import AsyncBoundary from './utils/AsyncBoundary';
import ProductAPI from '../api/product';
import ProductItem from '../components/productList/ProductItem';
import useCart from '../hooks/useCart';
import useQuery from '../hooks/useQuery';

const ProductListPage = () => {
  return (
    <AsyncBoundary
      pending={<div>로딩</div>}
      rejected={({ error }) => <div>{error.message}</div>}
    >
      <ProductListContainer>
        <ProductListPageContent />
      </ProductListContainer>
    </AsyncBoundary>
  );
};

const ProductListPageContent = () => {
  const { data: productList } = useQuery(ProductAPI.getProductList);

  const {
    isProductInCart,
    updateCartItemQuantity,
    addToCart,
    productCartQuantity,
  } = useCart();

  return (
    <>
      {productList?.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCart={() => addToCart(product)}
          onUpdateCartItemQuantity={(quantity) =>
            updateCartItemQuantity(product, quantity)
          }
          isProductInCart={isProductInCart(product.id)}
          productCartQuantity={productCartQuantity(product.id)}
        />
      ))}
    </>
  );
};

const ProductListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 48px;
  row-gap: 40px;
`;

export default ProductListPage;
