import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import CartAPI from '../api/cart';
import cartState from '../recoil/atoms/cartState';

const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const addToCart = useCallback(
    async (productId: number) => {
      const { headers } = await CartAPI.addCartItem(productId);
      const cartItemId = Number(headers.Location.split('/').pop());
      setCart([...cart, { cartItemId, quantity: 1, productId }]);
    },
    [cart, setCart],
  );

  const updateCartItemQuantity = useCallback(
    async (productId: number, quantity: number) => {
      const cartItem = cart.find((item) => item.productId === productId);

      // 장바구니에 없는 상품이라면
      if (!cartItem) {
        await addToCart(productId);
        return;
      }

      // 장바구니에 있는 상품이고 수량이 0보다 크다면, 수량을 변경한다.
      const { cartItemId } = cartItem;
      if (quantity > 0) {
        await CartAPI.updateCartItemQuantity(cartItemId, quantity);
        setCart(
          cart.map((item) =>
            item.productId === productId ? { ...item, quantity } : item,
          ),
        );
      } else {
        // 장바구니에 있는 상품이고 수량이 0이라면, 장바구니에서 삭제한다.
        await CartAPI.deleteCartItem(cartItemId);
        setCart(cart.filter((item) => item.cartItemId !== cartItemId));
      }
    },
    [addToCart, cart, setCart],
  );

  const isProductInCart = useCallback(
    (productId: number) => {
      return cart.some((item) => item.productId === productId);
    },
    [cart],
  );

  const productCartQuantity = (productId: number) =>
    isProductInCart(productId)
      ? cart.find((item) => item.productId === productId)?.quantity ?? 0
      : 0;

  return {
    cart,
    addToCart,
    updateCartItemQuantity,
    isProductInCart,
    productCartQuantity,
  };
};

export default useCart;
