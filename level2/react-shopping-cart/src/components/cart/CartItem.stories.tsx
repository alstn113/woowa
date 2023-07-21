import type { Meta, StoryObj } from '@storybook/react';

import CartItem from './CartItem';

const meta = {
  title: 'components/cart/CartItem',
  component: CartItem,
  tags: ['autodocs'],
} satisfies Meta<typeof CartItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cartItem: {
      cartItemId: 1,
      product: {
        id: 1,
        name: 'KP 아이스컵 107파이 32온스(국산형)',
        price: 50900,
        imageUrl:
          'https://cdn-mart.baemin.com/sellergoods/main/89b11021-4575-48cf-9221-ac527db698e9.jpg?h=700&w=700',
      },
      quantity: 1,
      checked: false,
    },
  },
};
