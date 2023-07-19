import { useEffect, useState } from 'react';

import ProductAPI, { ProductEntity } from '../api/product';

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
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {product.id} {product.name} {product.price}
        </div>
      ))}
    </div>
  );
};

export default ProductListPage;
