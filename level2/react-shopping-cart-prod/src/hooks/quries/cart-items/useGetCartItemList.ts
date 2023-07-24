import { useQuery } from '@tanstack/react-query';

import { UseQueryOptionsOf } from '../types';
import CartItemsAPI from '../../../api/cart-items';

const useGetCartItemList = (
  options: UseQueryOptionsOf<typeof CartItemsAPI.getCartItemList>,
) => {
  return useQuery(getKey(), fetcher(), options);
};

const getKey = () => ['useGetCartItemList'];
const fetcher = () => () => CartItemsAPI.getCartItemList();

useGetCartItemList.getKey = getKey;
useGetCartItemList.fetcher = fetcher;

export default useGetCartItemList;
