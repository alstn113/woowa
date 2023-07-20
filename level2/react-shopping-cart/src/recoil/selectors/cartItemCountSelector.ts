import { selector } from 'recoil';

import cartState from '../atoms/cartState';

const cartItemCountSelector = selector<number>({
  key: 'cartItemCountSelector',
  get: ({ get }) => {
    const cartItems = get(cartState);
    return cartItems.length;
  },
});

export default cartItemCountSelector;
