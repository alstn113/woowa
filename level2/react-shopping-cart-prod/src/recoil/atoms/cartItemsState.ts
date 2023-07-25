import { atom } from 'recoil';

import { CartItem } from '../../types';

export type CartItemState = CartItem & {
  checked: boolean;
};

export type CartItemsState = CartItemState[];

const cartItemsState = atom<CartItemsState>({
  key: 'cartState',
  default: [],
});

export default cartItemsState;
