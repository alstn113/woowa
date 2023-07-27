import { CartItemEntity } from '../../api/cart-items';

const cartItems: CartItemEntity[] = [
  {
    id: 1,
    quantity: 5,
    product: {
      id: 2,
      name: 'PET보틀-밀크티(370ml)',
      price: 73400,
      imageUrl: `/images/products/2.png`,
    },
  },
  {
    id: 2,
    quantity: 1,
    product: {
      id: 8,
      name: 'PET보틀-원형(600ml)',
      price: 44500,
      imageUrl: `/images/products/8.png`,
    },
  },
  {
    id: 3,
    quantity: 3,
    product: {
      id: 10,
      name: 'PET보틀-밀크티(370ml)',
      price: 73400,
      imageUrl: `/images/products/10.png`,
    },
  },
  {
    id: 4,
    quantity: 2,
    product: {
      id: 4,
      name: 'PET보틀-납작(450ml)',
      price: 10000,
      imageUrl: '/images/products/4.png',
    },
  },
  {
    id: 5,
    quantity: 1,
    product: {
      id: 5,
      name: 'PET보틀-단지(480ml)',
      price: 41000,
      imageUrl: '/images/products/5.png',
    },
  },
];

export default cartItems;
