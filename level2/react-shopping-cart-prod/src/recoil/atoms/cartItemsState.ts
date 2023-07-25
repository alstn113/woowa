import { atom } from 'recoil';

import { CartItem } from '../../types';

export type CartItemsState = (CartItem & {
  checked: boolean;
})[];

const cartItemsState = atom<CartItemsState>({
  key: 'cartState',
  default: [],
});

export default cartItemsState;
