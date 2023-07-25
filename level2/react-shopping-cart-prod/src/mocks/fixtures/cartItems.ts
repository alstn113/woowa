import { BASE_URL } from '../../constants';
import { CartItemEntity } from '../../api/cart-items';

const cartItems: CartItemEntity[] = [
  {
    id: 1,
    quantity: 5,
    product: {
      id: 2,
      name: 'PET보틀-밀크티(370ml)',
      price: 73400,
      imageUrl: `${BASE_URL}/images/products/2.png`,
    },
  },
  {
    id: 2,
    quantity: 1,
    product: {
      id: 8,
      name: 'PET보틀-원형(600ml)',
      price: 44500,
      imageUrl: `${BASE_URL}/images/products/8.png`,
    },
  },
  {
    id: 3,
    quantity: 3,
    product: {
      id: 10,
      name: 'PET보틀-밀크티(370ml)',
      price: 73400,
      imageUrl: `${BASE_URL}/images/products/10.png`,
    },
  },
];

export default cartItems;
