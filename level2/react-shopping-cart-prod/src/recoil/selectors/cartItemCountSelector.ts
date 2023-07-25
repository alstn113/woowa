import { selector } from 'recoil';

import cartItemsState from '../atoms/cartItemsState';

const cartItemCountSelector = selector<number>({
  key: 'cartItemCountSelector',
  get: ({ get }) => {
    const cartItems = get(cartItemsState);
    return cartItems.length;
  },
});

export default cartItemCountSelector;
