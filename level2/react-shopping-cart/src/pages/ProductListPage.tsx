import styled from '@emotion/styled';

import ProductAPI from '../api/product';
import ProductItem from '../components/productList/ProductItem';
import ProductItemSkeleton from '../components/productList/ProductItemSkeleton';
import useCart from '../hooks/useCart';
import useQuery from '../hooks/useQuery';

const ProductListPage = () => {
  const { data: productList, isLoading } = useQuery(ProductAPI.getProductList);
  const {
    isProductInCart,
    updateCartItemQuantity,
    addToCart,
    productCartQuantity,
  } = useCart();

  if (isLoading) {
    return (
      <ProductListContainer>
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductItemSkeleton key={index} />
        ))}
      </ProductListContainer>
    );
  }

  return (
    <ProductListContainer>
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
