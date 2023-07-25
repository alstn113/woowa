import { ProductEntity } from './products';
import apiClient from './apiClient';

export interface CartItemEntity {
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

    return response.data;
  },

  addCartItem: async (productId: number) => {
    const response = await apiClient.post<
      Record<string, never>,
      AddCartItemResult
    >('/cart-items', {
      productId,
    });

    return response.headers.location;
  },

  updateCartItemQuantity: async ({
    cartItemId,
    params,
  }: {
    cartItemId: number;
    params: UpdateCartItemQuantityParams;
  }) => {
    await apiClient.patch(`/cart-items/${cartItemId}`, params);
  },

  deleteCartItem: async (cartItemId: number) => {
    await apiClient.delete(`/cart-items/${cartItemId}`);
  },
};

export default CartItemsAPI;
