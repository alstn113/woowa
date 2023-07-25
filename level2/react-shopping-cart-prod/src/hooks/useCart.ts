import { useRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';

import { CartItem, Product } from '../types';
import cartItemsState from '../recoil/atoms/cartItemsState';
import CartItemsAPI from '../api/cart-items';

const useCart = () => {
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);

  const { mutate: addCartItemMutate } = useMutation(CartItemsAPI.addCartItem);
  const { mutate: deleteCartItemMutate } = useMutation(
    CartItemsAPI.deleteCartItem,
  );
  const { mutate: updateCartItemQuantityMutate } = useMutation(
    CartItemsAPI.updateCartItemQuantity,
  );

  const addToCart = (product: Product) => {
    addCartItemMutate(product.id, {
      onSuccess: (location) => {
        const cartItemId = Number(location.split('/').pop());
        setCartItems([
          ...cartItems,
          { id: cartItemId, product, quantity: 1, checked: false },
        ]);
      },
      onError: () => {
        // TODO: error 처리
      },
    });
  };

  const updateCartItemQuantity = (product: Product, quantity: number) => {
    const cartItem = cartItems.find((item) => item.product.id === product.id);

    // 장바구니에 없는 상품
    if (!cartItem) {
      // 수량이 0보다 크다면, 장바구니에 추가한다.
      if (quantity > 0) addToCart(product);
      return;
    }

    // 장바구니에 있는 상품

    // 수량이 0보다 크고
    if (quantity > 0) {
      // 기존 수량과 같으면 무시한다.
      if (cartItem.quantity === quantity) return;
      updateCartItemQuantityMutate(
        {
          cartItemId: cartItem.id,
          params: { quantity },
        },
        {
          onSuccess: () => {
            setCartItems(
              cartItems.map((item) =>
                item.product.id === product.id ? { ...item, quantity } : item,
              ),
            );
          },
          onError: () => {
            // TODO: error 처리
          },
        },
      );
      return;
    }

    // 수량이 0이면 장바구니에서 삭제한다.
    deleteCartItemMutate(cartItem.id, {
      onSuccess: () => {
        setCartItems(cartItems.filter((item) => item.id !== cartItem.id));
      },
      onError: () => {
        // TODO: error 처리
      },
    });
  };

  const isProductInCart = (productId: Product['id']) => {
    return cartItems.some((item) => item.product.id === productId);
  };

  const productQuantityInCart = (productId: Product['id']) => {
    return isProductInCart(productId)
      ? cartItems.find((item) => item.product.id === productId)?.quantity ?? 0
      : 0;
  };

  const checkCartItems = (cartItemIds: CartItem['id'][], checked: boolean) => {
    setCartItems(
      cartItems.map((item) =>
        cartItemIds.includes(item.id) ? { ...item, checked } : item,
      ),
    );
  };

  const removeCheckedCartItems = () => {
    const checkedCartItemIds = cartItems
      .filter((item) => item.checked)
      .map((item) => item.id);
    setCartItems(cartItems.filter((item) => !item.checked));
    try {
      checkedCartItemIds.forEach((cartItemId) => {
        CartItemsAPI.deleteCartItem(cartItemId);
      });
    } catch (error) {
      // TODO: 수정을 여러 번에 나눠서 요청하면 문제가 생길 수 있음
      setCartItems(cartItems);
    }
  };

  return {
    addToCart,
    updateCartItemQuantity,
    isProductInCart,
    productQuantityInCart,
    checkCartItems,
    removeCheckedCartItems,
  };
};

export default useCart;
