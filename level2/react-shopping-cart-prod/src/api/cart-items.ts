import apiClient from './apiClient';
import { ProductEntity } from './products';

interface CartItemEntity {
  id: number;
  quantity: number;
  product: ProductEntity;
}

type GetCartItemListResult = CartItemEntity[];
type AddCartItemResult = {
  headers: {
    location: `/cart-items/${string}`;
  };
};
type UpdateCartItemQuantityParams = {
  quantity: number;
};

const CartItemsAPI = {
  getCartItemList: async () => {
    const response = await apiClient.get<GetCartItemListResult>('/cart-items');

    return response;
  },

  addCartItem: async (productId: number) => {
    const response = await apiClient.post<
      Record<string, never>,
      AddCartItemResult
    >('/cart-items', {
      productId,
    });

    return response;
  },

  updateCartItemQuantity: async (
    cartItemId: number,
    params: UpdateCartItemQuantityParams,
  ) => {
    const response = await apiClient.patch(`/cart-items/${cartItemId}`, params);

    return response;
  },

  deleteCartItem: async (cartItemId: number) => {
    const response = await apiClient.delete(`/cart-items/${cartItemId}`);

    return response;
  },
};

export default CartItemsAPI;
