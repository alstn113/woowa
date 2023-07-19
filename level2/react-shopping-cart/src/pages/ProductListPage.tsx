import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import ProductAPI, { ProductEntity } from '../api/product';
import ProductItem from '../components/ProductItem';

const ProductListPage = () => {
  const [products, setProducts] = useState<ProductEntity[]>([]);

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
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
};

const ProductListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 48px;
  row-gap: 80px;
`;

export default ProductListPage;
