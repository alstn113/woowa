import { atom } from 'recoil';

import { Product } from '../../types';

export type CartState = {
  cartItemId: number;
  quantity: number;
  product: Product;
}[];

const cartState = atom<CartState>({
  key: 'cartState',
  default: [],
});

export default cartState;
