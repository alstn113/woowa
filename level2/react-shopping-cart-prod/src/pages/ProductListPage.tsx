import { Suspense } from 'react';

import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '../constants';
import ProductsAPI from '../api/products';

const ProductListPage = () => {
  return (
    <Suspense>
      <ProductListPageContent />
    </Suspense>
  );
};

const ProductListPageContent = () => {
  const { data } = useQuery(
    QUERY_KEYS.getProductList,
    ProductsAPI.getProductList,
    {
      suspense: true,
    },
  );
  const productList = data!; // suspense

  return (
    <div>
      {productList.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default ProductListPage;
