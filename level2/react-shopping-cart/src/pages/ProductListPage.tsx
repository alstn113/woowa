import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import ProductAPI, { ProductEntity } from '../api/product';
import ProductListItem from '../components/ProductListItem';
import useCart from '../hooks/useCart';

const ProductListPage = () => {
  const [products, setProducts] = useState<ProductEntity[]>([]);
  const {
    isProductInCart,
    updateCartItemQuantity,
    addToCart,
    productCartQuantity,
  } = useCart();

  const fetchProducts = async () => {
    const { data } = await ProductAPI.getProductList();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductListItem
          key={product.id}
          product={product}
          onAddToCart={() => addToCart(product.id)}
          onUpdateCartItemQuantity={(quantity) =>
            updateCartItemQuantity(product.id, quantity)
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
