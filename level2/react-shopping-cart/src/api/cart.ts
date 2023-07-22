import { ClientResponse } from './Client';
import { ProductEntity } from './product';

import client from '.';

export interface CartItemEntity {
  id: number;
  quantity: number;
  product: ProductEntity;
}

type GetCartItemsResponse = ClientResponse<200, CartItemEntity[]>;

type AddCartItemRequest = {
  productId: number;
};
type AddCartItemResponse = ClientResponse<
  201,
  never,
  {
    location: `/cart-items/${string}`;
  }
>;

type UpdateCartItemQuantityRequest = {
  quantity: number;
};
type UpdateCartItemQuantityResponse = ClientResponse<200>;

type DeleteCartItemResponse = ClientResponse<204>;

const CartAPI = {
  /**
   * 장바구니 아이템 목록 조회
   *
   * Authorization 헤더에 JWT 토큰을 담아서 요청해야 함
   */
  getCartItems: async () => {
    const { data } = await client.get<GetCartItemsResponse>('/cart-items');

    return data;
  },

  /**
   * 장바구니 아이템 추가
   *
   * Authorization 헤더에 JWT 토큰을 담아서 요청해야 함
   */
  addCartItem: async (productId: number) => {
    const { data } = await client.post<AddCartItemResponse, AddCartItemRequest>(
      '/cart-items',
      {
        productId,
      },
    );

    return data;
  },

  /**
   * 장바구니 아이템 수량 변경
   *
   * Authorization 헤더에 JWT 토큰을 담아서 요청해야 함
   */
  updateCartItemQuantity: async (cartItemId: number, quantity: number) => {
    const { data } = await client.patch<
      UpdateCartItemQuantityResponse,
      UpdateCartItemQuantityRequest
    >(`/cart-items/${cartItemId}`, {
      quantity,
    });

    return data;
  },

  /**
   * 장바구니 아이템 삭제
   *
   * Authorization 헤더에 JWT 토큰을 담아서 요청해야 함
   */
  deleteCartItem: async (cartItemId: number) => {
    const { data } = await client.delete<DeleteCartItemResponse>(
      `/cart-items/${cartItemId}`,
    );

    return data;
  },
};

export default CartAPI;
