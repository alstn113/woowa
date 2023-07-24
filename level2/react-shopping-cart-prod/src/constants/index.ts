export const BASE_URL = import.meta.env.VITE_BASE_URL as string;

export const QUERY_KEYS = {
  getProductList: ['getProductList'],
  getCartItemList: ['getCartItemList'],
} as const;
