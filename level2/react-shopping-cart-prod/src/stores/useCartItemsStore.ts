import { create } from 'zustand';

import { CartItem } from '../types';

type CartItems = (CartItem & { checked: boolean })[];

type CartItemsStore = {
  cartItems: CartItems;
  setCartItems: (cartItems: CartItems) => void;
};
const useCartItemsStore = create<CartItemsStore>((set) => ({
  cartItems: [],
  setCartItems: (cartItems) => set({ cartItems }),
}));

export default useCartItemsStore;
