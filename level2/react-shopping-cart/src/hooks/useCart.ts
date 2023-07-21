import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import CartAPI from '../api/cart';
import cartState, { CartState } from '../recoil/atoms/cartState';
import { Product } from '../types';

const useCart = () => {
  const [cartItems, setCartItems] = useRecoilState(cartState);

  const getCartItems = useCallback(async () => {
    const { data } = await CartAPI.getCartItems();
    setCartItems(
      data.map((item) => ({
        cartItemId: item.id,
        quantity: item.quantity,
        product: item.product,
        checked: true,
      })),
    );
  }, [setCartItems]);

  const addToCart = useCallback(
    async (product: Product) => {
      const { headers } = await CartAPI.addCartItem(product.id);
      const cartItemId = Number(headers.location.split('/').pop());
      setCartItems([
        ...cartItems,
        { cartItemId, quantity: 1, product, checked: true },
      ]);
    },
    [cartItems, setCartItems],
  );

  const updateCartItemQuantity = useCallback(
    async (product: Product, quantity: number) => {
      const cartItem = cartItems.find((item) => item.product.id === product.id);

      // 장바구니에 없는 상품이라면
      if (!cartItem) {
        await addToCart(product);
        return;
      }

      // 장바구니에 있는 상품이고 수량이 0보다 크다면, 수량을 변경한다.
      const { cartItemId } = cartItem;
      if (quantity > 0) {
        await CartAPI.updateCartItemQuantity(cartItemId, quantity);
        setCartItems(
          cartItems.map((item) =>
            item.product.id === product.id ? { ...item, quantity } : item,
          ),
        );
      } else {
        // 장바구니에 있는 상품이고 수량이 0이라면, 장바구니에서 삭제한다. - 낙관적 업데이트
        const cartItem = cartItems.find(
          (item) => item.product.id === product.id,
        );
        if (!cartItem) return;
        setCartItems(
          cartItems.filter((item) => item.product.id !== product.id),
        );
        try {
          await CartAPI.deleteCartItem(cartItemId);
        } catch (e) {
          setCartItems([...cartItems, cartItem]);
        }
      }
    },
    [addToCart, cartItems, setCartItems],
  );

  const isProductInCart = useCallback(
    (productId: number) => {
      return cartItems.some((item) => item.product.id === productId);
    },
    [cartItems],
  );

  const productCartQuantity = (productId: number) =>
    isProductInCart(productId)
      ? cartItems.find((item) => item.product.id === productId)?.quantity ?? 0
      : 0;

  const checkCartItems = (cartItemIds: number[], checked: boolean) => {
    setCartItems(
      cartItems.map((item) =>
        cartItemIds.includes(item.cartItemId)
          ? { ...item, checked }
          : { ...item },
      ),
    );
  };

  const removeSeletedCartItems = () => {
    const cartItemIds = cartItems
      .filter((item) => item.checked)
      .map((item) => item.cartItemId);
    setCartItems(cartItems.filter((item) => !item.checked));
    try {
      cartItemIds.forEach((cartItemId) => {
        CartAPI.deleteCartItem(cartItemId);
      });
    } catch (error) {
      setCartItems(cartItems);
    }
  };

  return {
    cartItems,
    getCartItems,
    addToCart,
    updateCartItemQuantity,
    isProductInCart,
    productCartQuantity,
    checkCartItems,
    removeSeletedCartItems,
  };
};

export default useCart;
