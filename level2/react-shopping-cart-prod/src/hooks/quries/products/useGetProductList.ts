import { useQuery } from '@tanstack/react-query';

import { UseQueryOptionsOf } from '../types';
import ProductsAPI from '../../../api/products';

const useGetProductList = (
  options: UseQueryOptionsOf<typeof ProductsAPI.getProductList>,
) => {
  return useQuery(getKey(), fetcher(), options);
};

const getKey = () => ['useGetProductList'];
const fetcher = () => () => ProductsAPI.getProductList();

useGetProductList.getKey = getKey;
useGetProductList.fetcher = fetcher;

export default useGetProductList;
